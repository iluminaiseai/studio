
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
          <h3>Análise Completa: Uma Parceria com Fundações Sólidas 🏆</h3>
          <p>
            O padrão de respostas que você forneceu desenha um cenário extremamente positivo e encorajador. A comunicação entre vocês não é apenas funcional, mas fluida e recíproca, com ambos demonstrando iniciativa e atenção. Isso vai além de meras formalidades; sugere um interesse genuíno em manter a conexão viva e relevante no dia a dia.
          </p>
          <p>
            A consistência no comportamento, especialmente em áreas como tempo de resposta, demonstrações de afeto e planejamento futuro, indica um alto nível de segurança emocional e compromisso. Não há espaço para jogos ou incertezas, mas sim uma base de confiança mútua onde ambos se sentem à vontade para serem vulneráveis. Este é o alicerce de relacionamentos duradouros e resilientes, algo raro e valioso.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas Aprofundadas 🧠</h3>
          <p>
            O comportamento descrito é um forte indicador de um <strong>estilo de apego seguro</strong>. Psicologicamente, isso significa que ambos os parceiros desenvolveram uma confiança mútua de que estarão disponíveis e responsivos às necessidades um do outro. A ausência de ansiedade sobre "quem manda a primeira mensagem" ou "quanto tempo esperar para responder" elimina jogos de poder e permite que a intimidade floresça organicamente. Vocês confiam um no outro. 💯
          </p>
          <p>
            O compartilhamento de detalhes do dia a dia, que pode parecer trivial, é na verdade um pilar para a <strong>"capitalização"</strong>, um termo da psicologia positiva. Descreve como parceiros que celebram as pequenas vitórias e compartilham os momentos mundanos um do outro fortalecem a satisfação e a intimidade. Vocês não estão apenas trocando informações; estão validando as experiências um do outro, tecendo uma tapeçaria de vida compartilhada que aprofunda a interconexão.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação: De Ótimo para Extraordinário 🚀</h3>
          <p>O objetivo aqui não é "consertar" o que não está quebrado, mas sim "elevar" uma conexão que já é excelente. São pequenas práticas para aprofundar ainda mais o vínculo.</p>
          <ul>
            <li><strong>Apreciação Inesperada:</strong> Envie uma mensagem de apreciação focada em um traço de caráter, não em uma ação. Ex: "Admiro muito a sua paciência com as pessoas, me inspira a ser melhor." Isso valoriza quem a pessoa é, não apenas o que ela faz.</li>
            <li><strong>Planejamento Criativo:</strong> Em vez de planejar algo rotineiro, planejem juntos uma "mini aventura" para o próximo mês (ex: uma trilha, uma aula de culinária, uma visita a uma cidade vizinha). Criar novas experiências juntos libera dopamina no cérebro, associando o parceiro à novidade e à excitação. 🗺️</li>
            <li><strong>Linguagem do Amor:</strong> Identifique a principal linguagem do amor da sua parceira e faça uma ação deliberada baseada nela hoje. Falar a "língua" do outro é a forma mais eficaz de fazê-la se sentir amada.</li>
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
          <h3>Análise Completa: Navegando em Águas de Incerteza 🌊</h3>
          <p>
            O padrão de respostas mistas revela um relacionamento marcado pela ambiguidade. Existem sinais genuínos de interesse — momentos em que a comunicação flui, a atenção é presente e a conexão parece real. No entanto, esses momentos são minados pela inconsistência: a demora em responder, a falta de iniciativa e a hesitação em tocar em tópicos mais profundos ou fazer planos concretos.
          </p>
          <p>
            Essa dinâmica de "quente e frio" é psicologicamente desgastante. Ela cria um ciclo de esperança e frustração que pode mantê-la em um estado de alerta constante, tentando decifrar o comportamento do outro. É importante reconhecer que essa instabilidade raramente é sobre você, e sim um reflexo das próprias ambiguidades, medos ou limitações da outra pessoa.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas Aprofundadas 🧠</h3>
          <p>
            Este comportamento é frequentemente associado a um <strong>estilo de apego evitativo</strong>. Indivíduos com esse perfil anseiam por conexão, mas se sentem sufocados pela intimidade excessiva. Quando percebem que a relação está se aprofundando, eles inconscientemente se afastam para recuperar seu senso de autonomia. Isso explica o ciclo de se aproximar (quando sentem sua falta ou solidão) e se afastar (quando se sentem pressionados ou vulneráveis).
          </p>
          <p>
            A dinâmica de "iniciar vs. só responder" pode levar a um padrão de <strong>"perseguição e fuga"</strong>. Quanto mais uma pessoa busca clareza e iniciativa (persegue), mais a outra pode se sentir pressionada e se retrair (fuga). Quebrar esse ciclo exige uma mudança de estratégia: focar menos em obter uma resposta e mais em observar as ações consistentes (ou a falta delas) e, acima de tudo, em proteger sua própria paz de espírito. 🧘‍♀️
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação: Recuperando o Controle e a Clareza 🗺️</h3>
          <p>Este plano não visa "consertar" o parceiro(a), mas sim quebrar o ciclo vicioso, recuperar seu poder e dar a você a clareza necessária para decidir seus próximos passos. Lembre-se, este é um guia de reflexão e não uma sentença.</p>
          <ul>
            <li><strong>Espelhamento de Energia:</strong> Se a pessoa te procurar, responda com o mesmo nível de energia. Se a mensagem for curta e direta ("Tudo bem?"), responda de forma similar ("Tudo ótimo e por aí?"). Não dê mais do que recebe. Isso ajuda a reequilibrar a dinâmica.</li>
            <li><strong>Foco Total na Sua Vida:</strong> Poste algo sobre um hobby seu, uma conquista no trabalho ou uma saída com amigos. Isso não é uma indireta, é um lembrete (para você e para o mundo) de que sua vida é plena e interessante por si só. ✨</li>
            <li><strong>O Convite de Baixo Risco:</strong> Proponha algo concreto, casual e com um prazo definido. Ex: "Estou pensando em ir naquele café novo no sábado à tarde. Se estiver livre e a fim, me avise até amanhã à noite". Isso coloca a bola no campo do outro sem te deixar esperando indefinidamente. ☕</li>
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
          <h3>Análise Completa: Sinais de Alerta e Desgaste Emocional 🚩</h3>
          <p>
            Os padrões indicados por suas respostas são claros e preocupantes. Eles descrevem um relacionamento que pode ter se tornado unilateral, onde uma das partes parece ter se retirado emocionalmente, deixando a outra sobrecarregada com o peso de manter a conexão viva. A comunicação não é apenas falha; ela é marcada pela falta de iniciativa, longos períodos de silêncio e uma aparente indiferença.
          </p>
          <p>
            A evitação de conflitos ou a reação com irritação a conversas sérias não é um sinal de que "está tudo bem", mas sim uma estratégia para manter a distância e evitar qualquer nível de vulnerabilidade ou responsabilidade. Esse conjunto de comportamentos cria um ambiente emocionalmente inseguro e pode ter um impacto corrosivo na sua autoestima e percepção de valor. É crucial olhar para isso com seriedade.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas Aprofundadas 🧠</h3>
          <p>
            O comportamento descrito pode ser um caso de <strong>"stonewalling" (barreira de silêncio)</strong> e <strong>desligamento emocional</strong>. Identificado pelo Dr. John Gottman como um dos "Quatro Cavaleiros do Apocalipse" do relacionamento, o "stonewalling" ocorre quando uma pessoa se recusa a se comunicar, efetivamente construindo um muro. É uma das atitudes mais destrutivas, pois torna a resolução de problemas impossível e sinaliza desrespeito.
          </p>
          <p>
            Minimizar seus sentimentos ou reagir com irritação quando você tenta expressar uma necessidade é uma forma de <strong>invalidação emocional</strong>. A mensagem subliminar é: "Seus sentimentos não são válidos ou são um exagero". Com o tempo, isso pode fazer com que você duvide da sua própria percepção da realidade (uma forma de "gaslighting"). Manter-se em um relacionamento assim é como tentar regar uma planta morta: você gasta toda a sua energia e não obtém nada em troca. 🥀
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação: Foco na Autopreservação e Decisão 🛡️</h3>
          <p>Este plano não é sobre "salvar" o relacionamento a qualquer custo, mas sim sobre salvar a si mesma, fortalecer sua autoestima e ganhar clareza para tomar uma decisão informada, seja ela qual for. Lembre-se, o quiz é uma ferramenta de reflexão, não um juiz.</p>
          <ul>
            <li><strong>Reconexão Externa:</strong> Ligue para um amigo ou familiar com quem você não fala há algum tempo. Alguém que te faz rir e te faz sentir bem. Lembre-se de como é uma interação saudável, leve e recíproca.</li>
            <li><strong>Ação Radical de Amor-Próprio:</strong> Faça algo que você adiou por causa do relacionamento ou por falta de ânimo. Pode ser matricular-se naquela aula de dança, visitar um lugar novo sozinha, ou simplesmente dedicar a noite a um hobby que você ama. Recupere um pedaço de si mesma. 💃</li>
            <li><strong>Definindo Seus Limites Inegociáveis:</strong> Com base na sua lista do Dia 1, escreva 3 a 5 limites inegociáveis. Ex: "Eu preciso ser tratada com respeito, mesmo durante uma discussão" ou "Eu preciso que minha parceira ouça meus sentimentos sem me invalidar". Isso é seu manifesto pessoal.</li>
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
