
import { HeartHandshake, MessagesSquare, Repeat, ShieldAlert } from "lucide-react";
import { LogoCapricho } from "@/components/logo-capricho";

export type Answer = {
  text: string;
  score: number;
};

export type Question = {
  id: number;
  section: 'communication' | 'timeTogether' | 'behaviorChanges' | 'reactionsToConflicts' | 'signsOfInterest';
  text: string;
  answers: Answer[];
};

export type Section = {
  key: Question['section'];
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const sections: Section[] = [
  { key: 'communication', title: 'Comunicação', icon: MessagesSquare },
  { key: 'timeTogether', title: 'Tempo juntos e atenção', icon: HeartHandshake },
  { key: 'behaviorChanges', title: 'Mudanças de comportamento', icon: Repeat },
  { key: 'reactionsToConflicts', title: 'Reações a conflitos', icon: ShieldAlert },
  { key: 'signsOfInterest', title: 'Sinais de interesse/atração', icon: LogoCapricho },
];

export const quizData: Question[] = [
  // Seção 1 — Comunicação (Max score: 4)
  {
    id: 1,
    section: 'communication',
    text: 'Quem geralmente inicia as conversas?',
    answers: [
      { text: 'Ambos iniciamos, é bem equilibrado.', score: 2 },
      { text: 'Na maioria das vezes, sou eu quem procuro.', score: -2 },
      { text: 'Normalmente é ele(a) quem me procura.', score: 1 },
    ],
  },
  {
    id: 2,
    section: 'communication',
    text: 'Quando você conta algo importante, como é a reação?',
    answers: [
      { text: 'Ele(a) presta atenção e se lembra dos detalhes depois.', score: 2 },
      { text: 'Parece que ouve, mas logo esquece o que eu disse.', score: -2 },
      { text: 'Ouve, mas não demonstra muito interesse.', score: -1 },
    ],
  },
  // Seção 2 — Tempo juntos e atenção (Max score: 4)
  {
    id: 3,
    section: 'timeTogether',
    text: 'Ele(a) faz planos com você para o futuro? (Ex: viagens, eventos distantes)',
    answers: [
      { text: 'Sim, sempre me inclui em seus planos de longo prazo.', score: 2 },
      { text: 'Não, os planos são sempre de última hora ou para o fim de semana.', score: -2 },
      { text: 'Às vezes, mas de forma vaga e sem muita certeza.', score: -1 },
    ],
  },
  {
    id: 4,
    section: 'timeTogether',
    text: 'Quando estão juntos, o carinho físico (abraços, andar de mãos dadas) acontece de forma natural?',
    answers: [
      { text: 'Sim, o toque é constante e espontâneo.', score: 2 },
      { text: 'É raro e às vezes parece forçado ou por obrigação.', score: -2 },
    ],
  },
    // Seção 3 — Mudanças de comportamento (Max score: 4)
  {
    id: 5,
    section: 'behaviorChanges',
    text: 'O esforço para te agradar ou surpreender mudou com o tempo?',
    answers: [
      { text: 'Sim, hoje ele(a) se esforça ainda mais do que no início.', score: 2 },
      { text: 'Sim, o esforço do início praticamente desapareceu.', score: -2 },
      { text: 'Continua igual, nem mais, nem menos.', score: 1 },
    ],
  },
  {
    id: 6,
    section: 'behaviorChanges',
    text: 'Ele(a) passou a ter mais segredos ou esconder o celular de um jeito que não fazia antes?',
    answers: [
      { text: 'Sim, sinto que ele(a) esconde coisas e a privacidade aumentou.', score: -2 },
      { text: 'Não, a transparência e a confiança são as mesmas de sempre.', score: 2 },
    ],
  },
  // Seção 4 — Reações a conflitos (Max score: 4)
  {
    id: 7,
    section: 'reactionsToConflicts',
    text: 'Quando você fica chateada com algo, qual é a reação dele(a)?',
    answers: [
      { text: 'Ele(a) tenta entender o meu lado e ouvir o que sinto.', score: 2 },
      { text: 'Diz que estou exagerando ou fazendo "drama".', score: -2 },
      { text: 'Ele(a) fica irritado(a) e a conversa vira uma briga.', score: -1 },
    ],
  },
  {
    id: 8,
    section: 'reactionsToConflicts',
    text: 'Depois de uma briga, quem procura para resolver?',
    answers: [
      { text: 'Ele(a) costuma me procurar para fazer as pazes.', score: 1 },
      { text: 'Ele(a) me ignora por dias, como se estivesse me punindo.', score: -2 },
      { text: 'Ambos esperamos a poeira baixar e depois conversamos.', score: 2 },
    ],
  },
    // Seção 5 — Sinais de interesse (Max score: 4)
  {
    id: 9,
    section: 'signsOfInterest',
    text: 'Em público ou com amigos, como ele(a) se refere a você?',
    answers: [
      { text: 'Fala de mim com orgulho, me elogia na frente dos outros.', score: 2 },
      { text: 'Evita falar de mim ou me apresenta de forma superficial.', score: -2 },
    ],
  },
  {
    id: 10,
    section: 'signsOfInterest',
    text: 'Ele(a) apoia seus sonhos e projetos pessoais?',
    answers: [
      { text: 'Sim, é meu maior fã e sempre me incentiva a crescer.', score: 2 },
      { text: 'Não muito, às vezes até faz piada ou minimiza o que eu quero.', score: -2 },
      { text: 'É indiferente, não apoia mas também não atrapalha.', score: -1 },
    ],
  },
];
