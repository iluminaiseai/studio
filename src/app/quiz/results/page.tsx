
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
import { Loader, Lock, Terminal, Share2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";


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

    // Remove emojis
    let text = (tempDiv.innerText || tempDiv.textContent || '').replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();

    // Final cleanup for extra spaces and ensuring single line breaks between list items
    text = text.replace(/(\n\s*){3,}/g, '\n\n'); 

    return text.trim();
}


function FreeReport({ summary, answers }: { summary: string | null, answers: string | null }) {
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


  if (!summary) {
     return (
     <Alert variant="destructive">
       <Terminal className="h-4 w-4" />
       <AlertTitle>Erro ao gerar diagnóstico</AlertTitle>
       <AlertDescription>Não foi possível gerar seu resultado. Por favor, tente novamente.</AlertDescription>
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
  const [loadingText, setLoadingText] = useState("Analisando suas respostas...");
  const texts = [
    "Analisando suas respostas...",
    "Consultando nossa especialista em relacionamentos...",
    "Interpretando os sinais da sua conexão...",
    "Montando seu diagnóstico gratuito...",
    "Quase pronto!"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setLoadingText(texts[currentIndex]);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <Loader className="h-12 w-12 animate-spin text-primary" />
      <p className="mt-4 font-headline text-xl md:text-2xl">
        {loadingText}
      </p>
      <p className="text-muted-foreground text-sm md:text-base">
        Nossa IA está preparando seu diagnóstico.
      </p>
    </div>
  );
}

function ResultsPageClient({ summary, answers, error }: { summary: string | null; answers: string | null; error: string | null }) {
    if (error) {
        return (
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Erro ao gerar diagnóstico</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        );
    }
    return <FreeReport summary={summary} answers={answers} />;
}

export default function ResultsPageWrapper({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const answers = typeof searchParams.answers === 'string' ? searchParams.answers : null;
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center p-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <ResultsPage answers={answers} />
      </Suspense>
    </div>
  );
}

async function ResultsPage({ answers }: { answers: string | null }) {
    let summary: string | null = null;
    let error: string | null = null;

    if (!answers) {
        error = "Nenhuma resposta encontrada.";
    } else {
        try {
            const insightsInput = { ...processAnswers(answers), style: "detailed" as const };
            const insights = await generateRelationshipInsights(insightsInput);
            summary = insights.detailedSummary;
        } catch (e) {
            console.error(e);
            error = "Houve um problema ao contatar nossa IA. Por favor, tente novamente mais tarde.";
        }
    }
    return <ResultsPageClient summary={summary} answers={answers} error={error} />;
}
