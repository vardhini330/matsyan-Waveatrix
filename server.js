const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve frontend static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Path to the JSON file that stores alerts
const dataPath = path.join(__dirname, "data.json");

// ✅ POST: Save alert to data.json
app.post("/alert", (req, res) => {
  const alert = req.body;
  let existingData = [];

  // If file exists, read existing data
  if (fs.existsSync(dataPath)) {
    try {
      const fileData = fs.readFileSync(dataPath, "utf8");
      existingData = fileData ? JSON.parse(fileData) : [];
    } catch (err) {
      console.error("❌ Failed to read or parse data.json:", err);
      return res.status(500).json({ message: "Error reading data file" });
    }
  }

  // Add new alert to beginning
  existingData.unshift(alert);

  // Save updated data
  try {
    fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2));
    res.status(200).json({ message: "✅ Alert saved!" });
  } catch (err) {
    console.error("❌ Error saving alert:", err);
    res.status(500).json({ message: "Failed to save alert" });
  }
});

// ✅ GET: Return all stored alerts
app.get("/alerts", (req, res) => {
  if (fs.existsSync(dataPath)) {
    try {
      const data = fs.readFileSync(dataPath, "utf8");
      const parsed = data ? JSON.parse(data) : [];
      res.json(parsed);
    } catch (err) {
      console.error("❌ Failed to read data:", err);
      res.status(500).json({ message: "Error loading data" });
    }
  } else {
    res.json([]);
  }
});

// ✅ GET: Download logs as logs.json
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "data.json");

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("No data to download");
  }

  res.download(filePath, "logs.json", (err) => {
    if (err) {
      console.error("❌ Error downloading file:", err);
      res.status(500).send("Download failed");
    }
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
