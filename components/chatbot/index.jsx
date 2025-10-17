"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, BotMessageSquare } from "lucide-react";
import Image from "next/image";
import { generateResponse } from "../../lib/openaiService";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Zenex AI Assistant. I'm here to help you with information about our IT services. What would you like to know about our offerings?",
      sender: "bot",
      timestamp: new Date(),
      quickReplies: ["Tell me about your services", "What are your prices?", "How can I contact you?"]
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
      // Get conversation history for context
      const conversationHistory = messages.slice(-10); // Last 10 messages for context
      
      // Call generateResponse (this will check for static responses first)
      const response = await generateResponse(currentInput, conversationHistory);
      console.log(response,'data gotted');
      const botMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        quickReplies: response.quickReplies
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      // Fallback response
      const botMessage = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble processing your request right now. Please try again or contact us directly at +971 55 277 3923.",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: ["Contact us directly", "Try again", "Schedule a call"]
      };
      
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickReply = async (reply) => {
    // Add user message immediately
    const userMessage = {
      id: Date.now(),
      text: reply,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Check if this is a static response first
      const response = await generateResponse(reply, messages.slice(-10));
      
      const botMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        quickReplies: response.quickReplies
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      // Fallback response
      const botMessage = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble processing your request right now. Please try again or contact us directly at +971 55 277 3923.",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: ["Contact us directly", "Try again", "Schedule a call"]
      };
      
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-50 bottom-6 right-7 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
        aria-label="Open AI Chat Assistant"
      >
        <BotMessageSquare className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          AI
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
          <div className="bg-black/50 backdrop-blur-sm absolute inset-0" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Zenex AI Assistant</h3>
                  <p className="text-xs text-blue-100">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "bot" && (
                        <Bot className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                      )}
                      {message.sender === "user" && (
                        <User className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        {message.quickReplies && (
                          <div className="mt-3 space-y-2">
                            {message.quickReplies.slice(0, 3).map((reply, index) => (
                              <button
                                key={index}
                                onClick={() => handleQuickReply(reply)}
                                className="block w-full text-left text-xs bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-colors"
                              >
                                {reply}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
