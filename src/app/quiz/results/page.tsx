
'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getPregeneratedResponse, ReportStyle } from '@/lib/pregenerated-responses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Share2, Lock, Terminal, MessageSquare, BrainCircuit, CalendarCheck, MousePointerClick, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function htmlToWhatsApp(html: string): string {
    if (typeof document === 'undefined') return '';
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

function ResultsComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();
  const answersParam = searchParams.get('answers');
  const style = (searchParams.get('style') as ReportStyle) || 'detailed';

  // For demonstration, we'll use a simple logic to pick a response.
  // A real implementation would have a more complex mapping.
  const answerKey = (answersParam?.split('|').filter(a => a.toLowerCase().includes('sim')).length || 0) > 12 ? 'positive' : 'mixed';
  
  const freeReport = getPregeneratedResponse(answerKey, style, 'free');
  const fullReport = getPregeneratedResponse(answerKey, style, 'full');

  if (!freeReport || !fullReport) {
    return (
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>Não foi possível encontrar uma resposta para esta combinação. Por favor, tente novamente.</AlertDescription>
      </Alert>
    );
  }

  const handleShare = (content: string) => {
    if (!content) return;
    const formattedText = htmlToWhatsApp(content);
    const whatsappText = `*Meu resultado do Decodificador do Amor:*\n\n${formattedText}\n\n*Faça o teste você também:* ${window.location.origin}`;
    try {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro ao compartilhar',
        description: 'Não foi possível abrir o WhatsApp.',
      });
    }
  };

  const fullReportURL = `/quiz/report?${searchParams.toString()}`;

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center p-4">
      <Card className="w-full shadow-2xl">
        <CardHeader className="text-center px-4 pt-6 md:p-6">
          <CardTitle className="font-headline text-3xl md:text-4xl">Seu Resultado</CardTitle>
          <CardDescription className="text-sm md:text-base">Análise baseada nas suas respostas.</CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
          <div 
              className="prose prose-sm md:prose-base max-w-none text-muted-foreground mb-6"
              dangerouslySetInnerHTML={{ __html: freeReport.detailedSummary }} 
          />

          <Alert className="bg-primary/5 border-primary/20">
            <Lock className="h-4 w-4 text-primary" />
            <AlertTitle className="font-headline text-base text-primary md:text-lg">Desbloqueie seu Relatório Completo</AlertTitle>
            <AlertDescription className="text-sm text-muted-foreground md:text-base">
              Receba uma análise psicológica profunda e um plano de ação de 7 dias.
            </AlertDescription>
            <Tabs defaultValue="summary" className="w-full mt-4">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-2">
                <MousePointerClick className="h-4 w-4" />
                <span>Clique para pré-visualizar o relatório completo</span>
              </div>
              <TabsList className="grid h-auto w-full grid-cols-1 sm:grid-cols-3">
                <TabsTrigger value="summary" className="py-2 text-xs sm:text-sm"><MessageSquare className="mr-1 h-4 w-4 sm:mr-2" />Resumo</TabsTrigger>
                <TabsTrigger value="interpretations" className="py-2 text-xs sm:text-sm"><BrainCircuit className="mr-1 h-4 w-4 sm:mr-2" />Interpretações</TabsTrigger>
                <TabsTrigger value="plan" className="py-2 text-xs sm:text-sm"><CalendarCheck className="mr-1 h-4 w-4 sm:mr-2" />Plano de Ação</TabsTrigger>
              </TabsList>
              <TabsContent value="summary" className="prose prose-sm md:prose-base mt-4 max-w-none rounded-lg bg-secondary/30 p-4 leading-relaxed blur-sm select-none">
                <div dangerouslySetInnerHTML={{ __html: fullReport.detailedSummary }} />
              </TabsContent>
              <TabsContent value="interpretations" className="prose prose-sm md:prose-base mt-4 max-w-none rounded-lg bg-secondary/30 p-4 leading-relaxed blur-sm select-none">
                <div dangerouslySetInnerHTML={{ __html: fullReport.psychologicalInterpretations }} />
              </TabsContent>
              <TabsContent value="plan" className="prose prose-sm md:prose-base mt-4 max-w-none rounded-lg bg-secondary/30 p-4 leading-relaxed blur-sm select-none">
                <div dangerouslySetInnerHTML={{ __html: fullReport.actionPlan }} />
              </TabsContent>
            </Tabs>
             <Button asChild className="w-full mt-4 font-bold">
                <Link href={fullReportURL}>
                    Ver Relatório Completo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </Alert>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 p-4 md:p-6">
          <Button onClick={() => handleShare(freeReport.detailedSummary)} className="w-full font-bold bg-[#7B2CBF] hover:bg-[#C77DFF]/80" size="lg">
            <Share2 className="mr-2 h-5 w-5" />
            💌 Compartilhar meu resultado gratuito
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ResultsComponent />
    </Suspense>
  );
}
