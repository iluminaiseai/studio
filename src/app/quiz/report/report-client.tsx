
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrainCircuit, MessageSquare, CalendarCheck, Lock, ArrowRight } from "lucide-react";
import Link from 'next/link';

type FullReportData = {
    detailedSummary: string;
    psychologicalInterpretations: string;
    actionPlan: string;
}

// Function to split the action plan into visible and blurred parts
function getActionPlanParts(html: string): { visible: string, blurred: string } {
  if (typeof document === 'undefined') {
    return { visible: html, blurred: '' };
  }
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  const listItems = tempDiv.querySelectorAll('li');
  const visibleItems: string[] = [];
  const blurredItems: string[] = [];

  listItems.forEach((item, index) => {
    if (index < 3) {
      visibleItems.push(item.outerHTML);
    } else {
      blurredItems.push(item.outerHTML);
    }
  });

  const headers = tempDiv.querySelectorAll('h3, p');
  let visibleHeader = '';
  if (headers.length > 0) {
    visibleHeader += headers[0].outerHTML;
  }
   if (headers.length > 1) {
    visibleHeader += headers[1].outerHTML;
  }

  // Ensure blurred part also includes the concluding paragraph if it exists
  let blurredFooter = '';
  const lastParagraph = tempDiv.querySelector('p:last-of-type');
  if (lastParagraph && blurredItems.length > 0) {
      blurredFooter = lastParagraph.outerHTML;
  }


  return {
    visible: `<ul>${visibleItems.join('')}</ul>`,
    blurred: `<ul>${blurredItems.join('')}</ul>${blurredFooter}`,
  };
}


export function ReportDisplay({ insights }: { insights: FullReportData }) {
    const { visible: visiblePlan, blurred: blurredPlan } = getActionPlanParts(insights.actionPlan);
  
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
          <CardContent className="space-y-6 p-4 md:p-6">
            
            {/* Detailed Summary */}
            <div className="rounded-lg bg-secondary/30 p-4">
                <h2 className="flex items-center gap-2 font-headline text-2xl mb-2 text-primary">
                    <MessageSquare className="h-6 w-6"/>
                    Resumo Detalhado
                </h2>
                <div className="prose prose-sm md:prose-base max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: insights.detailedSummary }} />
            </div>

            {/* Psychological Interpretations */}
            <div className="rounded-lg bg-secondary/30 p-4">
                 <h2 className="flex items-center gap-2 font-headline text-2xl mb-2 text-primary">
                    <BrainCircuit className="h-6 w-6"/>
                    Interpretações Psicológicas
                </h2>
                <div className="prose prose-sm md:prose-base max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: insights.psychologicalInterpretations }} />
            </div>

            {/* Action Plan */}
            <div className="rounded-lg bg-secondary/30 p-4">
                 <h2 className="flex items-center gap-2 font-headline text-2xl mb-2 text-primary">
                    <CalendarCheck className="h-6 w-6"/>
                    Plano de Ação
                </h2>
                <div className="prose prose-sm md:prose-base max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: visiblePlan }} />

                {blurredPlan && (
                     <div className="relative mt-4">
                        <div className="prose prose-sm md:prose-base max-w-none leading-relaxed blur-md select-none" dangerouslySetInnerHTML={{ __html: blurredPlan }} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/60 p-4 text-center rounded-lg">
                            <Lock className="h-8 w-8 text-primary"/>
                            <h3 className="font-headline text-xl font-bold text-foreground">Receba o Plano de Ação Completo</h3>
                            <p className="text-sm text-muted-foreground">Desbloqueie todas as dicas e transforme seu relacionamento com nosso guia exclusivo.</p>
                            <Button asChild className="font-bold">
                                <Link href="/ebook-landing">
                                    Quero o plano completo <ArrowRight className="ml-2 h-5 w-5"/>
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            
          </CardContent>
           <CardFooter className="flex flex-col gap-4 p-4 md:p-6">
            <Button onClick={() => window.location.href = '/quiz'} className="w-full font-bold" size="lg" variant="outline">
              Refazer o Quiz
            </Button>
          </CardFooter>
        </Card>
      );
}
