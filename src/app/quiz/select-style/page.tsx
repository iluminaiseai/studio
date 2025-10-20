
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Drama, Loader, Sparkles } from 'lucide-react';
import Link from 'next/link';

const styles = [
  {
    key: 'detailed',
    title: 'Psicológico Detalhado',
    description: 'Uma análise profissional, empática e focada em insights práticos.',
    icon: BrainCircuit,
  },
  {
    key: 'gossipy_friend',
    title: 'Amiga Fofoqueira 😜',
    description: 'Um tom super informal e divertido, como uma conversa no WhatsApp.',
    icon: Drama,
  },
  {
    key: 'spiritual',
    title: 'Espiritual',
    description: 'Uma visão serena, conectada com energias, ciclos e crescimento da alma.',
    icon: Sparkles,
  },
];

function StyleSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const answers = searchParams.get('answers');

  if (!answers) {
    return (
      <div className="text-center">
        <p className="mb-4 text-destructive">Ocorreu um erro. As respostas do quiz não foram encontradas.</p>
        <Link href="/quiz" className="text-primary hover:underline">
          Voltar ao início do quiz
        </Link>
      </div>
    );
  }

  const handleStyleSelect = (style: string) => {
    router.push(`/quiz/results?answers=${answers}&style=${style}`);
  };

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center p-4 text-center">
        <div className="mb-8">
            <h1 className="font-headline text-3xl font-bold md:text-5xl">Quase lá!</h1>
            <p className="mt-2 text-lg text-muted-foreground md:text-xl">Como você prefere receber seu resultado?</p>
            <p className="text-sm text-muted-foreground">(Isso vai definir o tom da análise gratuita e do relatório completo)</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            {styles.map((style) => {
                const Icon = style.icon;
                return (
                    <Card
                        key={style.key}
                        onClick={() => handleStyleSelect(style.key)}
                        className="cursor-pointer transition-all hover:scale-105 hover:shadow-xl hover:border-primary"
                    >
                        <CardHeader>
                            <div className="mb-4 flex justify-center">
                                <Icon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-xl">{style.title}</CardTitle>
                            <CardDescription>{style.description}</CardDescription>
                        </CardHeader>
                    </Card>
                );
            })}
        </div>
    </div>
  );
}

function LoadingFallback() {
    return (
         <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 font-headline text-xl md:text-2xl">Carregando...</p>
        </div>
    )
}

export default function SelectStylePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <StyleSelector />
    </Suspense>
  );
}
