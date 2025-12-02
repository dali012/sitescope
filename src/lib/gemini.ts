import { GoogleGenAI } from '@google/genai';

import { env } from '@/env/client';
import { BrainItem } from '@/types';

const ai = new GoogleGenAI({ apiKey: env.NEXT_PUBLIC_GEMINI_API_KEY });

export const generateMonitoringAdvice = async (
  prompt: string,
  contextItems: BrainItem[],
): Promise<string> => {
  const contextString = contextItems
    .map(
      item =>
        `- [${item.type.toUpperCase()}] ${item.title} (${item.url || 'No URL'}): ${item.description}`,
    )
    .join('\n');

  const fullPrompt = `
    You are SiteScope AI, an expert SRE and web monitoring assistant.
    
    CONTEXT ITEMS SELECTED BY USER:
    ${contextString}

    USER REQUEST:
    ${prompt}

    Based on the context items and the user request, generate a response. 
    If the user asks for monitoring rules, suggest specific configurations (intervals, thresholds).
    If the user asks for a report, draft a professional incident or status report.
    Keep the tone professional, concise, and technical.
    Format the output with clear headings and Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });
    return response.text || 'No response generated.';
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'I encountered an error processing your request. Please try again.';
  }
};

export const generateMonitoringAdviceStream = async function* (
  prompt: string,
  contextItems: BrainItem[],
) {
  const contextString = contextItems
    .map(
      item =>
        `- [${item.type.toUpperCase()}] ${item.title} (${item.url || 'No URL'}): ${item.description}`,
    )
    .join('\n');

  const fullPrompt = `
    You are SiteScope AI, an expert SRE and web monitoring assistant.
    
    CONTEXT ITEMS SELECTED BY USER:
    ${contextString}

    USER REQUEST:
    ${prompt}

    Based on the context items and the user request, generate a response. 
    If the user asks for monitoring rules, suggest specific configurations (intervals, thresholds).
    If the user asks for a report, draft a professional incident or status report.
    Keep the tone professional, concise, and technical.
    Format the output with clear headings and Markdown.
  `;

  try {
    const response = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });

    for await (const chunk of response) {
      yield chunk.text;
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    yield 'I encountered an error processing your request. Please try again.';
  }
};

export const analyzeIncident = async (taskName: string): Promise<string> => {
  // Simulate an error log based on the task name for context to make the AI analysis feel real
  const simulatedError = `
    Timestamp: ${new Date().toISOString()}
    Service: ${taskName}
    Error Code: 503 Service Unavailable
    Upstream: upstream_connect_timeout
    Latency: 15002ms
    Region: us-east-1
    Trace ID: ${Math.random().toString(36).substring(7)}
    
    Stack Trace:
    ConnectionRefusedError: Connection refused at 10.0.4.2:8080
        at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1146:16)
    `;

  const prompt = `
    You are SiteScope AI, an expert SRE. 
    A monitoring task for "${taskName}" has FAILED.
    
    Below is the simulated error log captured by the system:
    ${simulatedError}

    Please provide a concise Root Cause Analysis and 3 actionable steps to fix it.
    Format with Markdown headings (## Root Cause, ## Recommended Actions).
    Keep it short and technical.
    `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || 'Analysis complete but no content returned.';
  } catch (error) {
    console.error('Gemini Analysis Error', error);
    return 'Failed to analyze incident. Please try again.';
  }
};

export const generatePostMortem = async (taskName: string): Promise<string> => {
  const prompt = `
    Generate a comprehensive Incident Post-Mortem Report for a recent outage of the service: "${taskName}".
    
    The report should include:
    1. **Executive Summary**: Brief overview of the impact (approx 15 mins downtime).
    2. **Root Cause Analysis**: Technical details (simulated connection timeout, database lock, or memory leak).
    3. **Timeline**: A fictional timeline of detection, diagnosis, and resolution.
    4. **Resolution**: How it was fixed.
    5. **Prevention**: Action items to prevent recurrence.

    Format as a professional Markdown document. Use clear headings.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || 'Report generation failed.';
  } catch (error) {
    console.error('Gemini Post-Mortem Error', error);
    return 'Failed to generate post-mortem report. Please try again.';
  }
};
