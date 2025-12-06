require("dotenv").config();
console.log("✅ Loaded OPENAI_API_KEY:", !!process.env.OPENAI_API_KEY);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const OpenAI = require("openai");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();

// ✅ Server port
const PORT = process.env.PORT || 5000;

// ✅ OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:8080"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ DB connection error:", err));

// ✅ Test route
app.get("/api/auth/test", (req, res) => res.send("Backend working"));

// ✅ Auth routes
app.use("/api/auth", authRoutes);

// ✅ Load schemes data
const schemes = JSON.parse(fs.readFileSync("./data/schemes.json", "utf8"));

// ✅ Utility: cosine similarity
function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dot / (magA * magB);
}

// ✅ AI-powered scheme matching endpoint
app.post("/api/match-schemes", async (req, res) => {
  const { userInput } = req.body;

  if (!userInput) {
    return res.status(400).json({ error: "Missing user input" });
  }

  try {
    console.log("🔍 Generating embedding for:", userInput);

    const userEmbedding = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: userInput
    });

    const inputVector = userEmbedding.data[0].embedding;
    const results = [];

    for (const scheme of schemes) {
      console.log("⚙️ Embedding scheme:", scheme.name);
      const schemeEmbedding = await client.embeddings.create({
        model: "text-embedding-3-small",
        input: scheme.description + " " + scheme.keywords.join(" ")
      });

      const score = cosineSimilarity(
        inputVector,
        schemeEmbedding.data[0].embedding
      );
      results.push({ scheme, score });
    }

    const topSchemes = results.sort((a, b) => b.score - a.score).slice(0, 3);
    res.json(topSchemes.map((r) => r.scheme));
  } catch (error) {
    console.error("❌ OpenAI API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Server error while matching schemes", details: error.message });
  }
});


// ✅ Health check
app.get("/", (req, res) => {
  res.send("✅ AI + Auth Backend is running!");
});



console.log(process.env.OPENAI_API_KEY);
// ✅ Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running`);
  console.log(`Local:   http://localhost:${PORT}`);
  console.log(`Network: http://${require("os").networkInterfaces().WiFi?.[0].address}:${PORT}`);
});
