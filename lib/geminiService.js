export const generateResponse = async (userMessage, conversationHistory = []) => {
  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage, conversationHistory }),
    });

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    const data = await res.json();
    return {
      success: true,
      text: (data.text || "").trim(),
      quickReplies: data.quickReplies || generateQuickReplies(userMessage),
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      success: false,
      text: getFallbackResponse(userMessage),
      quickReplies: generateQuickReplies(userMessage),
    };
  }
};

const generateQuickReplies = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('service') || message.includes('what do you do')) {
    return [
      "Tell me about Web Development",
      "Tell me about Digital Marketing", 
      "Tell me about CCTV Solutions",
      "Tell me about Cyber Security"
    ];
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
    return [
      "Get a detailed quote",
      "Contact sales team",
      "Schedule consultation"
    ];
  }
  
  if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
    return [
      "Schedule a call",
      "Send WhatsApp message", 
      "Request callback"
    ];
  }
  
  if (message.includes('support') || message.includes('help') || message.includes('maintenance')) {
    return [
      "Request support",
      "Emergency contact",
      "Schedule maintenance"
    ];
  }
  
  // Default quick replies
  return [
    "Tell me about your services",
    "What are your prices?",
    "How can I contact you?",
    "Do you offer support?"
  ];
};

const getFallbackResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('service') || message.includes('what do you do')) {
    return "We offer comprehensive IT solutions including Web Development, Digital Marketing, CCTV Solutions, and Cyber Security. Which service interests you most?";
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
    return "Our services start from AED 800 for CCTV solutions up to AED 2,500+ for web development. Would you like a detailed quote for your specific needs?";
  }
  
  if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
    return "You can reach us at +971 56 440 7700 or info@zenex.ae. We're available 24/7 for your IT needs!";
  }
  
  if (message.includes('support') || message.includes('help') || message.includes('maintenance')) {
    return "We provide 24/7 technical support, remote monitoring, and regular maintenance. Our support team is always ready to help!";
  }
  
  return "I'd be happy to help! You can ask me about our services, pricing, contact information, or support options. How can I assist you today?";
};
