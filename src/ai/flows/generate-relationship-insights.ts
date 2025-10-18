'use server';

/**
 * @fileOverview Generates relationship insights based on quiz responses.
 *
 * - generateRelationshipInsights - A function that generates a detailed relationship report.
 * - RelationshipInsightsInput - The input type for the generateRelationshipInsights function.
 * - RelationshipInsightsOutput - The return type for the generateRelationshipInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RelationshipInsightsInputSchema = z.object({
  communication: z.array(z.string()).describe('Responses to communication questions.'),
  timeTogether: z.array(z.string()).describe('Responses to time together and attention questions.'),
  behaviorChanges: z.array(z.string()).describe('Responses to behavior changes questions.'),
  reactionsToConflicts: z.array(z.string()).describe('Responses to reactions to conflicts questions.'),
  signsOfInterest: z.array(z.string()).describe('Responses to signs of interest questions.'),
});
export type RelationshipInsightsInput = z.infer<typeof RelationshipInsightsInputSchema>;

const RelationshipInsightsOutputSchema = z.object({
  detailedSummary: z.string().describe('A detailed summary of the relationship insights.'),
  psychologicalInterpretations: z.string().describe('Psychological interpretations of observed signals.'),
  actionPlan: z.string().describe('A 7-day action plan with message scripts.'),
});
export type RelationshipInsightsOutput = z.infer<typeof RelationshipInsightsOutputSchema>;

export async function generateRelationshipInsights(input: RelationshipInsightsInput): Promise<RelationshipInsightsOutput> {
  return generateRelationshipInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'relationshipInsightsPrompt',
  input: {schema: RelationshipInsightsInputSchema},
  output: {schema: RelationshipInsightsOutputSchema},
  prompt: `Você é um especialista em relacionamentos de IA. Analise as seguintes respostas do questionário de relacionamento e gere um relatório detalhado e personalizado em português.

  A resposta deve conter:
  - Um resumo detalhado dos insights do relacionamento.
  - Interpretações psicológicas dos sinais observados.
  - Um plano de ação de 7 dias com roteiros de mensagens e estratégias. Os roteiros de mensagens devem ser adaptados à situação.

Respostas de Comunicação: {{communication}}
Respostas de Tempo Juntos: {{timeTogether}}
Respostas de Mudanças de Comportamento: {{behaviorChanges}}
Respostas de Reações a Conflitos: {{reactionsToConflicts}}
Respostas de Sinais de Interesse: {{signsOfInterest}}`,
});

const generateRelationshipInsightsFlow = ai.defineFlow(
  {
    name: 'generateRelationshipInsightsFlow',
    inputSchema: RelationshipInsightsInputSchema,
    outputSchema: RelationshipInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
