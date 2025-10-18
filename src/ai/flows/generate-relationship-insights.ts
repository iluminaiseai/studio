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

  **Instruções de Formatação:**
  - **Clareza é fundamental:** Use uma linguagem clara, direta e empática.
  - **Estrutura:** Organize o conteúdo com títulos claros para cada seção (Resumo, Interpretações, Plano de Ação).
  - **Listas:** Use listas (bullet points) para detalhar os pontos principais, especialmente no plano de ação.
  - **Negrito:** Use negrito para destacar os pontos e conselhos mais importantes.
  - **Parágrafos Curtos:** Mantenha os parágrafos curtos e focados em uma única ideia para facilitar a leitura em dispositivos móveis.
  - **Linguagem:** O resultado final deve ser sempre em português do Brasil.

  **Conteúdo do Relatório:**
  A resposta deve conter:
  1.  **Resumo Detalhado:** Um resumo dos insights do relacionamento.
  2.  **Interpretações Psicológicas:** Interpretações dos sinais observados.
  3.  **Plano de Ação de 7 Dias:** Um plano com roteiros de mensagens e estratégias. Os roteiros devem ser práticos e adaptados à situação.

  **Dados para Análise:**
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
