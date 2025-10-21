
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getPregeneratedResponse, ReportStyle, AnswerKey } from '@/lib/pregenerated-responses';
import { ReportDisplay } from './report-client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Loader } from 'lucide-react';
import { quizData } from '@/lib/quiz-data';

/**
 * Calcula a pontuação total com base nas respostas e determina a chave de resultado.
 * @param answersText - Um array com o texto de cada resposta selecionada pelo usuário.
 * @returns A chave de resultado: 'positive', 'mixed', ou 'negative'.
 */
function calculateScoreAndDetermineKey(answersText: string[]): AnswerKey {
  let totalScore = 0;
  // O score máximo possível é 2 por pergunta.
  const maxScore = quizData.length * 2;

  // Itera sobre as respostas do usuário.
  answersText.forEach((answerText, index) => {
    // Encontra a pergunta correspondente no quizData.
    const question = quizData[index];
    if (question) {
      // Encontra a resposta específica que o usuário escolheu.
      const answer = question.answers.find(a => a.text === answerText);
      if (answer) {
        // Soma a pontuação daquela resposta ao total.
        totalScore += answer.score;
      }
    }
  });

  // Normaliza a pontuação para uma porcentagem do score máximo possível.
  // Isso torna a lógica independente do número de perguntas.
  const scorePercentage = (totalScore / maxScore) * 100;

  // Determina a chave de resultado com base na faixa de pontuação.
  if (scorePercentage > 50) {
    return 'positive'; // Mais de 50% do score máximo = relacionamento saudável.
  } else if (scorePercentage >= 0) {
    return 'mixed'; // Entre 0% e 50% = relacionamento com altos e baixos.
  } else {
    return 'negative'; // Score negativo = relacionamento com problemas significativos.
  }
}


function ReportComponent() {
  const searchParams = useSearchParams();
  const answersParam = searchParams.get('answers');
  const style = (searchParams.get('style') as ReportStyle) || 'detailed';

  if (!answersParam) {
    return (
      <div className="container mx-auto flex h-screen max-w-4xl flex-col items-center justify-center p-4">
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>Parâmetros de respostas não encontrados. Por favor, refaça o quiz.</AlertDescription>
        </Alert>
      </div>
    );
  }

  // Decodifica e divide as respostas da URL em um array.
  const answersArray = decodeURIComponent(answersParam).split('|');
  // Calcula a chave de resultado com base nas respostas.
  const answerKey = calculateScoreAndDetermineKey(answersArray);
  
  // Busca o relatório completo pré-gerado usando a chave e o estilo.
  const fullReport = getPregeneratedResponse(answerKey, style, 'full');

  if (!fullReport) {
    return (
      <div className="container mx-auto flex h-screen max-w-4xl flex-col items-center justify-center p-4">
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>Não foi possível gerar seu relatório completo. Por favor, tente novamente.</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center p-4 py-8 animate-in fade-in">
        <ReportDisplay insights={fullReport} />
    </div>
  );
}

function LoadingFallback() {
    return (
        <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 font-headline text-xl md:text-2xl">Gerando seu relatório...</p>
        </div>
    )
}

export default function ReportPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ReportComponent />
    </Suspense>
  );
}
