from gtts import gTTS
alerts = {
    "violation": {
        "en": "Alert! A boat has violated the rules.",
        "ta": "எச்சரிக்கை! ஒரு படகு விதிகளை மீறியுள்ளது.",
        "hi": "चेतावनी! एक नाव ने नियमों का उल्लंघन किया है।"
    },
    "safe": {
        "en": "Boat is safe and within limits.",
        "ta": "படகு பாதுகாப்பாகவும் வரம்பிற்குள் உள்ளது.",
        "hi": "नाव सुरक्षित है और सीमा के भीतर है।"
    }
}

for alert_type, messages in alerts.items():
    for lang, message in messages.items():
        tts = gTTS(text=message, lang=lang)
        filename = f"alert_{alert_type}_{lang}.mp3"
        tts.save(filename)
        print(f"✅ Saved: {filename}")
