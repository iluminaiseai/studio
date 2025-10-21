
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Heart, BookOpen, Gift, Star, ShieldCheck, MessagesSquare, BrainCircuit, Flame, Gem, ShoppingCart } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function EbookLandingPage() {
    const ebookImage = PlaceHolderImages.find(p => p.id === "ebook_cover") ?? { imageUrl: 'https://picsum.photos/seed/ebook/600/800', description: 'Capa do ebook Decodificador do Amor', imageHint: 'book cover' };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">Decodificador do Amor</span>
          </Link>
          <Button asChild className="hidden sm:flex font-bold animate-in fade-in">
            <a href="#comprar">Quero Meu Ebook Agora!</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-12 text-center md:flex-row md:py-24 animate-in fade-in">
          <div className="flex-1 md:text-left animate-in fade-in slide-in-from-left-8 duration-500">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl">
              Decodificador do Amor
            </h1>
            <p className="mt-4 text-lg font-bold text-muted-foreground md:text-xl">
              Descubra o método que já transformou mais de 12.000 relacionamentos em menos de 30 dias.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Pare de adivinhar o que ele sente — comece a entender, comunicar e reconquistar de verdade.
            </p>
            <Button asChild size="lg" className="mt-8 font-bold text-lg">
              <a href="#comprar">
                <Gift className="mr-2 h-5 w-5" />
                Quero Meu Ebook Agora!
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
        
        {/* Subhead Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center animate-in fade-in">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Cansada de se sentir confusa, insegura ou ignorada na relação?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
              Com o Decodificador do Amor, você vai entender a mente masculina, criar uma comunicação leve e restaurar a conexão que parecia perdida.
            </p>
          </div>
        </section>
        
        {/* What You'll Learn Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 animate-in fade-in">
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
              Você vai aprender a...
            </h2>
            <div className="mt-8 grid max-w-4xl mx-auto gap-6 md:grid-cols-2">
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-200 duration-500 bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                    <span>Ler os sinais por trás das atitudes dele (mesmo quando ele não fala nada).</span>
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-400 duration-500 bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MessagesSquare className="h-8 w-8 text-primary" />
                    <span>Conversar sem brigar, com nossos scripts prontos e comprovados.</span>
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-600 duration-500 bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Flame className="h-8 w-8 text-primary" />
                    <span>Reacender o desejo e a admiração — mesmo após meses de distância emocional.</span>
                  </CardTitle>
                </CardHeader>
              </Card>
               <Card className="animate-in fade-in slide-in-from-bottom-4 delay-800 duration-500 bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Gem className="h-8 w-8 text-primary" />
                    <span>Recuperar sua confiança e paz interior, sem precisar “correr atrás”.</span>
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
             <div className="text-center mt-12">
               <Button asChild size="lg" className="font-bold text-lg">
                  <a href="#comprar">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Sim, eu quero transformar meu relacionamento!
                  </a>
                </Button>
            </div>
          </div>
        </section>
        
        {/* Social Proof Section */}
        <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 text-center animate-in fade-in">
                <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">Depoimentos Reais</h2>
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardContent className="pt-6">
                            <p className="italic">"Em uma semana, a dinâmica mudou completamente. As conversas fluem e ele está muito mais presente."</p>
                        </CardContent>
                        <CardFooter className="justify-center font-bold text-primary">
                            - Juliana M.
                        </CardFooter>
                    </Card>
                     <Card>
                        <CardContent className="pt-6">
                            <p className="italic">"Eu estava exausta de tentar sozinha. O guia me mostrou exatamente o que fazer e, pela primeira vez, ele me ouviu de verdade."</p>
                        </CardContent>
                        <CardFooter className="justify-center font-bold text-primary">
                            - Fernanda S.
                        </CardFooter>
                    </Card>
                     <Card>
                         <CardContent className="pt-6">
                            <p className="italic">"O plano de ação é ouro puro. Simples, direto e transformador."</p>
                        </CardContent>
                        <CardFooter className="justify-center font-bold text-primary">
                            - Carolina P.
                        </CardFooter>
                    </Card>
                 </div>
            </div>
        </section>
        
        {/* Pricing Section */}
        <section id="comprar" className="py-16 scroll-mt-20 my-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-in fade-in">
                <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">Escolha seu plano ideal 💝</h2>
                <p className="mt-2 text-lg text-muted-foreground">Desbloqueie hoje o caminho para um relacionamento mais feliz.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start max-w-5xl mx-auto">
              {/* Plano 1 - Básico */}
              <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 delay-200 duration-500 bg-card">
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">💫 Guia Essencial</CardTitle>
                  <CardDescription>O ponto de partida perfeito.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-center text-4xl font-bold">R$ 29,90</p>
                  <ul className="space-y-3 text-left p-4 bg-secondary/30 rounded-md">
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>Ebook "Decodificador do Amor"</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>Plano de Ação de 30 dias</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-bold">👉 Quero Começar Agora</Button>
                </CardFooter>
              </Card>

              {/* Plano 2 - Mais Popular */}
              <Card className="flex flex-col border-2 border-primary shadow-2xl relative -my-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 delay-400 duration-500 bg-card">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>MAIS POPULAR</span>
                </div>
                <CardHeader className="text-center pt-10">
                  <CardTitle className="font-headline text-3xl">🌹 Decodificador Plus</CardTitle>
                  <CardDescription>Transformação acelerada com bônus exclusivos.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-center text-5xl font-bold text-primary">R$ 47,90</p>
                  <ul className="space-y-3 text-left p-4 bg-secondary/30 rounded-md">
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>Ebook "Decodificador do Amor"</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>Plano de Ação de 30 dias</span></li>
                    <li className="flex items-start gap-3 font-semibold text-primary"><Gift className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>[BÔNUS] Scripts de Conversa Prontos</span></li>
                    <li className="flex items-start gap-3 font-semibold text-primary"><Gift className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>[BÔNUS] Guia em áudio das Linguagens do Amor</span></li>
                  </ul>
                   <p className="text-center text-sm font-bold text-primary-foreground bg-primary/80 rounded-full py-1">🔥 Mais de 70% das leitoras escolhem este plano!</p>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full font-bold text-lg">👉 Quero o Plano Plus</Button>
                </CardFooter>
              </Card>

              {/* Plano 3 - Premium */}
              <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 delay-600 duration-500 bg-card">
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">💎 Método Completo</CardTitle>
                  <CardDescription>Resultados definitivos e reconexão profunda.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-center text-4xl font-bold">R$ 69,90</p>
                   <ul className="space-y-3 text-left p-4 bg-secondary/30 rounded-md">
                     <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>Tudo do Plano Plus</span></li>
                    <li className="flex items-start gap-3 font-semibold text-primary"><Star className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>[EXCLUSIVO] Workshop "Reconexão Íntima"</span></li>
                    <li className="flex items-start gap-3 font-semibold text-primary"><Star className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>[EXCLUSIVO] Desafio de 7 dias para Casais</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-bold">👉 Garantir Acesso Total</Button>
                </CardFooter>
              </Card>
            </div>
             <p className="mt-8 text-center text-xs text-muted-foreground">Compra segura e entrega imediata por e-mail. Acesso vitalício + atualizações gratuitas.</p>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 text-center flex flex-col md:flex-row items-center gap-8">
                <div className="animate-in fade-in slide-in-from-left-8 duration-500">
                    <ShieldCheck className="h-32 w-32 text-primary mx-auto md:mx-0" />
                </div>
                <div className="text-center md:text-left animate-in fade-in slide-in-from-right-8 duration-500">
                     <h2 className="font-headline text-3xl font-bold md:text-4xl">Garantia Incondicional 💯</h2>
                      <h3 className="mt-2 font-headline text-2xl font-bold text-primary">Satisfação total ou seu dinheiro de volta.</h3>
                     <p className="mt-2 text-lg text-muted-foreground max-w-3xl">Você tem 7 dias para testar o método. Se não sentir nenhuma diferença positiva, basta enviar um e-mail e nós devolveremos 100% do seu investimento — sem perguntas, sem burocracia. O risco é todo nosso.</p>
                </div>
            </div>
        </section>

         {/* FAQ Section */}
        <section className="py-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-8">
                     <h2 className="font-headline text-3xl font-bold md:text-4xl">FAQ — Dúvidas Frequentes</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-bold text-lg">É só para mulheres?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      Sim, o conteúdo é voltado à mulher que quer reconquistar, fortalecer ou salvar seu relacionamento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-bold text-lg">Funciona se ele está distante ou frio?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      Sim — você aprenderá como quebrar o gelo e reativar o vínculo emocional de forma natural.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="font-bold text-lg">E se eu já tentei de tudo?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      A maioria das nossas leitoras também tentou “de tudo”. O diferencial aqui é o método psicológico prático, testado e aprovado por mais de 12 mil mulheres.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-12 p-6 bg-destructive/80 text-destructive-foreground rounded-lg text-center shadow-lg">
                    <h3 className="font-headline font-bold text-2xl">Bônus Limitado</h3>
                    <p className="mt-2">As vagas para o Workshop e o Desafio de 7 Dias são limitadas. Garanta seu acesso antes que o bônus seja removido.</p>
                     <Button asChild size="lg" className="mt-6 font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                        <a href="#comprar">👉 Quero Transformar Meu Relacionamento Agora!</a>
                    </Button>
                </div>
            </div>
        </section>

      </main>
       <footer className="border-t bg-secondary/30">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-6 px-4 text-center text-sm text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} Decodificador do Amor. Todos os direitos reservados.</p>
           <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">Política de Privacidade</Link>
            <Link href="#" className="hover:text-primary">Termos de Uso</Link>
            <Link href="#" className="hover:text-primary">Suporte</Link>
           </div>
        </div>
      </footer>
    </div>
  );
}

    