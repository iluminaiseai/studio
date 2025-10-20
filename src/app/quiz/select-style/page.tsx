
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Drama, Loader } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReportStyle } from '@/lib/pregenerated-responses';

const styles = [
  {
    key: 'detailed' as ReportStyle,
    title: 'Psicológico Detalhado',
    description: 'Uma análise profissional, empática e focada em insights práticos.',
    icon: BrainCircuit,
  },
  {
    key: 'gossipy_friend' as ReportStyle,
    title: 'Amiga Fofoqueira 😜',
    description: 'Um tom super informal e divertido, como uma conversa no WhatsApp.',
    icon: Drama,
  },
];

function StyleSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const answers = searchParams.get('answers');
  const [loadingStyle, setLoadingStyle] = useState<string | null>(null);

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

  const handleStyleSelect = (style: ReportStyle) => {
    if (loadingStyle) return;
    setLoadingStyle(style);
    
    const params = new URLSearchParams();
    params.set('answers', answers);
    params.set('style', style);
    
    router.push(`/quiz/report?${params.toString()}`);
  };

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center p-4 text-center">
        <div className="mb-8">
            <h1 className="font-headline text-3xl font-bold md:text-5xl">Quase lá!</h1>
            <p className="mt-2 text-lg text-muted-foreground md:text-xl">Como você prefere receber seu resultado?</p>
            <p className="text-sm text-muted-foreground">(Isso vai definir o tom da análise)</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:max-w-2xl">
            {styles.map((style) => {
                const Icon = style.icon;
                const isLoading = loadingStyle === style.key;
                return (
                    <Card
                        key={style.key}
                        onClick={() => handleStyleSelect(style.key)}
                        className={cn(
                          "cursor-pointer transition-all hover:scale-105 hover:shadow-xl hover:border-primary",
                          loadingStyle && !isLoading && "opacity-50 cursor-not-allowed",
                          isLoading && "ring-2 ring-primary border-primary"
                        )}
                    >
                        <CardHeader>
                            <div className="mb-4 flex justify-center items-center h-10 w-10 mx-auto">
                                {isLoading ? (
                                    <Loader className="h-10 w-10 text-primary animate-spin" />
                                ) : (
                                    <Icon className="h-10 w-10 text-primary" />
                                )}
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
