import { Suspense } from "react";
import { generateRelationshipInsights, RelationshipInsightsInput } from "@/ai/flows/generate-relationship-insights";
import { quizData } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Loader, Lock, Terminal } from "lucide-react";

type ResultsPageProps = {
  searchParams: {
    answers?: string;
  };
};

function processAnswers(encodedAnswers: string | undefined): RelationshipInsightsInput {
  const insightsInput: RelationshipInsightsInput = {
    communication: [],
    timeTogether: [],
    behaviorChanges: [],
    reactionsToConflicts: [],
    signsOfInterest: [],
  };

  if (!encodedAnswers) {
    return insightsInput;
  }

  const allAnswers = decodeURIComponent(encodedAnswers).split('|');

  quizData.forEach((question, index) => {
    const answer = allAnswers[index];
    if (answer) {
      insightsInput[question.section].push(answer);
    }
  });

  return insightsInput;
}

async function FreeReport({ answers }: { answers: string | undefined }) {
  const insightsInput = processAnswers(answers);
  
  try {
    const insights = await generateRelationshipInsights(insightsInput);

    return (
      <Card className="w-full shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Seu Diagnóstico Gratuito</CardTitle>
          <CardDescription>
            Uma análise inicial dos padrões que você descreveu no relacionamento.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="whitespace-pre-wrap font-body text-base leading-relaxed text-muted-foreground">
            {insights.detailedSummary}
          </p>
        </CardContent>
        <CardFooter>
           <Alert className="bg-primary/5 border-primary/20">
            <Lock className="h-4 w-4 text-primary" />
            <AlertTitle className="font-headline text-lg text-primary">Desbloqueie seu Relatório Completo</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Receba uma análise psicológica profunda, plano de ação de 7 dias e scripts de mensagem para transformar sua comunicação.
              <Button asChild className="mt-4 w-full sm:w-auto font-bold">
                <Link href={`/quiz/report?answers=${answers || ''}`}>
                  Ver Relatório Completo
                </Link>
              </Button>
            </AlertDescription>
          </Alert>
        </CardFooter>
      </Card>
    );
  } catch (error) {
     return (
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Erro ao gerar diagnóstico</AlertTitle>
        <AlertDescription>
          Houve um problema ao contatar nossa IA. Por favor, tente novamente mais tarde.
        </AlertDescription>
      </Alert>
    );
  }
}

function LoadingSkeleton() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 font-headline text-2xl">Analisando suas respostas...</p>
            <p className="text-muted-foreground">Nossa IA está preparando seu diagnóstico.</p>
        </div>
    )
}

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center p-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <FreeReport answers={searchParams.answers} />
      </Suspense>
    </div>
  );
}
