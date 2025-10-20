
export type ReportStyle = 'detailed' | 'gossipy_friend';
export type ReportType = 'free' | 'full';
export type AnswerKey = 'positive' | 'mixed' | 'negative';

export interface ReportContent {
  detailedSummary: string;
  psychologicalInterpretations: string;
  actionPlan: string;
}

const responses: Record<AnswerKey, Record<ReportStyle, Record<ReportType, ReportContent>>> = {
  positive: {
    detailed: {
      free: {
        detailedSummary: `
          <h3>Análise Inicial: Conexão Forte e Saudável 💡</h3>
          <p>
            Suas respostas indicam um relacionamento com uma base sólida de comunicação e interesse mútuo.
            Há uma reciprocidade clara na forma como vocês interagem, iniciam conversas e demonstram atenção.
            A consistência no comportamento e a abertura para dialogar sobre sentimentos são sinais muito positivos.
            Parece que vocês construíram um ambiente de confiança onde ambos se sentem valorizados e ouvidos.
            A presença de planos futuros e demonstrações de carinho reforçam a visão de um compromisso duradouro.
            Continue nutrindo essa conexão com diálogo e tempo de qualidade.
          </p>
        `,
        psychologicalInterpretations: '', // Preenchido na versão completa
        actionPlan: '', // Preenchido na versão completa
      },
      full: {
        detailedSummary: `
          <h3>Análise Completa: Conexão Forte e Saudável 💡</h3>
          <p>
            Suas respostas indicam um relacionamento com uma base sólida de comunicação e interesse mútuo.
            Há uma reciprocidade clara na forma como vocês interagem, iniciam conversas e demonstram atenção.
            A consistência no comportamento e a abertura para dialogar sobre sentimentos são sinais muito positivos.
            Parece que vocês construíram um ambiente de confiança onde ambos se sentem valorizados e ouvidos.
            A presença de planos futuros e demonstrações de carinho reforçam a visão de um compromisso duradouro.
            Continue nutrindo essa conexão com diálogo e tempo de qualidade.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas</h3>
          <p>
            O padrão de resposta rápida e atenção plena durante as conversas sugere um <strong>apego seguro</strong>.
            Isso significa que há uma confiança fundamental de que ambos estarão disponíveis e responsivos às necessidades um do outro.
            A iniciativa na comunicação de ambas as partes evita a ansiedade que pode surgir em dinâmicas onde um lado se sente mais investido que o outro.
            O compartilhamento sobre o dia a dia, mesmo que pareça trivial, é um pilar para a <strong>intimidade e a interconexão</strong>, fortalecendo a parceria contra estresses externos.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação de 7 Dias para Fortalecer Ainda Mais</h3>
          <ul>
            <li><strong>Dia 1:</strong> Reserve 15 minutos sem distrações para falar sobre algo novo que aprenderam.</li>
            <li><strong>Dia 2:</strong> Envie uma mensagem de apreciação inesperada, focando em uma qualidade que você admira.</li>
            <li><strong>Dia 3:</strong> Planejem juntos uma atividade para o próximo fim de semana, mesmo que simples.</li>
            <li><strong>Dia 4:</strong> Inicie uma conversa sobre um sonho ou objetivo pessoal de cada um.</li>
            <li><strong>Dia 5:</strong> Façam um elogio um ao outro sobre algo não relacionado à aparência física.</li>
            <li><strong>Dia 6:</strong> Relembrem um momento feliz que passaram juntos e o que o tornou especial.</li>
            <li><strong>Dia 7:</strong> Definam uma "meta de casal" para o próximo mês, como ler um livro juntos ou começar um hobby.</li>
          </ul>
          <h3>Conclusão</h3>
          <p>Seu relacionamento demonstra saúde e equilíbrio. O segredo é continuar investindo na comunicação e nos momentos de qualidade para que a conexão permaneça forte a longo prazo.</p>
        `,
      },
    },
    gossipy_friend: {
      free: {
        detailedSummary: `
          <h3>Amiga, tá tudo ótimo! ✨</h3>
          <p>
            Olha, pelo que você me contou, esse romance tá voando em céu de brigadeiro! 😱
            Ele(a) responde rápido, presta atenção em você e até inicia as conversas. Isso é ouro, viu?
            Vocês falam de sentimentos, fazem planos... sinceramente? Parece que você tirou a sorte grande!
            Não tem muito com o que se preocupar aqui, a conexão de vocês é super forte.
            Aquele medinho bobo pode guardar na gaveta.
            Agora é só curtir essa fase maravilhosa! 😜
          </p>
        `,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Amiga, tá tudo ótimo! ✨</h3>
          <p>
            Olha, pelo que você me contou, esse romance tá voando em céu de brigadeiro! 😱
            Ele(a) responde rápido, presta atenção em você e até inicia as conversas. Isso é ouro, viu?
            Vocês falam de sentimentos, fazem planos... sinceramente? Parece que você tirou a sorte grande!
            Não tem muito com o que se preocupar aqui, a conexão de vocês é super forte.
            Aquele medinho bobo pode guardar na gaveta.
            Agora é só curtir essa fase maravilhosa! 😜
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Vamos analisar esse boy/mina! 🤔</h3>
          <p>
            Sabe essa coisa de ele(a) responder rápido e te dar atenção? Isso é tipo um selo de qualidade, "<strong>Produto de Alta Prioridade</strong>"!
            Ele(a) não te deixa no vácuo, o que significa que você não precisa ficar naquela ansiedade de "será que respondo agora ou espero 3 dias?".
            E o fato de vocês falarem sobre o dia? MEU DEUS! É assim que a intimidade acontece, amiga. Nos pequenos detalhes! É a prova de que vocês estão construindo uma vibe de parceiros de verdade.
          </p>
        `,
        actionPlan: `
          <h3>Plano "Operação Manter a Chama Acesa" 🔥</h3>
          <ul>
            <li><strong>Dia 1:</strong> Manda um meme aleatório que te fez lembrar dele(a). Zero pressão, 100% conexão.</li>
            <li><strong>Dia 2:</strong> Solta um "Tava pensando aqui no quanto eu gosto de conversar com você". Simples e fofo.</li>
            <li><strong>Dia 3:</strong> "Bora fazer alguma coisa diferente no finde? Sugestões abertas!". Joga a isca do plano!</li>
            <li><strong>Dia 4:</strong> Pergunta qual é a maior loucura que ele(a) já pensou em fazer. Hora da fofoca!</li>
            <li><strong>Dia 5:</strong> Elogie o cérebro dele(a). "Adorei o jeito que você explicou aquilo hoje". Sexy e inteligente.</li>
            <li><strong>Dia 6:</strong> "Lembra daquela vez que a gente...? Morri de rir". Boas memórias, amiga!</li>
            <li><strong>Dia 7:</strong> "Desafio: qual a próxima série que a gente vai maratonar juntos?".</li>
          </ul>
          <h3>Resumindo, gata...</h3>
          <p>Relaxa e aproveita! A vibe tá boa, a sintonia tá alta. Continua sendo essa pessoa incrível que você é e deixa o barco correr. Tá tudo lindo!</p>
        `,
      },
    },
  },
  mixed: {
    detailed: {
      free: {
        detailedSummary: `
          <h3>Análise Inicial: Sinais Mistos e Inconsistência 💡</h3>
          <p>
            O cenário que você descreve é de altos e baixos, o que pode gerar bastante ansiedade.
            Há momentos de conexão, como quando ele(a) responde e demonstra interesse, mas também há períodos de distância e comunicação inconsistente.
            Essa irregularidade, como a demora para responder e a hesitação em falar sobre sentimentos, sugere que pode haver fatores externos (estresse, outras prioridades) ou uma incerteza interna da parte dele(a).
            É importante observar os padrões para entender se é uma fase ou um traço permanente do comportamento.
            A chave é buscar um diálogo claro para entender o que está acontecendo.
          </p>
        `,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Análise Completa: Sinais Mistos e Inconsistência 💡</h3>
          <p>
            O cenário que você descreve é de altos e baixos, o que pode gerar bastante ansiedade.
            Há momentos de conexão, como quando ele(a) responde e demonstra interesse, mas também há períodos de distância e comunicação inconsistente.
            Essa irregularidade, como a demora para responder e a hesitação em falar sobre sentimentos, sugere que pode haver fatores externos (estresse, outras prioridades) ou uma incerteza interna da parte dele(a).
            É importante observar os padrões para entender se é uma fase ou um traço permanente do comportamento.
            A chave é buscar um diálogo claro para entender o que está acontecendo.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas</h3>
          <p>
            Este padrão inconsistente é característico de um <strong>apego evitativo ou ansioso</strong>. A pessoa pode desejar intimidade, mas se afasta quando as coisas se tornam muito sérias ou vulneráveis.
            A dificuldade em falar sobre sentimentos é um mecanismo de defesa clássico para evitar a vulnerabilidade.
            A dinâmica de "iniciar vs. só responder" pode criar um desequilíbrio de poder percebido, onde você pode se sentir mais investida. É crucial não entrar em um ciclo de "perseguição" e dar espaço para que a outra pessoa também possa tomar a iniciativa.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação de 7 Dias para Trazer Clareza</h3>
          <ul>
            <li><strong>Dia 1:</strong> Observe sem agir. Apenas anote a frequência e o tom das interações, sem iniciar conversas.</li>
            <li><strong>Dia 2:</strong> Envie uma mensagem leve e aberta, sem perguntas diretas. Ex: "Vi isso e lembrei de você. Espero que seu dia esteja bom!".</li>
            <li><strong>Dia 3:</strong> Se ele(a) iniciar uma conversa, participe de forma positiva, mas não prolongue demais. Deixe um gostinho de "quero mais".</li>
            <li><strong>Dia 4:</strong> Foque em você. Poste algo sobre um hobby seu ou uma saída com amigos. Mostre que sua vida é plena.</li>
            <li><strong>Dia 5:</strong> Proponha algo concreto e com baixa pressão. Ex: "Estou pensando em ir tomar um café naquele lugar novo sábado à tarde, quer ir?".</li>
            <li><strong>Dia 6:</strong> Se a resposta for vaga, não insista. Apenas diga: "Tudo bem, me avise se mudar de ideia!".</li>
            <li><strong>Dia 7:</strong> Avalie a semana. Ele(a) demonstrou mais iniciativa? Se a inconsistência persistir, considere ter uma conversa mais direta sobre suas percepções.</li>
          </ul>
          <h3>Conclusão</h3>
          <p>A inconsistência exige paciência e observação. O objetivo do plano é quebrar o padrão de perseguição e criar espaço para que o interesse dele(a) se manifeste de forma mais clara.</p>
        `,
      },
    },
    gossipy_friend: {
      free: {
        detailedSummary: `
          <h3>Amiga, que rolo, hein? 🤔</h3>
          <p>
            Senta aqui, vamos fofocar sobre esse caso. Pelo que entendi, a situação é uma montanha-russa!
            Tem hora que ele(a) é um fofo, responde, parece super a fim. Daí, do nada, some, vira um fantasma. 👻
            Essa coisa de "às vezes sim, às vezes não" deixa qualquer uma maluca, né?
            Fica parecendo que a gente tá em um jogo que não sabe as regras.
            Será que tá se fazendo de difícil ou tá só confuso(a) mesmo?
            Precisamos investigar isso melhor!
          </p>
        `,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Amiga, que rolo, hein? 🤔</h3>
          <p>
            Senta aqui, vamos fofocar sobre esse caso. Pelo que entendi, a situação é uma montanha-russa!
            Tem hora que ele(a) é um fofo, responde, parece super a fim. Daí, do nada, some, vira um fantasma. 👻
            Essa coisa de "às vezes sim, às vezes não" deixa qualquer uma maluca, né?
            Fica parecendo que a gente tá em um jogo que não sabe as regras.
            Será que tá se fazendo de difícil ou tá só confuso(a) mesmo?
            Precisamos investigar isso melhor!
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Decifrando o enigma... 🕵️‍♀️</h3>
          <p>
            Esse comportamento de some e aparece tem nome, viu? É o famoso "<strong>pão de forma</strong>": uma hora tá quentinho, outra hora tá frio e duro.
            Isso pode ser sinal de que ele(a) tem medo de se aprofundar. Tipo, gosta da sua companhia, mas quando o negócio começa a ficar sério... PUM! Foge.
            Ou pior, pode ser que você não seja a única "padaria" que ele(a) frequenta, se é que você me entende. 😉
            O importante é não ficar se culpando. A confusão tá nele(a), não em você!
          </p>
        `,
        actionPlan: `
          <h3>Plano "Detetive do Amor" 🕵️‍♀️</h3>
          <ul>
            <li><strong>Dia 1:</strong> Chá de sumiço. Não manda NADA. Deixa a poeira baixar e ele(a) sentir sua falta.</li>
            <li><strong>Dia 2:</strong> Se ele(a) aparecer, seja simpática, mas um pouco ocupada. "Oii, tudo bem? Dia corrido aqui!".</li>
            <li><strong>Dia 3:</strong> Poste uma foto MARAVILHOSA sua fazendo algo divertido. Sem indireta, só mostrando que sua vida é babado.</li>
            <li><strong>Dia 4:</strong> Se ele(a) te chamar, responda, mas demore um pouquinho mais que o normal. Jogo de espelhos, meu bem.</li>
            <li><strong>Dia 5:</strong> Manda um "Sdds aleatórias de conversar com vc". Joga a isca e vê se morde.</li>
            <li><strong>Dia 6:</strong> Se ele(a) continuar na mesma, talvez seja hora de ser direta (mas com classe). "Adoro quando a gente se fala, mas às vezes sinto vc distante. Tá tudo bem?".</li>
            <li><strong>Dia 7:</strong> Dia de balanço! Analisa se ele(a) mudou de atitude ou se continua na mesma enrolação.</li>
          </ul>
          <h3>Conclusão da fofoca</h3>
          <p>Amiga, valorize-se! Não dá pra ficar esperando a boa vontade dos outros. Ou ele(a) embarca de vez ou o barco parte sem ele(a). Simples assim!</p>
        `,
      },
    },
  },
  negative: {
    detailed: {
      free: {
        detailedSummary: `
          <h3>Análise Inicial: Sinais de Alerta e Distanciamento 💡</h3>
          <p>
            As respostas que você forneceu apontam para um padrão preocupante de distanciamento emocional e falta de reciprocidade.
            A demora constante nas respostas, a falta de iniciativa na comunicação e a evasão de tópicos importantes são fortes indicativos de desinteresse.
            O comportamento indiferente em conflitos e a ausência de demonstrações de carinho e afeto sugerem que a conexão pode estar se desgastando.
            É um cenário que exige uma avaliação honesta sobre a viabilidade e a saúde deste relacionamento para você.
            É crucial proteger seu bem-estar emocional.
          </p>
        `,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Análise Completa: Sinais de Alerta e Distanciamento 💡</h3>
          <p>
            As respostas que você forneceu apontam para um padrão preocupante de distanciamento emocional e falta de reciprocidade.
            A demora constante nas respostas, a falta de iniciativa na comunicação e a evasão de tópicos importantes são fortes indicativos de desinteresse.
            O comportamento indiferente em conflitos e a ausência de demonstrações de carinho e afeto sugerem que a conexão pode estar se desgastando.
            É um cenário que exige uma avaliação honesta sobre a viabilidade e a saúde deste relacionamento para você.
            É crucial proteger seu bem-estar emocional.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas</h3>
          <p>
            O conjunto de comportamentos (distanciamento, falta de iniciativa, evitação de conflitos e de intimidade) é um forte indicador de <strong>desligamento emocional</strong>.
            A pessoa parece já ter se retirado do relacionamento, mesmo que fisicamente ainda esteja presente.
            Minimizar problemas ou reagir com irritação a conversas sérias é uma forma de <strong>"gaslighting"</strong>, invalidando seus sentimentos para evitar assumir responsabilidades.
            Essa dinâmica é insustentável e pode ter um impacto severo na sua autoestima e bem-estar.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação de 7 Dias para Autopreservação</h3>
          <ul>
            <li><strong>Dia 1:</strong> Dê um passo para trás. Não inicie nenhuma conversa. Concentre sua energia em suas próprias atividades e bem-estar.</li>
            <li><strong>Dia 2:</strong> Conecte-se com amigos ou familiares. Busque apoio em pessoas que te valorizam.</li>
            <li><strong>Dia 3:</strong> Escreva o que você sente e o que gostaria em um relacionamento. Ter clareza sobre suas necessidades é o primeiro passo.</li>
            <li><strong>Dia 4:</strong> Se houver contato da parte dele(a), seja educada, mas breve. Não invista energia emocional.</li>
            <li><strong>Dia 5:</strong> Planeje uma conversa final. Escolha um momento e lugar neutros para expressar como você se sente, usando "eu sinto" em vez de "você faz".</li>
            <li><strong>Dia 6:</strong> Prepare-se para a conversa. Ex: "Eu tenho me sentido muito sozinha e desvalorizada no nosso relacionamento por causa [citar um exemplo]. Isso não é sustentável para mim.".</li>
            <li><strong>Dia 7:</strong> Tenha a conversa. Esteja preparada para qualquer resultado, incluindo a possibilidade de que o melhor caminho seja seguir em frente.</li>
          </ul>
          <h3>Conclusão</h3>
          <p>Você merece um relacionamento onde haja reciprocidade, respeito e carinho. Os sinais indicam que isso não está acontecendo aqui. Priorizar sua saúde mental é a decisão mais corajosa e importante agora.</p>
        `,
      },
    },
    gossipy_friend: {
      free: {
        detailedSummary: `
          <h3>Amiga, Red Flag Gigante! 🚩</h3>
          <p>
            PELO AMOR DE DEUS! O que você tá fazendo nesse barco furado? 😱
            Ele(a) te ignora, não demonstra o mínimo de interesse, te trata com indiferença... sinceramente?
            Isso não é relacionamento, é um teste de paciência que você não deveria estar fazendo.
            Parece que só você tá remando, enquanto a outra pessoa tá lá, de boa, tomando sol.
            Acorda, mulher! Você merece muito mais do que essas migalhas.
            Vamos ter uma conversa séria sobre o seu amor-próprio.
          </p>
        `,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Amiga, Red Flag Gigante! 🚩</h3>
          <p>
            PELO AMOR DE DEUS! O que você tá fazendo nesse barco furado? 😱
            Ele(a) te ignora, não demonstra o mínimo de interesse, te trata com indiferença... sinceramente?
            Isso não é relacionamento, é um teste de paciência que você não deveria estar fazendo.
            Parece que só você tá remando, enquanto a outra pessoa tá lá, de boa, tomando sol.
            Acorda, mulher! Você merece muito mais do que essas migalhas.
            Vamos ter uma conversa séria sobre o seu amor-próprio.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Traduzindo o "embusteês"</h3>
          <p>
            Esse show de desinteresse todo é o jeito dele(a) de gritar "<strong>EU NÃO TÔ NEM AÍ</strong>" sem precisar usar palavras.
            Essa tática de te ignorar e minimizar o que você sente é pra te fazer duvidar de si mesma, ficar insegura.
            É um jogo de poder, onde ele(a) te mantém presa na esperança de que uma hora as coisas vão melhorar. Spoiler: não vão.
            Ele(a) está te oferecendo um banquete de vento. E você, maravilhosa como é, merece um banquete de verdade!
          </p>
        `,
        actionPlan: `
          <h3>Plano "Operação Amor-Próprio Nível Hard" 💅</h3>
          <ul>
            <li><strong>Dia 1:</strong> Bloqueia. Sim, é isso mesmo. Some das redes, do zap... Detox total!</li>
            <li><strong>Dia 2:</strong> Liga pra sua melhor amiga, chora o que tiver que chorar e depois vão tomar um drink.</li>
            <li><strong>Dia 3:</strong> Dia de se mimar. Compra aquele negócio que você tava querendo, assiste sua série favorita, come sua comida preferida.</li>
            <li><strong>Dia 4:</strong> Faz uma lista de todas as vezes que essa pessoa te fez sentir mal. Pra não esquecer, viu?</li>
            <li><strong>Dia 5:</strong> Reative aquele app de paquera ou só flerte com o espelho. Lembre-se do mulherão que você é!</li>
            <li><strong>Dia 6:</strong> Se a saudade bater, leia a lista do Dia 4 de novo. E de novo.</li>
            <li><strong>Dia 7:</strong> Celebre sua liberdade! Você se livrou de um peso morto.</li>
          </ul>
          <h3>Conselho de amiga</h3>
          <p>Não aceite menos do que você merece. E você merece o mundo, gata! Se ele(a) não viu isso, o azar é todo dele(a). Próximo!</p>
        `,
      },
    },
  },
};

export function getPregeneratedResponse(answerKey: AnswerKey, style: ReportStyle, type: ReportType): ReportContent | null {
  try {
    return responses[answerKey][style][type];
  } catch (error) {
    console.error(`Could not find pre-generated response for: ${answerKey}, ${style}, ${type}`);
    return null;
  }
}
