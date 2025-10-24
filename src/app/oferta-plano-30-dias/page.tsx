
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, CalendarClock } from "lucide-react";
import Link from "next/link";


export default function DownsellPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background via-accent to-white p-4">
        <main className="flex flex-col items-center justify-center w-full max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-in fade-in zoom-in-50 delay-300">
                <CalendarClock className="h-9 w-9 text-primary" />
            </div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-bottom-2 duration-500">Espere! E se você pudesse começar a mudança em 30 dias?</h1>
            <p className="mt-2 text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-2 delay-300 duration-500">
                Vi que você está saindo. Antes de ir, tenho uma oferta focada em resultados rápidos. Sem teoria, apenas ação.
            </p>

            <Card className="mt-8 w-full bg-card/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 delay-500 duration-500">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Oferta Rápida: O Plano de Ação de 30 Dias</CardTitle>
                <CardDescription>Receba apenas o plano prático e diário para aplicar o método e começar a ver a reaproximação acontecer.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-left">
                 <p className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Passo a passo diário:</strong> Uma tarefa simples e poderosa por dia para quebrar o gelo, recriar a conexão e virar o jogo sem parecer desesperada.
                  </span>
                </p>
                 <p className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Spoiler do Dia 3:</strong> Aprenda a frase de 7 palavras que quebra o padrão de silêncio e faz a pessoa querer responder.
                  </span>
                </p>
                <p className="flex items-start gap-3 text-muted-foreground/80">
                    <X className="h-5 w-5 text-destructive/50 flex-shrink-0 mt-0.5" />
                    <span>E-book completo "Decodificador do Amor".</span>
                </p>
              </CardContent>
              <CardFooter className="flex-col gap-4 p-6 bg-secondary/30 rounded-b-lg">
                <div className="text-center w-full">
                    <p className="text-muted-foreground text-sm">De <span className="line-through">R$ 17,90</span> por apenas:</p>
                    <p className="text-5xl md:text-6xl font-bold text-primary animate-pulse">R$ 7,90</p>
                </div>
                <Button asChild size="lg" className="w-full font-bold">
                    <Link href="#">Sim, quero o plano por R$ 7,90!</Link>
                </Button>
                <p className="text-xs text-muted-foreground pt-2">
                    <strong>Garantia incondicional:</strong> Se em 7 dias você não amar, é só pedir o dinheiro de volta. Simples assim.
                </p>
              </CardFooter>
            </Card>

            <Button asChild variant="link" className="mt-8 text-muted-foreground">
                <Link href="/ebook-landing">Não, obrigado. Quero voltar para a oferta principal.</Link>
            </Button>
        </main>
    </div>
  );
}

