
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
    text: 'Quem geralmente inicia as conversas?',
    answers: [
      { text: 'Ambos iniciamos, é bem equilibrado.', feedback: 'Equilíbrio é um ótimo sinal de interesse mútuo.', score: 2 },
      { text: 'Na maioria das vezes, sou eu quem procuro.', feedback: 'Sentir que a iniciativa é só sua pode ser desgastante.', score: -2 },
      { text: 'Normalmente é ele(a) quem me procura.', feedback: 'Ele(a) tomar a iniciativa mostra um interesse claro em se conectar.', score: 1 },
    ],
  },
  {
    id: 2,
    section: 'communication',
    text: 'Quando você conta algo importante, como é a reação?',
    answers: [
      { text: 'Ele(a) presta atenção e se lembra dos detalhes depois.', feedback: 'Atenção aos detalhes é uma grande prova de carinho e consideração.', score: 2 },
      { text: 'Parece que ouve, mas logo esquece o que eu disse.', feedback: 'Isso pode fazer você se sentir pouco importante. A memória seletiva é um alerta.', score: -2 },
      { text: 'Ouve, mas não demonstra muito interesse.', feedback: 'A falta de entusiasmo pode indicar que a conexão não é mais uma prioridade.', score: -1 },
    ],
  },
  // Seção 2 — Tempo juntos e atenção (Max score: 4)
  {
    id: 3,
    section: 'timeTogether',
    text: 'Ele(a) faz planos com você para o futuro? (Ex: viagens, eventos distantes)',
    answers: [
      { text: 'Sim, sempre me inclui em seus planos de longo prazo.', feedback: 'Ser parte do futuro de alguém é um forte sinal de compromisso.', score: 2 },
      { text: 'Não, os planos são sempre de última hora ou para o fim de semana.', feedback: 'Viver só no curto prazo pode ser um sinal de que a relação não é vista como algo duradouro.', score: -2 },
      { text: 'Às vezes, mas de forma vaga e sem muita certeza.', feedback: 'Planos vagos geram insegurança. A falta de certeza é um ponto a ser observado.', score: -1 },
    ],
  },
  {
    id: 4,
    section: 'timeTogether',
    text: 'Quando estão juntos, o carinho físico (abraços, andar de mãos dadas) acontece de forma natural?',
    answers: [
      { text: 'Sim, o toque é constante e espontâneo.', feedback: 'O carinho físico natural fortalece muito a conexão emocional do casal.', score: 2 },
      { text: 'É raro e às vezes parece forçado ou por obrigação.', feedback: 'A distância física muitas vezes é um espelho da distância emocional.', score: -2 },
    ],
  },
    // Seção 3 — Mudanças de comportamento (Max score: 4)
  {
    id: 5,
    section: 'behaviorChanges',
    text: 'O esforço para te agradar ou surpreender mudou com o tempo?',
    answers: [
      { text: 'Sim, hoje ele(a) se esforça ainda mais do que no início.', feedback: 'Isso é raro e muito valioso! Mostra um desejo contínuo de te fazer feliz.', score: 2 },
      { text: 'Sim, o esforço do início praticamente desapareceu.', feedback: 'Quando o esforço some, pode ser um sinal de que a pessoa se acomodou na relação.', score: -2 },
      { text: 'Continua igual, nem mais, nem menos.', feedback: 'Consistência é bom, mas é sempre importante que ambos continuem "regando" a relação.', score: 1 },
    ],
  },
  {
    id: 6,
    section: 'behaviorChanges',
    text: 'Ele(a) passou a ter mais segredos ou esconder o celular de um jeito que não fazia antes?',
    answers: [
      { text: 'Sim, sinto que ele(a) esconde coisas e a privacidade aumentou.', feedback: 'Novos segredos são uma bandeira vermelha. A confiança é a base de tudo.', score: -2 },
      { text: 'Não, a transparência e a confiança são as mesmas de sempre.', feedback: 'Confiança mútua é o pilar de um relacionamento saudável e seguro.', score: 2 },
    ],
  },
  // Seção 4 — Reações a conflitos (Max score: 4)
  {
    id: 7,
    section: 'reactionsToConflicts',
    text: 'Quando você fica chateada com algo, qual é a reação dele(a)?',
    answers: [
      { text: 'Ele(a) tenta entender o meu lado e ouvir o que sinto.', feedback: 'Ter um parceiro que valida seus sentimentos constrói pontes, não muros.', score: 2 },
      { text: 'Diz que estou exagerando ou fazendo "drama".', feedback: 'Invalidar o que você sente é desrespeitoso. Seus sentimentos são legítimos.', score: -2 },
      { text: 'Ele(a) fica irritado(a) e a conversa vira uma briga.', feedback: 'Se toda conversa vira briga, a comunicação de vocês está quebrada.', score: -1 },
    ],
  },
  {
    id: 8,
    section: 'reactionsToConflicts',
    text: 'Depois de uma briga, quem procura para resolver?',
    answers: [
      { text: 'Ele(a) costuma me procurar para fazer as pazes.', feedback: 'Deixar o orgulho de lado para resolver as coisas mostra maturidade.', score: 1 },
      { text: 'Ele(a) me ignora por dias, como se estivesse me punindo.', feedback: 'O "tratamento de silêncio" é uma forma de punição cruel e destrutiva.', score: -2 },
      { text: 'Ambos esperamos a poeira baixar e depois conversamos.', feedback: 'Saber dar tempo ao tempo e depois resolver é uma abordagem madura.', score: 2 },
    ],
  },
    // Seção 5 — Sinais de interesse (Max score: 4)
  {
    id: 9,
    section: 'signsOfInterest',
    text: 'Em público ou com amigos, como ele(a) se refere a você?',
    answers: [
      { text: 'Fala de mim com orgulho, me elogia na frente dos outros.', feedback: 'Sentir orgulho do parceiro em público é uma linda demonstração de amor.', score: 2 },
      { text: 'Evita falar de mim ou me apresenta de forma superficial.', feedback: 'Ser tratado(a) como um detalhe é solitário e doloroso.', score: -2 },
    ],
  },
  {
    id: 10,
    section: 'signsOfInterest',
    text: 'Ele(a) apoia seus sonhos e projetos pessoais?',
    answers: [
      { text: 'Sim, é meu maior fã e sempre me incentiva a crescer.', feedback: 'Um parceiro que te impulsiona para frente é um tesouro.', score: 2 },
      { text: 'Não muito, às vezes até faz piada ou minimiza o que eu quero.', feedback: 'Quem não respeita seus sonhos, não respeita uma parte essencial de você.', score: -2 },
      { text: 'É indiferente, não apoia mas também não atrapalha.', feedback: 'A indiferença pode ser tão dolorosa quanto a crítica. Você merece um fã.', score: -1 },
    ],
  },
];
