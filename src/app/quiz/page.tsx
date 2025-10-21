
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Answer, quizData, sections } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { Suspense } from "react";

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
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  const currentSection = sections.find(s => s.key === currentQuestion?.section);

  const progress = ((currentQuestionIndex) / quizData.length) * 100;

  const handleAnswer = (answer: Answer) => {
    if (showFeedback) return;
    
    const newAnswers = [...answers, answer.text];
    setAnswers(newAnswers);
    setFeedback(answer.feedback);
    setShowFeedback(true);

    setTimeout(() => {
      if (currentQuestionIndex >= quizData.length - 1) {
        setIsCompleting(true);
        const finalAnswers = [...newAnswers];
        const answersQueryParam = encodeURIComponent(finalAnswers.join("|"));
        router.push(`/quiz/select-style?answers=${answersQueryParam}`);
      } else {
        setShowFeedback(false);
        setFeedback(null);
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    }, 2500);
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
    <div className="container mx-auto flex max-w-2xl flex-col items-center justify-center p-4 py-8 sm:py-12">
      <div className="w-full">
        <div className="mb-6 text-center md:mb-8">
            <div className="mb-2 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-primary md:mb-4">
               <SectionIcon className="h-5 w-5" />
               <span>{currentSection.title}</span>
            </div>
            <p className="text-sm text-muted-foreground">Pergunta {currentQuestionIndex + 1} de {quizData.length}</p>
        </div>
        <Progress value={progress} className="mb-6 h-2 md:mb-8" />

        <Card className="w-full text-center shadow-lg">
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
                  className="h-auto min-h-12 justify-center whitespace-normal py-3 text-sm md:text-base"
                  onClick={() => handleAnswer(answer)}
                  disabled={showFeedback}
                >
                  {answer.text}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {showFeedback && feedback && (
          <div className={cn("mt-6", showFeedback ? "animate-in fade-in" : "animate-out fade-out")}>
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4 text-primary">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 md:h-8 md:w-8" />
                  <p className="font-semibold text-primary text-sm md:text-base">{feedback}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
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
