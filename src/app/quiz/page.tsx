"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Answer, quizData, sections } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const router = useRouter();

  const currentQuestion = quizData[currentQuestionIndex];
  const currentSection = sections.find(s => s.key === currentQuestion?.section);

  const progress = (currentQuestionIndex / quizData.length) * 100;

  useEffect(() => {
    if (currentQuestionIndex > 0 && currentQuestionIndex >= quizData.length) {
      const answersQueryParam = encodeURIComponent(answers.join("|"));
      router.push(`/quiz/results?answers=${answersQueryParam}`);
    }
  }, [currentQuestionIndex, answers, router]);

  const handleAnswer = (answer: Answer) => {
    if (showFeedback) return;
    
    setAnswers((prev) => [...prev, answer.text]);
    setFeedback(answer.feedback);
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      setFeedback(null);
      setCurrentQuestionIndex((prev) => prev + 1);
    }, 2500);
  };
  
  if (!currentQuestion || !currentSection) {
    return null; 
  }

  const SectionIcon = currentSection.icon;

  return (
    <div className="container mx-auto flex max-w-2xl flex-col items-center justify-center p-4 py-12">
      <div className="w-full">
        <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
               <SectionIcon className="h-5 w-5" />
               <span>{currentSection.title}</span>
            </div>
            <p className="text-sm text-muted-foreground">Pergunta {currentQuestionIndex + 1} de {quizData.length}</p>
        </div>
        <Progress value={progress} className="mb-8 h-2" />

        <Card className="w-full text-center shadow-lg">
          <CardHeader>
            <CardTitle className="font-body text-2xl font-semibold leading-tight">
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
                  className="h-auto min-h-12 justify-center whitespace-normal py-3 text-base"
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
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-primary">
                  <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
                  <p className="text-base font-semibold text-primary-foreground">{feedback}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
