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
  prompt: `Você é uma especialista em relacionamentos de IA, com um tom empático e pessoal. Analise as respostas do questionário e gere um relatório detalhado em português, seguindo estritamente as instruções de formatação.

**Instruções de Formatação e Tom:**
- **Tom Pessoal:** Fale diretamente com o usuário (use "você", "suas respostas"). O tom deve ser acolhedor e emocional, como uma conversa.
- **Clareza e Simplicidade:** Use parágrafos curtos, linguagem clara e direta. Evite jargões.
- **Estrutura do Relatório:**
    1.  **Resumo Detalhado (detailedSummary):** Comece com uma análise geral e emocional. Use a estrutura:
        - Título: "Aqui está o que suas respostas nos dizem... 💬"
        - Parágrafos curtos analisando os pontos fortes e fracos.
        - Título: "Insight Rápido 💡" para uma dica ou observação central.
        - Use emojis relevantes (ex: ❤️, 💔, 🤔, ✨) para dar vida ao texto.
        - Formate usando tags HTML: \`<h3>\` para títulos, \`<p>\` para parágrafos.
    2.  **Interpretações Psicológicas (psychologicalInterpretations):**
        - Título: "Analisando os Sinais... 🧠"
        - Explique o significado por trás dos comportamentos observados.
        - Use \`<strong>\` para destacar conceitos importantes.
        - Formate usando tags HTML: \`<h3>\` para o título, \`<p>\` para parágrafos.
    3.  **Plano de Ação (actionPlan):**
        - Título: "Seu Plano de Ação de 7 Dias 🗓️"
        - Crie um plano prático, dia a dia.
        - Use uma lista não ordenada (\`<ul>\`) para os dias e \`<strong>\` para "Dia X:".
        - Inclua ações e, se relevante, roteiros de mensagem.
        - Adicione um título final: "Conclusão Final ✨".
        - Formate usando tags HTML: \`<h3>\` para títulos, \`<ul>\` e \`<li>\` para a lista.
- **Linguagem:** O resultado final deve ser sempre em português do Brasil.

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
