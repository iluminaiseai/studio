
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Flame, Gift, Sparkles, Star } from "lucide-react";
import Link from "next/link";


export default function DownsellPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background via-accent to-white p-4">
        <main className="flex w-full max-w-2xl flex-col items-center justify-center text-center">
            <div className="mx-auto mb-4 animate-in fade-in zoom-in-50 delay-200">
                <Sparkles className="h-16 w-16 text-primary" />
            </div>

            <h1 className="font-headline text-3xl font-bold text-primary md:text-4xl animate-in fade-in slide-in-from-bottom-2 duration-500">Tem certeza que quer fechar sem descobrir o que pode mudar essa distância entre você e a pessoa que você ama?</h1>
            <p className="mt-2 text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-2 delay-200 duration-500">
                E se você pudesse começar a mudança ainda hoje, em apenas 30 dias?
            </p>
             <p className="mt-4 max-w-xl text-base text-muted-foreground animate-in fade-in slide-in-from-bottom-2 delay-300 duration-500">
                Antes de sair, quero te dar uma chance de ouro — sem teoria, sem enrolação, só ações diárias que já transformaram milhares de relações.
            </p>

            <Card className="mt-8 w-full bg-card/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 delay-500 duration-500">
              <CardHeader className="bg-primary/5 p-4 md:p-6">
                <CardTitle className="font-headline text-2xl">🌹 Plano de Ação de 30 Dias — Edição Relâmpago</CardTitle>
                <CardDescription>Descubra o passo a passo prático que vai fazer a pessoa te notar de novo, naturalmente, sem correr atrás.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-4 md:p-6 text-left">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="flex items-center gap-2 rounded-md bg-secondary p-3">
                        <Star className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm font-medium">Uma tarefa simples por dia.</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md bg-secondary p-3">
                        <Flame className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm font-medium">Frases e gestos certeiros.</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md bg-secondary p-3">
                        <Sparkles className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm font-medium">Resultados na 1ª semana.</span>
                    </div>
                </div>
                
                <div className="rounded-lg border-2 border-dashed border-primary/50 bg-primary/5 p-4">
                    <p className="font-bold text-primary">🤫 Spoiler do Dia 3:</p>
                    <p className="italic text-muted-foreground">A frase de 7 palavras que quebra o silêncio e faz a pessoa querer responder — sem perceber que você virou o jogo.</p>
                </div>
                
                <div className="text-center">
                    <p className="font-bold text-primary">✨ Oferta relâmpago exclusiva para quem está aqui agora!</p>
                    <p className="text-muted-foreground">De <span className="line-through">R$17,90</span> por apenas:</p>
                    <p className="font-headline text-6xl font-bold text-primary animate-pulse">R$7,90</p>
                </div>
                
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span><span className="font-bold">Plano prático</span> de 30 dias</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span><span className="font-bold">E-book completo</span> “Decodificador do Amor”</span>
                    </li>
                     <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span><span className="font-bold">Acesso imediato</span> + garantia total</span>
                    </li>
                </ul>

              </CardContent>
              <CardFooter className="flex-col gap-2 p-4 md:p-6 bg-secondary/30 rounded-b-lg">
                <Button asChild size="lg" className="w-full font-bold text-lg">
                    <Link href="#">👉 Sim, quero o plano por R$7,90!</Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                    (Oferta única — se sair desta página, ela desaparece.)
                </p>
              </CardFooter>
            </Card>

            <div className="mt-8 w-full rounded-lg border-2 border-primary/80 bg-primary/10 p-4 animate-in fade-in slide-in-from-bottom-4 delay-700 duration-500">
                <h3 className="font-headline text-xl font-bold text-primary">💌 Garantia 100% Segura</h3>
                <p className="mt-1 text-sm text-muted-foreground">Teste por 7 dias. Se não sentir diferença, devolvemos cada centavo. Sem perguntas, sem burocracia.</p>
            </div>

            <Button asChild variant="link" className="mt-6 text-muted-foreground">
                <Link href="/ebook-landing">Não, obrigado. Quero voltar para a oferta principal.</Link>
            </Button>
        </main>
    </div>
  );
}
