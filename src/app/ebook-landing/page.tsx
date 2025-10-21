
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Gift, Heart, Check, Star, ShieldCheck, MessageCircleQuestion, ThumbsUp } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function EbookLandingPage() {
    const ebookImage = PlaceHolderImages.find(p => p.id === "ebook_cover") ?? { imageUrl: 'https://picsum.photos/seed/ebook/600/800', description: 'Capa do ebook Decodificador do Amor', imageHint: 'book cover' };

  return (
    <div className="flex min-h-screen flex-col bg-background overflow-hidden">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">Decodificador do Amor</span>
          </Link>
          <Button asChild className="hidden sm:flex">
            <a href="#comprar">Quero Meu Ebook Agora!</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-12 text-center md:flex-row md:py-24 animate-in fade-in">
          <div className="flex-1 md:text-left animate-in fade-in slide-in-from-left-8 duration-500">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl">
              Finalmente: O Guia Definitivo Para Decifrar os Sinais e Transformar Seu Relacionamento
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Cansada de jogos, incertezas e de se sentir sozinha na relação? Descubra os segredos para uma comunicação clara, uma conexão inabalável e um amor que floresce dia após dia.
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
        
        {/* "Is This You?" Section */}
        <section className="bg-secondary/30 py-16">
            <div className="container mx-auto px-4 text-center animate-in fade-in">
                <MessageCircleQuestion className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">Você se identifica com alguma dessas situações?</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">Se você respondeu "sim" a uma ou mais perguntas, você não está sozinha. E o mais importante: existe um caminho.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="flex items-start gap-4 rounded-lg bg-background p-4 shadow-sm">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1"/>
                        <p>Você sente que é sempre você quem inicia as conversas e faz os planos?</p>
                    </div>
                     <div className="flex items-start gap-4 rounded-lg bg-background p-4 shadow-sm">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1"/>
                        <p>As respostas demoram horas (ou dias) e você se sente ansiosa e insegura?</p>
                    </div>
                     <div className="flex items-start gap-4 rounded-lg bg-background p-4 shadow-sm">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1"/>
                        <p>Conversas sobre o futuro são vagas e você se sente como se estivesse em um "limbo"?</p>
                    </div>
                </div>
            </div>
        </section>

        {/* What You'll Get Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 animate-in fade-in">
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
              Com o Decodificador do Amor, você vai...
            </h2>
            <div className="mt-8 grid max-w-4xl mx-auto gap-6 md:grid-cols-2">
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-200 duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Entender o que se Passa na Cabeça Dele(a)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Aprenda a ler os sinais por trás das ações e do silêncio, para nunca mais ficar na dúvida.
                </CardContent>
              </Card>
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-400 duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Comunicar de Forma Eficaz e Sem Brigas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Use nossos scripts para ter conversas difíceis, expressar seus sentimentos e ser ouvida de verdade.
                </CardContent>
              </Card>
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-600 duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Reacender a Chama da Conexão</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                 Com nosso plano de ação, você trará de volta a admiração, o carinho e a iniciativa do início.
                </CardContent>
              </Card>
               <Card className="animate-in fade-in slide-in-from-bottom-4 delay-800 duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Recuperar Sua Confiança e Paz de Espírito</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Diga adeus à ansiedade da espera e à insegurança. Assuma o controle da sua vida amorosa.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="bg-secondary/30 py-16">
            <div className="container mx-auto px-4 text-center animate-in fade-in">
                <ThumbsUp className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">O que dizem nossas leitoras</h2>
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-center text-yellow-500">{[...Array(5)].map((_,i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
                        </CardHeader>
                        <CardContent>
                            <p className="italic">"Em uma semana, a dinâmica mudou completamente. As conversas fluem e ele está muito mais presente. Esse guia foi um divisor de águas!"</p>
                        </CardContent>
                        <CardFooter className="justify-center font-bold">
                            - Juliana M.
                        </CardFooter>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="flex justify-center text-yellow-500">{[...Array(5)].map((_,i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
                        </CardHeader>
                        <CardContent>
                            <p className="italic">"Eu estava exausta de ser a única a tentar. O livro me deu as ferramentas pra ter A conversa, e funcionou. Estamos nos reconectando de um jeito que eu não achava mais possível."</p>
                        </CardContent>
                        <CardFooter className="justify-center font-bold">
                            - Fernanda S.
                        </CardFooter>
                    </Card>
                     <Card>
                        <CardHeader>
                             <div className="flex justify-center text-yellow-500">{[...Array(5)].map((_,i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
                        </CardHeader>
                        <CardContent>
                            <p className="italic">"O plano de ação é ouro puro. Simples, prático e os resultados são imediatos. Me senti no controle pela primeira vez em meses."</p>
                        </CardContent>
                        <CardFooter className="justify-center font-bold">
                            - Carolina P.
                        </CardFooter>
                    </Card>
                 </div>
            </div>
        </section>
        
        {/* Pricing Section */}
        <section id="comprar" className="container mx-auto px-4 py-16 scroll-mt-20">
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
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 flex-shrink-0" /> <span>Ebook "Decodificador do Amor"</span></li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 flex-shrink-0" /> <span>Plano de Ação de 30 dias</span></li>
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
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 flex-shrink-0" /> <span>Ebook "Decodificador do Amor"</span></li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 flex-shrink-0" /> <span>Plano de Ação de 30 dias</span></li>
                    <li className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-green-500 flex-shrink-0" /> <span>[BÔNUS] Scripts de Conversa Prontos</span></li>
                    <li className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-green-500 flex-shrink-0" /> <span>[BÔNUS] Guia em áudio das Linguagens do Amor</span></li>
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
                     <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 flex-shrink-0" /> <span>Tudo do Plano Plus</span></li>
                    <li className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-green-500 flex-shrink-0" /> <span>[EXCLUSIVO] Workshop "Reconexão Íntima"</span></li>
                    <li className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-green-500 flex-shrink-0" /> <span>[EXCLUSIVO] Desafio de 7 dias para casais</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-bold">Garantir Acesso Total</Button>
                </CardFooter>
              </Card>
            </div>
             <p className="mt-8 text-center text-xs text-muted-foreground">Compra segura e entrega imediata por e-mail.</p>
        </section>

        {/* Guarantee Section */}
        <section className="bg-secondary/30 py-16">
            <div className="container mx-auto px-4 text-center flex flex-col md:flex-row items-center gap-8">
                <div className="animate-in fade-in slide-in-from-left-8 duration-500">
                    <ShieldCheck className="h-24 w-24 text-primary mx-auto md:mx-0" />
                </div>
                <div className="text-center md:text-left animate-in fade-in slide-in-from-right-8 duration-500">
                     <h2 className="font-headline text-3xl font-bold md:text-4xl">Sua Satisfação ou Seu Dinheiro de Volta</h2>
                     <p className="mt-2 text-lg text-muted-foreground max-w-3xl">Você tem 7 dias para ler e aplicar o método. Se por qualquer motivo você não sentir uma mudança positiva no seu relacionamento, basta enviar um e-mail e nós devolveremos 100% do seu investimento. Sem perguntas, sem burocracia. O risco é todo nosso.</p>
                     <Button asChild size="lg" className="mt-6 font-bold">
                        <a href="#comprar">Quero Transformar Meu Relacionamento Sem Risco!</a>
                    </Button>
                </div>
            </div>
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
