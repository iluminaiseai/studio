
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
import { BrainCircuit, MessageSquare, CalendarCheck, Lock, ArrowRight, Gem, Check } from "lucide-react";
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
        if (index < 2) { // Items 1 and 2 are fully visible
            visibleItems.push(item.outerHTML);
        } else if (index === 2) { // For item 3, create the teaser
            const tempItemDiv = document.createElement('div');
            tempItemDiv.innerHTML = item.innerHTML;
            const title = tempItemDiv.querySelector('strong');
            // Remove the title to get only the description text
            if (title) {
                title.remove();
            }
            const descriptionText = tempItemDiv.textContent?.trim() || '';
            const firstWords = descriptionText.split(' ').slice(0, 10).join(' ');

            if (title) {
                enticingTeaser = `<li><strong>${title.innerText}</strong> ${firstWords}...</li>`;
            } else {
                 enticingTeaser = `<li>${firstWords}...</li>`;
            }
            blurredItems.push(item.outerHTML);
        } else { // All subsequent items are blurred
            blurredItems.push(item.outerHTML);
        }
    });
    
    // Also add the items from index 2 onwards to the blurred list
    listItems.slice(2).forEach(item => {
        if (!blurredItems.includes(item.outerHTML)) {
            blurredItems.push(item.outerHTML);
        }
    });


    let blurredFooter = '';
    const lastParagraph = tempDiv.querySelector('p:last-of-type');
    if (lastParagraph && blurredItems.length > 0) {
        blurredFooter = lastParagraph.outerHTML;
    }

    let visibleHeader = '';
    const firstUl = tempDiv.querySelector('ul');
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
    
    // Ensure blurredItems does not contain duplicates and is correctly ordered
    const uniqueBlurredItems = listItems.slice(2).map(item => item.outerHTML);

    return {
        visible: finalVisibleHtml,
        blurred: `<ul>${uniqueBlurredItems.join('')}</ul>${blurredFooter}`,
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
        <Card className="w-full shadow-2xl animate-in fade-in zoom-in-95 duration-500">
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
            <div className="rounded-lg bg-secondary/30 p-4 animate-in fade-in slide-in-from-bottom-4 delay-300 duration-500">
                <h2 className="flex items-center gap-2 font-headline text-2xl mb-2 text-primary">
                    <MessageSquare className="h-6 w-6"/>
                    Resumo Detalhado
                </h2>
                <div className="prose prose-sm md:prose-base max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: insights.detailedSummary }} />
            </div>

            {/* Psychological Interpretations */}
            <div className="rounded-lg bg-secondary/30 p-4 animate-in fade-in slide-in-from-bottom-4 delay-500 duration-500">
                 <h2 className="flex items-center gap-2 font-headline text-2xl mb-2 text-primary">
                    <BrainCircuit className="h-6 w-6"/>
                    Interpretações Psicológicas
                </h2>
                <div className="prose prose-sm md:prose-base max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: insights.psychologicalInterpretations }} />
            </div>

            {/* Action Plan */}
            <div className="rounded-lg bg-secondary/30 p-4 animate-in fade-in slide-in-from-bottom-4 delay-700 duration-500">
                 <h2 className="flex items-center gap-2 font-headline text-2xl mb-2 text-primary">
                    <CalendarCheck className="h-6 w-6"/>
                    Plano de Ação
                </h2>
                <div className="prose prose-sm md:prose-base max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: visiblePlan }} />

                {isClient && blurredPlan && (
                     <div className="relative mt-4">
                        <div className="prose prose-sm md:prose-base max-w-none leading-relaxed blur-md select-none" dangerouslySetInnerHTML={{ __html: blurredPlan }} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/80 backdrop-blur-sm p-4 text-center rounded-lg">
                            <Lock className="h-8 w-8 text-primary"/>
                            <h3 className="font-headline text-xl font-bold text-foreground">Receba o Plano de Ação Completo</h3>
                             <ul className="space-y-1 text-sm text-left text-muted-foreground my-2">
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Aprender como ele pensa e como induzir as decisões dele indiretamente.</span></li>
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Decodificar microexpressões e ler os 7 tipos de silêncio.</span></li>
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Usar scripts de Comunicação Não-Violenta.</span></li>
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Ativar os gatilhos da atração (dopamina e oxitocina).</span></li>
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Construir uma autoestima inabalável.</span></li>
                            </ul>
                            <Button asChild className="font-bold mt-2">
                                <Link href="/ebook-landing" prefetch={true}>
                                    <Gem className="mr-2 h-4 w-4" />
                                    Quero Liberar os Segredos
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

    

    

