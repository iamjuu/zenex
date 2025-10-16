import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Company/system prompt
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

Behavior:
- Be friendly, professional, concise, and helpful.
- Suggest next steps and calls-to-action.
- Use emojis sparingly to improve readability.
`;

export async function POST(req) {
  try {
    const { userMessage, conversationHistory = [] } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Server misconfigured: GEMINI_API_KEY missing" },
        { status: 500 }
      );
    }

    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json(
        { error: "Invalid payload: userMessage is required" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let conversationContext = `${COMPANY_CONTEXT}\n\nConversation History:`;
    conversationHistory.slice(-10).forEach((msg) => {
      const role = msg.sender === "user" ? "User" : "Assistant";
      conversationContext += `\n${role}: ${msg.text}`;
    });
    conversationContext += `\n\nUser: ${userMessage}\nAssistant:`;

    const result = await model.generateContent(conversationContext);
    const response = await result.response;
    const text = (response?.text?.() || "").trim();

    const quickReplies = getQuickReplies(userMessage);

    return NextResponse.json({ text, quickReplies });
  } catch (error) {
    console.error("Gemini route error", error);
    return NextResponse.json(
      {
        text:
          "I'm having trouble right now. Please try again, or contact us at +971 56 440 7700.",
        quickReplies: ["Contact us directly", "Try again", "Schedule a call"],
      },
      { status: 200 }
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
    return ["Get a detailed quote", "Contact sales team", "Schedule consultation"];
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


