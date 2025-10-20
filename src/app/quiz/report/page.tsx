
"use client";

import { Suspense, useState, useEffect } from "react";
import {
  generateRelationshipInsights,
  RelationshipInsightsInput,
} from "@/ai/flows/generate-relationship-insights";
import { quizData } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Loader,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReportDisplay } from "./report-client";
import { Progress } from "@/components/ui/progress";

export type ReportStyle = "detailed" | "gossipy_friend";

type FullReportData = {
    detailedSummary: string;
    psychologicalInterpretations: string;
    actionPlan: string;
}

function processAnswers(
  encodedAnswers: string | null
): Omit<RelationshipInsightsInput, 'style'> {
  const insightsInput: Omit<RelationshipInsightsInput, 'style'> = {
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
      const section = question.section as keyof typeof insightsInput;
      if (insightsInput[section]) {
        insightsInput[section].push(answer);
      }
    }
  });

  return insightsInput;
}

function ErrorMessage({ message, retryable = true }: { message: string, retryable?: boolean }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Erro ao gerar relatório</AlertTitle>
                <AlertDescription>
                    {message}
                </AlertDescription>
            </Alert>
            {retryable && <Button onClick={() => window.location.reload()}>Tentar novamente</Button>}
            <Button asChild variant="secondary">
                <Link href="/">Voltar ao início</Link>
            </Button>
        </div>
    );
}

const loadingMessages = [
    "Analisando seus padrões de comunicação...",
    "Interpretando os sinais de interesse...",
    "Avaliando a dinâmica do tempo juntos...",
    "Cruzando dados sobre as reações a conflitos...",
    "Montando seu relatório completo e plano de ação...",
];

function FullReport() {
    const searchParams = useSearchParams();
    const answers = searchParams.get('answers');
    const style = searchParams.get('style') as ReportStyle | null;
    
    const [insights, setInsights] = useState<FullReportData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);

    useEffect(() => {
        if (!answers || !style) {
            setError("Parâmetros inválidos para gerar o relatório.");
            return;
        }

        const generate = async () => {
            try {
                const insightsInput = { ...processAnswers(answers), style };
                const result = await generateRelationshipInsights(insightsInput);
                setInsights(result);
            } catch (e) {
                console.error(e);
                setError("Houve um problema ao gerar seu relatório. Tente novamente mais tarde.");
            }
        };

        generate();
    }, [answers, style]);

    useEffect(() => {
        if (!insights && !error) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 99) {
                        clearInterval(interval);
                        return 99;
                    }
                    const remaining = 100 - prev;
                    const increment = Math.max(1, Math.floor(remaining / 20));
                    const next = Math.min(prev + increment, 99);
                    
                    const messageIndex = Math.min(Math.floor(next / (100 / loadingMessages.length)), loadingMessages.length - 1);
                    setLoadingMessage(loadingMessages[messageIndex]);
                    return next;
                });
            }, 250);
            return () => clearInterval(interval);
        } else if (insights || error) {
            setProgress(100);
             setLoadingMessage(error ? "Ocorreu um erro" : "Seu relatório está pronto!");
        }
    }, [insights, error]);
    
    if (error) {
        return <ErrorMessage message={error} />;
    }
    
    if (!insights) {
        return (
            <div className="w-full max-w-lg text-center">
                 <Loader className="h-12 w-12 animate-spin text-primary mx-auto" />
                <p className="mt-4 font-headline text-xl md:text-2xl mb-2">
                   Gerando seu relatório completo...
                </p>
                 <Progress value={progress} className="w-full mb-2" />
                 <p className="text-sm font-semibold text-primary">{Math.round(progress)}%</p>
                <p className="text-sm text-muted-foreground h-4 mt-2">{loadingMessage}</p>
            </div>
        )
    }

    return <ReportDisplay insights={insights} />;
}

function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <Loader className="h-12 w-12 animate-spin text-primary" />
      <p className="mt-4 font-headline text-xl md:text-2xl">
        Carregando...
      </p>
    </div>
  );
}

function ReportPageWrapper() {
    return(
        <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center p-4">
            <FullReport />
        </div>
    )
}

export default function ReportPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ReportPageWrapper />
    </Suspense>
  );
}
