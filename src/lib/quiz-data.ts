
import { HeartHandshake, MessagesSquare, Repeat, ShieldAlert, Sparkles } from "lucide-react";

export type Answer = {
  text: string;
  feedback: string;
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
  { key: 'signsOfInterest', title: 'Sinais de interesse/atração', icon: Sparkles },
];

export const quizData: Question[] = [
  // Seção 1 — Comunicação (Max score: 4)
  {
    id: 1,
    section: 'communication',
    text: 'Quando você pensa em iniciar uma conversa, você sente leveza, como se fosse um espaço seguro, ou sente um peso, como se estivesse interrompendo ou incomodando?',
    answers: [
      { text: 'Sinto leveza, é um espaço seguro e recíproco.', feedback: 'Isso é um sinal vital. A comunicação que flui sem esforço é a base de uma conexão saudável.', score: 2 },
      { text: 'Sinto um peso, como se eu fosse um incômodo.', feedback: 'Esse sentimento é um alerta importante. Ninguém deveria se sentir como um fardo.', score: -2 },
      { text: 'Depende do dia, é um pouco instável.', feedback: 'A instabilidade pode gerar ansiedade. Vamos entender por que isso acontece.', score: -1 },
    ],
  },
  {
    id: 2,
    section: 'communication',
    text: 'Pense na última vez que você compartilhou algo importante. Ele(a) lembrou do assunto dias depois ou pareceu esquecer completamente?',
    answers: [
      { text: 'Sim, ele(a) lembrou e até perguntou sobre o assunto.', feedback: 'Memória e acompanhamento são provas de atenção genuína. Ele(a) está investindo em você.', score: 2 },
      { text: 'Não, parece que a conversa nunca aconteceu.', feedback: 'A falta de retenção pode indicar que a atenção dele(a) estava em outro lugar.', score: -2 },
    ],
  },
  // Seção 2 — Tempo juntos e atenção (Max score: 4)
  {
    id: 3,
    section: 'timeTogether',
    text: 'Ele(a) te inclui em planos futuros (uma viagem no próximo ano, um grande evento) ou o futuro de vocês parece se limitar à próxima semana?',
    answers: [
      { text: 'Sim, sou parte clara dos planos de longo prazo.', feedback: 'Isso é excelente. Ser incluída no futuro demonstra um compromisso real.', score: 2 },
      { text: 'Não, os planos raramente passam do próximo fim de semana.', feedback: 'Viver no curto prazo pode ser um sinal de que ele(a) não vê ou não quer um futuro juntos.', score: -2 },
    ],
  },
  {
    id: 4,
    section: 'timeTogether',
    text: 'Quando estão juntos, o toque físico (um abraço, um carinho no cabelo, dar as mãos) é algo natural e frequente ou é raro e calculado?',
    answers: [
      { text: 'É natural e frequente, parte da nossa dinâmica.', feedback: 'A intimidade física espontânea é um pilar que fortalece a conexão emocional.', score: 2 },
      { text: 'É raro e parece forçado, quase protocolar.', feedback: 'A distância física muitas vezes reflete uma distância emocional. É um ponto a ser observado.', score: -2 },
    ],
  },
    // Seção 3 — Mudanças de comportamento (Max score: 4)
  {
    id: 5,
    section: 'behaviorChanges',
    text: 'Compare o início do relacionamento com agora. O esforço para te agradar e surpreender (um elogio, uma pequena gentileza) aumentou ou desapareceu?',
    answers: [
      { text: 'Desapareceu quase que por completo.', feedback: 'Quando o esforço inicial some, é um sinal de que a fase de conquista acabou e a de manutenção não começou.', score: -2 },
      { text: 'Continua consistente ou até melhorou.', feedback: 'Isso é raro e valioso. Mostra que o desejo de te fazer feliz é genuíno e contínuo.', score: 2 },
    ],
  },
  {
    id: 6,
    section: 'behaviorChanges',
    text: 'Ele(a) tem novos "segredos" ou uma vida "privada" no celular que antes não existia, fazendo você se sentir um pouco de fora?',
    answers: [
      { text: 'Sim, sinto que há um mundo ali do qual não faço parte.', feedback: 'Novos segredos e privacidade excessiva são bandeiras vermelhas clássicas. A confiança é abalada.', score: -2 },
      { text: 'Não, a transparência e a confiança continuam as mesmas.', feedback: 'Abertura e transparência são o antídoto para a desconfiança. Sinal de um ambiente seguro.', score: 2 },
    ],
  },
  // Seção 4 — Reações a conflitos (Max score: 4)
  {
    id: 7,
    section: 'reactionsToConflicts',
    text: 'Quando você expressa uma frustração, a reação dele(a) é de curiosidade para entender sua dor ou de irritação por você estar "reclamando"?',
    answers: [
      { text: 'Ele(a) tenta genuinamente entender meu ponto de vista.', feedback: 'Parceiros que ouvem a dor do outro constroem pontes, não muros. Isso é maturidade.', score: 2 },
      { text: 'Sou vista como "reclamona" ou "dramática".', feedback: 'Invalidar seus sentimentos é uma forma de manipulação. Seu sentir é legítimo.', score: -2 },
    ],
  },
  {
    id: 8,
    section: 'reactionsToConflicts',
    text: 'Após uma briga, ele(a) te procura para resolver e se reconectar ou te pune com silêncio, esperando que você "aprenda a lição"?',
    answers: [
      { text: 'Ele(a) busca a reconciliação, mesmo que demore um pouco.', feedback: 'Priorizar a relação acima do orgulho é um sinal de quem realmente se importa em resolver.', score: 2 },
      { text: 'Recebo o "tratamento de silêncio" por dias.', feedback: 'O silêncio como punição é uma forma de abuso emocional. É cruel e destrutivo.', score: -2 },
    ],
  },
    // Seção 5 — Sinais de interesse (Max score: 4)
  {
    id: 9,
    section: 'signsOfInterest',
    text: 'Em uma roda de amigos, ele(a) conta uma história sua com um brilho no olho, te elogiando, ou evita te mencionar?',
    answers: [
      { text: 'Sim, ele(a) fala de mim com orgulho visível.', feedback: 'Ter orgulho de você em público é uma das maiores demonstrações de valor e parceria.', score: 2 },
      { text: 'Raramente sou o foco, é como se eu fosse um detalhe.', feedback: 'Sentir-se invisível ao lado de quem você ama é solitário e doloroso.', score: -2 },
    ],
  },
  {
    id: 10,
    section: 'signsOfInterest',
    text: 'Ele(a) apoia seus sonhos e projetos pessoais, mesmo que não os entenda completamente, ou os minimiza como se fossem bobagem?',
    answers: [
      { text: 'É meu maior incentivador(a), sempre me impulsiona.', feedback: 'Um parceiro que rega seus sonhos é um tesouro. Isso constrói um futuro juntos.', score: 2 },
      { text: 'Minimiza ou faz piada dos meus sonhos.', feedback: 'Quem não respeita seus sonhos, não respeita uma parte essencial de quem você é.', score: -2 },
    ],
  },
];
