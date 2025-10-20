

"use client"

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ResultsPageClient } from "./results-client";
import { Loader } from "lucide-react";

function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <Loader className="h-12 w-12 animate-spin text-primary" />
      <p className="mt-4 font-headline text-xl md:text-2xl">
        Analisando suas respostas...
      </p>
      <p className="text-muted-foreground text-sm md:text-base">
        Nossa IA está preparando seu diagnóstico.
      </p>
    </div>
  );
}

function ResultsDataWrapper() {
  const searchParams = useSearchParams();
  const answers = searchParams.get('answers');
  const style = searchParams.get('style');

  if (!style) {
    // This case should ideally not be hit if navigation comes from select-style
    return (
      <div className="text-center text-destructive">
        <p>Estilo de relatório não selecionado.</p>
        <Link href="/quiz" className="text-primary hover:underline">
          Voltar ao início do quiz
        </Link>
      </div>
    );
  }

  return <ResultsPageClient answers={answers} style={style as any} />;
}

export default function ResultsPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center p-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <ResultsDataWrapper />
      </Suspense>
    </div>
  );
}
