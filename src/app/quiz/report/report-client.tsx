
"use client";

import { useState, useEffect } from "react";
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

    const listItems = Array.from(tempDiv.querySelectorAll('li'));
    const visibleItems: string[] = [];
    let enticingTeaser = '';
    const blurredItems: string[] = [];

    listItems.forEach((item, index) => {
        if (index < 3) { // Itens 1, 2, 3 são totalmente visíveis
            visibleItems.push(item.outerHTML);
        } else if (index === 3) { // Para o item 4, criamos a isca
            const tempItemDiv = document.createElement('div');
            tempItemDiv.innerHTML = item.innerHTML;
            const firstLine = tempItemDiv.querySelector('strong');
            if (firstLine) {
                 enticingTeaser = `<li><strong>${firstLine.innerText}</strong>...</li>`;
            }
            blurredItems.push(item.outerHTML);
        } else { // Itens 5, 6, 7 ficam totalmente embaçados
            blurredItems.push(item.outerHTML);
        }
    });

    let blurredFooter = '';
    const lastParagraph = tempDiv.querySelector('p:last-of-type');
    if (lastParagraph && blurredItems.length > 0) {
        blurredFooter = lastParagraph.outerHTML;
    }

    const firstUl = tempDiv.querySelector('ul');
    let visibleHeader = '';
    if (firstUl) {
        let currentNode = firstUl.previousSibling;
        while (currentNode) {
            if (currentNode.nodeType === Node.ELEMENT_NODE) {
                visibleHeader = (currentNode as Element).outerHTML + visibleHeader;
            }
            currentNode = currentNode.previousSibling;
        }
    }

    const finalVisibleHtml = `${visibleHeader}<ul>${visibleItems.join('')}${enticingTeaser}</ul>`;

    return {
        visible: finalVisibleHtml,
        blurred: `<ul>${blurredItems.join('')}</ul>${blurredFooter}`,
    };
}


export function ReportDisplay({ insights }: { insights: FullReportData }) {
    const [actionPlanState, setActionPlanState] = useState({
        visible: insights.actionPlan,
        blurred: ''
    });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setActionPlanState(getActionPlanParts(insights.actionPlan));
    }, [insights.actionPlan]);

    const { visible: visiblePlan, blurred: blurredPlan } = actionPlanState;
  
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

                {isClient && blurredPlan && (
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
