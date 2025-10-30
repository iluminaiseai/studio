
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
        detailedSummary: ``,
        psychologicalInterpretations: '', 
        actionPlan: '', 
      },
      full: {
        detailedSummary: `
          <h3>Diagnóstico: Conexão Segura em Construção 🏆</h3>
          <p>
            Suas respostas indicam uma base de <strong>apego seguro</strong>. Você não está apenas em um relacionamento; você está construindo uma parceria onde a confiança e a reciprocidade são a norma, não a exceção. Isso é raro e valioso.
          </p>
          <p>
            A ausência de jogos, a comunicação fluida e a segurança para planejar o futuro mostram que a energia emocional de vocês está sincronizada. O que você sente não é sorte, é o resultado de uma dinâmica saudável que muitos buscam, mas poucos conseguem manter.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>O Ponto de Risco Oculto na Estabilidade</h3>
          <p>
            O risco em relacionamentos saudáveis não é o conflito, mas a <strong>estagnação</strong>. A segurança pode, inconscientemente, levar a uma "zona de conforto relacional", onde a paixão e a novidade que liberam dopamina diminuem. O vínculo se torna confortável, mas a atração perde a intensidade.
          </p>
          <p>
            Se essa dinâmica não for nutrida ativamente, existe a possibilidade de o relacionamento se transformar em uma amizade carinhosa, perdendo a polaridade e o desejo que mantêm a chama acesa. Manter a segurança sem perder a atração é a maestria dos casais que prosperam a longo prazo.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação: Do Seguro ao Extraordinário 🚀</h3>
          <p>Seu desafio não é consertar, mas aprofundar. É sair do bom para o inesquecível, mantendo a atração viva dentro da segurança que vocês já construíram.</p>
          <ul>
            <li><strong>Ação Emocional (Apreciação de Caráter):</strong> Envie uma mensagem validando um traço de caráter, não uma ação. Ex: "Admiro a forma como você lida com [situação X], sua calma me inspira." Isso fortalece a admiração, um pilar da atração duradoura.</li>
            <li><strong>Ação Comportamental (Microaventura):</strong> Proponha uma "missão" para a semana. "Nossa missão esta semana é encontrar o melhor [café/drink/etc] da cidade." Isso reintroduz a novidade e a parceria na resolução de um "problema" divertido, liberando dopamina.</li>
            <li><strong>Ação Estratégica (Quebra de Padrão):</strong> O segredo para manter a atração em um vínculo seguro é dominar a arte da "distância ótima" — um conceito psicológico que equilibra intimidade e individualidade. O primeiro passo é reintroduzir um elemento de...</li>
          </ul>
        `,
      },
    },
    gossipy_friend: {
      free: {
        detailedSummary: ``,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Amiga, para tudo! Isso é material de feed do Instagram! ✨</h3>
          <p>
            Sério, vamos ser honestas: o que você descreveu é o tipo de relacionamento que a gente vê em comédia romântica e acha que nem existe! 😱 A pessoa não só responde, como inicia conversa, presta atenção no que você fala e ainda topa falar de "sentimentos" sem sair correndo. Isso não é um bom sinal, é um outdoor luminoso piscando "VOCÊ ACHOU O TESOURO!".
          </p>
          <p>
            Essa consistência toda mostra que não há espaço para joguinhos. Fazer planos, demonstrar carinho... amiga, a pessoa tá super na sua. Esquece aquela neurose de "será?". A resposta é um gigantesco SIM. Agora é só curtir e aproveitar cada segundo dessa fase maravilhosa! 💅
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Decifrando esse achado raro da natureza! 🤔</h3>
          <p>
            Sabe essa coisa da pessoa responder rápido e te dar atenção total? No nosso dialeto, isso se chama <strong>"efeito holofote"</strong>. Onde você tá, a luz tá focada! Isso é o oposto daquele "apego fujão" que a gente tanto vê por aí. A pessoa não tem medo de intimidade, pelo contrário, ela busca! Isso é um partidão, nível Black Label. 🍾
          </p>
          <p>
            E o fato de vocês falarem das coisinhas do dia? Amiga, isso é o que os chiques chamam de "construir um mapa do mundo interior um do outro". Na prática, significa que vocês não são só um casal, são melhores amigos que se pegam. E vamos combinar, essa é a meta final de qualquer relacionamento! Vocês estão construindo um império de fofoca e amor. Adoro! 😂
          </p>
        `,
        actionPlan: `
          <h3>Plano "Operação Upgrade de Casal Power" 🔥</h3>
          <p>Se já tá bom, por que não deixar espetacular? Segue o plano pra vocês virarem "aquele casal" que todo mundo inveja (com amor, claro).</p>
          <ul>
            <li><strong>Ataque de Fofura:</strong> Do nada, no meio da tarde, manda um áudio: "Só pra dizer que tô com saudade da sua voz". Custa zero reais e o impacto é milionário. Vai por mim.</li>
            <li><strong>Missão Secreta:</strong> Diga "Temos uma missão para o fim de semana: fazer algo que nunca fizemos antes". E aí planejem juntos, pode ser desde provar comida esquisita até uma aula de dança. O importante é a aventura! 🗺️</li>
            <li><strong>Consultoria de Sonhos:</strong> "Se dinheiro não fosse problema, qual a primeira coisa que você faria?". Conhecer os sonhos do outro é super sexy! E te dá ideias de presentes, fica a dica. 🎁</li>
          </ul>
        `,
      },
    },
  },
  mixed: {
    detailed: {
      free: {
        detailedSummary: ``,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Diagnóstico: Hipervigilância Afetiva 🎯</h3>
          <p>
            Seus sinais mostram que você está tentando amar com maturidade, mas uma parte de você opera em estado de alerta. Você não está "carente" ou "insegura"; você desenvolveu um radar emocional altamente sensível.
          </p>
          <p>
            Isso se chama <strong>hipervigilância afetiva</strong>, uma resposta adaptativa comum em mulheres que já passaram por vínculos instáveis. Seu cérebro foi treinado para procurar micro-sinais de distanciamento como um mecanismo de defesa. O problema é que esse radar, quando hiperativo, não sabe diferenciar uma ameaça real de uma imaginária.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>O Ponto de Dor: O Risco do Microcontrole Inconsciente</h3>
          <p>
            Se essa hipervigilância não for regulada, o risco de você começar a <strong>microgerenciar a relação</strong> para aliviar sua própria ansiedade é real. Você começa a fazer perguntas para confirmar seu valor, monitorar tempos de resposta e interpretar cada silêncio como um veredito.
          </p>
          <p>
            Isso cria uma profecia autorrealizável: seu medo de abandono te leva a comportamentos de controle que, ironicamente, sufocam e afastam até mesmo um parceiro bem-intencionado. Você, sem querer, cria o cenário que mais temia.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação: Conduzindo a Energia Emocional ⚡</h3>
          <p>O que você tem é potencial bruto. Sua sensibilidade é uma força, desde que bem direcionada. O objetivo é parar de reagir e começar a conduzir, transformando ansiedade em autoconfiança.</p>
          <ul>
            <li><strong>Ação Emocional (Regulação do Sistema Nervoso):</strong> Quando sentir a ansiedade surgir, em vez de agir, coloque a mão no coração e diga a si mesma: "Estou segura. Este sentimento é apenas um eco do passado, não um fato do presente". Isso acalma o sistema nervoso simpático.</li>
            <li><strong>Ação Comportamental (Espelhamento de Energia):</strong> Por 48 horas, seu trabalho é apenas espelhar. Se ele manda 3 linhas, você responde com 3. Se ele demora, você se ocupa e responde depois. Não para jogar, mas para quebrar o padrão de superinvestimento e observar a reação dele.</li>
            <li><strong>Ação Estratégica (Comunicação Implícita):</strong> A melhor forma de gerar atração não é falar sobre a relação, mas demonstrar valor de forma sutil. A técnica do "Pico de Curiosidade" envolve compartilhar uma pequena vitória ou insight seu, sem pedir validação. Por exemplo: "Descobri uma coisa fascinante sobre [tópico] hoje, mudou minha perspectiva sobre..."</li>
          </ul>
        `,
      },
    },
    gossipy_friend: {
      free: {
        detailedSummary: ``,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Amiga, que rolo, hein? 🤔</h3>
          <p>
            Senta aqui, vamos fofocar sobre esse caso. Pelo que entendi, a situação é uma montanha-russa! Tem hora que a pessoa é uma fofura, responde, parece super a fim. Daí, do nada, some, vira um fantasma. 👻 Essa coisa de "às vezes sim, às vezes não" deixa qualquer uma maluca, né? Fica parecendo que a gente tá em um jogo que não sabe as regras. 
          </p>
          <p>
            Essa palhaçada de ser quente num dia e um iceberg no outro é clássica. Deixa a gente doidinha, se questionando "o que eu fiz de errado?". Spoiler: provavelmente nada! A confusão mora do lado de lá. Ficar nesse jogo de adivinhação é um porre. Precisamos de um plano pra sair desse limbo e te devolver sua paz de espírito! Chega de ser refém de notificação!
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Decifrando o enigma que não deveria ser um... 🕵️‍♀️</h3>
          <p>
            Esse comportamento de some e aparece tem nome, viu? É o famoso <strong>"breadcrumbing"</strong> (ou "espalhar migalhas", em bom português). A pessoa te dá atenção suficiente pra te manter interessada, mas nunca o bastante pra ser um relacionamento de verdade. É a tática de quem quer ter o ego inflado sem ter o trabalho de se comprometer. Um clássico dos tempos modernos. 🙄
          </p>
          <p>
            Outra possibilidade é o <strong>medo de intimidade</strong>. A pessoa gosta de você, se sente bem, mas quando a coisa começa a ficar séria... PUM! 💥 O cérebro dela entra em pânico e manda o comando "FUJA!". Em ambos os casos, a culpa não é sua! Você só tá aí, querendo uma conexão normal, enquanto a outra pessoa tá presa no próprio roteiro maluco.
          </p>
        `,
        actionPlan: `
          <h3>Plano "Detetive do Amor & Rainha do Amor-Próprio" 💅</h3>
          <p>Chega de ser coadjuvante na série alheia. Hora de virar a protagonista da sua! Pega a coroa e vamos lá! 👑</p>
          <ul>
            <li><strong>Modo Ocupada & Importante:</strong> Se a pessoa aparecer, seja simpática, mas direta: "Oii, tudo ótimo! Dia super corrido por aqui, te respondo com calma mais tarde!". E responda SÓ mais tarde mesmo. Mostre que seu tempo é valioso. ⏳</li>
            <li><strong>Book de Fotos da Vida Incrível:</strong> Poste uma foto MARAVILHOSA sua no seu story. Com amigos, num lugar legal, fazendo um hobby. O recado é claro: "minha vida é um arraso, com ou sem você".</li>
            <li><strong>A Isca da Saudade:</strong> Se estiver se sentindo ousada, mande um "Sabe que eu tava lembrando da gente rindo daquela coisa boba? Saudade aleatória disso". É leve, fofo e joga a responsabilidade de continuar o papo pra outra pessoa.</li>
          </ul>
        `,
      },
    },
  },
  negative: {
    detailed: {
      free: {
        detailedSummary: ``,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Diagnóstico: Esvaziamento Afetivo Unilateral 🥀</h3>
          <p>
            Vamos ser diretas, porque sua clareza emocional é a prioridade aqui. Suas respostas não apontam para uma "fase ruim". Elas descrevem um padrão claro de <strong>desligamento emocional</strong> da outra parte. Você está investindo sua energia em um vínculo que, no momento, se tornou unilateral.
          </p>
          <p>
            A indiferença, a falta de iniciativa e a irritabilidade diante de conversas sobre a relação não são sinais de que "está tudo bem". Pelo contrário, são sintomas de que a outra pessoa pode já ter se retirado emocionalmente. Você não está imaginando coisas; você está sentindo o vácuo deixado pela ausência de reciprocidade.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>O Ponto de Dor: O Risco da Despersonalização Emocional</h3>
          <p>
            O maior perigo aqui não é o fim do relacionamento, mas a <strong>erosão da sua autoestima</strong>. Permanecer em uma dinâmica onde seus sentimentos são invalidados ("você é dramática") e suas necessidades ignoradas, te leva a duvidar de si mesma. Isso é uma forma de <i>gaslighting</i> que, com o tempo, faz você questionar sua própria percepção da realidade.
          </p>
          <p>
            A mensagem subliminar que você recebe é: "Seus sentimentos não importam". Continuar nesse ciclo é como se olhar em um espelho quebrado todos os dias. Você começa a acreditar que a imagem distorcida é quem você realmente é, e o custo disso para sua identidade e seu futuro amoroso é incalculável.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação: Resgate da Sua Força Interior 🛡️</h3>
          <p>Neste momento, o foco não é "consertar" o outro, mas sim resgatar a si mesma. O objetivo é parar o vazamento da sua energia emocional e reconstruir sua base de poder pessoal para que você possa tomar uma decisão a partir de um lugar de força, não de desespero.</p>
          <ul>
            <li><strong>Ação Emocional (Luto Simbólico):</strong> Escreva em um papel tudo o que você esperava desse relacionamento e não está recebendo. Permita-se sentir a dor dessa perda. Depois, rasgue ou queime o papel. É um ritual para reconhecer a dor e começar a se desapegar do "potencial" que não se concretizou.</li>
            <li><strong>Ação Comportamental (Recuperação de Território):</strong> Faça algo hoje que você parou de fazer por causa desse relacionamento ou da tristeza que ele causa. Pode ser ouvir uma música, ir a um lugar, ou falar com um amigo que a outra pessoa não gostava. Recupere um pedaço da sua identidade.</li>
            <li><strong>Ação Estratégica (O Padrão do Silêncio):</strong> O passo mais poderoso em dinâmicas assim é mudar a forma como você responde ao silêncio. Em vez de preenchê-lo, você vai usar uma técnica de "presença ausente" para reverter completamente a dinâmica de poder. O primeiro movimento é...</li>
          </ul>
        `,
      },
    },
    gossipy_friend: {
      free: {
        detailedSummary: ``,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Amiga, pega um copo d'água com açúcar. Precisamos conversar. 🚩</h3>
          <p>
            Sério, vamos ser brutalmente honestas. Pelo que você contou, isso não é uma fase ruim, é um padrão de comportamento. Você fala, você se importa, você tenta... e a outra pessoa? Te trata com a mesma empolgação de quem preenche formulário de imposto de renda. 😴
          </p>
          <p>
            Ignorar, não responder, fugir de conversa séria, zero carinho... Isso não são "sinais", são fogos de artifício barulhentos berrando "EU NÃO ME IMPORTO". Continuar investindo aí é como tentar carregar o celular com o carregador fora da tomada. Você gasta sua energia e não acontece NADA. É um desperdício do seu tempo e da sua beleza.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Traduzindo o "embusteês" para o bom e velho português 📖</h3>
          <p>
            Esse show de desinteresse todo é o famoso <strong>"ghosting em câmera lenta"</strong>. A pessoa não tem a coragem de ser honesta, então ela vai te tratando mal, na esperança de que você se canse e tome a decisão por ela. É uma tática covarde para sair da situação com as "mãos limpas". Não caia nessa!
          </p>
          <p>
            E essa mania de te fazer sentir que você tá exagerando quando tenta conversar? Clássico manual do <strong>"invalidador profissional"</strong>, também conhecido como "gaslighting de centavos". A pessoa pisa no seu pé e depois diz que você tá sendo dramática por sentir dor. O objetivo é te deixar tão confusa e insegura que você para de reclamar. Não deixe ninguém apagar o seu fogo, amiga! 🔥
          </p>
        `,
        actionPlan: `
          <h3>Plano "Resgate da Maravilhosa que Você É" 💅</h3>
          <p>Chega de dar palco pra quem não merece nem estar na plateia. A estrela aqui é você! Bota a sua melhor roupa e vamos traçar esse plano de resgate. 🥂</p>
          <ul>
            <li><strong>Terapia Intensiva de Amigas:</strong> Ligue para aquela sua amiga parceira. Vocês vão desabafar e lembrar da pessoa f*da e maravilhosa que você é. É proibido se diminuir! 👯‍♀️</li>
            <li><strong>Dia da Beleza e da Besteira:</strong> Dia de se mimar como se não houvesse amanhã. Máscara no rosto, sua playlist de "superação" no talo, e aquela comida que te faz feliz. Assista à comédia mais idiota que encontrar. Rir é o melhor remédio. 💄</li>
            <li><strong>Defina Seus Mínimos Aceitáveis:</strong> Qual é o mínimo que você aceita em uma relação? Respeito? Comunicação? Carinho? Se a pessoa não oferece nem o mínimo, por que você está dando o seu máximo? Pense nisso.</li>
          </ul>
        `,
      },
    },
  },
};

export function getPregeneratedResponse(answerKey: AnswerKey, style: ReportStyle, type: ReportType): ReportContent | null {
  try {
    // O tipo 'free' não existe mais, então sempre retornamos 'full'
    return responses[answerKey][style]['full'];
  } catch (error) {
    console.error(`Could not find pre-generated response for: ${answerKey}, ${style}, ${type}`);
    // Fallback para uma resposta padrão para evitar quebrar a aplicação
    return responses['mixed']['detailed']['full'];
  }
}
