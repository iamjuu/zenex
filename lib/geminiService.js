export const generateResponse = async (userMessage, conversationHistory = []) => {
  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage, conversationHistory }),
    });

    const data = await res.json();
    
    // Check if the response contains an error (even with 200 status)
    if (!res.ok || data.error) {
      // Get more detailed error information
      let errorMessage = `Request failed with status ${res.status}`;
      if (data.error) {
        errorMessage += `: ${data.error}`;
      }
      
      console.error("API Error Details:", {
        status: res.status,
        statusText: res.statusText,
        url: res.url,
        error: data.error,
        message: errorMessage
      });
      
      // If the API provided a fallback text, use it
      if (data.text) {
        return {
          success: false,
          text: data.text,
          quickReplies: data.quickReplies || generateQuickReplies(userMessage),
        };
      }
      
      throw new Error(errorMessage);
    }

    return {
      success: true,
      text: (data.text || "").trim(),
      quickReplies: data.quickReplies || generateQuickReplies(userMessage),
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Provide more specific error messages based on the error type
    let fallbackText = getFallbackResponse(userMessage);
    
    if (error.message.includes("500")) {
      fallbackText = "Our AI service is temporarily unavailable. Please contact us directly at +971 55 277 3923 for immediate assistance.";
    } else if (error.message.includes("400")) {
      fallbackText = "I didn't understand your message. Could you please rephrase your question?";
    } else if (error.message.includes("AIzaSyBjVnXN6joZvsv-RrQpvt3tzgg1FnQZm6g")) {
      fallbackText = "Our AI service is being configured. Please contact us at +971 55 277 3923 for assistance.";
    }
    
    return {
      success: false,
      text: fallbackText,
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
    return "You can reach us at +9771 55 277 3923 or info@zenex.ae. We're available 24/7 for your IT needs!";
  }
  
  if (message.includes('support') || message.includes('help') || message.includes('maintenance')) {
    return "We provide 24/7 technical support, remote monitoring, and regular maintenance. Our support team is always ready to help!";
  }
  
  return "I'd be happy to help! You can ask me about our services, pricing, contact information, or support options. How can I assist you today?";
};
