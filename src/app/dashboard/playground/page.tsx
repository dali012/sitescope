'use client';

import { useEffect, useRef, useState } from 'react';

import { ArrowRight, Bot, PenTool } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

import { INITIAL_BRAIN_ITEMS } from '@/constants';
import { generateMonitoringAdviceStream } from '@/lib/gemini';

export default function PlaygroundPage() {
  const [messages, setMessages] = useState<
    { role: 'user' | 'assistant'; text: string }[]
  >([
    {
      role: 'assistant',
      text: `Hello! I am SiteScope AI. I have context on your ${
        INITIAL_BRAIN_ITEMS.length
      } assets. How can I help you today?`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsStreaming(true);

    try {
      // Add placeholder for assistant
      setMessages(prev => [...prev, { role: 'assistant', text: '' }]);

      const stream = generateMonitoringAdviceStream(
        userMsg,
        INITIAL_BRAIN_ITEMS,
      );

      let fullResponse = '';
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newArr = [...prev];
          newArr[newArr.length - 1] = { role: 'assistant', text: fullResponse };
          return newArr;
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="flex h-full flex-col bg-white dark:bg-zinc-950">
      <div className="flex-1 space-y-6 overflow-y-auto p-4 md:p-8">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm ${msg.role === 'user' ? 'bg-stone-900 text-white dark:bg-stone-200 dark:text-zinc-900' : 'bg-stone-100 dark:bg-zinc-800'}`}
            >
              {msg.role === 'user' ? (
                'AJ'
              ) : (
                <Bot size={16} className="text-stone-600 dark:text-stone-300" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'rounded-tr-none bg-stone-900 text-white dark:bg-stone-100 dark:text-zinc-900'
                  : 'rounded-tl-none border border-stone-100 bg-stone-50 text-stone-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-stone-200'
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-stone-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <form onSubmit={handleSubmit} className="relative mx-auto max-w-4xl">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about your monitors, or request a new configuration..."
            className="w-full rounded-sm border border-stone-200 bg-stone-50 py-3 pr-12 pl-4 focus:border-stone-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-stone-600"
          />
          <button
            type="submit"
            disabled={isStreaming}
            className="absolute top-2 right-2 cursor-pointer rounded-sm bg-stone-900 p-1.5 text-white hover:bg-stone-800 disabled:opacity-50 dark:bg-stone-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            {isStreaming ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-zinc-900/30 dark:border-t-zinc-900"></div>
            ) : (
              <ArrowRight size={16} />
            )}
          </button>
        </form>
        <div className="mt-2 text-center">
          <button className="mx-auto flex items-center gap-1 text-xs text-stone-400 hover:text-stone-900 dark:hover:text-stone-200">
            <PenTool size={10} /> Use last response in Composer
          </button>
        </div>
      </div>
    </div>
  );
}
