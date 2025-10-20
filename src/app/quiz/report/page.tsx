
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getPregeneratedResponse, ReportStyle } from '@/lib/pregenerated-responses';
import { ReportDisplay } from './report-client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Loader } from 'lucide-react';

function ReportComponent() {
  const searchParams = useSearchParams();
  const answersParam = searchParams.get('answers');
  const style = (searchParams.get('style') as ReportStyle) || 'detailed';

  if (!answersParam) {
    return (
      <div className="container mx-auto flex h-screen max-w-4xl flex-col items-center justify-center p-4">
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>Parâmetros de respostas não encontrados. Por favor, refaça o quiz.</AlertDescription>
        </Alert>
      </div>
    );
  }

  // Lógica para determinar a chave da resposta
  const answerKey = (answersParam.split('|').filter(a => a.toLowerCase().includes('sim')).length || 0) > 12 ? 'positive' : 'mixed';
  
  const fullReport = getPregeneratedResponse(answerKey, style, 'full');

  if (!fullReport) {
    return (
      <div className="container mx-auto flex h-screen max-w-4xl flex-col items-center justify-center p-4">
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>Não foi possível gerar seu relatório completo. Por favor, tente novamente.</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center p-4">
        <ReportDisplay insights={fullReport} />
    </div>
  );
}

function LoadingFallback() {
    return (
        <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 font-headline text-xl md:text-2xl">Carregando seu relatório...</p>
        </div>
    )
}

export default function ReportPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ReportComponent />
    </Suspense>
  );
}
