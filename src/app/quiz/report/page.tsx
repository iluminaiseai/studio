
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BrainCircuit,
  Loader,
  MessageSquare,
  Terminal,
  CalendarCheck,
  MousePointerClick,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

type FullReport = {
    detailedSummary: string;
    psychologicalInterpretations: string;
    actionPlan: string;
}

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

function FullReport() {
    const searchParams = useSearchParams();
    const answers = searchParams.get('answers');
    const [insights, setInsights] = useState<FullReport | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        async function getInsights() {
            if (!answers) {
                setError("Nenhuma resposta encontrada para gerar o relatório.");
                setIsLoading(false);
                return;
            }
            try {
                setIsLoading(true);
                const insightsInput = processAnswers(answers);
                const result = await generateRelationshipInsights(insightsInput);
                setInsights(result);
            } catch (e) {
                console.error(e);
                setError("Houve um problema ao gerar seu relatório. Tente novamente mais tarde.");
            } finally {
                setIsLoading(false);
            }
        }
        getInsights();
    }, [answers]);

    const handleShare = async () => {
        if (!insights) return;

        const el = document.createElement('div');
        el.innerHTML = `### Meu resultado do Quiz do Relacionamento 💜\n\n**Resumo:**\n${insights.detailedSummary}\n\n**Interpretações:**\n${insights.psychologicalInterpretations}\n\n**Plano de Ação:**\n${insights.actionPlan}`;
        const cleanText = el.textContent || "";

        const shareData = {
            title: 'Meu resultado do Quiz do Relacionamento 💜',
            text: `Descobri insights sobre meu relacionamento! Faça o teste também:`,
            url: window.location.origin,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                 await navigator.clipboard.writeText(`${shareData.title}\n\n${cleanText}\n\nFaça o teste também: ${shareData.url}`);
                 toast({
                    title: "Resultado Copiado!",
                    description: "O resultado do seu relatório foi copiado. Agora você pode colar e compartilhar onde quiser.",
                });
            }
        } catch (err) {
            console.error('Erro ao compartilhar:', err);
            try {
                await navigator.clipboard.writeText(`${shareData.title}\n\n${cleanText}\n\nFaça o teste também: ${shareData.url}`);
                toast({
                    title: "Link Copiado!",
                    description: "O resultado do seu relatório foi copiado. Agora você pode colar e compartilhar onde quiser.",
                });
            } catch (copyError) {
                console.error('Erro ao copiar:', copyError);
                toast({
                    variant: "destructive",
                    title: "Erro",
                    description: "Não foi possível compartilhar ou copiar o resultado.",
                });
            }
        }
    };

    if (isLoading) {
        return <LoadingSkeleton />;
    }

  if (error || !insights) {
    return (
      <div className="flex flex-col items-center gap-4">
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Erro ao gerar relatório</AlertTitle>
          <AlertDescription>
            {error || "Não foi possível carregar os dados do relatório."}
          </AlertDescription>
        </Alert>
        <Button asChild>
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    );
  }

  return (
    <Card className="w-full shadow-2xl">
      <CardHeader className="text-center px-4 pt-6 md:p-6">
        <CardTitle className="font-headline text-3xl md:text-4xl">
          Seu Relatório Completo
        </CardTitle>
        <CardDescription className="text-sm md:text-base">
          Análise aprofundada, interpretações e um plano de ação para seu
          relacionamento.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <Tabs defaultValue="summary" className="w-full">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-2">
                <MousePointerClick className="h-4 w-4" />
                <span>Clique nas opções abaixo para ver toda a análise</span>
            </div>
          <TabsList className="grid h-auto w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="summary" className="py-2 text-xs sm:text-sm">
              <MessageSquare className="mr-1 h-4 w-4 sm:mr-2" />
              Resumo
            </TabsTrigger>
            <TabsTrigger
              value="interpretations"
              className="py-2 text-xs sm:text-sm"
            >
              <BrainCircuit className="mr-1 h-4 w-4 sm:mr-2" />
              Interpretações
            </TabsTrigger>
            <TabsTrigger value="plan" className="py-2 text-xs sm:text-sm">
              <CalendarCheck className="mr-1 h-4 w-4 sm:mr-2" />
              Plano de Ação
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="summary"
            className="prose prose-sm md:prose-base mt-4 max-w-none rounded-lg bg-secondary/30 p-4 leading-relaxed md:mt-6"
          >
            <div dangerouslySetInnerHTML={{ __html: insights.detailedSummary }} />
          </TabsContent>
          <TabsContent
            value="interpretations"
            className="prose prose-sm md:prose-base mt-4 max-w-none rounded-lg bg-secondary/30 p-4 leading-relaxed md:mt-6"
          >
            <div dangerouslySetInnerHTML={{ __html: insights.psychologicalInterpretations }} />
          </TabsContent>
          <TabsContent
            value="plan"
            className="prose prose-sm md:prose-base mt-4 max-w-none rounded-lg bg-secondary/30 p-4 leading-relaxed md:mt-6"
          >
            <div dangerouslySetInnerHTML={{ __html: insights.actionPlan }} />
          </TabsContent>
        </Tabs>
      </CardContent>
       <CardFooter className="flex flex-col gap-4 p-4 md:p-6">
        <Button onClick={handleShare} className="w-full font-bold hover:bg-primary/80" size="lg">
          <Share2 className="mr-2 h-5 w-5" />
          💌 Compartilhar meu resultado
        </Button>
      </CardFooter>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <Loader className="h-12 w-12 animate-spin text-primary" />
      <p className="mt-4 font-headline text-xl md:text-2xl">
        Gerando seu relatório completo...
      </p>
      <p className="text-sm text-muted-foreground md:text-base">
        Este é um momento de clareza. Aguarde um instante.
      </p>
    </div>
  );
}

export default function ReportPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center p-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <FullReport />
      </Suspense>
    </div>
  );
}
