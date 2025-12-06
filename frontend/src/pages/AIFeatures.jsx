import React, { useState } from "react";

function AIFeatures() {
  // ---------------- AGRICULTURE ----------------
  const [agriTopic, setAgriTopic] = useState("");
  const [agriResult, setAgriResult] = useState("");
  const [agriLoading, setAgriLoading] = useState(false);

  const handleAgri = () => {
    setAgriLoading(true);
    setAgriResult("");

    setTimeout(() => {
      setAgriResult(
        `Sample Agriculture Guidance for "${agriTopic}"\n\n(Connect backend later)`
      );
      setAgriLoading(false);
    }, 1200);
  };

  // ---------------- HEALTHCARE ----------------
  const [healthTopic, setHealthTopic] = useState("");
  const [healthResult, setHealthResult] = useState("");
  const [healthLoading, setHealthLoading] = useState(false);

  const handleHealth = () => {
    setHealthLoading(true);
    setHealthResult("");

    setTimeout(() => {
      setHealthResult(
        `Sample Healthcare Guidance for "${healthTopic}"\n\n(API Coming Soon)`
      );
      setHealthLoading(false);
    }, 1200);
  };

  // ---------------- TECHNOLOGY ----------------
  const [techTopic, setTechTopic] = useState("");
  const [techResult, setTechResult] = useState("");
  const [techLoading, setTechLoading] = useState(false);

  const handleTech = () => {
    setTechLoading(true);
    setTechResult("");

    setTimeout(() => {
      setTechResult(
        `Sample Technology Insights for "${techTopic}"\n\n(Future AI API)`
      );
      setTechLoading(false);
    }, 1200);
  };

  // ---------------- EDUCATION ----------------
  const [eduTopic, setEduTopic] = useState("");
  const [eduResult, setEduResult] = useState("");
  const [eduLoading, setEduLoading] = useState(false);

  const handleEdu = () => {
    setEduLoading(true);
    setEduResult("");

    setTimeout(() => {
      setEduResult(
        `Sample Education Plan for "${eduTopic}"\n\n(Backend soon)`
      );
      setEduLoading(false);
    }, 1200);
  };

  // ---------------- FINANCE ----------------
  const [finTopic, setFinTopic] = useState("");
  const [finResult, setFinResult] = useState("");
  const [finLoading, setFinLoading] = useState(false);

  const handleFinance = () => {
    setFinLoading(true);
    setFinResult("");

    setTimeout(() => {
      setFinResult(
        `Sample Banking & Finance Advice for "${finTopic}"\n\n(API will be added)`
      );
      setFinLoading(false);
    }, 1200);
  };

  // ---------------- RENEWABLE ENERGY ----------------
  const [energyTopic, setEnergyTopic] = useState("");
  const [energyResult, setEnergyResult] = useState("");
  const [energyLoading, setEnergyLoading] = useState(false);

  const handleEnergy = () => {
    setEnergyLoading(true);
    setEnergyResult("");

    setTimeout(() => {
      setEnergyResult(
        `Sample Renewable Energy Insights for "${energyTopic}"\n\n(API Coming Soon)`
      );
      setEnergyLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        NextRural – AI Features
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* AGRICULTURE */}
        <div className="bg-white shadow-lg rounded-xl p-8 border hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-green-700 mb-3">🌱 Agriculture Mentor</h2>
          <input
            className="border p-2 rounded w-full mb-3"
            placeholder="Ask something.."
            value={agriTopic}
            onChange={(e) => setAgriTopic(e.target.value)}
          />
          <button
            onClick={handleAgri}
            className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-lg font-semibold"
          >
            {agriLoading ? "Analyzing..." : "Generate Guidance"}
          </button>

          {agriResult && (
            <div className="bg-gray-100 mt-4 p-3 rounded border text-sm">
              <pre className="whitespace-pre-wrap">{agriResult}</pre>
            </div>
          )}
        </div>

        {/* HEALTHCARE */}
        <div className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-red-700 mb-3">🏥 Healthcare Mentor</h2>
          <input
            className="border p-2 rounded w-full mb-3"
            placeholder="Ask something.."
            value={healthTopic}
            onChange={(e) => setHealthTopic(e.target.value)}
          />
          <button
            onClick={handleHealth}
            className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-lg font-semibold"
          >
            {healthLoading ? "Analyzing..." : "Generate Advice"}
          </button>

          {healthResult && (
            <div className="bg-gray-100 mt-4 p-3 rounded border text-sm">
              <pre className="whitespace-pre-wrap">{healthResult}</pre>
            </div>
          )}
        </div>

        {/* TECHNOLOGY */}
        <div className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-blue-700 mb-3">💻 Technology Mentor</h2>
          <input
            className="border p-2 rounded w-full mb-3"
            placeholder="Ask something.."
            value={techTopic}
            onChange={(e) => setTechTopic(e.target.value)}
          />
          <button
            onClick={handleTech}
            className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold"
          >
            {techLoading ? "Analyzing..." : "Generate Insights"}
          </button>

          {techResult && (
            <div className="bg-gray-100 mt-4 p-3 rounded border text-sm">
              <pre className="whitespace-pre-wrap">{techResult}</pre>
            </div>
          )}
        </div>

        {/* EDUCATION */}
        <div className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-purple-700 mb-3">📚 Education Mentor</h2>
          <input
            className="border p-2 rounded w-full mb-3"
            placeholder="Enter education topic..."
            value={eduTopic}
            onChange={(e) => setEduTopic(e.target.value)}
          />
          <button
            onClick={handleEdu}
            className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-lg font-semibold"
          >
            {eduLoading ? "Analyzing..." : "Generate Plan"}
          </button>

          {eduResult && (
            <div className="bg-gray-100 mt-4 p-3 rounded border text-sm">
              <pre className="whitespace-pre-wrap">{eduResult}</pre>
            </div>
          )}
        </div>

        {/* FINANCE */}
        <div className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-yellow-700 mb-3">💰 Banking & Finance Mentor</h2>
          <input
            className="border p-2 rounded w-full mb-3"
            placeholder="Ask something.."
            value={finTopic}
            onChange={(e) => setFinTopic(e.target.value)}
          />
          <button
            onClick={handleFinance}
            className="bg-yellow-600 hover:bg-yellow-700 text-white w-full py-2 rounded-lg font-semibold"
          >
            {finLoading ? "Analyzing..." : "Generate Advice"}
          </button>

          {finResult && (
            <div className="bg-gray-100 mt-4 p-3 rounded border text-sm">
              <pre className="whitespace-pre-wrap">{finResult}</pre>
            </div>
          )}
        </div>

        {/* RENEWABLE ENERGY */}
        <div className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-indigo-700 mb-3">⚡ Renewable Energy Mentor</h2>
          <input
            className="border p-2 rounded w-full mb-3"
            placeholder="Ask something.."
            value={energyTopic}
            onChange={(e) => setEnergyTopic(e.target.value)}
          />
          <button
            onClick={handleEnergy}
            className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded-lg font-semibold"
          >
            {energyLoading ? "Analyzing..." : "Generate Insights"}
          </button>

          {energyResult && (
            <div className="bg-gray-100 mt-4 p-3 rounded border text-sm">
              <pre className="whitespace-pre-wrap">{energyResult}</pre>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default AIFeatures;
