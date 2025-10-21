
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Gift, Heart, Check, Star } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function EbookLandingPage() {
    const ebookImage = PlaceHolderImages.find(p => p.id === "ebook_cover") ?? { imageUrl: 'https://picsum.photos/seed/ebook/600/800', description: 'Capa do ebook Decodificador do Amor', imageHint: 'book cover' };

  return (
    <div className="flex min-h-screen flex-col bg-background overflow-hidden">
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
        <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-12 text-center md:flex-row md:py-24 animate-in fade-in">
          <div className="flex-1 md:text-left animate-in fade-in slide-in-from-left-8 duration-500">
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
          <div className="flex-1 animate-in fade-in slide-in-from-right-8 duration-500">
            <Card className="overflow-hidden shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-primary/20">
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
          <div className="container mx-auto px-4 animate-in fade-in">
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
              O que você vai receber?
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-200 duration-500">
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
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-400 duration-500">
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
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-600 duration-500">
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
        
        <section id="comprar" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12 animate-in fade-in">
                <Gift className="mx-auto h-16 w-16 text-primary"/>
                <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">Escolha o Plano Perfeito Para Você</h2>
                <p className="mt-2 text-lg text-muted-foreground">Desbloqueie hoje o caminho para um relacionamento mais feliz.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
              {/* Plano 1 - Básico */}
              <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 delay-200 duration-500">
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">Guia Essencial</CardTitle>
                  <CardDescription>O ponto de partida perfeito.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-center text-4xl font-bold">R$ 29,90</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> <span>Ebook "Decodificador do Amor"</span></li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> <span>Plano de Ação de 30 dias</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-bold">Comprar Agora</Button>
                </CardFooter>
              </Card>

              {/* Plano 2 - Mais Popular */}
              <Card className="flex flex-col border-2 border-primary shadow-2xl relative -my-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 delay-400 duration-500">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>MAIS POPULAR</span>
                </div>
                <CardHeader className="text-center pt-10">
                  <CardTitle className="font-headline text-3xl">Decodificador Plus</CardTitle>
                  <CardDescription>O pacote completo para resultados rápidos.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-center text-5xl font-bold text-primary">R$ 47,90</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> <span>Ebook "Decodificador do Amor"</span></li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> <span>Plano de Ação de 30 dias</span></li>
                    <li className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-green-500" /> <span>[BÔNUS] Scripts de Conversa Prontos</span></li>
                    <li className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-green-500" /> <span>[BÔNUS] Guia em áudio das Linguagens do Amor</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full font-bold">Quero o Plano Plus!</Button>
                </CardFooter>
              </Card>

              {/* Plano 3 - Premium */}
              <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 delay-600 duration-500">
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">Método Completo</CardTitle>
                  <CardDescription>A transformação definitiva.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-center text-4xl font-bold">R$ 69,90</p>
                  <ul className="space-y-2 text-left">
                     <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> <span>Tudo do Plano Plus</span></li>
                    <li className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-green-500" /> <span>[EXCLUSIVO] Workshop "Reconexão Íntima"</span></li>
                    <li className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-green-500" /> <span>[EXCLUSIVO] Desafio de 7 dias para casais</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-bold">Garantir Acesso Total</Button>
                </CardFooter>
              </Card>
            </div>
             <p className="mt-8 text-center text-xs text-muted-foreground">Compra segura e entrega imediata por e-mail.</p>
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
