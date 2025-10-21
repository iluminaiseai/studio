
import { quizData } from "./quiz-data";

type FeedbackCategory = 'positive' | 'mixed' | 'negative';
type FeedbackContent = {
    title: string;
    text: string;
};

const feedbackMessages: Record<FeedbackCategory, FeedbackContent[]> = {
    positive: [
        {
            title: "Parece que as coisas vão bem...",
            text: "Suas respostas indicam uma base sólida de comunicação e respeito. Continue assim, o caminho parece ser promissor!"
        },
        {
            title: "Uma conexão forte está se mostrando!",
            text: "Até agora, os sinais apontam para um relacionamento saudável e equilibrado. O resultado final tem tudo para ser excelente."
        }
    ],
    mixed: [
        {
            title: "Interessante... alguns altos e baixos?",
            text: "Suas respostas mostram uma mistura de sinais positivos e alguns pontos de atenção. Continue respondendo para entendermos melhor essa dinâmica."
        },
        {
            title: "Uma montanha-russa de emoções?",
            text: "Percebo que existem momentos bons, mas também alguns que geram dúvidas. O cenário completo será revelador."
        }
    ],
    negative: [
        {
            title: "Hmm, alguns sinais de alerta...",
            text: "Suas primeiras respostas levantam algumas questões importantes. É crucial que você continue com honestidade para termos um diagnóstico claro."
        },
        {
            title: "Percebo uma certa tensão no ar.",
            text: "Os padrões que estão surgindo merecem atenção. Seu relatório final será uma ferramenta poderosa para entender o que está acontecendo."
        }
    ]
};

function calculateScore(answersText: string[]): number {
  let totalScore = 0;
  answersText.forEach((answerText, index) => {
    const question = quizData.find(q => q.id === index + 1);
    if (question) {
      const answer = question.answers.find(a => a.text === answerText);
      if (answer) {
        totalScore += answer.score;
      }
    }
  });
  return totalScore;
}


export function getFeedbackForAnswers(answersText: string[]): FeedbackContent {
    const score = calculateScore(answersText);
    const numQuestions = answersText.length;
    
    // Normalize score to a percentage of max possible score
    const maxScore = numQuestions * 2;
    const minScore = numQuestions * -2;
    const scorePercentage = maxScore > minScore ? ((score - minScore) / (maxScore - minScore)) * 100 : 50;

    let category: FeedbackCategory;

    if (scorePercentage > 65) {
        category = 'positive';
    } else if (scorePercentage >= 35) {
        category = 'mixed';
    } else {
        category = 'negative';
    }
    
    // Alternate between the two messages for each category
    const messageIndex = (numQuestions / 4) <= 1 ? 0 : 1;
    return feedbackMessages[category][messageIndex];
}
