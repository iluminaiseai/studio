
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
    <main className="flex min-h-screen w-full items-center justify-center p-4 overflow-hidden">
      <div className="container flex max-w-4xl flex-col items-center justify-center gap-6 text-center md:gap-8 animate-fade-in">
        <LogoCapricho className="h-20 w-auto text-primary md:h-24 animate-in fade-in zoom-in-50 delay-300" />
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl animate-in fade-in slide-in-from-bottom-4 delay-500 duration-500 -mt-2">
          Decodificador do Amor
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl animate-in fade-in slide-in-from-bottom-4 delay-700 duration-500">
          Ele anda distante ou é só coisa da sua cabeça? Responda o quiz e descubra a verdade por trás dos sinais que ele te dá.
        </p>

        <div className="mt-4 text-center text-muted-foreground animate-in fade-in slide-in-from-bottom-4 delay-800 duration-500">
            <ul className="mt-2 space-y-1 text-sm">
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
                    <span>Diagnóstico personalizado baseado em suas respostas</span>
                </li>
            </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 delay-900 duration-500 mt-4">
          <Button asChild size="lg" className="font-bold">
            <Link href="/quiz">Começar o Quiz</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold">
            <Link href="/quiz?test=true">
              <TestTube className="mr-2 h-5 w-5" />
              Teste Rápido
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
    </main>
  );
}
