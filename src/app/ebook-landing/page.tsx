
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Heart, BookOpen, Gift, Star, ShieldCheck, MessagesSquare, BrainCircuit, Flame, Gem, ShoppingCart, ArrowRight, Lightbulb, AlertTriangle, Wind, Sparkles, Map } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { LogoCapricho } from "@/components/logo-capricho";

export default function EbookLandingPage() {
    const ebookImage = { imageUrl: '/capa-ebook.png', description: 'Capa do ebook Decodificador do Amor', imageHint: 'book cover' };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">Decodificador do Amor</span>
          </Link>
          <div className="flex-1 flex justify-center">
            <LogoCapricho className="h-12 w-auto" />
          </div>
          <Button asChild className="hidden sm:flex font-bold animate-in fade-in">
            <a href="#comprar">QUERO SABER OS SEGREDOS</a>
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
              O segredo psicológico que desperta paixão e faz qualquer pessoa ter o controle do coração de quem quiser — <span className="italic text-primary/80">quase que manipulação.</span>
            </p>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Chega de tentar adivinhar o que a outra pessoa sente — aprenda a provocar os sentimentos certos pra ela não te tirar da cabeça.
            </p>
            <Button asChild size="lg" className="mt-8 font-bold text-lg">
              <a href="#comprar">
                <Gift className="mr-2 h-5 w-5" />
                QUERO SABER OS SEGREDOS
              </a>
            </Button>
          </div>
          <div className="flex-1 animate-in fade-in slide-in-from-right-8 duration-500">
            <Card className="overflow-hidden shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 bg-secondary/20">
                <Image
                    src={ebookImage.imageUrl}
                    alt={ebookImage.description}
                    width={800}
                    height={800}
                    className="aspect-square w-full object-cover"
                    data-ai-hint={ebookImage.imageHint}
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
              Com o Decodificador do Amor, você vai entender a mente da pessoa amada, criar uma comunicação leve e restaurar a conexão que parecia perdida.
            </p>
          </div>
        </section>

        {/* --- Unified Content Preview Section --- */}
        <section className="py-16">
          <div className="container mx-auto px-4 animate-in fade-in">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Uma Amostra do Conteúdo Transformador 🤫
              </h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                Veja uma pequena parte do que você vai dominar com nosso guia e como sua mentalidade vai mudar.
              </p>
            </div>
            
            {/* What You'll Learn Section */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-center font-headline text-2xl font-bold md:text-3xl mb-8">
                Você vai aprender a...
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="animate-in fade-in slide-in-from-bottom-4 delay-200 duration-500 bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <BrainCircuit className="h-8 w-8 text-primary" />
                      <span>Decodificar microexpressões e ler os 7 tipos de silêncio (o que não é dito fala mais alto).</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="animate-in fade-in slide-in-from-bottom-4 delay-400 duration-500 bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MessagesSquare className="h-8 w-8 text-primary" />
                      <span>Usar scripts de Comunicação Não-Violenta para ter conversas difíceis que conectam em vez de afastar.</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="animate-in fade-in slide-in-from-bottom-4 delay-600 duration-500 bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Flame className="h-8 w-8 text-primary" />
                      <span>Ativar os gatilhos neuroquímicos da atração (dopamina e oxitocina) para reacender a chama do desejo.</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                 <Card className="animate-in fade-in slide-in-from-bottom-4 delay-800 duration-500 bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Gem className="h-8 w-8 text-primary" />
                      <span>Construir uma autoestima inabalável que te transforma em uma fonte de poder, não uma buscadora de validação.</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Impact Section - Mindset */}
            <div className="max-w-5xl mx-auto text-center mt-16">
              <h3 className="font-headline text-2xl font-bold md:text-3xl">Sua mente agora... vs. Sua mente com o Decodificador</h3>
              <p className="mt-2 text-lg text-muted-foreground">
                Pare de viver em um ciclo de ansiedade e dúvida. Recupere o controle e a paz.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="text-left shadow-lg bg-background border-destructive/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-destructive">
                        <AlertTriangle className="h-6 w-6"/>
                        O Ciclo da Ansiedade
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="italic text-muted-foreground">"Por que a pessoa sumiu? Falei algo errado?"</p>
                        <p className="italic text-muted-foreground">"Essa resposta seca foi só impressão minha?"</p>
                        <p className="italic text-muted-foreground">"Será que tem outra pessoa?"</p>
                        <p className="italic text-muted-foreground">"Devo mandar mensagem ou espero?"</p>
                    </CardContent>
                </Card>
                <Card className="text-left shadow-lg bg-background border-primary/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-primary">
                        <Lightbulb className="h-6 w-6"/>
                        O Poder da Clareza
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                         <p className="italic text-muted-foreground">"A pessoa não sumiu, está me mostrando quem é. E agora eu sei o que fazer."</p>
                         <p className="italic text-muted-foreground">"Ok, a resposta foi seca. Em vez de criar teorias, vou escrever 3 interpretações alternativas. A mais provável é que a pessoa esteja ocupada."</p>
                         <p className="italic text-muted-foreground">"Meu valor não depende da atenção de ninguém. Sou a fonte da minha própria validação."</p>
                         <p className="italic text-muted-foreground">"Vou focar na minha vida. Quem quiser estar nela, que demonstre com ações, não com silêncio."</p>
                    </CardContent>
                </Card>
              </div>
            </div>

            {/* Impact Section - Intimacy */}
            <div className="max-w-5xl mx-auto text-center mt-16">
              <h3 className="font-headline text-2xl font-bold md:text-3xl">A Realidade da Intimidade: Do Deserto à Conexão</h3>
              <p className="mt-2 text-lg text-muted-foreground">
                Intimidade não é só sobre sexo. É sobre desejo (dopamina), segurança (oxitocina) e uma conexão que vai além do físico.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="text-left shadow-lg bg-background border-destructive/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-destructive">
                        <Wind className="h-6 w-6"/>
                        O Deserto da Intimidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="italic text-muted-foreground">"O sexo virou uma tarefa, sem desejo real."</p>
                        <p className="italic text-muted-foreground">"Tenho medo de tomar a iniciativa e ser rejeitada."</p>
                        <p className="italic text-muted-foreground">"Parece que somos colegas de quarto, não um casal."</p>
                        <p className="italic text-muted-foreground">"O toque é mecânico, falta a 'química'."</p>
                    </CardContent>
                </Card>
                <Card className="text-left shadow-lg bg-background border-primary/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-primary">
                        <Sparkles className="h-6 w-6"/>
                        A Reconexão Neuroquímica
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                         <p className="italic text-muted-foreground">"Sei como criar rituais de novidade para liberar dopamina e manter a antecipação."</p>
                         <p className="italic text-muted-foreground">"Uso o toque intencional e conversas profundas para liberar oxitocina e construir confiança."</p>
                         <p className="italic text-muted-foreground">"Somos parceiros em uma jornada de descoberta, não apenas dividimos as contas."</p>
                         <p className="italic text-muted-foreground">"Cada toque, beijo e olhar se tornaram ferramentas de conexão consciente."</p>
                    </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center mt-16">
               <Button asChild size="lg" className="font-bold text-lg animate-pulse">
                  <a href="#comprar">
                    <Gem className="mr-2 h-5 w-5" />
                    Eu Quero os Segredos Agora!
                  </a>
                </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 text-center animate-in fade-in">
                <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">Depoimentos Reais de quem já Decodificou</h2>
                 <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                  Mais de 12.000 mulheres já transformaram suas vidas amorosas. Veja o que algumas delas dizem:
                </p>
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardContent className="pt-6">
                            <p className="italic">"Em uma semana, a dinâmica mudou completamente. As conversas fluem e a pessoa está muito mais presente."</p>
                        </CardContent>
                        <CardFooter className="justify-center font-bold text-primary">
                            - Juliana M.
                        </CardFooter>
                    </Card>
                     <Card>
                        <CardContent className="pt-6">
                            <p className="italic">"Eu estava exausta de tentar sozinha. O guia me mostrou exatamente o que fazer e, pela primeira vez, a pessoa me ouviu de verdade."</p>
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

        {/* Index Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold md:text-4xl flex items-center justify-center gap-3">
                <Map className="h-8 w-8 text-primary" />
                Um Vislumbre do Mapa da Transformação
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Com dúvida se o conteúdo é para você? Dê uma olhada no índice detalhado. Este não é um guia superficial.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-lg hover:no-underline">Capítulo 1: A Linguagem Secreta do Comportamento</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground space-y-2 pl-4 border-l-2 border-primary ml-2">
                  <p>✓ Decodificador de Microexpressões (raiva, tristeza, alegria genuína)</p>
                  <p>✓ Análise de Padrões em Mensagens de Texto (interesse vs. desinteresse)</p>
                  <p>✓ Os 7 Tipos de Silêncio e Como Interpretá-los (do silêncio de raiva ao de conexão)</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-lg hover:no-underline">Capítulo 2: Da Ansiedade ao Poder</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground space-y-2 pl-4 border-l-2 border-primary ml-2">
                  <p>✓ Mapeamento do Ciclo da Ansiedade Amorosa</p>
                  <p>✓ O Framework de Clareza Total: Pausar, Questionar e Proceder com Intenção</p>
                  <p>✓ Técnicas de Reprogramação do Sistema Nervoso (Âncora Emocional e Respiração 4-7-8)</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold text-lg hover:no-underline">Capítulo 3: A Arte da Ponte Emocional</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground space-y-2 pl-4 border-l-2 border-primary ml-2">
                  <p>✓ Os 4 Níveis de Escuta (do superficial ao generativo)</p>
                  <p>✓ Framework da Comunicação Não-Violenta 2.0 (observação vs. avaliação)</p>
                  <p>✓ Scripts Prontos para Conversas Difíceis e Expressão de Necessidades</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold text-lg hover:no-underline">Capítulo 4: O Reacendedor de Chamas</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground space-y-2 pl-4 border-l-2 border-primary ml-2">
                  <p>✓ Os Pilares Neuroquímicos da Atração (Dopamina e Oxitocina)</p>
                  <p>✓ Gatilhos Emocionais Avançados (Proteção, Admiração Genuína, Vulnerabilidade Mútua)</p>
                  <p>✓ Rituais de Conexão Diária (Os 6 Minutos Mágicos)</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="font-bold text-lg hover:no-underline">Capítulo 5: A Fortaleza Interior</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground space-y-2 pl-4 border-l-2 border-primary ml-2">
                  <p>✓ Os 3 Pilares da Autoestima Sólida (Autoaceitação, Autoeficácia, Autocompaixão)</p>
                  <p>✓ Técnica de Reestruturação de Crenças Limitantes ("Não sou suficiente")</p>
                  <p>✓ A Fórmula da Felicidade Relacional (Realidade - Expectativas)</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>
                        <strong>"Decodificador do Amor"</strong> — descubra o segredo psicológico que desperta atração e faz você entender o que realmente se passa na mente da outra pessoa
                      </span>
                    </li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>Plano de Ação de 30 dias — passos práticos para aplicar o método e começar a reverter a distância emocional</span></li>
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
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>Ebook “Decodificador do Amor”</span></li>
                    <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>Plano de Ação de 30 dias</span></li>
                    <li className="flex items-start gap-3 font-semibold text-primary"><Gift className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>[BÔNUS] Scripts de Conversa Prontos — frases estratégicas para restaurar a conexão sem precisar correr atrás</span></li>
                    <li className="flex items-start gap-3 font-semibold text-primary"><Gift className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>[BÔNUS] Arquivo Secreto da Psicologia da Atração — os gatilhos mentais que despertam desejo e curiosidade genuína</span></li>
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
                    <li className="flex items-start gap-3 font-semibold text-primary"><Star className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>[EXCLUSIVO] O Dossiê da Mente Masculina — entenda os padrões psicológicos ocultos que regem o comportamento dele</span></li>
                    <li className="flex items-start gap-3 font-semibold text-primary"><Star className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>[EXCLUSIVO] A Arte da Indiferença Estratégica — como criar atração e respeito usando o poder do silêncio e da presença</span></li>
                     <li className="flex items-start gap-3 font-semibold text-primary"><Star className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> <span>[EXCLUSIVO] Arsenal da Comunicação Secreta — técnicas avançadas de influência emocional e linguagem implícita que despertam interesse real</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-bold">👉 Garantir Acesso Total</Button>
                </CardFooter>
              </Card>
            </div>
             <div className="mt-8 text-center text-xs text-muted-foreground space-y-2">
                <p>Compra segura e entrega imediata por e-mail. Acesso vitalício + atualizações gratuitas.</p>
                <p className="text-xs italic">Este material contém estratégias avançadas de alto impacto. Seu uso depende da sua responsabilidade; não nos responsabilizamos pelas consequências de sua aplicação.</p>
             </div>
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
                      Sim, o conteúdo é voltado à mulher que quer reconquistar, fortalecer ou salvar seu relacionamento, seja com homens ou mulheres. A psicologia da comunicação é universal.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-bold text-lg">Funciona se a pessoa está distante ou fria?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      Sim — na verdade, é um dos cenários ideais. Você aprenderá como quebrar o gelo e reativar o vínculo emocional de forma natural, sem parecer desesperada.
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-3">
                    <AccordionTrigger className="font-bold text-lg">Como vou receber o acesso?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                     Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para baixar o ebook e todos os bônus. O acesso é seu para sempre.
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-4">
                    <AccordionTrigger className="font-bold text-lg">E se meu relacionamento já acabou?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                     Muitas leitoras usam o método para reconquistar, pois ele foca em reestabelecer a admiração e a comunicação. No entanto, o foco principal é fortalecer seu amor-próprio, o que te tornará mais atraente em qualquer situação.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="font-bold text-lg">E se eu já tentei de tudo?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      A maioria das nossas leitoras também tentou “de tudo”. O diferencial aqui é o método psicológico prático, testado e aprovado por mais de 12 mil mulheres. Não é sobre tentar mais, é sobre tentar do jeito certo.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </div>
        </section>

      </main>
       <footer className="border-t bg-secondary/30">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-6 px-4 text-center text-sm text-muted-foreground gap-4">
          <div className="flex flex-col gap-2">
            <p>© {new Date().getFullYear()} Decodificador do Amor. Todos os direitos reservados.</p>
            <p className="text-xs italic">Este material contém estratégias avançadas de alto impacto. Seu uso depende da sua responsabilidade; não nos responsabilizamos pelas consequências de sua aplicação.</p>
          </div>
           <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">Política de Privacidade</Link>
            <Link href="#" className="hover:text-primary">Termos de Uso</Link>
           </div>
        </div>
      </footer>
    </div>
  );
}
