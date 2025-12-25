# Chatbot Setup Instructions

## 🤖 Updated Chatbot Features:
- ✅ AI Chat with Gemini API
- ✅ Call functionality
- ✅ WhatsApp integration  
- ✅ Meeting scheduler (Calendly)
- ✅ Improved UI/UX

## 🔑 Gemini API Setup:

1. **Get Gemini API Key:**
   - Go to: https://makersuite.google.com/app/apikey
   - Create new API key
   - Copy the key

2. **Add to .env file:**
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Replace in .env:**
   - Open: `FlowtelAI/.env`
   - Replace `your_gemini_api_key_here` with actual key

## 📱 Contact Details:
- **Phone:** +91 7079578207
- **WhatsApp:** +91 7079578207
- **Calendly:** Update URL in Chatbot.jsx line 185

## 🎨 Features:
- **Main Menu:** 4 options (AI Chat, Call, WhatsApp, Meeting)
- **AI Chat:** Real-time conversation with Gemini
- **Typing Indicator:** Shows when bot is responding
- **Auto-scroll:** Messages scroll automatically
- **Responsive:** Works on all screen sizes

## 🚀 Usage:
1. Click "Let's chat" button
2. Choose from 4 options
3. For AI chat: Type message and press Enter
4. Bot responds with Gemini AI

## 📝 Customization:
- Update phone numbers in Chatbot.jsx
- Change Calendly URL
- Modify AI prompt in `sendToGemini` function
- Adjust colors/styling as needed