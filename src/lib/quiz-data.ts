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
  { key: 'communication', title: 'Papo reto', icon: MessagesSquare },
  { key: 'timeTogether', title: 'Grudinhos ou nem tanto?', icon: HeartHandshake },
  { key: 'behaviorChanges', title: 'Mudou, né?', icon: Repeat },
  { key: 'reactionsToConflicts', title: 'Eita, treta!', icon: ShieldAlert },
  { key: 'signsOfInterest', title: 'Tá a fim ou não?', icon: LogoCapricho },
];

export const quizData: Question[] = [
  // Seção 1 — Comunicação
  {
    id: 1,
    section: 'communication',
    text: 'Na hora de chamar no zap, quem manda o primeiro "oi"?',
    answers: [
      { text: 'A gente se reveza, super de boa.', score: 2 },
      { text: 'Quase sempre sou eu que tenho que ir atrás...', score: -2 },
      { text: 'Normalmente é a outra pessoa que me chama.', score: 1 },
    ],
  },
  {
    id: 2,
    section: 'communication',
    text: 'Quando você conta uma fofoca ou algo importante, a pessoa...',
    answers: [
      { text: 'Presta atenção e até lembra dos detalhes depois. Um fofo!', score: 2 },
      { text: 'Parece que ouve, mas entra por um ouvido e sai pelo outro.', score: -2 },
      { text: 'Escuta, mas com a mesma empolgação de quem vê a tinta secar.', score: -1 },
    ],
  },
  // Seção 2 — Tempo juntos e atenção
  {
    id: 3,
    section: 'timeTogether',
    text: 'E os rolês futuros? A pessoa te inclui nos planos?',
    answers: [
      { text: 'Sim! Já falamos de viagens, shows... me sinto super incluída.', score: 2 },
      { text: 'Não, os planos são sempre pra "agora" ou pro finde, nada muito longe.', score: -2 },
      { text: 'Até comenta, mas fica tudo no ar, sem nada muito certo.', score: -1 },
    ],
  },
  {
    id: 4,
    section: 'timeTogether',
    text: 'Quando vocês estão juntos, o carinho (tipo abraço, andar de mãos dadas) rola naturalmente?',
    answers: [
      { text: 'Sim, o tempo todo, é super espontâneo e gostoso.', score: 2 },
      { text: 'É raro. Às vezes parece que é por obrigação, sabe?', score: -2 },
    ],
  },
    // Seção 3 — Mudanças de comportamento
  {
    id: 5,
    section: 'behaviorChanges',
    text: 'Aquele esforço pra te agradar ou fazer uma surpresinha... mudou com o tempo?',
    answers: [
      { text: 'Sim, hoje em dia se esforça até MAIS que no começo. Um sonho!', score: 2 },
      { text: 'Sim, o esforço do início simplesmente sumiu no mapa.', score: -2 },
      { text: 'Tá na mesma, nem pra mais, nem pra menos.', score: 1 },
    ],
  },
  {
    id: 6,
    section: 'behaviorChanges',
    text: 'O celular virou um cofre? A pessoa tá mais misteriosa e esconde o aparelho?',
    answers: [
      { text: 'Sim, tá cheio de segredinhos e o celular virou área proibida.', score: -2 },
      { text: 'Não, a confiança é a mesma de sempre, super transparente.', score: 2 },
    ],
  },
  // Seção 4 — Reações a conflitos
  {
    id: 7,
    section: 'reactionsToConflicts',
    text: 'Quando você fica chateada com alguma coisa, qual a reação da pessoa?',
    answers: [
      { text: 'Tenta me entender, ouvir meu lado e o que eu tô sentindo.', score: 2 },
      { text: 'Me chama de dramática ou diz que tô exagerando.', score: -2 },
      { text: 'Fica com raiva e uma conversinha vira uma briga gigante.', score: -1 },
    ],
  },
  {
    id: 8,
    section: 'reactionsToConflicts',
    text: 'E depois de uma treta, quem é que vai atrás pra fazer as pazes?',
    answers: [
      { text: 'A outra pessoa geralmente vem falar comigo e resolve as coisas.', score: 1 },
      { text: 'Me ignora por dias, parece até que tá me castigando.', score: -2 },
      { text: 'A gente espera a poeira baixar e depois conversa, numa boa.', score: 2 },
    ],
  },
    // Seção 5 — Sinais de interesse
  {
    id: 9,
    section: 'signsOfInterest',
    text: 'Na frente dos amigos ou em público, como a pessoa fala de você?',
    answers: [
      { text: 'Fala de mim com orgulho, me elogia na frente de todo mundo!', score: 2 },
      { text: 'Evita falar de mim ou me apresenta só como "uma amiga".', score: -2 },
    ],
  },
  {
    id: 10,
    section: 'signsOfInterest',
    text: 'E seus sonhos e projetos? A pessoa te apoia?',
    answers: [
      { text: 'Sim, é meu fã número 1, sempre me bota pra cima!', score: 2 },
      { text: 'Não muito. Às vezes até tira sarro ou diminui o que eu quero.', score: -2 },
      { text: 'É indiferente. Não ajuda, mas também não atrapalha.', score: -1 },
    ],
  },
];
