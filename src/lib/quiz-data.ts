import { HeartHandshake, MessagesSquare, Repeat, ShieldAlert, Sparkles } from "lucide-react";

export type Answer = {
  text: string;
  feedback: string;
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
  // Seção 1 — Comunicação
  {
    id: 1,
    section: 'communication',
    text: 'Ele(a) responde suas mensagens rapidamente ou demora sem explicação?',
    answers: [
      { text: 'Sim', feedback: 'Ele(a) está presente e atento(a), mostrando interesse genuíno.' },
      { text: 'Não', feedback: 'Pode estar distraído(a) ou com prioridades divididas, observe padrões.' },
      { text: 'Às vezes', feedback: 'Respostas inconsistentes podem gerar dúvidas, mas observe a frequência.' },
    ],
  },
  {
    id: 2,
    section: 'communication',
    text: 'Quando vocês conversam, ele(a) parece atento(a) ou distraído(a)?',
    answers: [
      { text: 'Atento', feedback: 'Demonstra interesse real em suas palavras e sentimentos.' },
      { text: 'Distraído', feedback: 'Talvez esteja com outras preocupações, fique atento(a) a padrões.' },
    ],
  },
  {
    id: 3,
    section: 'communication',
    text: 'Ele(a) inicia conversas ou só responde quando você chama?',
    answers: [
      { text: 'Inicia', feedback: 'Mostra iniciativa e envolvimento no relacionamento.' },
      { text: 'Só responde', feedback: 'Pode indicar menor proatividade, mas ainda há atenção quando responde.' },
      { text: 'Ambos', feedback: 'Existe reciprocidade na comunicação, bom sinal de equilíbrio.' },
    ],
  },
  {
    id: 4,
    section: 'communication',
    text: 'Ele(a) evita falar sobre sentimentos ou sobre o relacionamento?',
    answers: [
      { text: 'Não', feedback: 'Comunicação aberta é um ponto forte da relação.' },
      { text: 'Sim', feedback: 'Evitar falar de sentimentos pode indicar medo ou insegurança, fique atento(a).' },
    ],
  },
  {
    id: 5,
    section: 'communication',
    text: 'Ele(a) te conta sobre o dia dele(a) ou mantém segredo de coisas simples?',
    answers: [
      { text: 'Conta', feedback: 'Transparência fortalece confiança e intimidade.' },
      { text: 'Mantém segredo', feedback: 'Falta de compartilhamento pode gerar desconexão emocional.' },
    ],
  },
  // Seção 2 — Tempo juntos e atenção
  {
    id: 6,
    section: 'timeTogether',
    text: 'Ele(a) busca estar sozinho(a) com você ou prefere se distanciar?',
    answers: [
      { text: 'Sempre busca estar sozinho(a)', feedback: 'Ele(a) valoriza tempo de qualidade com você.' },
      { text: 'Prefere se distanciar', feedback: 'Pode indicar que precisa de espaço ou está distraído(a).' },
    ],
  },
  {
    id: 7,
    section: 'timeTogether',
    text: 'Quando estão juntos, ele(a) presta atenção ou parece distante?',
    answers: [
      { text: 'Presta atenção', feedback: 'Sua presença é valorizada e ele(a) está emocionalmente disponível.' },
      { text: 'Parece distante', feedback: 'Observe se é momentâneo ou padrão de comportamento.' },
    ],
  },
  {
    id: 8,
    section: 'timeTogether',
    text: 'Ele(a) faz planos futuros com você ou evita falar sobre isso?',
    answers: [
      { text: 'Faz planos', feedback: 'Isso mostra compromisso e visão de futuro juntos.' },
      { text: 'Evita falar', feedback: 'Pode indicar insegurança ou medo de se comprometer.' },
    ],
  },
  {
    id: 9,
    section: 'timeTogether',
    text: 'Ele(a) demonstra carinho em público ou parece indiferente?',
    answers: [
      { text: 'Demonstra', feedback: 'O carinho público reforça a conexão e orgulho no relacionamento.' },
      { text: 'Indiferente', feedback: 'Evitar carinho público pode indicar timidez ou falta de confiança.' },
    ],
  },
  {
    id: 10,
    section: 'timeTogether',
    text: 'Ele(a) interrompe atividades importantes para te dar atenção?',
    answers: [
      { text: 'Sim', feedback: 'Prioriza você e valoriza momentos juntos.' },
      { text: 'Não', feedback: 'Pode ser uma questão de equilíbrio ou foco em outras tarefas.' },
    ],
  },
  // Seção 3 — Mudanças de comportamento
  {
    id: 11,
    section: 'behaviorChanges',
    text: 'Você percebeu mudanças na rotina dele(a) que te deixaram insegura?',
    answers: [
      { text: 'Não', feedback: 'Rotina está consistente, bom sinal de estabilidade.' },
      { text: 'Sim', feedback: 'Mudanças podem indicar estresse ou ajustes na vida pessoal.' },
    ],
  },
  {
    id: 12,
    section: 'behaviorChanges',
    text: 'Ele(a) costumava demonstrar interesse/afeto e agora parece menos interessado(a)?',
    answers: [
      { text: 'Não', feedback: 'O interesse permanece constante, ótimo sinal.' },
      { text: 'Sim', feedback: 'Observe se é passageiro ou padrão de comportamento.' },
    ],
  },
  {
    id: 13,
    section: 'behaviorChanges',
    text: 'Ele(a) evita contato físico que antes era comum?',
    answers: [
      { text: 'Não', feedback: 'Contato físico consistente indica afeto contínuo.' },
      { text: 'Sim', feedback: 'Pode ser sinal de distração, cansaço ou desinteresse momentâneo.' },
    ],
  },
  {
    id: 14,
    section: 'behaviorChanges',
    text: 'Ele(a) mudou hábitos de comunicação, como mensagens ou ligações?',
    answers: [
      { text: 'Não', feedback: 'Consistência na comunicação é excelente para estabilidade.' },
      { text: 'Sim', feedback: 'Mudanças podem indicar prioridades ou desconexão emocional temporária.' },
    ],
  },
  {
    id: 15,
    section: 'behaviorChanges',
    text: 'Você sente que ele(a) está emocionalmente distante recentemente?',
    answers: [
      { text: 'Não', feedback: 'Presença emocional está intacta, bom sinal de vínculo saudável.' },
      { text: 'Sim', feedback: 'Vale observar frequência e contexto, para entender se é momentâneo.' },
    ],
  },
  // Seção 4 — Reações a conflitos ou conversas
  {
    id: 16,
    section: 'reactionsToConflicts',
    text: 'Ele(a) evita discutir problemas do relacionamento ou reage com irritação?',
    answers: [
      { text: 'Evita', feedback: 'Pode ser estratégia de evitar conflitos, mas atenção se padrões se repetem.' },
      { text: 'Reage com irritação', feedback: 'Pode indicar dificuldade em lidar com críticas, observe padrões.' },
    ],
  },
  {
    id: 17,
    section: 'reactionsToConflicts',
    text: 'Ele(a) aceita feedbacks e tenta melhorar, ou ignora o que você diz?',
    answers: [
      { text: 'Aceita', feedback: 'Disposição para melhorar é ótimo sinal de maturidade emocional.' },
      { text: 'Ignora', feedback: 'Ignorar feedbacks pode gerar problemas de comunicação.' },
    ],
  },
  {
    id: 18,
    section: 'reactionsToConflicts',
    text: 'Ele(a) muda de assunto quando você fala de sentimentos?',
    answers: [
      { text: 'Não', feedback: 'Está aberto(a) à comunicação emocional, excelente sinal.' },
      { text: 'Sim', feedback: 'Evitar falar de sentimentos pode indicar medo ou insegurança.' },
    ],
  },
  {
    id: 19,
    section: 'reactionsToConflicts',
    text: 'Ele(a) demonstra preocupação com seu bem-estar ou parece indiferente?',
    answers: [
      { text: 'Demonstra', feedback: 'Mostra cuidado e empatia constante.' },
      { text: 'Indiferente', feedback: 'Pode indicar desinteresse ou desconexão momentânea.' },
    ],
  },
  {
    id: 20,
    section: 'reactionsToConflicts',
    text: 'Ele(a) se desculpa quando erra ou minimiza os problemas?',
    answers: [
      { text: 'Pede desculpas', feedback: 'Reconhece erros e mantém o relacionamento saudável.' },
      { text: 'Minimiza', feedback: 'Pode gerar frustração a longo prazo, observe padrão.' },
    ],
  },
  // Seção 5 — Sinais de interesse/atração
  {
    id: 21,
    section: 'signsOfInterest',
    text: 'Ele(a) demonstra ciúmes quando você se aproxima de outras pessoas?',
    answers: [
      { text: 'Sim', feedback: 'Sinais de ciúmes saudáveis indicam interesse e cuidado.' },
      { text: 'Não', feedback: 'Falta de ciúmes não significa desinteresse, apenas confiança no relacionamento.' },
    ],
  },
  {
    id: 22,
    section: 'signsOfInterest',
    text: 'Ele(a) elogia ou demonstra apreciação pelo que você faz?',
    answers: [
      { text: 'Sim', feedback: 'Reconhecimento fortalece vínculo e autoestima.' },
      { text: 'Não', feedback: 'A ausência de elogios pode ser cultural ou hábito, observe consistência.' },
    ],
  },
  {
    id: 23,
    section: 'signsOfInterest',
    text: 'Ele(a) te procura fisicamente e emocionalmente ou só responde por obrigação?',
    answers: [
      { text: 'Procura', feedback: 'Busca conexão genuína, muito positivo.' },
      { text: 'Apenas por obrigação', feedback: 'Pode indicar falta de motivação ou desinteresse emocional.' },
    ],
  },
  {
    id: 24,
    section: 'signsOfInterest',
    text: 'Ele(a) demonstra empolgação ao planejar encontros com você?',
    answers: [
      { text: 'Sim', feedback: 'Empolgação reforça desejo de estar junto e compromisso.' },
      { text: 'Não', feedback: 'A falta de empolgação pode indicar rotina ou distração.' },
    ],
  },
  {
    id: 25,
    section: 'signsOfInterest',
    text: 'Ele(a) lembra de detalhes importantes sobre você ou esquece com frequência?',
    answers: [
      { text: 'Lembra', feedback: 'Demonstra atenção e envolvimento real.' },
      { text: 'Esquece', feedback: 'Pode ser desatenção momentânea, observe padrões.' },
    ],
  },
];
