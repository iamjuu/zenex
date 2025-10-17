import { NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";

// Company/system prompt
const COMPANY_CONTEXT = `
You are Zenex AI Assistant, representing Zenex IT Solutions based in Dubai, UAE.

Company Information:
- Name: Zenex IT Solutions
- Location: Dubai, UAE
- Experience: 10+ years in IT solutions
- Services: Web Development, Digital Marketing, CCTV Solutions, Cyber Security
- Contact: Phone: +971 55 277 3923, Email: info@zenex.ae, Website: www.zenex.ae

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

Behavior:
- Be friendly, professional, concise, and helpful.
- Suggest next steps and calls-to-action.
- Use emojis sparingly to improve readability.
`;

export async function POST(req) {
  let userMessage = "";
  let conversationHistory = [];
  
  try {
    const requestData = await req.json();
    userMessage = requestData.userMessage;
    conversationHistory = requestData.conversationHistory || [];

    if (!process.env.HUGGINGFACE_API_KEY) {
      console.log("No Hugging Face API key found, using fallback responses");
      // Use fallback response when no API key
      const fallbackText = getFallbackResponse(userMessage);
      const quickReplies = getQuickReplies(userMessage);
      
      return NextResponse.json({ 
        text: fallbackText, 
        quickReplies: quickReplies 
      });
    }

    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json(
        { error: "Invalid payload: userMessage is required" },
        { status: 400 }
      );
    }

    // For now, let's use the intelligent fallback system
    // This ensures the chatbot always works without API dependencies
    const text = getFallbackResponse(userMessage);

    const quickReplies = getQuickReplies(userMessage);

    return NextResponse.json({ text, quickReplies });
  } catch (error) {
    console.error("Hugging Face API error:", error);
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      type: error.type,
      code: error.code,
    });
    
    // Provide more specific error messages
    let errorMessage = "I'm having trouble right now. Please try again, or contact us at +971 56 440 7700.";
    
    if (error.status === 401) {
      errorMessage = "AI service authentication failed. Please contact support.";
      console.error("API Key issue - check HUGGINGFACE_API_KEY in environment variables");
    } else if (error.status === 429) {
      errorMessage = "Our AI service is currently busy. Please contact us directly at +971 55 277 3923 for immediate assistance.";
      console.error("Hugging Face quota exceeded - check usage limits");
    } else if (error.status === 500) {
      errorMessage = "AI service error. Please try again later.";
    }
    
    // Generate fallback response using our local logic
    const fallbackText = userMessage ? getFallbackResponse(userMessage) : "I'd be happy to help! You can ask me about our services, pricing, contact information, or support options. How can I assist you today?";
    const quickReplies = userMessage ? getQuickReplies(userMessage) : [
      "Tell me about your services",
      "What are your prices?",
      "How can I contact you?",
      "Do you offer support?"
    ];
    
    return NextResponse.json(
      {
        error: "Failed to generate response",
        text: fallbackText,
        quickReplies: quickReplies,
      },
      { status: 200 } // Return 200 so frontend doesn't treat it as error
    );
  }
}

function getQuickReplies(userMessage) {
  const m = userMessage.toLowerCase();
  if (m.includes("service") || m.includes("what do you do")) {
    return [
      "Tell me about Web Development",
      "Tell me about Digital Marketing",
      "Tell me about CCTV Solutions",
      "Tell me about Cyber Security",
    ];
  }
  if (m.includes("price") || m.includes("cost") || m.includes("how much")) {
    return ["Contact sales team", "Schedule consultation", "Send WhatsApp message", "Request callback"];
  }
  if (m.includes("ai") || m.includes("artificial intelligence") || m.includes("learn ai") || m.includes("machine learning")) {
    return ["Tell me about Web Development", "Tell me about Digital Marketing", "Tell me about CCTV Solutions", "Tell me about Cyber Security"];
  }
  if (m.includes("contact") || m.includes("phone") || m.includes("email")) {
    return ["Schedule a call", "Send WhatsApp message", "Request callback"];
  }
  if (m.includes("support") || m.includes("help") || m.includes("maintenance")) {
    return ["Request support", "Emergency contact", "Schedule maintenance"];
  }
  return [
    "Tell me about your services",
    "What are your prices?",
    "How can I contact you?",
    "Do you offer support?",
  ];
}

function getFallbackResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Enhanced responses with more personality
  if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
    return "We offer comprehensive IT solutions including Web Development, Digital Marketing, CCTV Solutions, and Cyber Security. Which service interests you most? I'd be happy to provide detailed information!";
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('how much') || message.includes('quote')) {
    return "Thank you for your interest in our services! Our pricing varies based on your specific requirements and project scope. To provide you with an accurate quote tailored to your needs, please contact our sales team at +971 55 277 3923 or info@zenex.ae. Our team will prepare a detailed proposal within 24 hours.";
  }
  
  if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
    return "You can reach us at +971 55 277 3923 or info@zenex.ae. We're available 24/7 for your IT needs! Feel free to call us anytime.";
  }
  
  if (message.includes('support') || message.includes('help') || message.includes('maintenance') || message.includes('assistance')) {
    return "We provide 24/7 technical support, remote monitoring, and regular maintenance. Our support team is always ready to help! What specific support do you need?";
  }
  
  if (message.includes('web') || message.includes('website') || message.includes('development')) {
    return "Our web development services include responsive design, SEO optimization, e-commerce solutions, and custom web applications. Starting from AED 2,500. Would you like to know more?";
  }
  
  if (message.includes('marketing') || message.includes('digital') || message.includes('seo') || message.includes('social')) {
    return "Our digital marketing services include SEO, social media marketing, Google Ads, and content marketing. Starting from AED 1,500/month. How can I help you with your marketing needs?";
  }
  
  if (message.includes('cctv') || message.includes('camera') || message.includes('security') || message.includes('surveillance')) {
    return "Our CCTV solutions include HD cameras, 24/7 monitoring, remote access, and professional installation. Starting from AED 800. Would you like a consultation?";
  }
  
  if (message.includes('cyber') || message.includes('security') || message.includes('firewall') || message.includes('protection')) {
    return "Our cyber security services include security audits, penetration testing, firewall setup, and 24/7 monitoring. Starting from AED 1,200. How can we secure your business?";
  }
  
  if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('learn ai') || message.includes('machine learning')) {
    return "Great question! While we don't offer AI learning courses, we do provide AI-powered solutions and can help you implement AI technologies in your business. Our services include:\n\n• AI Integration in Web Development\n• AI-powered Digital Marketing Solutions\n• Smart CCTV with AI Analytics\n• AI-enhanced Cyber Security\n\nWould you like to know more about how we can help implement AI solutions for your business?";
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! I'm Zenex AI Assistant. I'm here to help you with information about our IT services. What would you like to know about our offerings?";
  }
  
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're welcome! Is there anything else I can help you with regarding our services?";
  }
  
  // Default response with more context
  return "I'd be happy to help! You can ask me about our services (Web Development, Digital Marketing, CCTV Solutions, Cyber Security), pricing, contact information, or support options. How can I assist you today?";
}


