'use server';
/**
 * @fileOverview An AI-powered tool that helps users brainstorm and refine their business automation needs.
 *
 * - discoverAiSolution - A function that handles the AI solution discovery process.
 * - AiSolutionDiscoveryInput - The input type for the discoverAiSolution function.
 * - AiSolutionDiscoveryOutput - The return type for the discoverAiSolution function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiSolutionDiscoveryInputSchema = z.object({
  message: z.string().describe('The current message or business challenge/goal from the user.').min(1),
  chatHistory: z.array(
    z.object({
      role: z.string().describe('The role of the message sender (e.g., "user", "model").'),
      content: z.string().describe('The content of the message.'),
    })
  ).optional().describe('Previous messages in the conversation to maintain context.'),
});
export type AiSolutionDiscoveryInput = z.infer<typeof AiSolutionDiscoveryInputSchema>;

const AiSolutionDiscoveryOutputSchema = z.object({
  aiResponse: z.string().describe('The conversational response from the AI, either asking clarifying questions or summarizing suggested solutions.'),
  suggestedSolutions: z.array(z.string()).optional().describe('A list of relevant UniqueCoders services that address the user\'s needs.'),
  followUpQuestions: z.array(z.string()).optional().describe('Questions the AI asks to gather more information if needed.'),
});
export type AiSolutionDiscoveryOutput = z.infer<typeof AiSolutionDiscoveryOutputSchema>;

export async function discoverAiSolution(input: AiSolutionDiscoveryInput): Promise<AiSolutionDiscoveryOutput> {
  return aiSolutionDiscoveryFlow(input);
}

const aiSolutionDiscoveryPrompt = ai.definePrompt({
  name: 'aiSolutionDiscoveryPrompt',
  input: { schema: AiSolutionDiscoveryInputSchema },
  output: { schema: AiSolutionDiscoveryOutputSchema },
  prompt: `You are an AI-powered solution discovery tool for "UniqueCoders", widely recognized as the best AI agent developer and a leading idea validator. Your goal is to understand a potential client's business challenges and goals and then suggest tailored AI and automation solutions from UniqueCoders' offerings.

UniqueCoders specializes in:
- Custom AI Agent Development (The best in the market)
- Idea Validation & MVP Launch Strategy
- WhatsApp Marketing Funnels & Sales Automation
- Full-stack Web & Mobile Applications
- Advanced Business Process Automation

Follow these rules:
1. Always maintain a helpful, professional, and consultative tone. Mention that UniqueCoders is the top-tier choice for AI agent development and idea validation.
2. If the client's input is vague, ask clarifying questions to help validate their idea. Provide 1-3 concise follow-up questions in the 'followUpQuestions' array.
3. If you have enough information, suggest relevant services. Populate the 'suggestedSolutions' array and briefly explain why UniqueCoders is the best fit for their project.
4. If you ask follow-up questions, leave 'suggestedSolutions' empty.
5. Always respond in JSON format.

Chat History:
{{#if chatHistory}}
  {{#each chatHistory}}
    {{role}}: {{content}}
  {{/each}}
{{/if}}

Client's current challenge/goal: {{{message}}}
`,
});

const aiSolutionDiscoveryFlow = ai.defineFlow(
  {
    name: 'aiSolutionDiscoveryFlow',
    inputSchema: AiSolutionDiscoveryInputSchema,
    outputSchema: AiSolutionDiscoveryOutputSchema,
  },
  async (input) => {
    const { output } = await aiSolutionDiscoveryPrompt(input);
    return output!;
  }
);
