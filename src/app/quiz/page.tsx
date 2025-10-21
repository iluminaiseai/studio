
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Answer, quizData, sections } from "@/lib/quiz-data";
import { getFeedbackForAnswers } from "@/lib/feedback-data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, MessageCircleHeart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { Suspense } from "react";

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

function QuizComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isTestMode = searchParams.get('test') === 'true';

  const getInitialState = () => {
    if (isTestMode) {
      // Pre-fill answers for the first 9 questions to jump to the last one
      const prefilledAnswers = quizData.slice(0, 9).map(q => q.answers[0].text);
      return {
        currentQuestionIndex: 9,
        answers: prefilledAnswers,
      };
    }
    return {
      currentQuestionIndex: 0,
      answers: [],
    };
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(getInitialState().currentQuestionIndex);
  const [answers, setAnswers] = useState<string[]>(getInitialState().answers);
  const [isCompleting, setIsCompleting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);


  const currentQuestion = quizData[currentQuestionIndex];
  const currentSection = sections.find(s => s.key === currentQuestion?.section);

  const progress = ((currentQuestionIndex) / quizData.length) * 100;

  const handleAnswer = (answer: Answer) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    const newAnswers = [...answers, answer.text];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex >= quizData.length - 1) {
        setIsCompleting(true);
        const finalAnswers = [...newAnswers];
        const answersQueryParam = encodeURIComponent(finalAnswers.join("|"));
        router.push(`/quiz/select-style?answers=${answersQueryParam}`);
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
        setIsProcessing(false);
      }
    }, 500); // A small delay to give feedback to the user on click before transitioning
  };
  
  if (isCompleting) {
    return (
      <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
        <Loader className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 font-headline text-xl md:text-2xl">Finalizando o quiz...</p>
        <p className="text-sm text-muted-foreground md:text-base">Aguarde, estamos preparando seus resultados.</p>
      </div>
    );
  }

  if (!currentQuestion || !currentSection) {
     return (
      <div className="container mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-4 text-center">
        <Loader className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 font-headline text-xl md:text-2xl">Carregando...</p>
      </div>
    );
  }

  const SectionIcon = currentSection.icon;

  return (
    <div className="container mx-auto flex max-w-2xl flex-col items-center justify-center p-4 py-8 sm:py-12 animate-in fade-in">
      <div className="w-full">
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
                  key={index}
                  variant="outline"
                  size="lg"
                  className="h-auto min-h-12 justify-center whitespace-normal py-3 text-sm transition-all duration-200 hover:bg-primary/5 hover:border-primary md:text-base active:bg-primary/10"
                  onClick={() => handleAnswer(answer)}
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
      <QuizComponent />
    </Suspense>
  )
}
