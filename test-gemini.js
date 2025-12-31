// Test Gemini API
const testGeminiAPI = async () => {
  const API_KEY = "AIzaSyBJIoBbNj6j6YYhVmqDyB6ZSvZPTVHMns0";
  
  // First check available models
  try {
    const modelsResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const modelsData = await modelsResponse.json();
    console.log('Available models:', modelsData.models?.map(m => m.name));
  } catch (error) {
    console.error('Error fetching models:', error);
  }
  
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: "Hello, can you help me with FlowtelAI hotel management?"
          }]
        }]
      })
    });

    const data = await response.json();
    console.log('API Response:', data);
    
    if (data.candidates && data.candidates[0]) {
      console.log('✅ API Working! Response:', data.candidates[0].content.parts[0].text);
    } else {
      console.log('❌ API Error:', data);
    }
  } catch (error) {
    console.error('❌ Network Error:', error);
  }
};

// Run test
testGeminiAPI();