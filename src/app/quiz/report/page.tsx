import { Suspense } from "react";
import { generateRelationshipInsights, RelationshipInsightsInput } from "@/ai/flows/generate-relationship-insights";
import { quizData } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, Loader, MessageSquare, Terminal, CalendarCheck } from "lucide-react";
import Link from "next/link";

type ReportPageProps = {
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

async function FullReport({ answers }: { answers: string | undefined }) {
  const insightsInput = processAnswers(answers);
  
  try {
    const insights = await generateRelationshipInsights(insightsInput);

    return (
      <Card className="w-full shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-4xl">Seu Relatório Completo</CardTitle>
          <CardDescription>
            Análise aprofundada, interpretações e um plano de ação para seu relacionamento.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto">
              <TabsTrigger value="summary" className="py-2"><MessageSquare className="mr-2 h-4 w-4"/>Resumo Detalhado</TabsTrigger>
              <TabsTrigger value="interpretations" className="py-2"><BrainCircuit className="mr-2 h-4 w-4"/>Interpretações</TabsTrigger>
              <TabsTrigger value="plan" className="py-2"><CalendarCheck className="mr-2 h-4 w-4"/>Plano de Ação</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-6 text-base leading-relaxed whitespace-pre-wrap p-4 bg-secondary/30 rounded-lg">
                <p>{insights.detailedSummary}</p>
            </TabsContent>
            <TabsContent value="interpretations" className="mt-6 text-base leading-relaxed whitespace-pre-wrap p-4 bg-secondary/30 rounded-lg">
                <p>{insights.psychologicalInterpretations}</p>
            </TabsContent>
            <TabsContent value="plan" className="mt-6 text-base leading-relaxed whitespace-pre-wrap p-4 bg-secondary/30 rounded-lg">
                <p>{insights.actionPlan}</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    );
  } catch (error) {
     return (
      <div className="flex flex-col items-center gap-4">
        <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Erro ao gerar relatório</AlertTitle>
            <AlertDescription>
            Houve um problema ao contatar nossa IA. Por favor, tente novamente mais tarde.
            </AlertDescription>
        </Alert>
        <Button asChild>
            <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    );
  }
}

function LoadingSkeleton() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 font-headline text-2xl">Gerando seu relatório completo...</p>
            <p className="text-muted-foreground">Este é um momento de clareza. Aguarde um instante.</p>
        </div>
    )
}

export default function ReportPage({ searchParams }: ReportPageProps) {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center p-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <FullReport answers={searchParams.answers} />
      </Suspense>
    </div>
  );
}
