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
  prompt: `Você é um coach de relacionamento de IA especializado em comunicação. Com base nas respostas do questionário do usuário e na análise do relatório de relacionamento, gere roteiros de mensagens personalizados para ajudá-los a melhorar a comunicação com o parceiro.

Respostas do Questionário: {{{quizAnswers}}}
Análise do Relatório: {{{reportAnalysis}}}

Forneça roteiros de mensagens que sejam empáticos, claros e práticos. Os roteiros de mensagens devem abordar questões específicas identificadas nas respostas do questionário e na análise do relatório, e oferecer maneiras construtivas de se comunicar com o parceiro. Concentre-se em promover o entendimento, resolver conflitos e fortalecer a conexão.

A saída deve ser um array JSON de strings. Cada roteiro deve ter menos de 100 palavras. O resultado deve ser em português.

Exemplo:
[
  "Tenho me sentido um pouco desconectado(a) ultimamente e queria compartilhar isso com você. Podemos encontrar um tempo para conversar sobre como podemos nos reconectar?",
  "Eu te aprecio, e estava esperando que pudéssemos reservar um tempo toda semana para um encontro à noite."
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
