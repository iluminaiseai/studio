
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

const ReportStyleSchema = z.enum([
    "detailed", 
    "gossipy_friend"
]);
export type ReportStyle = z.infer<typeof ReportStyleSchema>;

const RelationshipInsightsInputSchema = z.object({
  communication: z.array(z.string()).describe('Responses to communication questions.'),
  timeTogether: z.array(z.string()).describe('Responses to time together and attention questions.'),
  behaviorChanges: z.array(z.string()).describe('Responses to behavior changes questions.'),
  reactionsToConflicts: z.array(z.string()).describe('Responses to reactions to conflicts questions.'),
  signsOfInterest: z.array(z.string()).describe('Responses to signs of interest questions.'),
  style: ReportStyleSchema.describe('The desired style of the report.'),
});
export type RelationshipInsightsInput = z.infer<typeof RelationshipInsightsInputSchema>;

const RelationshipInsightsOutputSchema = z.object({
  detailedSummary: z.string().describe('A detailed summary of the relationship insights. Must be a single paragraph of about 6 lines.'),
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
  prompt: `Você é uma especialista em relacionamentos de IA. Analise as respostas do questionário e gere um relatório detalhado em português.

**Instruções de Personalidade e Tom:**
Adote a personalidade correspondente ao estilo solicitado:
- **Se o estilo for "detailed" (psicológico detalhado):** Use um tom empático, analítico e profissional. Fale diretamente com o usuário (use "você", "suas respostas"). O tom deve ser acolhedor, mas focado em interpretações psicológicas e insights práticos. Use uma linguagem clara e estruturada.
- **Se o estilo for "gossipy_friend" (amiga fofoqueira):** Use um tom super informal, divertido e um pouco exagerado, como uma melhor amiga contando uma fofoca quente. Use gírias, emojis (😜, 😱, 🤔, ✨) e fale como se estivesse conversando no WhatsApp. Ex: "Amiga, senta aqui, vamos analisar esse boy!", "Olha, sinceramente...", "MEU DEUS!".

**Instruções de Formatação e Conteúdo:**
- **Clareza e Simplicidade:** Use parágrafos curtos.
- **Estrutura do Relatório:**
    1.  **Resumo Detalhado (detailedSummary):** Comece com uma análise geral concisa. **IMPORTANTE: Este resumo deve ser um único parágrafo com aproximadamente 6 linhas.**
        - Use \`<h3>\` para títulos, \`<p>\` para parágrafos.
        - Adicione um "Insight Rápido 💡" (ou versão adaptada ao estilo).
    2.  **Interpretações Psicológicas (psychologicalInterpretations):**
        - Explique o significado por trás dos comportamentos.
        - Use \`<strong>\` para destacar conceitos importantes.
        - Use \`<h3>\` para o título, \`<p>\` para parágrafos.
    3.  **Plano de Ação (actionPlan):**
        - Crie um plano prático de 7 dias.
        - Use \`<ul>\` e \`<li>\` com \`<strong>\` para "Dia X:".
        - Inclua ações e, se relevante, roteiros de mensagem.
        - Adicione um título final de conclusão.
        - Use \`<h3>\` para títulos.
- **Linguagem:** O resultado final deve ser sempre em português do Brasil.

**Estilo Solicitado:** {{style}}

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
