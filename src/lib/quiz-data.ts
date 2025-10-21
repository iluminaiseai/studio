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
    text: 'Ele(a) inicia conversas ou só responde quando você chama?',
    answers: [
      { text: 'Ele(a) geralmente inicia', feedback: 'Ótimo! Iniciativa é um forte sinal de interesse.', score: 2 },
      { text: 'Apenas responde', feedback: 'Pode indicar reatividade. Vamos ver os outros sinais.', score: -1 },
      { text: 'É bem equilibrado', feedback: 'Reciprocidade é um pilar de relacionamentos saudáveis.', score: 1 },
    ],
  },
  {
    id: 2,
    section: 'communication',
    text: 'Quando vocês conversam, ele(a) parece genuinamente atento(a) ou distraído(a)?',
    answers: [
      { text: 'Parece atento(a) e presente', feedback: 'Atenção plena demonstra grande respeito e interesse.', score: 2 },
      { text: 'Frequentemente parece distraído(a)', feedback: 'Isso pode ser um sinal de alerta sobre as prioridades dele(a).', score: -1 },
    ],
  },
  // Seção 2 — Tempo juntos e atenção (Max score: 4)
  {
    id: 3,
    section: 'timeTogether',
    text: 'Ele(a) faz planos concretos para o futuro com você (viagens, eventos) ou evita o assunto?',
    answers: [
      { text: 'Sim, faz planos', feedback: 'Incluir você no futuro é um sinal claro de compromisso.', score: 2 },
      { text: 'Não, evita ou desconversa', feedback: 'Evitar o futuro pode indicar incerteza ou medo de compromisso.', score: -1 },
    ],
  },
  {
    id: 4,
    section: 'timeTogether',
    text: 'Quando estão juntos, ele(a) demonstra carinho com gestos e toques ou mantém distância?',
    answers: [
      { text: 'Sim, demonstra carinho', feedback: 'O contato físico fortalece a intimidade e a conexão.', score: 2 },
      { text: 'Não, mantém uma certa distância', feedback: 'A falta de contato pode ser um sinal de distanciamento emocional.', score: -1 },
    ],
  },
    // Seção 3 — Mudanças de comportamento (Max score: 4)
  {
    id: 5,
    section: 'behaviorChanges',
    text: 'Comparado ao início, a frequência e a qualidade das conversas diminuíram drasticamente?',
    answers: [
      { text: 'Sim, diminuíram muito', feedback: 'Uma queda brusca é um sinal de alerta importante a ser observado.', score: -2 },
      { text: 'Não, continuam consistentes ou melhoraram', feedback: 'Consistência é um sinal de estabilidade e interesse contínuo.', score: 2 },
    ],
  },
  {
    id: 6,
    section: 'behaviorChanges',
    text: 'Ele(a) costumava ser mais aberto(a) sobre a vida pessoal e agora parece mais reservado(a)?',
    answers: [
      { text: 'Sim, está mais reservado(a)', feedback: 'Fechar-se pode indicar que algo o(a) está incomodando.', score: -2 },
      { text: 'Não, a transparência continua a mesma', feedback: 'Manter a abertura é um sinal de confiança mútua.', score: 2 },
    ],
  },
  // Seção 4 — Reações a conflitos (Max score: 4)
  {
    id: 7,
    section: 'reactionsToConflicts',
    text: 'Quando você tenta discutir um problema, ele(a) se irrita e te acusa ou tenta ouvir e entender?',
    answers: [
      { text: 'Tenta ouvir e entender', feedback: 'Uma abordagem madura para resolver conflitos é essencial.', score: 2 },
      { text: 'Fica na defensiva ou se irrita', feedback: 'Reatividade excessiva pode impedir a resolução de problemas.', score: -2 },
    ],
  },
  {
    id: 8,
    section: 'reactionsToConflicts',
    text: 'Após uma discussão, ele(a) busca a reconciliação ou age com indiferença e "gelo"?',
    answers: [
      { text: 'Busca a reconciliação', feedback: 'Isso mostra que ele(a) valoriza mais o relacionamento do que o orgulho.', score: 2 },
      { text: 'Age com indiferença (me dá um gelo)', feedback: 'O "tratamento de silêncio" é uma forma passiva de agressão.', score: -2 },
    ],
  },
    // Seção 5 — Sinais de interesse (Max score: 4)
  {
    id: 9,
    section: 'signsOfInterest',
    text: 'Ele(a) elogia você ou demonstra apreciação por suas qualidades e conquistas?',
    answers: [
      { text: 'Sim, com frequência', feedback: 'Reconhecimento e admiração são combustíveis para a autoestima e a conexão.', score: 2 },
      { text: 'Raramente ou nunca', feedback: 'A falta de validação pode criar um sentimento de invisibilidade.', score: -2 },
    ],
  },
  {
    id: 10,
    section: 'signsOfInterest',
    text: 'Ele(a) demonstra ter orgulho de estar com você na frente de amigos e familiares?',
    answers: [
      { text: 'Sim, claramente', feedback: 'Apresentar você e falar bem de você publicamente é um forte sinal de compromisso.', score: 2 },
      { text: 'Não, parece me "esconder"', feedback: 'Isso é uma grande bandeira vermelha sobre as intenções dele(a).', score: -2 },
    ],
  },
];
