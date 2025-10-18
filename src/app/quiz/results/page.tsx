
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
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    const el = document.createElement('div');
    el.innerHTML = html;

    // Replace <strong> and <b> with *
    el.querySelectorAll('strong, b').forEach(tag => {
        tag.textContent = `*${tag.textContent}*`;
    });
    
    // Replace <h3> with bold text and line breaks
    el.querySelectorAll('h3').forEach(tag => {
        tag.textContent = `\n\n*${tag.textContent}*\n`;
    });

    // Replace <p> with line breaks
    el.querySelectorAll('p').forEach(tag => {
        tag.textContent = `${tag.textContent}\n`;
    });
    
    // Replace <li> with a dash and line break
    el.querySelectorAll('li').forEach(tag => {
        tag.textContent = `- ${tag.textContent}\n`;
    });
    
    // Replace <ul> with just line breaks
    el.querySelectorAll('ul').forEach(tag => {
       tag.textContent = `\n${tag.textContent}\n`;
    });

    // Replace any remaining special characters
    let text = el.textContent || el.innerText || '';
    text = text.replace(//g, ''); // Remove replacement characters

    return text.trim();
}


function FreeReport() {
  const searchParams = useSearchParams();
  const answers = searchParams.get("answers");
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

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

  const handleShare = () => {
    if (!summary) return;

    const formattedText = htmlToWhatsApp(summary);
    
    const whatsappText = `*Meu resultado do Decodificador do Amor:* 💜\n\n${formattedText}\n\n*Faça o teste você também:* ${window.location.origin}`;

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
