# matsyan-Waveatrix
# 🌊 AquaSentinel - Overfishing Alert & Monitoring System

> A real-time zone-based fishing violation alert and monitoring dashboard built for authorities to track overfishing and restricted zone breaches using a vibrant and multilingual web interface.

---

## 📌 Problem Statement

Overfishing and unauthorized entry into marine protected zones threaten biodiversity and sustainable livelihoods. Traditional monitoring systems are costly, slow, and often lack real-time capabilities. There is a need for a **low-cost, real-time alert system** to monitor fishing activities, **track violations**, and **warn boats** instantly — especially in regional languages like Tamil, Hindi, and English.

---


⚙️ Installation & Setup Instructions
Follow these steps to get AquaSentinel running locally:

🔧 Prerequisites
Node.js and npm installed

A modern browser (e.g., Chrome, Firefox)

📥 1. Clone the Repository
git clone https://github.com/vardhini330/aquasentinel.git
cd aquasentinel

📦 2. Initialize & Install Dependencies
npm init -y
npm install express cors

📁 3. Project Structure
Ensure your folder has this structure:
aquasentinel/
public/
    index.html
    dashboard.html
    script.js
    style.css
    alert_safe_en.mp3
    alert_violation_en.mp3
    alert_safe_ta.mp3
    alert_violation_ta.mp3
         ... (other assets)

data.json        # Automatically created on first alert
server.js
package.json
README.md

🚀 4. Run the Server
Start your backend server using:
node server.js
If port 3000 is already in use, run:
PORT=4000 node server.js

---

## 🚀 Features

- 🛰️ **Real-Time Catch Monitoring**
- 🟢🟡🔴 **Zone Status Alerts** (Safe, Warning, Restricted)
- 🗺️ **GPS-based Random Boat Location Simulation**
- 🎤 **Multilingual Voice Alerts** (English, Tamil, Hindi)
- 📊 **Admin Dashboard with Zone Heatmap & Logs**
- 🔁 **Boat-to-Boat Mesh Communication Simulation**
- ⬇️ **Downloadable Logs for Record Keeping**
- 🔧 **Customizable Overfishing Threshold Controls**

---

## 🛠️ Tech Stack Used

| Frontend             | Backend                  | Other Tools |
|----------------------|---------------------     |-------------|
| HTML5, CSS3 (Dark UI) | Node.js + Express.js    | gTTS (Google Text to Speech) for audio |
| Vanilla JavaScript   | File-based JSON storage  | Git & GitHub |
| Responsive & Animated UI | REST APIs (POST & GET) | Socket.IO (optional future upgrade) |

---

▶️ How to Run the Project

Follow these simple step to start using AquaSentinel on your local machine:
Open the Web Interface in Your Browser to run this project

---

📸 Screenshots

<img width="1920" height="1080" alt="Screenshot (64)" src="https://github.com/user-attachments/assets/c14824f5-cb2b-4147-90dc-f57f526a9fac" />
<img width="1920" height="1080" alt="Screenshot (66)" src="https://github.com/user-attachments/assets/03f3f19e-ae81-4394-8cf1-1ab0c918b27b" />
<img width="1920" height="1080" alt="Screenshot (65)" src="https://github.com/user-attachments/assets/1f496de7-1d6c-4d7a-a903-4df1cd0ce8fe" />

---


🌐 Live Deployment
Access the live version of AquaSentinel here: 

https://replit.com/@vardhinis57/matsyan-Waveatrix

---

🎥 Demo Video

Check out our project in action in this short demo video:

👉 [Watch on YouTube](https://youtu.be/pqxTerJ3IZY)

_Title: Agentic Hackathon 2025 – Waveatrix_

---

👥 Team Members

1.Sri vardhini S R - Team leader

2.Sheril Esther V 

3.Swathi S

4.Shruthi T K

---

