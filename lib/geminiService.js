import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

// Company information for context
const COMPANY_CONTEXT = `
You are Zenex AI Assistant, representing Zenex IT Solutions based in Dubai, UAE. 

Company Information:
- Name: Zenex IT Solutions
- Location: Dubai, UAE
- Experience: 10+ years in IT solutions
- Services: Web Development, Digital Marketing, CCTV Solutions, Cyber Security
- Contact: Phone: +971 56 440 7700, Email: info@zenex.ae, Website: www.zenex.ae

Services and Pricing:
1. Web Development: Starting from AED 2,500
   - Features: Responsive Design, SEO Optimization, E-commerce Solutions, Custom Web Applications

2. Digital Marketing: Starting from AED 1,500/month
   - Features: SEO Services, Social Media Marketing, Google Ads, Content Marketing

3. CCTV Solutions: Starting from AED 800
   - Features: HD Cameras, 24/7 Monitoring, Remote Access, Professional Installation

4. Cyber Security: Starting from AED 1,200
   - Features: Security Audits, Penetration Testing, Firewall Setup, 24/7 Monitoring

Support Features:
- 24/7 Technical Support
- Remote Monitoring
- Regular Maintenance
- Emergency Response
- Training & Documentation

Your role is to:
1. Provide helpful, accurate information about Zenex services
2. Be friendly, professional, and knowledgeable
3. Guide users to appropriate services based on their needs
4. Provide contact information when requested
5. Keep responses concise but informative
6. Use emojis appropriately to make responses engaging
7. Always maintain a helpful and professional tone

If asked about topics outside of IT services, politely redirect to how Zenex can help with their business needs.
`;

export const generateResponse = async (userMessage, conversationHistory = []) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Build conversation context
    let conversationContext = COMPANY_CONTEXT + "\n\nConversation History:\n";
    
    if (conversationHistory.length > 0) {
      conversationHistory.slice(-5).forEach(msg => {
        conversationContext += `${msg.sender}: ${msg.text}\n`;
      });
    }
    
    conversationContext += `\nCurrent User Message: ${userMessage}\n\nPlease provide a helpful response as Zenex AI Assistant:`;

    const result = await model.generateContent(conversationContext);
    const response = await result.response;
    const text = response.text();

    return {
      success: true,
      text: text.trim(),
      quickReplies: generateQuickReplies(userMessage)
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      success: false,
      text: getFallbackResponse(userMessage),
      quickReplies: generateQuickReplies(userMessage)
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
