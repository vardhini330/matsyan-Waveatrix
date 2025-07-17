const form = document.getElementById("fishingForm");
const alertBox = document.getElementById("alertMessage");
const logList = document.getElementById("alertLog");
const limitInput = document.getElementById("limitControl");
const currentLimit = document.getElementById("currentLimit");
const langSelect = document.getElementById("langSelect");

let weightLimit = 100;
let lastAlertType = "";
let currentLang = "en"; // default language

// 🔄 Update language when dropdown changes
langSelect.addEventListener("change", (e) => {
  currentLang = e.target.value;
});

// ✅ Update weight limit
limitInput.addEventListener("change", () => {
  weightLimit = parseInt(limitInput.value);
  currentLimit.textContent = `(Current: ${weightLimit}kg)`;
});

// ✅ Random GPS generator
function generateGPS() {
  const lat = (8 + Math.random() * 2).toFixed(4);
  const lon = (77 + Math.random() * 3).toFixed(4);
  return { lat, lon };
}

// ✅ Random 30% breach
function randomBreach() {
  return Math.random() < 0.3;
}

// ✅ Play multilingual alert
function playAudio(type) {
  const file = `alert_${type}_${currentLang}.mp3`; // Example: alert_violation_ta.mp3
  const audio = new Audio(file);
  audio.play().catch((e) => {
    alert("⚠️ Audio blocked. Click on the page first.");
    console.error("Audio error:", e);
  });
}

// ✅ Form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const boatId = document.getElementById("boatId").value.trim();
  const zone = document.getElementById("zone").value;
  const weight = parseInt(document.getElementById("weight").value);
  const time = new Date().toLocaleString();
  const gps = generateGPS();
  const autoBreach = randomBreach();

  let isViolation = false;
  let type = "safe";
  let alertText = "";

  if (zone === "Restricted Zone" || weight > weightLimit || autoBreach) {
    isViolation = true;
    type = "violation";
    alertText = `🚨 ALERT: Boat ${boatId} violated rules at (${gps.lat}, ${gps.lon})`;
    alertBox.style.color = "red";
  } else {
    alertText = `✅ Boat ${boatId} is safe at (${gps.lat}, ${gps.lon})`;
    alertBox.style.color = "green";
  }

  lastAlertType = type;
  alertBox.textContent = alertText;
  alertBox.classList.remove("hidden");
  playAudio(type); // 🔊 Play language-based alert

  const newEntry = {
    boatId,
    zone,
    weight,
    time,
    gps,
    status: isViolation ? "Violation" : "Safe"
  };

  // Save to localStorage
  const existingLog = JSON.parse(localStorage.getItem("alertLog")) || [];
  existingLog.unshift(newEntry);
  localStorage.setItem("alertLog", JSON.stringify(existingLog));

  // Show in UI
  const li = document.createElement("li");
  li.textContent = `${time} – Boat ${boatId} | ${isViolation ? "Violation" : "Safe"} | ${weight}kg | (${gps.lat}, ${gps.lon})`;
  li.style.color = isViolation ? "red" : "green";
  logList.prepend(li);

  // Map marker
  const map = document.getElementById("map");
  if (map) {
    const marker = document.createElement("div");
    marker.className = "boat-marker";
    marker.style.position = "absolute";
    marker.style.top = `${Math.random() * 230 + 10}px`;
    marker.style.left = `${Math.random() * 90 + 5}px`;
    marker.style.backgroundColor = isViolation ? "red" : "green";
    marker.style.width = "12px";
    marker.style.height = "12px";
    marker.style.borderRadius = "50%";
    marker.title = `Boat ${boatId}`;
    map.appendChild(marker);

    setTimeout(() => {
      map.removeChild(marker);
    }, 10000);
  }

  form.reset();
});

// 🔁 Mesh Communication Simulator
function simulateMesh() {
  const sender = "Boat-02";
  const receiver = "Boat-01";
  const time = new Date().toLocaleTimeString();
  const message = `${sender} → ${receiver}: Breach Detected at ${time}`;
  const meshLog = document.getElementById("meshLog");

  if (meshLog) {
    meshLog.textContent = "📬 " + message;
    meshLog.style.color = "blue";
    meshLog.style.fontWeight = "bold";
  }
  console.log("🔁 Mesh Message Sent:", message);
}

// 🔊 Replay last alert manually
function playAlert() {
  playAudio(lastAlertType);
}

