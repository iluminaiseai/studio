
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
          <h3>Análise Completa: Uma Parceria com Fundações Sólidas 💡</h3>
          <p>
            O padrão de respostas que você forneceu desenha um cenário extremamente positivo. A comunicação é fluida e recíproca, com ambos os lados demonstrando iniciativa e atenção. Isso vai além de meras formalidades; sugere um interesse genuíno em manter a conexão viva e relevante no dia a dia.
          </p>
          <p>
            A consistência no comportamento, especialmente em áreas como tempo de resposta, demonstrações de afeto e planejamento futuro, indica um alto nível de segurança e compromisso. Não há jogos ou incertezas, mas sim uma base de confiança onde ambos se sentem à vontade para serem vulneráveis. Este é o alicerce de relacionamentos duradouros e resilientes.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas Aprofundadas</h3>
          <p>
            O comportamento descrito é um forte indicador de um <strong>estilo de apego seguro</strong>. Psicologicamente, isso significa que ambos os parceiros desenvolveram uma confiança mútua de que estarão disponíveis e responsivos às necessidades um do outro. A ausência de ansiedade sobre "quem manda a primeira mensagem" ou "quanto tempo esperar para responder" elimina jogos de poder e permite que a intimidade floresça organicamente.
          </p>
          <p>
            O compartilhamento de detalhes do dia a dia, que pode parecer trivial, é na verdade um pilar para a <strong>"capitalização"</strong>, um termo psicológico que descreve como parceiros que celebram as pequenas vitórias um do outro fortalecem a satisfação no relacionamento. Vocês não estão apenas compartilhando informações, estão validando as experiências um do outro, o que aprofunda a interconexão e a intimidade.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação de 7 Dias: De Ótimo para Extraordinário</h3>
          <p>O objetivo aqui não é "consertar", mas sim "elevar". São pequenas práticas para aprofundar ainda mais uma conexão que já é excelente.</p>
          <ul>
            <li><strong>Dia 1 (Vulnerabilidade):</strong> Reserve 15 minutos para cada um compartilhar um pequeno medo ou uma insegurança recente, sem julgamentos. O objetivo é apenas ouvir e oferecer apoio.</li>
            <li><strong>Dia 2 (Apreciação Inesperada):</strong> Envie uma mensagem de apreciação focada em um traço de caráter, não em uma ação. Ex: "Admiro muito a sua paciência com as pessoas, me inspira a ser melhor."</li>
            <li><strong>Dia 3 (Planejamento Criativo):</strong> Em vez de planejar algo rotineiro, planejem juntos uma "mini aventura" para o próximo mês (ex: uma trilha, uma aula de culinária, uma visita a uma cidade vizinha).</li>
            <li><strong>Dia 4 (Linguagem do Amor):</strong> Identifique a principal linguagem do amor do seu parceiro(a) (palavras, tempo, presentes, atos de serviço, toque) e faça uma ação deliberada baseada nela hoje.</li>
            <li><strong>Dia 5 (Elogio Público Sutil):</strong> Em uma conversa com amigos ou em uma postagem discreta, mencione algo que seu parceiro(a) fez e que você se orgulha. Deixe que ele(a) veja ou ouça isso organicamente.</li>
            <li><strong>Dia 6 (Revisão de Memórias):</strong> Abram uma pasta de fotos antigas e relembrem um momento feliz. Conversem sobre o que sentiram naquele dia e o que aquela memória representa para vocês.</li>
            <li><strong>Dia 7 (Meta de Crescimento Conjunto):</strong> Definam uma "meta de casal" para o próximo trimestre. Pode ser algo como "ler o mesmo livro e discutir" ou "aprender a investir juntos".</li>
          </ul>
          <h3>Conclusão</h3>
          <p>Seu relacionamento é um exemplo de saúde e equilíbrio. O segredo para o futuro é não se acomodar. Continue investindo intencionalmente na comunicação, na vulnerabilidade e nas experiências compartilhadas para que a conexão não apenas permaneça forte, mas continue a evoluir.</p>
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
            Essa consistência toda mostra que ele(a) não tá pra brincadeira. Fazer planos, demonstrar carinho... amiga, ele(a) tá super na sua. Esquece aquela neurose de "será?". A resposta é um gigantesco SIM. Agora é só não estragar tudo, kkkk. Brincadeira! É só curtir!
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Decifrando esse achado raro da natureza! 🤔</h3>
          <p>
            Sabe essa coisa de ele(a) responder rápido e te dar atenção total? No nosso dialeto, isso se chama <strong>"efeito holofote"</strong>. Onde você tá, a luz tá focada! Isso é o oposto daquele "apego fujão" que a gente tanto vê por aí. Ele(a) não tem medo de intimidade, pelo contrário, ele(a) busca! Isso é um partidão, nível Black Label.
          </p>
          <p>
            E o fato de vocês falarem das coisinhas do dia? Amiga, isso é o que os chiques chamam de "construir um mapa do mundo interior um do outro". Na prática, significa que vocês não são só um casal, são melhores amigos que se pegam. E vamos combinar, essa é a meta final de qualquer relacionamento!
          </p>
        `,
        actionPlan: `
          <h3>Plano "Operação Upgrade de Casal Power" 🔥</h3>
          <p>Se já tá bom, por que não deixar espetacular? Segue o plano pra vocês virarem "aquele casal" que todo mundo inveja.</p>
          <ul>
            <li><strong>Dia 1 (Fofoca do Bem):</strong> Pergunta qual foi o maior mico que ele(a) já pagou. Depois conta o seu. Rir de si mesmo juntos cria uma conexão absurda.</li>
            <li><strong>Dia 2 (Ataque de Fofura):</strong> Do nada, no meio da tarde, manda um áudio: "Só pra dizer que tô com saudade da sua voz". Custa zero reais e o impacto é milionário.</li>
            <li><strong>Dia 3 (Missão Secreta):</strong> Diga "Temos uma missão pro finde: fazer algo que nunca fizemos antes". E aí planejem juntos, pode ser desde provar comida esquisita até caçar Pokémon na rua.</li>
            <li><strong>Dia 4 (Consultoria de Sonhos):</strong> "Se dinheiro não fosse problema, qual a primeira coisa que você faria?". Conhecer os sonhos do outro é super sexy!</li>
            <li><strong>Dia 5 (Stalking do Bem):</strong> Acha uma foto antiga dele(a) nas redes sociais e comenta "Olha esse neném! Já era uma gracinha!". É fofo e mostra que você tava pensando nele(a).</li>
            <li><strong>Dia 6 (Sessão Nostalgia):</strong> "Qual a nossa memória mais engraçada juntos?". Relembrar perrengues que viraram história é o melhor tipo de terapia de casal.</li>
            <li><strong>Dia 7 (Desafio de Casal):</strong> "Desafio da semana: quem fizer o outro rir mais alto, ganha". O prêmio? O perdedor paga o jantar.</li>
          </ul>
          <h3>Resumindo, gata...</h3>
          <p>Relaxa e aproveita! A vibe tá boa, a sintonia tá alta. Vocês já são incríveis juntos. O ponto agora é continuar se divertindo no processo e nunca deixar a peteca cair. Tá tudo lindo, e vai ficar ainda mais!</p>
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
          <h3>Análise Completa: Navegando em Águas de Incerteza 💡</h3>
          <p>
            O padrão de respostas mistas revela um relacionamento marcado pela ambiguidade. Existem sinais genuínos de interesse — momentos em que a comunicação flui e a atenção é presente. No entanto, esses momentos são minados pela inconsistência: a demora em responder, a falta de iniciativa e a hesitação em tocar em tópicos mais profundos.
          </p>
          <p>
            Essa dinâmica de "quente e frio" é psicologicamente desgastante. Ela cria um ciclo de esperança e frustração que pode mantê-la em um estado de alerta constante, tentando decifrar o comportamento do outro. É importante reconhecer que essa instabilidade raramente é sobre você, e sim um reflexo das próprias ambiguidades ou limitações da outra pessoa.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas Aprofundadas</h3>
          <p>
            Este comportamento é frequentemente associado a um <strong>estilo de apego evitativo</strong>. Indivíduos com esse perfil anseiam por conexão, mas se sentem sufocados pela intimidade excessiva. Quando percebem que a relação está se aprofundando, eles se afastam para recuperar seu senso de autonomia. Isso explica o ciclo de se aproximar (quando sentem sua falta) e se afastar (quando se sentem pressionados).
          </p>
          <p>
            A dinâmica de "iniciar vs. só responder" pode levar a um padrão de <strong>"perseguição e fuga"</strong>. Quanto mais você busca clareza e iniciativa (persegue), mais o outro pode se sentir pressionado e se retrair (fuga). Quebrar esse ciclo exige uma mudança de estratégia: focar menos em obter uma resposta e mais em observar as ações e em proteger sua própria paz de espírito.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação de 7 Dias: Recuperando o Controle e a Clareza</h3>
          <p>Este plano não visa "consertá-lo(a)", mas sim quebrar o ciclo vicioso e dar a você a clareza necessária para decidir seus próximos passos.</p>
          <ul>
            <li><strong>Dia 1 (Observação Passiva):</strong> Não inicie nenhuma conversa. Apenas observe. Ele(a) te procurou? Se sim, como foi a conversa? Anote mentalmente. O objetivo é coletar dados, não agir.</li>
            <li><strong>Dia 2 (Espelhamento de Energia):</strong> Se ele(a) te procurar, responda com o mesmo nível de energia. Se a mensagem for curta e direta, seja igual. Se for mais elaborada, elabore um pouco. Não dê mais do que recebe.</li>
            <li><strong>Dia 3 (Foco na Sua Vida):</strong> Poste algo sobre um hobby, uma conquista no trabalho ou uma saída com amigos. Isso não é uma indireta, é um lembrete (para você e para os outros) de que sua vida é plena e interessante por si só.</li>
            <li><strong>Dia 4 (A Arte da Pergunta Aberta):</strong> Se for iniciar contato, evite perguntas de "sim/não". Tente algo aberto como: "Vi [algo] e lembrei de você. Como tem sido sua semana?". Isso convida à conversa sem pressionar.</li>
            <li><strong>Dia 5 (O Convite de Baixo Risco):</strong> Proponha algo concreto, casual e com um prazo definido. Ex: "Estou pensando em ir naquele café novo no sábado à tarde. Se estiver livre e a fim, me avise até amanhã". Isso coloca a bola no campo dele(a) sem te deixar esperando indefinidamente.</li>
            <li><strong>Dia 6 (Reforço Positivo):</strong> Se ele(a) demonstrar um comportamento positivo (iniciar uma conversa, fazer um plano), reforce. "Adorei conversar com você hoje!" ou "Estou animada para sábado!".</li>
            <li><strong>Dia 7 (A Conversa Honesta):</strong> Se a inconsistência persistir, prepare-se para uma conversa usando a técnica "Eu sinto". Ex: "Eu sinto que nossa comunicação tem sido um pouco instável, com altos e baixos. Isso me deixa um pouco confusa sobre onde estamos. Como você vê as coisas?".</li>
          </ul>
          <h3>Conclusão</h3>
          <p>A inconsistência drena sua energia. Este plano serve para tirar você do papel de "perseguidora" e te colocar no de "observadora". As ações (ou a falta delas) da outra pessoa na próxima semana lhe darão a resposta mais clara que você precisa para decidir se vale a pena continuar investindo nesse relacionamento.</p>
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
            Essa palhaçada de ser quente num dia e um iceberg no outro é clássica. Deixa a gente doidinha, se questionando "o que eu fiz de errado?". Spoiler: provavelmente nada! A confusão mora do lado de lá. Ficar nesse jogo de adivinhação é um porre. Precisamos de um plano pra sair desse limbo!
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Decifrando o enigma que não deveria ser um... 🕵️‍♀️</h3>
          <p>
            Esse comportamento de some e aparece tem nome, viu? É o famoso <strong>"breadcrumbing"</strong> (ou "espalhar migalhas"). Ele(a) te dá atenção suficiente pra te manter interessada, mas nunca o bastante pra ser um relacionamento de verdade. É a tática de quem quer ter o ego inflado sem ter o trabalho de se comprometer.
          </p>
          <p>
            Outra possibilidade é o <strong>medo de intimidade</strong>. A pessoa gosta de você, se sente bem, mas quando a coisa começa a ficar séria... PUM! O cérebro dela entra em pânico e manda o comando "FUJA!". Em ambos os casos, a culpa não é sua! Você só tá aí, querendo uma conexão normal, enquanto a outra pessoa tá presa no próprio roteiro maluco.
          </p>
        `,
        actionPlan: `
          <h3>Plano "Detetive do Amor & Rainha do Amor-Próprio" 💅</h3>
          <p>Chega de ser coadjuvante na série dele(a). Hora de virar a protagonista da sua!</p>
          <ul>
            <li><strong>Dia 1 (Chá de Sumiço Estratégico):</strong> Hoje, você não existe pra ele(a). Não manda mensagem, não curte stories, nada. Deixa a pessoa sentir o vácuo que você preenche.</li>
            <li><strong>Dia 2 (Modo Ocupada & Importante):</strong> Se ele(a) aparecer, seja simpática, mas direta: "Oii, tudo ótimo! Dia super corrido por aqui, te respondo com calma mais tarde!". E responda SÓ mais tarde mesmo.</li>
            <li><strong>Dia 3 (Book de Fotos da Vida Incrível):</strong> Poste uma foto MARAVILHOSA sua no seu story. Com amigos, num lugar legal, fazendo um hobby. O recado é claro: "minha vida é um arraso, com ou sem você".</li>
            <li><strong>Dia 4 (A Regra dos 15 Minutos):</strong> Se a conversa engatar, não fique disponível por horas. Depois de uns 15 minutos de papo bom, diga: "Adorei o papo, mas preciso correr agora! A gente se fala". Deixe um gostinho de quero mais.</li>
            <li><strong>Dia 5 (A Isca da Saudade):</strong> Se estiver se sentindo ousada, mande um "Sabe que eu tava lembrando da gente rindo daquela coisa boba? Saudade aleatória disso". É leve e joga a responsabilidade de continuar o papo pra ele(a).</li>
            <li><strong>Dia 6 (O Confronto de Veludo):</strong> Se a montanha-russa continuar, talvez seja hora daquela conversa. "Fulano(a), eu gosto muito de você, mas fico confusa com essa inconstância. Tem dias que estamos super conectados e outros que você some. Só queria entender o que se passa". Direta, mas sem acusar.</li>
            <li><strong>Dia 7 (Dia do Veredito):</strong> Analise a semana. Ele(a) se esforçou mais? Ou continuou na mesma ladainha? A reação ao seu sumiço e à sua conversa dirá TUDO.</li>
          </ul>
          <h3>Conclusão da fofoca</h3>
          <p>Amiga, valorize seu tempo e sua paz de espírito! Você não é centro de reabilitação pra gente confusa. Ou a pessoa decide entrar no barco e remar junto, ou é melhor pular fora e pegar um jet ski sozinha. Você merece um amor que seja calmaria, não uma tempestade constante.</p>
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
          <h3>Análise Completa: Bandeiras Vermelhas e Desgaste Emocional 💡</h3>
          <p>
            Os padrões indicados por suas respostas são claros e preocupantes. Eles descrevem um relacionamento unilateral, onde uma das partes parece ter se retirado emocionalmente. A comunicação não é apenas falha; ela é marcada pela falta de iniciativa, longos períodos de silêncio e uma aparente indiferença pelo seu bem-estar emocional.
          </p>
          <p>
            A evitação de conflitos ou a reação com irritação a conversas sérias não é um sinal de que "está tudo bem", mas sim uma estratégia para manter a distância e evitar qualquer nível de vulnerabilidade ou responsabilidade. Esse conjunto de comportamentos cria um ambiente emocionalmente inseguro e pode ter um impacto corrosivo na sua autoestima e percepção de valor.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Interpretações Psicológicas Aprofundadas</h3>
          <p>
            O comportamento descrito é um caso clássico de <strong>"stonewalling" (barreira de silêncio)</strong> e <strong>desligamento emocional</strong>. O "stonewalling" ocorre quando uma pessoa se recusa a se comunicar ou a cooperar, efetivamente construindo um muro. É uma das atitudes mais destrutivas para um relacionamento, pois torna a resolução de problemas impossível.
          </p>
          <p>
            Minimizar seus sentimentos ou reagir com irritação quando você tenta expressar uma necessidade é uma forma de <strong>invalidação emocional</strong>. A mensagem subliminar é: "Seus sentimentos não são válidos ou são um exagero". Com o tempo, isso pode fazer com que você duvide da sua própria percepção da realidade (uma forma leve de "gaslighting"). Manter-se em um relacionamento assim é como tentar regar uma planta morta: você gasta toda a sua energia e não obtém nada em troca.
          </p>
        `,
        actionPlan: `
          <h3>Plano de Ação de 7 Dias: Foco na Autopreservação e Decisão</h3>
          <p>Este plano não é sobre "salvar" o relacionamento, mas sim sobre salvar a si mesma e ganhar a clareza final para tomar uma decisão informada.</p>
          <ul>
            <li><strong>Dia 1 (Inventário Emocional):</strong> Pegue um caderno e escreva como este relacionamento fez você se sentir na última semana/mês. Use palavras honestas. Depois, escreva como você GOSTARIA de se sentir em um relacionamento. Compare as duas listas.</li>
            <li><strong>Dia 2 (Reconexão Externa):</strong> Ligue para um amigo ou familiar com quem você não fala há algum tempo. Alguém que te faz sentir bem. Lembre-se de como é uma interação saudável e recíproca.</li>
            <li><strong>Dia 3 (Ação de Amor-Próprio):</strong> Faça algo que você adiou por causa do relacionamento ou por falta de ânimo. Pode ser matricular-se em uma aula, visitar um lugar novo, ou simplesmente dedicar a noite a um hobby que você ama.</li>
            <li><strong>Dia 4 (Definindo Seus Limites):</strong> Com base na sua lista do Dia 1, escreva 3 limites inegociáveis para qualquer relacionamento futuro. Ex: "Eu não aceito ser ignorada por mais de 24h sem explicação" ou "Eu preciso que meu parceiro ouça meus sentimentos sem me invalidar".</li>
            <li><strong>Dia 5 (Planejando a Conversa Final):</strong> Você merece uma conclusão. Planeje o que você dirá, não para acusar, mas para expressar sua decisão. Estruture em torno de "Eu". Ex: "Eu tenho me sentido consistentemente desvalorizada e sozinha, e por isso, eu decidi que preciso seguir em frente".</li>
            <li><strong>Dia 6 (Logística de Apoio):</strong> Avise um amigo de confiança que você terá uma conversa difícil. Peça para que ele(a) esteja disponível para você conversar depois. Crie sua rede de apoio antes do passo final.</li>
            <li><strong>Dia 7 (A Conversa Libertadora):</strong> Tenha a conversa. Seja breve, clara e firme. Não caia em promessas vagas de mudança. O histórico de comportamento é o dado mais concreto que você tem. Sua paz de espírito é a prioridade número um.</li>
          </ul>
          <h3>Conclusão</h3>
          <p>Você merece um relacionamento onde se sinta segura, vista, ouvida e celebrada. Os sinais indicam que isso não está acontecendo aqui. A decisão mais corajosa e saudável que você pode tomar agora é escolher a si mesma. O fim de um ciclo doloroso é o começo de uma nova fase de paz e autodescoberta.</p>
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
            Sério, vamos ser brutalmente honestas. Pelo que você contou, isso não é um relacionamento, é um monólogo. Você fala, você se importa, você tenta... e a outra pessoa? Tá lá, existindo. Te tratando com a mesma empolgação de quem preenche formulário de imposto de renda.
          </p>
          <p>
            Ignorar, não responder, fugir de conversa séria, zero carinho... Isso não são "sinais", são fogos de artifício barulhentos berrando "EU NÃO ME IMPORTO". Continuar investindo aí é como tentar carregar o celular com o carregador fora da tomada. Você gasta sua energia e não acontece NADA.
          </p>
        `,
        psychologicalInterpretations: `
          <h3>Traduzindo o "embusteês" para o bom e velho português</h3>
          <p>
            Esse show de desinteresse todo é o famoso <strong>"ghosting em câmera lenta"</strong>. A pessoa não tem a coragem de terminar, então ela vai te tratando tão mal, mas tão mal, que a decisão de acabar sobra pra você. É uma tática covarde pra sair da situação com as "mãos limpas".
          </p>
          <p>
            E essa mania de te fazer sentir que você tá exagerando quando tenta conversar? Clássico manual do <strong>"invalidador profissional"</strong>. Ele(a) pisa no seu pé e depois diz que você tá sendo dramática por sentir dor. O objetivo é te deixar tão confusa e insegura que você para de reclamar. Não caia nessa, pelo amor da nossa amizade!
          </p>
        `,
        actionPlan: `
          <h3>Plano "Operação Resgate do Amor-Próprio Nível Hard" 💅</h3>
          <p>Chega de dar palco pra quem não merece nem estar na plateia. A estrela aqui é você!</p>
          <ul>
            <li><strong>Dia 1 (O 'Block' Libertador):</strong> Bloqueia. Sim, é isso mesmo. Zap, Insta, Face, tudo. Corta o mal pela raiz. A paz que isso vai te dar em 24h é surreal.</li>
            <li><strong>Dia 2 (Terapia de Amigas):</strong> Me liga. Agora. Vamos marcar um café, um vinho, o que for. Você vai desabafar tudo e eu vou te lembrar da pessoa f*da que você é.</li>
            <li><strong>Dia 3 (Dia da Beleza e da Besteira):</strong> Dia de se mimar. Máscara no rosto, sua playlist favorita no talo, e aquela comida que te faz feliz. Assista à comédia mais idiota que encontrar na Netflix. Rir é o melhor remédio.</li>
            <li><strong>Dia 4 (A Lista do "Me Livrei"):</strong> Faça uma lista de todas as vezes que essa pessoa te fez sentir pequena, ignorada ou insuficiente. Deixe no bloco de notas do celular. Essa será sua vacina contra recaídas.</li>
            <li><strong>Dia 5 (Reative Suas Conexões):</strong> Saia com aquele grupo de amigos que você deixou de lado. Flerta com o garçom, com o espelho, com a vida! Lembre-se do seu poder de sedução.</li>
            <li><strong>Dia 6 (Momento "Saudade? Que Saudade?"):</strong> Se a saudade bater (e ela pode bater, é normal), leia a lista do Dia 4. Em voz alta. Lembre-se do alívio, não da dor.</li>
            <li><strong>Dia 7 (Celebre a Liberdade):</strong> Brinde! Você se livrou de um peso morto que te impedia de voar. Hoje é o primeiro dia do resto da sua vida incrível.</li>
          </ul>
          <h3>Conselho de amiga do fundo do coração</h3>
          <p>Não aceite um amor que te faça duvidar de si mesma. Você merece alguém que te olhe e pense "caramba, que sorte eu tenho". Se essa pessoa não viu o mulherão que você é, o azar é 100% dela. Próximo!</p>
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
