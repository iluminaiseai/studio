'use server';

/**
 * @fileOverview An AI agent that generates personalized messaging scripts for improving relationship communication.
 *
 * - generateMessagingScripts - A function that generates personalized messaging scripts based on quiz answers and report analysis.
 * - MessagingScriptsInput - The input type for the generateMessagingScripts function.
 * - MessagingScriptsOutput - The return type for the generateMessagingScripts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MessagingScriptsInputSchema = z.object({
  quizAnswers: z.string().describe('The answers provided by the user in the relationship quiz.'),
  reportAnalysis: z.string().describe('The analysis from the relationship report.'),
});
export type MessagingScriptsInput = z.infer<typeof MessagingScriptsInputSchema>;

const MessagingScriptsOutputSchema = z.object({
  messagingScripts: z.array(z.string()).describe('An array of personalized message scripts tailored to improve relationship communication.'),
});
export type MessagingScriptsOutput = z.infer<typeof MessagingScriptsOutputSchema>;

export async function generateMessagingScripts(input: MessagingScriptsInput): Promise<MessagingScriptsOutput> {
  return messagingScriptsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'messagingScriptsPrompt',
  input: {schema: MessagingScriptsInputSchema},
  output: {schema: MessagingScriptsOutputSchema},
  prompt: `You are an AI relationship coach specializing in communication. Based on the user's quiz answers and relationship report analysis, generate personalized message scripts to help them improve communication with their partner.

Quiz Answers: {{{quizAnswers}}}
Report Analysis: {{{reportAnalysis}}}

Provide message scripts that are empathetic, clear, and actionable. The message scripts should address specific issues identified in the quiz answers and report analysis, and offer constructive ways to communicate with the partner. Focus on fostering understanding, resolving conflicts, and strengthening the connection.

Output the message scripts as a JSON array of strings. Each script should be less than 100 words.

Example:
[
  "I've been feeling a bit disconnected lately, and I wanted to share that with you. Can we find some time to talk about how we can reconnect?",
  "I appreciate you, and I was hoping that we could set aside some time each week for a date night."
]
`,
});

const messagingScriptsFlow = ai.defineFlow(
  {
    name: 'messagingScriptsFlow',
    inputSchema: MessagingScriptsInputSchema,
    outputSchema: MessagingScriptsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
