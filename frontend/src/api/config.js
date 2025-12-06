// src/api/config.js

// Detect if running on localhost or mobile network
const hostname = window.location.hostname;

// If running on local Wi-Fi or LAN
let baseURL = `http://${hostname}:5000`;

// If running on production (edit later when deployed)
if (hostname !== "localhost" && !hostname.startsWith("192.168") && !hostname.startsWith("10.")) {
  baseURL = "https://your-production-api.com"; // Change later when deployed
}

export const API_URL = baseURL;
