
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

// Function to convert HTML to WhatsApp formatted text
function htmlToWhatsApp(html: string): string {
    if (typeof document === 'undefined') {
        return '';
    }
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Replace <strong> with asterisks
    tempDiv.querySelectorAll('strong, b').forEach(tag => {
        tag.textContent = `*${tag.textContent?.trim()}*`;
    });

    // Handle titles
    tempDiv.querySelectorAll('h3').forEach(tag => {
        tag.textContent = `\n\n*${tag.textContent?.trim()}*\n`;
    });

    // Handle paragraphs
    tempDiv.querySelectorAll('p').forEach(tag => {
        tag.textContent = `${tag.textContent?.trim()}\n\n`;
    });

    // Handle list items
    tempDiv.querySelectorAll('li').forEach(tag => {
        tag.textContent = `- ${tag.textContent?.trim()}\n`;
    });

    // Handle unordered lists
    tempDiv.querySelectorAll('ul').forEach(tag => {
        tag.textContent = `\n${tag.textContent?.trim()}\n`;
    });

    let text = tempDiv.innerText || tempDiv.textContent || '';
    
    // Remove emojis
    text = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

    // Final cleanup for extra spaces and ensuring single line breaks between list items
    text = text.replace(/(\n\s*){3,}/g, '\n\n'); 

    return text.trim();
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

    const handleShare = () => {
        if (!insights) return;
        
        const formattedText = htmlToWhatsApp(insights.psychologicalInterpretations);
        
        const whatsappText = `*Meu resultado do Decodificador do Amor:*\n\n${formattedText}\n\n*Faça o teste você também:* ${window.location.origin}`;
        
        try {
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
            window.open(whatsappUrl, '_blank');
        } catch (err) {
            console.error('Erro ao compartilhar:', err);
            toast({
                variant: "destructive",
                title: "Erro ao compartilhar",
                description: "Não foi possível abrir o WhatsApp.",
            });
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
        <Button onClick={handleShare} className="w-full font-bold bg-[#7B2CBF] hover:bg-[#C77DFF]/80" size="lg">
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
