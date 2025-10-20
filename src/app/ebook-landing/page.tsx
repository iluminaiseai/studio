
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Gift, Heart } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function EbookLandingPage() {
    const ebookImage = PlaceHolderImages.find(p => p.id === "ebook_cover") ?? { imageUrl: 'https://picsum.photos/seed/ebook/600/800', description: 'Capa do ebook Decodificador do Amor', imageHint: 'book cover' };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">Decodificador do Amor</span>
          </Link>
          <Button asChild>
            <a href="#comprar">Quero Meu Ebook Agora!</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-12 text-center md:flex-row md:py-24">
          <div className="flex-1 md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl">
              Transforme Seu Relacionamento em 30 Dias
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Descubra os segredos para uma comunicação mais profunda, uma conexão inabalável e um amor que floresce dia após dia com o nosso guia completo.
            </p>
            <Button asChild size="lg" className="mt-8 font-bold">
              <a href="#comprar">
                <BookOpen className="mr-2 h-5 w-5" />
                Desbloquear o Guia Completo
              </a>
            </Button>
          </div>
          <div className="flex-1">
            <Card className="overflow-hidden shadow-2xl rounded-lg">
              <Image
                src={ebookImage.imageUrl}
                alt={ebookImage.description}
                width={600}
                height={800}
                className="aspect-[3/4] w-full object-cover"
                data-ai-hint={ebookImage.imageHint}
                priority
              />
            </Card>
          </div>
        </section>

        <section className="bg-secondary/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
              O que você vai receber?
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Plano de Ação Detalhado</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Um guia passo a passo de 30 dias com ações diárias para fortalecer a comunicação, a intimidade e a confiança.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Scripts de Conversas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Modelos de mensagens e diálogos para ter conversas difíceis, expressar sentimentos e resolver conflitos de forma saudável.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Guias de Linguagem do Amor</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Aprenda a identificar e a falar a linguagem do amor do seu parceiro(a) para demonstrações de afeto muito mais eficazes.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="comprar" className="container mx-auto px-4 py-16 text-center">
            <Card className="mx-auto max-w-2xl bg-card p-8 shadow-2xl">
                <Gift className="mx-auto h-16 w-16 text-primary"/>
                <h2 className="mt-4 font-headline text-3xl font-bold">Oferta Especial de Lançamento</h2>
                <p className="mt-2 text-4xl font-bold text-primary">R$ 29,90</p>
                <p className="text-muted-foreground">Acesso vitalício ao guia completo.</p>
                <Button size="lg" className="mt-6 w-full font-bold">
                    Comprar Agora e Transformar Meu Relacionamento
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">Compra segura e entrega imediata por e-mail.</p>
            </Card>
        </section>
      </main>
       <footer className="border-t">
        <div className="container mx-auto py-6 px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Decodificador do Amor. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
