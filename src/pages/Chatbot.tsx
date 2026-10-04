import { useState } from 'react';
import { Send, Bot, User, RotateCcw, Sparkles } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I am FlyBuddy AI. How can I help with your airport journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "When should I reach Mumbai Airport?",
    "Which terminal is my flight from?",
    "How does DigiYatra work?",
    "Where can I find baggage claim?",
    "What should I do if my flight is delayed?",
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response for prototype
    setTimeout(() => {
      let response = "I'm a prototype assistant. In a live version, I would check real-time data to answer that for you!";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("when should i reach") || lowerText.includes("mumbai")) {
        response = "For domestic flights at Mumbai (BOM) T2, I recommend arriving at least 2 hours before departure. Security queues are currently averaging 18 minutes.";
      } else if (lowerText.includes("terminal")) {
        response = "Please provide your flight number (e.g., 6E 5284) and I'll check the terminal for you.";
      } else if (lowerText.includes("digiyatra")) {
        response = "DigiYatra uses facial recognition for contactless entry and security. Make sure you've registered on the DigiYatra app before reaching the airport!";
      }

      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-12rem)] min-h-[600px] flex flex-col bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative">
      
      {/* Header */}
      <div className="bg-slate-900 p-4 text-white flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="bg-primary-500 p-2 rounded-full">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight">Ask FlyBuddy AI</h2>
            <div className="flex items-center gap-1.5 text-primary-200 text-xs font-medium">
              <Sparkles className="w-3 h-3" /> Prototype Assistant
            </div>
          </div>
        </div>
        <button 
          onClick={() => setMessages([{ role: 'assistant', text: 'Hi! I am FlyBuddy AI. How can I help with your airport journey today?' }])}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          title="Clear Chat"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-primary-100 text-primary-600'
            }`}>
              {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-primary-600 text-white rounded-tr-sm' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-tl-sm shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 items-center">
              <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="p-4 bg-white border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Suggested Questions</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <button 
                key={i} 
                onClick={() => handleSend(q)}
                className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors border border-transparent hover:border-primary-100 text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-200">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
          className="flex gap-2 relative"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          />
          <button 
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 top-1.5 bottom-1.5 aspect-square bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 disabled:opacity-50 disabled:hover:bg-primary-600 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
