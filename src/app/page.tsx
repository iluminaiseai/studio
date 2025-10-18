import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero");

  return (
    <main className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="container flex max-w-4xl flex-col items-center justify-center gap-8 text-center">
        <Sparkles className="h-16 w-16 text-primary" />
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
          Love Decoder
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Será que o interesse ainda existe? Desvende os sinais do seu relacionamento com nosso quiz e receba uma análise completa sobre a saúde da sua conexão.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg" className="font-bold">
            <Link href="/quiz">Começar o Quiz</Link>
          </Button>
        </div>
        <Card className="mt-8 w-full overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            {heroImage && (
               <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={600}
                className="aspect-video w-full object-cover"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
