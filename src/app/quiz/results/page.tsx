
import { Suspense } from "react";
import {
  generateRelationshipInsights,
  RelationshipInsightsInput,
} from "@/ai/flows/generate-relationship-insights";
import { quizData } from "@/lib/quiz-data";
import { ResultsPageClient } from "./results-client";
import { Loader } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export type ReportStyle = "detailed" | "gossipy_friend";

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


async function ResultsData({ answers, style }: { answers: string | null, style: ReportStyle | null }) {
    let summary: string | null = null;
    let error: string | null = null;

    if (!answers) {
        error = "Nenhuma resposta encontrada.";
    } else if (!style) {
        error = "Nenhum estilo de relatório foi selecionado.";
    }
    else {
        try {
            const insightsInput = { ...processAnswers(answers), style: style };
            const insights = await generateRelationshipInsights(insightsInput);
            summary = insights.detailedSummary;
        } catch (e) {
            console.error(e);
            error = "Houve um problema ao contatar nossa IA. Por favor, tente novamente mais tarde.";
        }
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
    
    return <ResultsPageClient summary={summary} answers={answers} style={style} error={error} />;
}

export default function ResultsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const answers = typeof searchParams.answers === 'string' ? searchParams.answers : null;
  const style = typeof searchParams.style === 'string' ? searchParams.style as ReportStyle : null;
  
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center p-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <ResultsData answers={answers} style={style} />
      </Suspense>
    </div>
  );
}
