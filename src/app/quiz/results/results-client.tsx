
"use client";

import { useToast } from "@/hooks/use-toast";
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
import { Lock, Terminal, Share2, Loader } from "lucide-react";
import { useState, useEffect } from "react";
import {
  generateRelationshipInsights,
  RelationshipInsightsInput,
  RelationshipInsightsOutput,
} from "@/ai/flows/generate-relationship-insights";
import { quizData } from "@/lib/quiz-data";
import { Progress } from "@/components/ui/progress";

export type ReportStyle = "detailed" | "gossipy_friend";

function htmlToWhatsApp(html: string): string {
    if (typeof document === 'undefined') {
        return '';
    }
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    tempDiv.querySelectorAll('strong, b').forEach(tag => { tag.textContent = `*${tag.textContent?.trim()}*`; });
    tempDiv.querySelectorAll('h3').forEach(tag => { tag.textContent = `\n\n*${tag.textContent?.trim()}*\n`; });
    tempDiv.querySelectorAll('p').forEach(tag => { tag.textContent = `${tag.textContent?.trim()}\n\n`; });
    tempDiv.querySelectorAll('li').forEach(tag => { tag.textContent = `- ${tag.textContent?.trim()}\n`; });
    tempDiv.querySelectorAll('ul').forEach(tag => { tag.textContent = `\n${tag.textContent?.trim()}\n`; });
    let text = (tempDiv.innerText || tempDiv.textContent || '').replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
    text = text.replace(/(\n\s*){3,}/g, '\n\n'); 
    return text.trim();
}

function processAnswers(encodedAnswers: string | null): Omit<RelationshipInsightsInput, 'style'> {
  const insightsInput: Omit<RelationshipInsightsInput, 'style'> = {
    communication: [], timeTogether: [], behaviorChanges: [], reactionsToConflicts: [], signsOfInterest: [],
  };
  if (!encodedAnswers) return insightsInput;
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

const loadingMessages = [
    "Analisando seus padrões de comunicação...",
    "Interpretando os sinais de interesse...",
    "Avaliando a dinâmica do tempo juntos...",
    "Cruzando dados sobre as reações a conflitos...",
    "Montando seu diagnóstico personalizado...",
];

function LoadingComponent({ messages }: { messages: string[] }) {
    const [progress, setProgress] = useState(0);
    const [loadingMessage, setLoadingMessage] = useState(messages[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 99) {
                    clearInterval(interval);
                    return 99;
                }
                const remaining = 100 - prev;
                const increment = Math.max(1, Math.floor(remaining / 20)); 
                const next = Math.min(prev + increment, 99);
                
                const messageIndex = Math.min(Math.floor(next / (100 / messages.length)), messages.length - 1);
                setLoadingMessage(messages[messageIndex]);
                return next;
            });
        }, 250);
        return () => clearInterval(interval);
    }, [messages]);

    return (
        <div className="w-full max-w-md text-center">
             <Loader className="h-12 w-12 animate-spin text-primary mx-auto" />
            <p className="mt-4 font-headline text-xl md:text-2xl mb-2">
                Analisando suas respostas...
            </p>
            <Progress value={progress} className="w-full mb-2" />
            <p className="text-sm font-semibold text-primary">{Math.round(progress)}%</p>
            <p className="text-sm text-muted-foreground h-4 mt-2">{loadingMessage}</p>
        </div>
    );
}

function FreeReport({ summary, answers, style }: { summary: string, answers: string | null, style: ReportStyle | null}) {
  const { toast } = useToast();
  
  const handleShare = () => {
    if (!summary) return;
    const formattedText = htmlToWhatsApp(summary);
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

  const fullReportUrl = `/quiz/report?answers=${answers}&style=${style}`;

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
        <div 
            className="prose prose-sm md:prose-base max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: summary }} 
        />
      </CardContent>
      <CardFooter className="flex-col gap-4 p-4 md:p-6">
        <Button onClick={handleShare} className="w-full font-bold bg-[#7B2CBF] hover:bg-[#C77DFF]/80">
          <Share2 className="mr-2 h-4 w-4" />
          💌 Compartilhar meu resultado
        </Button>
        <Alert className="bg-primary/5 border-primary/20">
          <Lock className="h-4 w-4 text-primary" />
          <AlertTitle className="font-headline text-base text-primary md:text-lg">
            Desbloqueie seu Relatório Completo
          </AlertTitle>
          <AlertDescription className="text-sm text-muted-foreground md:text-base">
            Receba uma análise psicológica profunda, plano de ação de 7 dias e
            scripts de mensagem para transformar sua comunicação.
            <Button asChild className="mt-4 w-full sm:w-auto font-bold">
              <Link href={fullReportUrl}>Ver Relatório Completo</Link>
            </Button>
          </AlertDescription>
        </Alert>
      </CardFooter>
    </Card>
  );
}

export function ResultsPageClient({ answers, style }: { answers: string | null; style: ReportStyle | null;}) {
    const [report, setReport] = useState<Partial<RelationshipInsightsOutput> | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (answers && style) {
            const generate = async () => {
                try {
                    const insightsInput = { ...processAnswers(answers), style };
                    const result = await generateRelationshipInsights(insightsInput);
                    setReport(result);
                } catch (e) {
                    console.error(e);
                    setError("Houve um problema ao contatar nossa IA. Por favor, tente novamente mais tarde.");
                } finally {
                    setIsLoading(false);
                }
            };
            generate();
        } else {
             setError("Respostas ou estilo não encontrados.");
             setIsLoading(false);
        }
    }, [answers, style]);
    
    if (isLoading) {
        return <LoadingComponent messages={loadingMessages} />;
    }

    if (error) {
        return (
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Erro ao gerar diagnóstico</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
                 <Button onClick={() => window.location.reload()} className="mt-4">Tentar novamente</Button>
            </Alert>
        );
    }
    
    if (report?.detailedSummary) {
        return <FreeReport summary={report.detailedSummary} answers={answers} style={style} />;
    }

    return null;
}
