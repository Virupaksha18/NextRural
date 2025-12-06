const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const router = express.Router();

// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, age, gender, education, location, district, state } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
      education,
      location,
      district,
      state,
    });

    await newUser.save();
    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret_key", {
      expiresIn: "1h",
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

// ================= FORGOT PASSWORD =================
router.post("/forgot-password", async (req, res) => {
  try {
    const { email, lang } = req.body; // ✅ Receive language
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret_key", { expiresIn: "15m" });

    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

    // ✅ Choose language
    const isKannada = lang === "kn";

    const subject = isKannada
      ? "ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸುವ ಕೊಂಡಿ - NextRural"
      : "Password Reset Link - NextRural";

    const htmlContent = isKannada
      ? `
      <h3>ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಲು ವಿನಂತಿ</h3>
      <p>ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಲು ಕೆಳಗಿನ ಲಿಂಕ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ:</p>
      <a href="${resetLink}" target="_blank">${resetLink}</a>
      <p>ಈ ಲಿಂಕ್ 15 ನಿಮಿಷಗಳ ಕಾಲ ಮಾತ್ರ ಮಾನ್ಯ.</p>
    `
      : `
      <h3>Password Reset Request</h3>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}" target="_blank">${resetLink}</a>
      <p>This link is valid for 15 minutes.</p>
    `;

    // ✅ Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      html: htmlContent,
    });

    res.json({ message: isKannada ? "ರೀಸ್‌ಸೆಟ್ ಲಿಂಕ್ ನಿಮ್ಮ ಇಮೇಲ್‌ಗೆ ಕಳುಹಿಸಲಾಗಿದೆ." : "Password reset link sent to your email." });

  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "Error sending reset link." });
  }
});


router.get("/test-email", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email",
      text: "If you got this, your email setup works!",
    });

    res.send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});


// ================= RESET PASSWORD =================
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret_key");

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });

    res.json({ message: "Password reset successful! You can now log in." });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(400).json({ message: "Invalid or expired token." });
  }
});

module.exports = router;
