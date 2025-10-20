
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles, TestTube } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero");

  return (
    <main className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="container flex max-w-4xl flex-col items-center justify-center gap-6 text-center md:gap-8">
        <Sparkles className="h-12 w-12 text-primary md:h-16 md:w-16" />
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          Decodificador do Amor
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
          Será que o interesse ainda existe? Desvende os sinais do seu relacionamento com nosso quiz e receba uma análise completa sobre a saúde da sua conexão.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
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
        <Card className="mt-4 w-full overflow-hidden shadow-2xl md:mt-8">
          <CardContent className="p-0">
            {heroImage && (
               <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={600}
                className="aspect-video w-full object-cover"
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
