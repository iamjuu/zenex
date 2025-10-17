// Static responses for quick reply options
const staticResponses = {
  "tell me about your services": {
    text: "We offer comprehensive IT solutions including:\n\n• Web Development & Design\n• Digital Marketing\n• CCTV Security Solutions\n• Cyber Security\n• ERP Solutions\n• PABX Phone Systems\n• Data Recovery\n• Cloud Backup Solutions\n• Access Control & Time Attendance\n• Structured Cabling\n• PC & Workstation Support\n• Server Solutions\n\nWhich service interests you most?",
    quickReplies: ["Tell me about Web Development", "Tell me about Digital Marketing", "Tell me about CCTV Solutions", "Tell me about Cyber Security"]
  },
  "what are your prices?": {
    text: "Thank you for your interest in our services! Our pricing varies based on your specific requirements and project scope.\n\nTo provide you with an accurate quote tailored to your needs, please contact our sales team:\n\n📞 Phone: +971 55 277 3923\n📧 Email: info@zenex.ae\n💬 WhatsApp: +971 55 277 3923\n\nOur team will prepare a detailed proposal within 24 hours.",
    quickReplies: ["Contact sales team", "Schedule consultation", "Send WhatsApp message", "Request callback"]
  },
  "how can I contact you?": {
    text: "You can reach us through multiple channels:\n\n📞 Phone: +971 55 277 3923\n📧 Email: info@zenex.ae\n💬 WhatsApp: +971 55 277 3923\n🌐 Website: www.zenex.ae\n\nWe're available 24/7 for your IT needs!",
    quickReplies: ["Schedule a call", "Send WhatsApp message", "Request callback", "Tell me about your services"]
  },
  "do you offer support?": {
    text: "Yes! We provide comprehensive support services:\n\n• 24/7 Technical Support\n• Remote Monitoring\n• Regular Maintenance\n• Emergency Response\n• System Updates\n• Training & Consultation\n\nOur support team is always ready to help!",
    quickReplies: ["Request support", "Emergency contact", "Schedule maintenance", "Contact sales team"]
  },
  "tell me about web development": {
    text: "Our Web Development services include:\n\n• Custom Website Design & Development\n• E-commerce Solutions\n• Mobile-Responsive Design\n• Content Management Systems (CMS)\n• SEO Optimization\n• Website Maintenance & Support\n\nStarting from AED 2,500. Would you like a detailed quote?",
    quickReplies: ["Get a detailed quote", "Tell me about Digital Marketing", "Contact sales team", "Schedule consultation"]
  },
  "tell me about digital marketing": {
    text: "Our Digital Marketing services include:\n\n• Social Media Marketing\n• Search Engine Optimization (SEO)\n• Google Ads & PPC Campaigns\n• Content Marketing\n• Email Marketing\n• Analytics & Reporting\n\nStarting from AED 1,200/month. Ready to boost your online presence?",
    quickReplies: ["Get a detailed quote", "Tell me about Web Development", "Contact sales team", "Schedule consultation"]
  },
  "tell me about cctv solutions": {
    text: "Our CCTV Solutions include:\n\n• HD Security Camera Installation\n• IP Camera Systems\n• Night Vision Cameras\n• Remote Monitoring\n• Mobile App Access\n• 24/7 Technical Support\n\nStarting from AED 800. Secure your business today!",
    quickReplies: ["Get a detailed quote", "Tell me about Cyber Security", "Contact sales team", "Schedule consultation"]
  },
  "tell me about cyber security": {
    text: "Our Cyber Security services include:\n\n• Network Security Assessment\n• Firewall Installation & Management\n• Antivirus & Malware Protection\n• Data Backup Solutions\n• Security Training\n• 24/7 Monitoring\n\nStarting from AED 1,500. Protect your business from cyber threats!",
    quickReplies: ["Get a detailed quote", "Tell me about CCTV Solutions", "Contact sales team", "Schedule consultation"]
  },
  "get a detailed quote": {
    text: "I'd be happy to provide you with a detailed quote! Please contact our sales team at +971 55 277 3923 or email us at info@zenex.ae with your specific requirements.\n\nOur team will prepare a customized proposal within 24 hours.",
    quickReplies: ["Contact sales team", "Schedule consultation", "Send WhatsApp message", "Request callback"]
  },
  "contact sales team": {
    text: "You can reach our sales team:\n\n📞 Phone: +971 55 277 3923\n📧 Email: info@zenex.ae\n💬 WhatsApp: +971 55 277 3923\n\nWe're available 24/7 to assist you!",
    quickReplies: ["Schedule consultation", "Send WhatsApp message", "Request callback", "Tell me about your services"]
  },
  "schedule consultation": {
    text: "Great! Let's schedule a consultation to discuss your needs.\n\nPlease contact us at +971 55 277 3923 or email info@zenex.ae to book your free consultation.\n\nWe offer both in-person and virtual consultations.",
    quickReplies: ["Contact sales team", "Send WhatsApp message", "Request callback", "Tell me about your services"]
  },
  "send whatsapp message": {
    text: "You can send us a WhatsApp message at +971 55 277 3923\n\nWe'll respond within minutes during business hours and provide quick assistance for your IT needs!",
    quickReplies: ["Contact sales team", "Schedule consultation", "Request callback", "Tell me about your services"]
  },
  "request callback": {
    text: "We'll call you back within 30 minutes!\n\nPlease provide your contact details to our team at +971 55 277 3923 or email info@zenex.ae with your preferred callback time.",
    quickReplies: ["Contact sales team", "Schedule consultation", "Send WhatsApp message", "Tell me about your services"]
  },
  "how to learn ai": {
    text: "Great question! While we don't offer AI learning courses, we do provide AI-powered solutions and can help you implement AI technologies in your business. Our services include:\n\n• AI Integration in Web Development\n• AI-powered Digital Marketing Solutions\n• Smart CCTV with AI Analytics\n• AI-enhanced Cyber Security\n\nWould you like to know more about how we can help implement AI solutions for your business?",
    quickReplies: ["Tell me about Web Development", "Tell me about Digital Marketing", "Tell me about CCTV Solutions", "Tell me about Cyber Security"]
  }
};

export const generateResponse = async (userMessage, conversationHistory = []) => {
  // Check if the message matches any static response
  const messageKey = userMessage.toLowerCase().trim();
  
  if (staticResponses[messageKey]) {
    return {
      success: true,
      text: staticResponses[messageKey].text,
      quickReplies: staticResponses[messageKey].quickReplies,
      isStatic: true
    };
  }

  try {
    const res = await fetch("/api/openai", {
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
    console.error("OpenAI API Error:", error);
    
    // Provide more specific error messages based on the error type
    let fallbackText = getFallbackResponse(userMessage);
    
    if (error.message.includes("500")) {
      fallbackText = "Our AI service is temporarily unavailable. Please contact us directly at +971 55 277 3923 for immediate assistance.";
    } else if (error.message.includes("400")) {
      fallbackText = "I didn't understand your message. Could you please rephrase your question?";
    } else if (error.message.includes("unauthorized") || error.message.includes("401")) {
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
      "Contact sales team",
      "Schedule consultation",
      "Send WhatsApp message",
      "Request callback"
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
    return "Thank you for your interest in our services! Our pricing varies based on your specific requirements and project scope. To provide you with an accurate quote tailored to your needs, please contact our sales team at +971 55 277 3923 or info@zenex.ae. Our team will prepare a detailed proposal within 24 hours.";
  }
  
  if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
    return "You can reach us at +971 55 277 3923 or info@zenex.ae. We're available 24/7 for your IT needs!";
  }
  
  if (message.includes('support') || message.includes('help') || message.includes('maintenance')) {
    return "We provide 24/7 technical support, remote monitoring, and regular maintenance. Our support team is always ready to help!";
  }
  
  return "I'd be happy to help! You can ask me about our services, pricing, contact information, or support options. How can I assist you today?";
};

