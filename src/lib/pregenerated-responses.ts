
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
            Suas respostas indicam um relacionamento com uma base sólida de comunicação, interesse mútuo e reciprocidade. A consistência no comportamento, a abertura para diálogos e as demonstrações de afeto são sinais muito positivos de um vínculo seguro e saudável. Parece que vocês construíram um ambiente de confiança, onde ambos se sentem valorizados e ouvidos, com um compromisso claro para o futuro. Continue nutrindo essa conexão.
          </p>
        `,
        psychologicalInterpretations: '', // Preenchido na versão completa
        actionPlan: '', // Preenchido na versão completa
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
          <h3>Plano de Ação de 7 Dias: De Ótimo para Extraordinário 🚀</h3>
          <p>O objetivo aqui não é "consertar" o que não está quebrado, mas sim "elevar" uma conexão que já é excelente. São pequenas práticas para aprofundar ainda mais o vínculo.</p>
          <ul>
            <li><strong>Dia 1 (Vulnerabilidade Intencional):</strong> Reserve 15 minutos para cada um compartilhar um pequeno medo ou uma insegurança recente, sem julgamentos. O objetivo é apenas ouvir e oferecer apoio com um "estou aqui com você". Isso fortalece a confiança. ❤️</li>
            <li><strong>Dia 2 (Apreciação Inesperada):</strong> Envie uma mensagem de apreciação focada em um traço de caráter, não em uma ação. Ex: "Admiro muito a sua paciência com as pessoas, me inspira a ser melhor." Isso valoriza quem a pessoa é, não apenas o que ela faz.</li>
            <li><strong>Dia 3 (Planejamento Criativo):</strong> Em vez de planejar algo rotineiro, planejem juntos uma "mini aventura" para o próximo mês (ex: uma trilha, uma aula de culinária, uma visita a uma cidade vizinha). Criar novas experiências juntos libera dopamina no cérebro, associando o parceiro à novidade e à excitação. 🗺️</li>
            <li><strong>Dia 4 (Linguagem do Amor):</strong> Identifique a principal linguagem do amor do seu parceiro(a) (palavras, tempo de qualidade, presentes, atos de serviço, toque físico) e faça uma ação deliberada baseada nela hoje. Falar a "língua" do outro é a forma mais eficaz de fazê-lo se sentir amado.</li>
            <li><strong>Dia 5 (Elogio Público Sutil):</strong> Em uma conversa com amigos ou em uma postagem discreta, mencione algo que seu parceiro(a) fez e que você se orgulha. Deixe que ele(a) veja ou ouça isso organicamente. Isso reforça o sentimento de "time". 🤝</li>
            <li><strong>Dia 6 (Revisão de Memórias Felizes):</strong> Abram uma pasta de fotos antigas e relembrem um momento feliz. Conversem sobre o que sentiram naquele dia e o que aquela memória representa para vocês. Isso ativa sentimentos positivos associados ao início da relação.</li>
            <li><strong>Dia 7 (Meta de Crescimento Conjunto):</strong> Definam uma "meta de casal" para o próximo trimestre. Pode ser algo como "ler o mesmo livro e discutir", "aprender a investir juntos" ou "fazer um curso online". Crescer juntos é um dos antídotos mais poderosos contra a estagnação. 📚</li>
          </ul>
          <h3>Conclusão Final 🌟</h3>
          <p>Seu relacionamento é um exemplo de saúde e equilíbrio. O segredo para o futuro é não se acomodar. A complacência é o inimigo silencioso dos grandes amores. Continue investindo intencionalmente na comunicação, na vulnerabilidade e nas experiências compartilhadas para que a conexão não apenas permaneça forte, mas continue a evoluir e surpreender vocês dois.</p>
        `,
      },
    },
    gossipy_friend: {
      free: {
        detailedSummary: `
          <h3>Amiga, tá tudo ótimo! ✨</h3>
          <p>
            Olha, pelo que você me contou, esse romance tá voando em céu de brigadeiro! 😱 Ele(a) responde rápido, presta atenção em você, inicia conversa e vocês até falam de sentimentos. Sinceramente? Isso é ouro! Parece que você tirou a sorte grande. A conexão de vocês é super forte, então pode guardar aquele medinho bobo na gaveta e curtir essa fase maravilhosa! 😜
          </p>
        `,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Amiga, para tudo! Isso é material de feed do Instagram! ✨</h3>
          <p>
            Sério, vamos ser honestas: o que você descreveu é o tipo de relacionamento que a gente vê em comédia romântica e acha que nem existe! 😱 Ele(a) não só responde, como inicia conversa, presta atenção no que você fala e ainda topa falar de "sentimentos" sem sair correndo. Isso não é um bom sinal, é um outdoor luminoso piscando "VOCÊ ACHOU O TESOURO!".
          </p>
          <p>
            Essa consistência toda mostra que ele(a) não tá pra brincadeira. Fazer planos, demonstrar carinho... amiga, ele(a) tá super na sua. Esquece aquela neurose de "será?". A resposta é um gigantesco SIM. Agora é só não estragar tudo, kkkk. Brincadeira! É só curtir e aproveitar cada segundo! 💅
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Decifrando esse achado raro da natureza! 🤔</h3>
          <p>
            Sabe essa coisa de ele(a) responder rápido e te dar atenção total? No nosso dialeto, isso se chama <strong>"efeito holofote"</strong>. Onde você tá, a luz tá focada! Isso é o oposto daquele "apego fujão" que a gente tanto vê por aí. Ele(a) não tem medo de intimidade, pelo contrário, ele(a) busca! Isso é um partidão, nível Black Label. 🍾
          </p>
          <p>
            E o fato de vocês falarem das coisinhas do dia? Amiga, isso é o que os chiques chamam de "construir um mapa do mundo interior um do outro". Na prática, significa que vocês não são só um casal, são melhores amigos que se pegam. E vamos combinar, essa é a meta final de qualquer relacionamento! Vocês estão construindo um império de fofoca e amor. Adoro! 😂
          </p>
        `,
        actionPlan: `
          <h3>Plano "Operação Upgrade de Casal Power" 🔥</h3>
          <p>Se já tá bom, por que não deixar espetacular? Segue o plano pra vocês virarem "aquele casal" que todo mundo inveja (com amor, claro).</p>
          <ul>
            <li><strong>Dia 1 (Fofoca do Bem):</strong> Pergunta qual foi o maior mico que ele(a) já pagou. Depois conta o seu. Rir de si mesmo juntos cria uma conexão absurda. É terapia de graça! 🤣</li>
            <li><strong>Dia 2 (Ataque de Fofura):</strong> Do nada, no meio da tarde, manda um áudio: "Só pra dizer que tô com saudade da sua voz". Custa zero reais e o impacto é milionário. Vai por mim.</li>
            <li><strong>Dia 3 (Missão Secreta):</strong> Diga "Temos uma missão pro finde: fazer algo que nunca fizemos antes". E aí planejem juntos, pode ser desde provar comida esquisita até caçar Pokémon na rua (se isso ainda existir). O importante é a aventura! 🗺️</li>
            <li><strong>Dia 4 (Consultoria de Sonhos):</strong> "Se dinheiro não fosse problema, qual a primeira coisa que você faria?". Conhecer os sonhos do outro é super sexy! E te dá ideias de presentes, fica a dica. 🎁</li>
            <li><strong>Dia 5 (Stalking do Bem):</strong> Acha uma foto antiga dele(a) nas redes sociais e comenta "Olha esse neném! Já era uma gracinha!". É fofo, engraçado e mostra que você tava pensando nele(a).</li>
            <li><strong>Dia 6 (Sessão Nostalgia 2.0):</strong> "Qual a nossa memória mais engraçada juntos?". Relembrar perrengues que viraram história é o melhor tipo de terapia de casal. Prepare a pipoca! 🍿</li>
            <li><strong>Dia 7 (Desafio de Casal):</strong> "Desafio da semana: quem fizer o outro rir mais alto, ganha". O prêmio? O perdedor paga o jantar. Competição saudável é tudo! 🏆</li>
          </ul>
          <h3>Resumindo, gata... 💅</h3>
          <p>Relaxa e aproveita! A vibe tá boa, a sintonia tá alta. Vocês já são incríveis juntos. O ponto agora é continuar se divertindo no processo e nunca deixar a peteca cair. Tá tudo lindo, e vai ficar ainda mais! Voa, minha filha! 🚀</p>
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
            O cenário que você descreve é de altos e baixos, o que pode gerar bastante ansiedade. Há momentos claros de conexão, mas são intercalados com períodos de distância e comunicação irregular. Essa inconsistência sugere que pode haver fatores externos (estresse, outras prioridades) ou uma incerteza interna da parte dele(a) sobre o relacionamento. É crucial observar os padrões e buscar um diálogo honesto para entender a raiz dessa dinâmica.
          </p>
        `,
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
          <h3>Plano de Ação de 7 Dias: Recuperando o Controle e a Clareza 🗺️</h3>
          <p>Este plano não visa "consertá-lo(a)", mas sim quebrar o ciclo vicioso, recuperar seu poder e dar a você a clareza necessária para decidir seus próximos passos.</p>
          <ul>
            <li><strong>Dia 1 (Observação Passiva):</strong> Não inicie nenhuma conversa. Nenhuma. O objetivo é coletar dados: ele(a) te procurou? Se sim, como foi a conversa? Anote mentalmente. Você está no modo cientista. 👩‍🔬</li>
            <li><strong>Dia 2 (Espelhamento de Energia):</strong> Se ele(a) te procurar, responda com o mesmo nível de energia. Se a mensagem for curta e direta ("Tudo bem?"), responda de forma similar ("Tudo ótimo e por aí?"). Não dê mais do que recebe. Isso reequilibra a dinâmica de poder.</li>
            <li><strong>Dia 3 (Foco Total na Sua Vida):</strong> Poste algo sobre um hobby seu, uma conquista no trabalho ou uma saída com amigos. Isso não é uma indireta, é um lembrete (para você e para o mundo) de que sua vida é plena e interessante por si só. ✨</li>
            <li><strong>Dia 4 (A Arte da Pergunta Aberta):</strong> Se você decidir iniciar contato, evite perguntas de "sim/não". Tente algo aberto como: "Vi [algo] e lembrei de você. Como tem sido sua semana?". Isso convida à conversa sem soar como uma cobrança.</li>
            <li><strong>Dia 5 (O Convite de Baixo Risco):</strong> Proponha algo concreto, casual e com um prazo definido. Ex: "Estou pensando em ir naquele café novo no sábado à tarde. Se estiver livre e a fim, me avise até amanhã à noite". Isso coloca a bola no campo dele(a) sem te deixar esperando indefinidamente. ☕</li>
            <li><strong>Dia 6 (Reforço Positivo Estratégico):</strong> Se ele(a) demonstrar um comportamento positivo que você deseja (iniciar uma conversa profunda, fazer um plano), reforce. "Adorei conversar com você hoje, foi leve e divertido!". Isso mostra o que você valoriza.</li>
            <li><strong>Dia 7 (A Conversa Honesta e Calma):</strong> Se a inconsistência persistir, prepare-se para uma conversa usando a técnica "Eu sinto". Ex: "Eu sinto que nossa comunicação tem sido um pouco instável, com altos e baixos. Isso me deixa um pouco confusa sobre onde estamos. Como você vê as coisas do seu lado?". É sobre seus sentimentos, não sobre acusá-lo(a).</li>
          </ul>
          <h3>Conclusão Final 🧭</h3>
          <p>A inconsistência drena sua energia e autoestima. Este plano serve para tirar você do papel de "perseguidora" e te colocar no de "observadora consciente". As ações (ou a falta delas) da outra pessoa na próxima semana lhe darão a resposta mais clara que você precisa para decidir se vale a pena continuar investindo seu tempo e emoções nesse relacionamento.</p>
        `,
      },
    },
    gossipy_friend: {
      free: {
        detailedSummary: `
          <h3>Amiga, que rolo, hein? 🤔</h3>
          <p>
            Senta aqui, vamos fofocar. A situação é uma montanha-russa! Tem hora que ele(a) é um fofo, responde, parece super a fim. Daí, do nada, some, vira um fantasma. 👻 Essa coisa de "às vezes sim, às vezes não" deixa qualquer uma maluca, né? Fica parecendo um jogo que a gente não sabe as regras. Será que tá se fazendo de difícil ou tá só confuso(a) mesmo? Precisamos investigar isso!
          </p>
        `,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Amiga, senta que lá vem história... e que história confusa! 🤔</h3>
          <p>
            Vamos aos fatos: esse boy/mina tá operando no modo "Wi-Fi de rodoviária". Uma hora o sinal tá ótimo, vocês conversam, rola uma atenção, você até pensa "agora vai!". De repente, o sinal cai, a mensagem não chega, e você fica lá, olhando pra tela, parecendo uma maluca. 👻
          </p>
          <p>
            Essa palhaçada de ser quente num dia e um iceberg no outro é clássica. Deixa a gente doidinha, se questionando "o que eu fiz de errado?". Spoiler: provavelmente nada! A confusão mora do lado de lá. Ficar nesse jogo de adivinhação é um porre. Precisamos de um plano pra sair desse limbo e te devolver sua paz de espírito! Chega de ser refém de notificação!
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Decifrando o enigma que não deveria ser um... 🕵️‍♀️</h3>
          <p>
            Esse comportamento de some e aparece tem nome, viu? É o famoso <strong>"breadcrumbing"</strong> (ou "espalhar migalhas", em bom português). Ele(a) te dá atenção suficiente pra te manter interessada, mas nunca o bastante pra ser um relacionamento de verdade. É a tática de quem quer ter o ego inflado sem ter o trabalho de se comprometer. Um clássico dos tempos modernos. 🙄
          </p>
          <p>
            Outra possibilidade é o <strong>medo de intimidade</strong>. A pessoa gosta de você, se sente bem, mas quando a coisa começa a ficar séria... PUM! 💥 O cérebro dela entra em pânico e manda o comando "FUJA!". Em ambos os casos, a culpa não é sua! Você só tá aí, querendo uma conexão normal, enquanto a outra pessoa tá presa no próprio roteiro maluco.
          </p>
        `,
        actionPlan: `
          <h3>Plano "Detetive do Amor & Rainha do Amor-Próprio" 💅</h3>
          <p>Chega de ser coadjuvante na série dele(a). Hora de virar a protagonista da sua! Pega a coroa e vamos lá! 👑</p>
          <ul>
            <li><strong>Dia 1 (Chá de Sumiço Estratégico):</strong> Hoje, você não existe pra ele(a). Não manda mensagem, não curte stories, não reage a nada. Deixa a pessoa sentir o vácuo que você preenche na vida dela. Silêncio às vezes grita, meu bem.</li>
            <li><strong>Dia 2 (Modo Ocupada & Importante):</strong> Se ele(a) aparecer, seja simpática, mas direta: "Oii, tudo ótimo! Dia super corrido por aqui, te respondo com calma mais tarde!". E responda SÓ mais tarde mesmo. Mostre que seu tempo é valioso. ⏳</li>
            <li><strong>Dia 3 (Book de Fotos da Vida Incrível):</strong> Poste uma foto MARAVILHOSA sua no seu story. Com amigos, num lugar legal, fazendo um hobby. O recado é claro: "minha vida é um arraso, com ou sem você".</li>
            <li><strong>Dia 4 (A Regra dos 15 Minutos):</strong> Se a conversa engatar, não fique disponível por horas. Depois de uns 15 minutos de papo bom, diga: "Adorei o papo, mas preciso correr agora! A gente se fala". Deixe um gostinho de quero mais. É cruel? Talvez. É necessário? Com certeza. 😉</li>
            <li><strong>Dia 5 (A Isca da Saudade):</strong> Se estiver se sentindo ousada, mande um "Sabe que eu tava lembrando da gente rindo daquela coisa boba? Saudade aleatória disso". É leve, fofo e joga a responsabilidade de continuar o papo pra ele(a).</li>
            <li><strong>Dia 6 (O Confronto de Veludo):</strong> Se a montanha-russa continuar, talvez seja hora daquela conversa. "Fulano(a), eu gosto muito de você, mas fico confusa com essa inconstância. Tem dias que estamos super conectados e outros que você some. Só queria entender o que se passa". Direta, mas sem acusar. Classe, sempre!</li>
            <li><strong>Dia 7 (Dia do Veredito):</strong> Analise a semana. Ele(a) se esforçou mais? Ou continuou na mesma ladainha? A reação ao seu sumiço e à sua conversa dirá TUDO. Confie nas ações, não nas palavras bonitas.</li>
          </ul>
          <h3>Conclusão da fofoca ☕</h3>
          <p>Amiga, valorize seu tempo e sua paz de espírito! Você não é centro de reabilitação pra gente confusa. Ou a pessoa decide entrar no barco e remar junto, ou é melhor pular fora e pegar um jet ski sozinha. Você merece um amor que seja calmaria, não uma tempestade constante. E se não for ele, que venha o próximo! A fila anda, e a sua tá cheia de gente interessante. 😉</p>
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
            As respostas apontam para um padrão preocupante de distanciamento emocional e falta de reciprocidade. A demora constante nas respostas, a falta de iniciativa e a evasão de tópicos importantes são fortes indicativos de desinteresse ou de que a conexão se desgastou. A indiferença em conflitos e a ausência de afeto sugerem um cenário que exige uma avaliação honesta sobre a saúde deste relacionamento para você. É crucial proteger seu bem-estar.
          </p>
        `,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Análise Completa: Bandeiras Vermelhas e Desgaste Emocional 🚩</h3>
          <p>
            Os padrões indicados por suas respostas são claros e preocupantes. Eles descrevem um relacionamento que se tornou unilateral, onde uma das partes parece ter se retirado emocionalmente, deixando a outra sobrecarregada com o peso de manter a conexão viva. A comunicação não é apenas falha; ela é marcada pela falta de iniciativa, longos períodos de silêncio e uma aparente indiferença pelo seu bem-estar emocional.
          </p>
          <p>
            A evitação de conflitos ou a reação com irritação a conversas sérias não é um sinal de que "está tudo bem", mas sim uma estratégia para manter a distância e evitar qualquer nível de vulnerabilidade ou responsabilidade. Esse conjunto de comportamentos cria um ambiente emocionalmente inseguro e pode ter um impacto corrosivo na sua autoestima e percepção de valor.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas Aprofundadas 🧠</h3>
          <p>
            O comportamento descrito é um caso clássico de <strong>"stonewalling" (barreira de silêncio)</strong> e <strong>desligamento emocional</strong>. Identificado pelo Dr. John Gottman como um dos "Quatro Cavaleiros do Apocalipse" do relacionamento, o "stonewalling" ocorre quando uma pessoa se recusa a se comunicar ou a cooperar, efetivamente construindo um muro. É uma das atitudes mais destrutivas, pois torna a resolução de problemas impossível e sinaliza um profundo desrespeito.
          </p>
          <p>
            Minimizar seus sentimentos ou reagir com irritação quando você tenta expressar uma necessidade é uma forma de <strong>invalidação emocional</strong>. A mensagem subliminar é: "Seus sentimentos não são válidos ou são um exagero". Com o tempo, isso pode fazer com que você duvide da sua própria percepção da realidade (uma forma de "gaslighting"). Manter-se em um relacionamento assim é como tentar regar uma planta morta: você gasta toda a sua energia e não obtém nada em troca. 🥀
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação de 7 Dias: Foco na Autopreservação e Decisão 🛡️</h3>
          <p>Este plano não é sobre "salvar" o relacionamento, mas sim sobre salvar a si mesma, fortalecer sua autoestima e ganhar a clareza final para tomar uma decisão informada.</p>
          <ul>
            <li><strong>Dia 1 (Inventário Emocional Honesto):</strong> Pegue um caderno e escreva como este relacionamento fez você se sentir na última semana/mês. Use palavras brutais, se necessário (ex: "invisível", "burra", "carente"). Depois, em outra página, escreva como você GOSTARIA de se sentir em um relacionamento. Compare as duas listas. Este contraste é o seu "porquê". 📝</li>
            <li><strong>Dia 2 (Reconexão Externa):</strong> Ligue para um amigo ou familiar com quem você não fala há algum tempo. Alguém que te faz rir e te faz sentir bem. Lembre-se de como é uma interação saudável, leve e recíproca.</li>
            <li><strong>Dia 3 (Ação Radical de Amor-Próprio):</strong> Faça algo que você adiou por causa do relacionamento ou por falta de ânimo. Pode ser matricular-se naquela aula de dança, visitar um lugar novo sozinha, ou simplesmente dedicar a noite a um hobby que você ama. Recupere um pedaço de si mesma. 💃</li>
            <li><strong>Dia 4 (Definindo Seus Limites Inegociáveis):</strong> Com base na sua lista do Dia 1, escreva 3 a 5 limites inegociáveis para qualquer relacionamento futuro. Ex: "Eu não aceito ser ignorada por mais de 24h sem uma explicação razoável" ou "Eu preciso que meu parceiro ouça meus sentimentos sem me invalidar". Isso é seu manifesto pessoal.</li>
            <li><strong>Dia 5 (Planejando a Conversa Final):</strong> Você merece uma conclusão, mesmo que seja para si mesma. Planeje o que você dirá, não para acusar, mas para expressar sua decisão. Estruture em torno de "Eu". Ex: "Eu tenho me sentido consistentemente desvalorizada e sozinha nesta relação, e por isso, eu decidi que preciso seguir em frente para cuidar de mim".</li>
            <li><strong>Dia 6 (Construa Sua Rede de Apoio):</strong> Avise um ou dois amigos de confiança que você terá uma conversa difícil e que precisará de suporte. Peça para que eles estejam disponíveis para você conversar depois. Não passe por isso sozinha. 🤝</li>
            <li><strong>Dia 7 (A Conversa Libertadora):</strong> Tenha a conversa. Seja breve, clara e firme. Não caia em promessas vagas de mudança de última hora. O histórico de comportamento é o dado mais concreto que você tem. Sua paz de espírito é a prioridade número um.</li>
          </ul>
          <h3>Conclusão Final 🚪</h3>
          <p>Você merece um relacionamento onde se sinta segura, vista, ouvida e celebrada. Os sinais indicam que isso não está acontecendo aqui. A decisão mais corajosa e saudável que você pode tomar agora é escolher a si mesma. O fim de um ciclo doloroso não é um fracasso, é o começo de uma nova fase de paz, autodescoberta e a abertura para um amor que te transborde, não que te esvazie.</p>
        `,
      },
    },
    gossipy_friend: {
      free: {
        detailedSummary: `
          <h3>Amiga, Red Flag Gigante! 🚩</h3>
          <p>
            PELO AMOR DE DEUS! O que você tá fazendo nesse barco furado? 😱 Ele(a) te ignora, não demonstra o mínimo de interesse, te trata com indiferença... Sinceramente, isso não é relacionamento, é um teste de paciência que você não deveria estar fazendo. Parece que só você tá remando. Acorda, mulher! Você merece muito mais do que essas migalhas. Vamos conversar sobre amor-próprio!
          </p>
        `,
        psychologicalInterpretations: '',
        actionPlan: '',
      },
      full: {
        detailedSummary: `
          <h3>Amiga, larga esse osso! Isso aí já deu o que tinha que dar! 🚩</h3>
          <p>
            Sério, vamos ser brutalmente honestas. Pelo que você contou, isso não é um relacionamento, é um monólogo. Você fala, você se importa, você tenta... e a outra pessoa? Tá lá, existindo. Te tratando com a mesma empolgação de quem preenche formulário de imposto de renda. 😴
          </p>
          <p>
            Ignorar, não responder, fugir de conversa séria, zero carinho... Isso não são "sinais", são fogos de artifício barulhentos berrando "EU NÃO ME IMPORTO". Continuar investindo aí é como tentar carregar o celular com o carregador fora da tomada. Você gasta sua energia e não acontece NADA. É um desperdício do seu tempo e da sua beleza.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Traduzindo o "embusteês" para o bom e velho português 📖</h3>
          <p>
            Esse show de desinteresse todo é o famoso <strong>"ghosting em câmera lenta"</strong>. A pessoa não tem a coragem de terminar como um adulto, então ela vai te tratando tão mal, mas tão mal, que a decisão de acabar sobra pra você. É uma tática covarde pra sair da situação com as "mãos limpas" e ainda se fazer de vítima depois. Não caia nessa!
          </p>
          <p>
            E essa mania de te fazer sentir que você tá exagerando quando tenta conversar? Clássico manual do <strong>"invalidador profissional"</strong>, também conhecido como "gaslighting de centavos". Ele(a) pisa no seu pé e depois diz que você tá sendo dramática por sentir dor. O objetivo é te deixar tão confusa e insegura que você para de reclamar. Não deixe ninguém apagar o seu fogo, amiga! 🔥
          </p>
        `,
        actionPlan: `
          <h3>Plano "Operação Resgate do Amor-Próprio Nível Hard" 💅</h3>
          <p>Chega de dar palco pra quem não merece nem estar na plateia. A estrela aqui é você! Bota a sua melhor roupa, pega um drink e vamos traçar esse plano de fuga. 🥂</p>
          <ul>
            <li><strong>Dia 1 (O 'Block' Libertador):</strong> Bloqueia. Sim, é isso mesmo. Zap, Insta, Face, tudo. Corta o mal pela raiz. A paz que isso vai te dar em 24h é surreal. É como tirar um sapato apertado depois de uma festa. Alívio imediato! 🚫</li>
            <li><strong>Dia 2 (Terapia Intensiva de Amigas):</strong> Me liga. Agora. Vamos marcar um café, um vinho, o que for. Você vai desabafar tudo e eu vou passar as próximas 3 horas te lembrando da pessoa f*da e maravilhosa que você é.</li>
            <li><strong>Dia 3 (Dia da Beleza e da Besteira):</strong> Dia de se mimar como se não houvesse amanhã. Máscara no rosto, sua playlist de "superação" no talo, e aquela comida que te faz feliz. Assista à comédia mais idiota que encontrar na Netflix. Rir é o melhor remédio. 💄</li>
            <li><strong>Dia 4 (A Lista do "Me Livrei"):</strong> Faça uma lista de todas as vezes que essa pessoa te fez sentir pequena, ignorada ou insuficiente. Deixe no bloco de notas do celular. Essa será sua vacina anti-recaída. Leia sempre que a saudade idiota bater.</li>
            <li><strong>Dia 5 (Reative Suas Conexões e Seu Charme):</strong> Saia com aquele grupo de amigos que você deixou de lado. Flerta com o garçom, com o espelho, com a vida! Lembre-se do seu poder de sedução e de como é bom ser admirada. 😉</li>
            <li><strong>Dia 6 (Momento "Saudade? Que Saudade?"):</strong> Se a saudade bater (e ela pode bater, a gente é humana), leia a lista do Dia 4. Em voz alta. Lembre-se do alívio, não da dor. E depois, chame uma amiga pra ir fazer algo divertido.</li>
            <li><strong>Dia 7 (Celebre a Liberdade!):</strong> Brinde! Sozinha, com amigos, com o gato. Você se livrou de um peso morto que te impedia de voar. Hoje é o primeiro dia do resto da sua vida incrível, cheia de possibilidades e gente que te valoriza. 🎉</li>
          </ul>
          <h3>Conselho de amiga do fundo do coração ❤️</h3>
          <p>Não aceite um amor que te faça duvidar de si mesma ou que te dê trabalho. Amor tem que ser leve, tem que somar. Você merece alguém que te olhe e pense "caramba, que sorte eu tenho". Se essa pessoa não viu o mulherão que você é, o azar é 100% dela. Próximo da fila, por favor! 💁‍♀️</p>
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
    // Fallback to a default response to avoid crashing
    if (type === 'full') {
        return responses['mixed']['detailed']['full'];
    }
    return responses['mixed']['detailed']['free'];
  }
}
