import React, { useState, useRef, useEffect } from 'react';
import { Send, Minimize2, Maximize2, Trash2, ArrowUpRight, Sparkles, AlertCircle } from 'lucide-react';
import { PageRoute } from '../types';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface AiChatbotProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({ onNavigate, onOpenProposal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpandedSize, setIsExpandedSize] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialWelcome: Message = {
    id: 'welcome-msg',
    role: 'model',
    text: "Hello! I am **Nova**, Senior Solutions Architect at **Nova Nexus**.\n\nI can help you explore architecture blueprints, compare tech stacks (Cloud, React/Next.js, Flutter/React Native, Autonomous AI Agents, or SEO), and estimate development timelines. What are you looking to build?",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  const [messages, setMessages] = useState<Message[]>([initialWelcome]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    'How do your AI agents automate workflows?',
    'Explain the 99.99% cloud hosting SLA',
    'Flutter vs React Native for our mobile app?',
    'How does programmatic SEO scale traffic?',
  ];

  const handleSend = async (textToSend?: string) => {
    const userText = textToSend || input.trim();
    if (!userText || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Build conversation payload for multi-turn server endpoint
      const payloadMessages = [...messages, userMessage].map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();
      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: data.reply || "I've reviewed your question. Could you provide a bit more detail on your current stack?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setError(err?.message || 'Could not connect to Nova AI service. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([initialWelcome]);
    setError(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Simple markdown renderer for bold, lists, and line breaks
  const renderFormattedText = (raw: string) => {
    const paragraphs = raw.split('\n\n');
    return paragraphs.map((para, pIdx) => {
      const lines = para.split('\n');
      return (
        <div key={pIdx} className="space-y-1">
          {lines.map((line, lIdx) => {
            // Check for list bullet
            const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
            const cleanLine = isBullet ? line.trim().substring(2) : line;

            // Render bold formatting
            const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
            const formattedLine = parts.map((part, idx) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={idx} className="font-semibold text-white">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            });

            if (isBullet) {
              return (
                <div key={lIdx} className="flex items-start gap-1.5 pl-1 text-slate-200">
                  <span className="text-red-400 mt-1">·</span>
                  <span>{formattedLine}</span>
                </div>
              );
            }

            return <p key={lIdx} className="leading-relaxed">{formattedLine}</p>;
          })}
        </div>
      );
    });
  };

  return (
    <>
      {/* MINIMIZED STATE: Use ONLY the exact "N" icon from the navbar */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-1.5 rounded-2xl bg-[#08080c]/90 border border-red-500/40 hover:border-red-400 shadow-2xl shadow-red-950/60 hover:shadow-red-600/40 transition-all duration-300 hover:scale-105 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer backdrop-blur-md"
          aria-label="Open Nova Nexus AI Chatbot"
          title="Chat with Nova Nexus AI"
        >
          {/* EXACT "N" icon from the nav bar */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center p-0.5 shadow-md shadow-red-600/30 group-hover:shadow-red-500/50 transition-shadow">
            <div className="w-full h-full bg-[#0a0a0d] rounded-[9px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-500 via-rose-400 to-red-300 text-2xl tracking-wider">
                N
              </span>
            </div>
          </div>

          {/* Pulse indicator badge */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-[#050507]" />
          </span>
        </button>
      )}

      {/* EXPANDED STATE: Uses the whole Nova logo in header */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-[#0a0a0e] border border-red-500/40 rounded-2xl shadow-2xl shadow-black/90 flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-200 ${
            isExpandedSize
              ? 'inset-4 sm:inset-10 md:inset-x-24 md:inset-y-12'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh]'
          }`}
        >
          {/* EXPANDED HEADER: Uses the WHOLE Nova logo */}
          <div className="p-3.5 sm:p-4 bg-[#0d0d14] border-b border-red-500/20 flex items-center justify-between gap-3">
            {/* The Whole Nova Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center p-0.5 shadow-md shadow-red-600/30">
                <div className="w-full h-full bg-[#0a0a0d] rounded-[6px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-500 via-rose-400 to-red-300 text-sm tracking-wider">
                    N
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
                    Nova<span className="text-red-500">Nexus</span>
                  </span>
                  <span className="text-[10px] font-sans text-red-300 bg-red-950/60 border border-red-500/30 px-1.5 py-0.2 rounded">
                    AI
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 -mt-0.5">
                  Senior Solutions Architect
                </span>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearHistory}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                title="Clear Chat History"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsExpandedSize(!isExpandedSize)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
                title={isExpandedSize ? 'Restore size' : 'Expand window'}
              >
                {isExpandedSize ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                title="Minimize back to N icon"
                aria-label="Minimize Chatbot"
              >
                <Minimize2 className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>

          {/* Chat Messages Thread */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-normal">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-tr-sm shadow-md shadow-red-950/40'
                        : 'bg-[#121218] border border-white/10 text-slate-200 rounded-tl-sm shadow-md'
                    }`}
                  >
                    {isUser ? msg.text : renderFormattedText(msg.text)}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="bg-[#121218] border border-white/10 rounded-2xl rounded-tl-sm p-3.5 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse delay-150" />
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse delay-300" />
                  </div>
                  <span className="text-xs text-slate-400">Nova is analyzing architecture...</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                <div className="space-y-1">
                  <p>{error}</p>
                  <button
                    onClick={() => handleSend()}
                    className="underline text-white font-medium hover:text-red-200"
                  >
                    Retry last request
                  </button>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 pt-1 border-t border-white/5 bg-[#08080c]/60">
              <div className="text-[10px] uppercase font-sans text-slate-500 mb-1.5">
                Suggested Architecture Questions:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="text-[11px] text-slate-300 bg-white/5 hover:bg-red-950/50 hover:border-red-500/40 border border-white/10 px-2.5 py-1 rounded-lg transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Shortcut Banner */}
          <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span>Ready for formal scope?</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigate('estimator');
                }}
                className="text-red-400 hover:text-red-300 font-medium underline flex items-center gap-0.5"
              >
                <span>Estimator</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenProposal();
                }}
                className="text-red-400 hover:text-red-300 font-medium underline flex items-center gap-0.5"
              >
                <span>Discovery Call</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-[#0d0d14] border-t border-red-500/20">
            <div className="flex items-center gap-2 bg-[#14141d] border border-white/10 focus-within:border-red-500/60 rounded-xl px-3 py-1.5 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Nova about architecture, stacks, or pricing..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="p-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white disabled:opacity-40 disabled:hover:bg-red-600 transition-colors cursor-pointer"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
