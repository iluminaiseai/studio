
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TestTube, Check } from "lucide-react";
import { LogoCapricho } from "@/components/logo-capricho";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero");

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden">
      <div className="flex-1 container flex max-w-4xl flex-col items-center justify-center gap-6 text-center md:gap-8 animate-fade-in">
        <LogoCapricho className="h-20 w-auto text-primary md:h-24 animate-in fade-in zoom-in-50 delay-300" />
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl animate-in fade-in slide-in-from-bottom-4 delay-500 duration-500 -mt-2">
          Decodificador do Amor
        </h1>
        <div className="flex flex-col gap-2">
          <p className="max-w-2xl text-lg text-primary sm:text-xl md:text-2xl animate-in fade-in slide-in-from-bottom-4 delay-600 duration-500 font-semibold">
            Quem você ama anda distante ou é só coisa da sua cabeça?
          </p>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl animate-in fade-in slide-in-from-bottom-4 delay-700 duration-500">
            Não tente adivinhar: descubra sinais ocultos que revelam o que a outra pessoa realmente sente. Responda ao quiz e veja os resultados.
          </p>
        </div>

        <div className="text-center text-muted-foreground animate-in fade-in slide-in-from-bottom-4 delay-800 duration-500">
            <ul className="space-y-1 text-sm">
                <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Leva menos de 2 minutos</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Teste rápido e confidencial</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Análise baseada em suas respostas</span>
                </li>
            </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 delay-900 duration-500 mt-4">
          <Button asChild size="lg" className="font-bold">
            <Link href="/quiz" prefetch={true}>RESPONDER QUIZ AGORA</Link>
          </Button>
        </div>
         <div className="mt-4 flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-bottom-4 delay-1000 duration-500">
            <Button asChild size="sm" variant="outline" className="font-bold">
                <Link href="/quiz?test=positive" prefetch={true}>
                <TestTube className="mr-2 h-4 w-4" />
                Ver Relatório Positivo
                </Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="font-bold">
                <Link href="/quiz?test=mixed" prefetch={true}>
                <TestTube className="mr-2 h-4 w-4" />
                Ver Relatório Misto
                </Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="font-bold">
                <Link href="/quiz?test=negative" prefetch={true}>
                <TestTube className="mr-2 h-4 w-4" />
                Ver Relatório Negativo
                </Link>
            </Button>
        </div>
        <Card className="mt-4 w-full overflow-hidden shadow-2xl md:mt-8 animate-in fade-in slide-in-from-bottom-4 delay-1000 duration-500">
          <CardContent className="p-0">
            {heroImage && (
               <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={600}
                className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </CardContent>
        </Card>
      </div>
       <footer className="w-full py-4">
        <div className="container mx-auto text-center text-xs text-muted-foreground">
          <p>Este site não faz parte do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.</p>
        </div>
      </footer>
    </main>
  );
}
