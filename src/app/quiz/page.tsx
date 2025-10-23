
"use client";

import { useState, useEffect, Suspense, MouseEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Answer, quizData, sections } from "@/lib/quiz-data";
import { getFeedbackForAnswers } from "@/lib/feedback-data";
import { getPregeneratedResponse, ReportStyle, AnswerKey } from '@/lib/pregenerated-responses';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, MessageCircleHeart, BrainCircuit, Drama, ArrowLeft, RotateCcw, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import Link from 'next/link';
import { ReportDisplay } from './report/report-client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";


// ============================================================================
// Feedback Intermediário
// ============================================================================
function MiniFeedback({ feedback, onContinue }: { feedback: { title: string, text: string }, onContinue: () => void }) {
    return (
        <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
            <Card className="w-full animate-in fade-in zoom-in-95">
                <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <MessageCircleHeart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl md:text-3xl">{feedback.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground md:text-lg">{feedback.text}</p>
                    <Button onClick={onContinue} size="lg" className="mt-8 font-bold">
                        Continuar o Quiz
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

// ============================================================================
// Seletor de Estilo
// ============================================================================
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

function StyleSelector({ onStyleSelect }: { onStyleSelect: (style: ReportStyle) => void }) {
  const [loadingStyle, setLoadingStyle] = useState<string | null>(null);

  useEffect(() => {
    // Limpa o progresso salvo quando o usuário chega à seleção de estilo
    localStorage.removeItem('quizProgress');
  }, []);

  const handleStyleSelect = (style: ReportStyle) => {
    if (loadingStyle) return;
    setLoadingStyle(style);
    
    // Simula um pequeno atraso para a animação do loader ser visível
    setTimeout(() => {
      onStyleSelect(style);
    }, 500);
  };

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center p-4 text-center animate-in fade-in">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 delay-300 duration-500">
            <h1 className="font-headline text-3xl font-bold md:text-5xl">Quase lá!</h1>
            <p className="mt-2 text-lg text-muted-foreground md:text-xl">Como você prefere receber seu resultado?</p>
            <p className="text-sm text-muted-foreground">(Isso vai definir o tom da análise)</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:max-w-2xl animate-in fade-in slide-in-from-bottom-4 delay-500 duration-500">
            {styles.map((style) => {
                const Icon = style.icon;
                const isLoading = loadingStyle === style.key;
                return (
                    <Card
                        key={style.key}
                        onClick={() => handleStyleSelect(style.key)}
                        className={cn(
                          "cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary",
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


// ============================================================================
// Página do Relatório
// ============================================================================
function calculateScoreAndDetermineKey(answersText: string[]): AnswerKey {
  let totalScore = 0;
  const maxScore = quizData.length * 2;

  answersText.forEach((answerText, index) => {
    const question = quizData[index];
    if (question) {
      const answer = question.answers.find(a => a.text === answerText);
      if (answer) {
        totalScore += answer.score;
      }
    }
  });
  
  const scorePercentage = (totalScore / maxScore) * 100;

  if (scorePercentage > 50) {
    return 'positive';
  } else if (scorePercentage >= 0) {
    return 'mixed';
  } else {
    return 'negative';
  }
}

function ReportComponent({ answers, style }: { answers: string[], style: ReportStyle }) {
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const answerKey = calculateScoreAndDetermineKey(answers);
    const fullReport = getPregeneratedResponse(answerKey, style, 'full');
    
    if (fullReport) {
        setReport(fullReport);
    }
    // Adiciona um pequeno delay para a transição parecer mais suave
    setTimeout(() => setLoading(false), 500);

  }, [answers, style]);


  if (loading) {
    return (
        <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 font-headline text-xl md:text-2xl">Gerando seu relatório...</p>
        </div>
    )
  }

  if (!report) {
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
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center p-4 py-8 animate-in fade-in">
        <ReportDisplay insights={report} />
    </div>
  );
}


// ============================================================================
// Componente Principal do Quiz
// ============================================================================

type QuizStep = 'quiz' | 'select-style' | 'report' | 'loading' | 'error';
type SavedProgress = {
  currentQuestionIndex: number;
  answers: string[];
};

function QuizFlow() {
  const searchParams = useSearchParams();
  const isTestMode = searchParams.get('test') === 'true';

  const [step, setStep] = useState<QuizStep>('loading');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showMiniFeedback, setShowMiniFeedback] = useState(false);
  const [feedbackContent, setFeedbackContent] = useState({ title: '', text: '' });
  const [selectedStyle, setSelectedStyle] = useState<ReportStyle>('detailed');
  const [showContinueDialog, setShowContinueDialog] = useState(false);

  // Efeito para carregar e salvar o progresso
  useEffect(() => {
    // Carrega o progresso salvo ao montar o componente
    const savedProgressJson = localStorage.getItem('quizProgress');
    
    if (isTestMode) {
      handleRestart();
      const prefilledAnswers = quizData.slice(0, 9).map(q => q.answers[0].text);
      setAnswers(prefilledAnswers);
      setCurrentQuestionIndex(9);
      setStep('quiz');
      return;
    }

    if (savedProgressJson) {
      const savedProgress: SavedProgress = JSON.parse(savedProgressJson);
      if (savedProgress.answers.length > 0 && savedProgress.answers.length < quizData.length) {
        setShowContinueDialog(true);
        // Não definir step aqui, espera a decisão do usuário
      } else {
        setStep('quiz');
      }
    } else {
      setStep('quiz');
    }
  }, [isTestMode]);

  // Salva o progresso sempre que as respostas ou o índice da questão mudam
  useEffect(() => {
    if (step === 'quiz' && answers.length > 0 && answers.length < quizData.length) {
      const progressToSave: SavedProgress = { currentQuestionIndex, answers };
      localStorage.setItem('quizProgress', JSON.stringify(progressToSave));
    }
    if (answers.length === quizData.length) {
        localStorage.removeItem('quizProgress');
    }
  }, [currentQuestionIndex, answers, step]);

  const handleContinue = () => {
    const savedProgressJson = localStorage.getItem('quizProgress');
    if (savedProgressJson) {
      const savedProgress: SavedProgress = JSON.parse(savedProgressJson);
      setAnswers(savedProgress.answers);
      setCurrentQuestionIndex(savedProgress.currentQuestionIndex);
    }
    setShowContinueDialog(false);
    setStep('quiz');
  };

  const handleRestart = () => {
    localStorage.removeItem('quizProgress');
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setShowContinueDialog(false);
    setStep('quiz');
  };

  const currentQuestion = quizData[currentQuestionIndex];
  const currentSection = sections.find(s => s.key === currentQuestion?.section);
  const progress = ((currentQuestionIndex) / quizData.length) * 100;

  const handleAnswer = (answer: Answer, event: MouseEvent<HTMLButtonElement>) => {
    if (isProcessing) return;
    
    (event.target as HTMLButtonElement).blur();
    
    setIsProcessing(true);
    const newAnswers = [...answers, answer.text];
    setAnswers(newAnswers);

    const isFeedbackPoint = (currentQuestionIndex + 1) % 4 === 0 && currentQuestionIndex < quizData.length -1;

    setTimeout(() => {
        if (isFeedbackPoint && !isTestMode) {
            setFeedbackContent(getFeedbackForAnswers(newAnswers));
            setShowMiniFeedback(true);
            setIsProcessing(false);
        } else {
            advanceQuestion(newAnswers);
        }
    }, 500);
  };
  
  const handleBack = () => {
    if (currentQuestionIndex === 0 || isProcessing) return;
    
    if (showMiniFeedback) {
      setShowMiniFeedback(false);
      return;
    }
    
    setCurrentQuestionIndex(prev => prev - 1);
    setAnswers(prev => prev.slice(0, -1));
  };


  const advanceQuestion = (currentAnswers: string[]) => {
      if (currentQuestionIndex >= quizData.length - 1) {
        setStep('select-style');
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
        setIsProcessing(false);
      }
  }

  const handleContinueFromFeedback = () => {
      setShowMiniFeedback(false);
      advanceQuestion(answers);
  }

  const handleStyleSelect = (style: ReportStyle) => {
    setSelectedStyle(style);
    setStep('report');
  };
  
  // Renderização condicional baseada na etapa (step)
  if (step === 'loading' && !showContinueDialog) {
    return (
      <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
        <Loader className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 font-headline text-xl md:text-2xl">Carregando...</p>
      </div>
    );
  }

  if (showContinueDialog) {
    return (
      <AlertDialog open={showContinueDialog} onOpenChange={setShowContinueDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-2xl">Bem-vinda de volta!</AlertDialogTitle>
            <AlertDialogDescription>
              Percebemos que você não terminou o quiz. Quer continuar de onde parou ou começar de novo?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <Button onClick={handleRestart} variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" />
              Recomeçar
            </Button>
            <Button onClick={handleContinue}>
              <Play className="mr-2 h-4 w-4" />
              Continuar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  
  if (showMiniFeedback) {
      return <MiniFeedback feedback={feedbackContent} onContinue={handleContinueFromFeedback} />;
  }

  if (step === 'select-style') {
      return <StyleSelector onStyleSelect={handleStyleSelect} />;
  }

  if (step === 'report') {
      return <ReportComponent answers={answers} style={selectedStyle} />;
  }
  
  if (!currentQuestion || !currentSection) {
     return (
      <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
        <Loader className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 font-headline text-xl md:text-2xl">Carregando quiz...</p>
      </div>
    );
  }

  const SectionIcon = currentSection.icon;

  return (
    <div className="container mx-auto flex max-w-2xl flex-col p-4 pt-8 sm:pt-12 animate-in fade-in">
      <div className="w-full">
        <div className="flex h-10 items-center">
            {currentQuestionIndex > 0 && (
            <Button
                variant="ghost"
                onClick={handleBack}
                className="text-muted-foreground -ml-4"
                disabled={isProcessing}
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
            </Button>
            )}
        </div>

        <div className="mb-6 text-center md:mb-8">
            <div className="mb-2 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-primary md:mb-4">
               <SectionIcon className="h-5 w-5" />
               <span>{currentSection.title}</span>
            </div>
            <p className="text-sm text-muted-foreground">Pergunta {currentQuestionIndex + 1} de {quizData.length}</p>
        </div>
        <Progress value={progress} className="mb-6 h-2 md:mb-8" />

        <Card className="w-full text-center shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CardHeader>
            <CardTitle className="font-body text-xl font-semibold leading-tight md:text-2xl">
              {currentQuestion.text}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 flex flex-col gap-3">
              {currentQuestion.answers.map((answer, index) => (
                <Button
                  key={`${currentQuestionIndex}-${index}`}
                  variant="outline"
                  size="lg"
                  className="h-auto min-h-12 justify-center whitespace-normal py-3 text-sm transition-all duration-200 hover:bg-primary/5 hover:border-primary md:text-base focus:ring-0 focus-visible:ring-0"
                  onClick={(e) => handleAnswer(answer, e)}
                  disabled={isProcessing}
                >
                  {answer.text}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
        <Loader className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 font-headline text-xl md:text-2xl">Carregando...</p>
      </div>
    }>
      <QuizFlow />
    </Suspense>
  )
}
