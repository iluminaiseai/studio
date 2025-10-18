
"use client";

import { Suspense } from "react";
import {
  generateRelationshipInsights,
  RelationshipInsightsInput,
} from "@/ai/flows/generate-relationship-insights";
import { quizData } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Loader, Lock, Terminal } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function processAnswers(
  encodedAnswers: string | null
): RelationshipInsightsInput {
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

  const allAnswers = decodeURIComponent(encodedAnswers).split("|");

  quizData.forEach((question, index) => {
    const answer = allAnswers[index];
    if (answer) {
      const section = question.section as keyof RelationshipInsightsInput;
      if (insightsInput[section]) {
        insightsInput[section].push(answer);
      }
    }
  });

  return insightsInput;
}

function FreeReport() {
  const searchParams = useSearchParams();
  const answers = searchParams.get("answers");
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getInsights() {
      if (!answers) {
        setError("Nenhuma resposta encontrada.");
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const insightsInput = processAnswers(answers);
        const insights = await generateRelationshipInsights(insightsInput);
        setSummary(insights.detailedSummary);
      } catch (e) {
        console.error(e);
        setError("Houve um problema ao contatar nossa IA. Por favor, tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    }
    getInsights();
  }, [answers]);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  
  if (error) {
    return (
     <Alert variant="destructive">
       <Terminal className="h-4 w-4" />
       <AlertTitle>Erro ao gerar diagnóstico</AlertTitle>
       <AlertDescription>{error}</AlertDescription>
     </Alert>
   );
 }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="px-4 pt-6 md:p-6">
        <CardTitle className="font-headline text-2xl md:text-3xl">
          Seu Diagnóstico Gratuito
        </CardTitle>
        <CardDescription className="text-sm md:text-base">
          Uma análise inicial dos padrões que você descreveu no relacionamento.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 px-4 pb-4 md:px-6 md:pb-6">
        {summary && (
          <div 
            className="prose prose-sm md:prose-base max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: summary }} 
          />
        )}
      </CardContent>
      <CardFooter className="p-4 md:p-6">
        <Alert className="bg-primary/5 border-primary/20">
          <Lock className="h-4 w-4 text-primary" />
          <AlertTitle className="font-headline text-base text-primary md:text-lg">
            Desbloqueie seu Relatório Completo
          </AlertTitle>
          <AlertDescription className="text-sm text-muted-foreground md:text-base">
            Receba uma análise psicológica profunda, plano de ação de 7 dias e
            scripts de mensagem para transformar sua comunicação.
            <Button asChild className="mt-4 w-full sm:w-auto font-bold">
              <Link href={`/quiz/report?answers=${answers || ""}`}>
                Ver Relatório Completo
              </Link>
            </Button>
          </AlertDescription>
        </Alert>
      </CardFooter>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <Loader className="h-12 w-12 animate-spin text-primary" />
      <p className="mt-4 font-headline text-xl md:text-2xl">
        Analisando suas respostas...
      </p>
      <p className="text-muted-foreground text-sm md:text-base">
        Nossa IA está preparando seu diagnóstico.
      </p>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center p-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <FreeReport />
      </Suspense>
    </div>
  );
}
