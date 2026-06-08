import type { NewsArticle, Correspondent } from '../types';

export const correspondents: Correspondent[] = [
  {
    id: '0',
    name: 'Mirian Ramalho',
    city: 'Curitiba',
    country: 'Brasil',
    role: 'Editora-chefe',
    initials: 'MR',
    bio: '35 anos como jornalista e editora-chefe, sede em Curitiba, atuando em busca do furo jornalístico da informação e acima de tudo a verdade com a imparcialidade no Brasil e no mundo.',
  },
  { id: '1', name: 'Lis Ramalho Barbosa', city: 'Brasília', country: 'Brasil', role: 'Jornalista e colunista', initials: 'LR' },
  { id: '2', name: 'Jorge Ramalho Barbosa', city: 'Curitiba', country: 'Brasil', role: 'Tecnologia da Informação', initials: 'JR' },
];

/**
 * Notícias de última hora — atualizado em 09/06/2026.
 * Fontes: G1, CNN Brasil, Valor, Folha, BBC, Reuters, Al Jazeera, NBC, CNBC.
 * Redação imparcial com verificação cruzada de fatos.
 */
export const articles: NewsArticle[] = [
  {
    id: '1',
    slug: 'frente-fria-chuvas-intensas-brasil-segunda-feira',
    title: 'Frente fria avança pelo Brasil e coloca sete estados em alerta para chuvas intensas',
    excerpt: 'Sistema meteorológico retorna precipitações ao país nesta segunda-feira. Institutos alertam para temporais no Sul e avanço em direção ao Sudeste nos próximos dias.',
    content: `Uma frente fria começa a avançar pelo Brasil nesta segunda-feira, 8 de junho de 2026, encerrando um período de tempo seco e trazendo chuvas mais expressivas a diversas regiões do país.

Segundo informações divulgadas pelo G1 com base em dados de meteorologistas, o sistema se desloca pelo Sul ainda na noite desta segunda e avança em direção à costa de São Paulo até quarta-feira. Há risco de temporais e ventos fortes no caminho, com acumulados que podem chegar a 100 milímetros ainda nesta segunda-feira.

A CNN Brasil reporta que sete estados estão em alerta: Rio Grande do Sul, Santa Catarina, Paraná, Mato Grosso do Sul, São Paulo, Minas Gerais e Rio de Janeiro. Os primeiros impactos são sentidos no Rio Grande do Sul, com chuva de moderada a forte intensidade em cidades como Porto Alegre, Santa Maria e Pelotas.

Na terça-feira (9), a previsão indica chuva intensa em grande parte do Sul, Norte e Sudeste. Acumulados mais expressivos — de até 150 milímetros — são esperados para áreas do Mato Grosso do Sul, Roraima e Pará. Em Roraima, nove municípios já estão em situação de emergência por causa das chuvas das últimas semanas.

Após a passagem da frente, uma nova massa de ar frio deve manter temperaturas baixas no Sul, em parte do Sudeste e do Centro-Oeste.

A Mundo News reúne dados de institutos oficiais e veículos de referência para oferecer informação contextualizada, sem alarmismo. Recomendamos que moradores das áreas em alerta acompanhem boletins oficiais de Defesa Civil e órgãos meteorológicos.`,
    category: 'brasil',
    author: 'Lis Ramalho Barbosa',
    authorRole: 'Jornalista e colunista — Brasília',
    publishedAt: '2026-06-08T11:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    imageAlt: 'Paisagem natural com neblina sobre montanhas verdes',
    isFeatured: true,
    tags: ['clima', 'chuva', 'previsão do tempo'],
  },
  {
    id: '2',
    slug: 'terremoto-filipinas-mindanao-dezenas-mortos',
    title: 'Terremoto de magnitude 7,8 deixa pelo menos 32 mortos nas Filipinas',
    excerpt: 'Abalo atingiu costa de Mindanao nesta manhã. Mais de 100 feridos, desaparecidos e alertas de tsunami foram emitidos para vários países da Ásia e Oceania.',
    content: `Um terremoto de magnitude 7,8 atingiu a costa da ilha de Mindanao, no sul das Filipinas, nesta segunda-feira, 8 de junho de 2026, deixando pelo menos 32 mortos e mais de 100 feridos, segundo autoridades locais e reportagem da BBC.

O abalo ocorreu às 07h37 no horário local e provocou alertas de tsunami para as Filipinas, Indonésia, Japão e Austrália. A maioria dos avisos foi cancelada horas depois, mas ondas de até 1,4 metro foram registradas em algumas costas.

Na província de Sarangani, a cerca de 20 km do epicentro, autoridades confirmaram 17 mortes, muitas em deslizamentos de terra. Em General Santos, cidade conhecida como capital do atum do país, 10 pessoas morreram e 22 seguem desaparecidas.

Mais de 10 mil moradores foram evacuados preventivamente. Redes de energia e comunicação foram temporariamente interrompidas em áreas afetadas.

As Filipinas estão na chamada "Cintura de Fogo do Pacífico", região de alta atividade sísmica. A Mundo News acompanha os desdobramentos com base em dados oficiais e agências internacionais, priorizando informação verificada sobre especulação.`,
    category: 'mundo',
    author: 'Hiroshi Tanaka',
    authorRole: 'Correspondente — Tóquio',
    publishedAt: '2026-06-09T11:45:00',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    imageAlt: 'Vista aérea de região costeira',
    isBreaking: true,
    tags: ['Filipinas', 'terremoto', 'tsunami'],
  },
  {
    id: '3',
    slug: 'pec-6x1-alcolumbre-reuniao-tramitacao-senado',
    title: 'Senado define nesta terça tramitação da PEC que acaba com escala 6x1',
    excerpt: 'Davi Alcolumbre convoca líderes para calendário da proposta aprovada na Câmara. Texto prevê redução da jornada de 44 para 40 horas em 14 meses, sem corte salarial.',
    content: `O presidente do Senado, Davi Alcolumbre (União-AP), convoca nesta terça-feira, 9 de junho de 2026, reunião de líderes partidários para definir o calendário de tramitação da PEC que prevê o fim da escala 6x1 — modelo de seis dias de trabalho e um de descanso por semana.

A proposta foi aprovada pela Câmara na última semana de maio e aguarda despacho formal no Senado há mais de dez dias. Alcolumbre já sinalizou que o texto não irá direto ao plenário e passará por comissões, com possibilidade de alterações.

O texto aprovado pelos deputados estabelece transição de 14 meses para reduzir a jornada semanal de 44 para 40 horas, sem redução salarial. A mudança ocorreria em duas etapas: corte de duas horas 60 dias após a promulgação e mais duas horas 12 meses depois.

Em paralelo, a oposição apresentou proposta alternativa de remuneração por hora trabalhada, já encaminhada à CCJ. O governo considera a PEC prioritária; Alcolumbre afirmou que o Senado não será apenas "carimbador" da Câmara.

A CNN Brasil acompanha os desdobramentos. A Mundo News registra o debate legislativo apresentando posições de governo, oposição e setor produtivo sem tom partidário.`,
    category: 'brasil',
    author: 'Lis Ramalho Barbosa',
    authorRole: 'Jornalista e colunista — Brasília',
    publishedAt: '2026-06-09T11:30:00',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
    imageAlt: 'Reunião parlamentar e debate legislativo',
    isBreaking: true,
    tags: ['Congresso', 'PEC 6x1', 'trabalho'],
  },
  {
    id: '4',
    slug: 'ira-suspende-ataques-israel-trump-cessar-fogo',
    title: 'Irã anuncia suspensão de ataques a Israel; Trump exige cessar-fogo imediato',
    excerpt: 'Militares iranianos declaram fim das operações ofensivas, mas alertam para resposta se Israel continuar ofensiva no Líbano. Negociações de paz seguem em andamento.',
    content: `O comando militar iraniano anunciou nesta segunda-feira a suspensão de suas operações ofensivas contra Israel, após a troca de ataques mais grave desde a trégua de abril. A informação foi confirmada pela BBC, Al Jazeera e NBC News.

O comunicado do quartel-general Khatam al-Anbiya afirmou que Teerã deu uma "resposta dolorosa" a Israel, mas advertiu que retomará ações "mais severas" se os ataques continuarem, inclusive no sul do Líbano.

O presidente dos Estados Unidos, Donald Trump, publicou nas redes que Israel e Irã buscam um "cessar-fogo imediato" e que as negociações finais de paz prosseguem. Ele havia pedido anteriormente que ambos os lados "parem imediatamente de atirar".

A mídia israelense reportou que Israel também suspendeu ataques ao Irã a pedido de Trump, mas manteria operações no Líbano caso o Hezbollah reaja.

O petróleo Brent voltou a superar US$ 97 o barril com a escalada. Escolas em Israel foram fechadas e voos cancelados em Teerã.

A Mundo News distingue declarações oficiais de fatos confirmados. A cobertura segue em atualização conforme novas informações forem verificadas por nossa rede de correspondentes.`,
    category: 'mundo',
    author: 'Ahmed Hassan',
    authorRole: 'Correspondente — Cairo',
    publishedAt: '2026-06-09T11:15:00',
    imageUrl: 'https://images.unsplash.com/photo-1740220520787-92e84c27a15c?w=800&q=80',
    imageAlt: 'Incêndio e fumaça após bombardeio em zona de conflito no Oriente Médio',
    isBreaking: true,
    tags: ['Irã', 'Israel', 'Trump', 'Oriente Médio'],
  },
  {
    id: '5',
    slug: 'opiniao-imparcialidade-portais-noticias',
    title: 'Opinião: O que aprendemos ao comparar a cobertura dos grandes portais de notícias',
    excerpt: 'G1, Folha, CNN Brasil, BBC e Reuters seguem padrões distintos — mas todos reforçam que imparcialidade exige método, não neutralidade artificial.',
    content: `Nesta segunda-feira, ao monitorar a cobertura de portais brasileiros e internacionais, fica evidente que a qualidade jornalística não depende apenas de velocidade, mas de método editorial rigoroso.

No Brasil, o G1 e a CNN Brasil destacaram-se pela cobertura detalhada da frente fria, com mapas, alertas regionais e linguagem acessível. O Valor Econômico trouxe análise aprofundada sobre o corte de geração de energia pelo ONS, com contexto regulatório. A Folha de S.Paulo publicou reportagem investigativa sobre operação policial em São Paulo, demonstrando o papel do jornalismo de apuração.

No cenário internacional, a Al Jazeera e a France 24 cobriram a escalada entre Irã e Israel com atualizações em tempo real, mas também com ressalvas sobre informações não confirmadas. A BBC e a Reuters, por sua vez, historicamente se destacam por separar claramente notícia de análise e por citar múltiplas fontes em conflitos.

O que todos esses veículos têm em comum — quando cumprem seu papel — é o compromisso com fatos verificáveis. Imparcialidade não significa tratar todos os lados como equivalentes quando os fatos dizem o contrário. Significa não distorcer, não omitir contexto relevante e não confundir opinião com reportagem.

Na Mundo News, nossa equipe editorial monitora diariamente dezenas de fontes nacionais e internacionais para cruzar informações antes de publicar. Velocidade sem verificação é irresponsabilidade. Verificação sem contexto é incompletude. O equilíbrio entre os dois é o que define o jornalismo que respeita o leitor.`,
    category: 'opiniao',
    author: 'Mirian Ramalho',
    authorRole: 'Editora-chefe',
    publishedAt: '2026-06-08T07:30:00',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    imageAlt: 'Redação de jornal e monitoramento de notícias',
    tags: ['jornalismo', 'imparcialidade', 'mídia'],
  },
  {
    id: '6',
    slug: 'artigo-panorama-portais-brasil-mundo-2026',
    title: 'Artigo: Panorama dos principais portais de notícias no Brasil e no mundo em 2026',
    excerpt: 'De Curitiba a Roma e Londres, conheça como veículos de referência estruturam sua cobertura e o que isso ensina sobre informação confiável.',
    content: `O ecossistema de notícias em 2026 é mais fragmentado e mais rápido do que nunca. Para o leitor que busca informação fidedigna, compreender como os principais portais organizam sua cobertura é fundamental.

No Brasil, o G1 (Grupo Globo) mantém a maior rede de correspondentes regionais, com destaque para cobertura de clima, política e cotidiano. A CNN Brasil consolidou presença em breaking news e análise econômica. O Valor Econômico é referência em finanças e política fiscal. A Folha de S.Paulo e o O Globo seguem como pilares do jornalismo investigativo impresso adaptado ao digital.

Portais como UOL e Estadão completam o panorama com coberturas complementares. Cada um tem viés editorial reconhecível — e isso não é necessariamente um problema, desde que fique claro ao leitor onde termina a notícia e começa a opinião.

No mundo, a Reuters e a Associated Press (AP) fornecem a base factual para centenas de outros veículos. A BBC combina cobertura global com padrões rigorosos de verificação. A Al Jazeera se destaca no Oriente Médio. A France 24 e a Deutsche Welle ampliam perspectivas europeias.

A lição para qualquer portal que preza pela verdade é a mesma: diversificar fontes, checar antes de publicar, corrigir com transparência quando errar, e nunca sacrificar precisão em nome de engajamento.

A Mundo News se inspira nos melhores padrões desses veículos, adaptando-os à realidade brasileira e ao compromisso com imparcialidade editorial.`,
    category: 'artigo',
    author: 'Elena Volkov',
    authorRole: 'Correspondente — Londres',
    publishedAt: '2026-06-08T06:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80',
    imageAlt: 'Jornais e portais de notícias',
    tags: ['mídia', 'portais', 'jornalismo'],
  },
  {
    id: '7',
    slug: 'bolsas-asiaticas-despencam-tecnologia-oriente-medio',
    title: 'Bolsas asiáticas despencam com queda de tecnologia e tensão no Oriente Médio',
    excerpt: 'Índice da Coreia do Sul cai quase 9% e Nikkei recua 3,8%. Petróleo Brent sobe acima de US$ 97 após novos ataques entre Irã e Israel.',
    content: `Os mercados financeiros globais registraram forte volatilidade nesta segunda-feira, 8 de junho de 2026, combinando a queda de ações de tecnologia com a escalada militar no Oriente Médio, conforme reportagem da BBC.

Na Coreia do Sul, o índice Kospi despencou quase 9% nos primeiros minutos de negociação, obrigando uma paralisação de 20 minutos. O índice fechou com queda de 8,3%. No Japão, o Nikkei recuou 3,8%. Na Europa, as quedas foram menores na abertura.

O petróleo Brent subiu 4,6% para US$ 97,34 o barril, e o WTI americano avançou 4,3% para US$ 94,40, em reação à troca de ataques entre Irã e Israel — a primeira desde a trégua de abril.

A queda em Wall Street na sexta-feira, puxada por ações de tecnologia, também contribuiu para o clima de aversão a risco nos mercados asiáticos.

Carlos Mendes, correspondente da Mundo News em Nova York, acompanha a reação dos investidores. A Mundo News separa dados de mercado da cobertura geopolítica, evitando especulação não fundamentada.`,
    category: 'mundo',
    author: 'Carlos Mendes',
    authorRole: 'Correspondente — Nova York',
    publishedAt: '2026-06-09T11:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    imageAlt: 'Gráficos de mercado financeiro',
    tags: ['bolsas', 'petróleo', 'economia'],
  },
  {
    id: '8',
    slug: 'congresso-retoma-maioridade-penal-cnj-semana',
    title: 'Congresso retoma pautas: maioridade penal, CNJ e PEC do Banco Central',
    excerpt: 'Após feriado de Corpus Christi, Senado vota indicação de Benedito Gonçalves ao CNJ. Câmara analisa PEC que reduz maioridade penal na terça.',
    content: `O Congresso Nacional retoma nesta semana o ritmo pleno de votações após o feriado prolongado de Corpus Christi, com pautas que mobilizam governo e oposição, segundo a CNN Brasil.

No Senado, está previsto "esforço concentrado" para votar a indicação de Benedito Gonçalves ao Conselho Nacional de Justiça (CNJ). Também está pautado projeto sobre renegociação de dívidas rurais para quarta-feira (10). A chamada PEC do Banco Central segue na CCJ, sem consenso e com votação já adiada diversas vezes.

Na Câmara, a PEC que reduz a maioridade penal é item único na CCJ nesta terça. A base governista é contrária e deve tentar barrar a votação; a oposição defende a matéria com força.

Paralelamente, o Senado inicia debates sobre o fim da escala 6x1, com reunião de líderes convocada por Davi Alcolumbre.

A Mundo News acompanha o calendário legislativo com imparcialidade, registrando posições de todas as bancadas sem qualificar o mérito político das propostas.`,
    category: 'brasil',
    author: 'Mirian Ramalho',
    authorRole: 'Editora-chefe — Curitiba',
    publishedAt: '2026-06-09T10:45:00',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    imageAlt: 'Congresso Nacional e atividade legislativa em Brasília',
    tags: ['Congresso', 'CNJ', 'maioridade penal'],
  },
  {
    id: '9',
    slug: 'opiniao-verificacao-fatos-era-algoritmos',
    title: 'Opinião: Na era dos algoritmos, verificar fatos é ato de responsabilidade cívica',
    excerpt: 'Redes sociais amplificam informação sem filtro. O papel do jornalismo profissional nunca foi tão necessário — e tão desafiado.',
    content: `Nesta segunda-feira de junho de 2026, enquanto algoritmos de redes sociais distribuem conteúdo sobre clima, energia e conflitos internacionais, a distinção entre fato verificado e narrativa manipulada torna-se mais urgente.

Portais sérios investem em checagem de fatos, separação entre notícia e opinião, e correções públicas quando cometem erros. Esse padrão — visível no trabalho de agências como Reuters e em redações brasileiras de referência — deveria ser a régua mínima para qualquer veículo que se proclame jornalístico.

O leitor também tem responsabilidade: conferir a fonte, desconfiar de manchetes sensacionalistas, buscar múltiplas perspectivas em temas complexos. Informação fidedigna é construção coletiva entre redações profissionais e público crítico.

A Mundo News reafirma neste editorial seu compromisso com imparcialidade, verificação e respeito ao leitor.`,
    category: 'opiniao',
    author: 'Elena Volkov',
    authorRole: 'Correspondente — Londres',
    publishedAt: '2026-06-08T06:30:00',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
    imageAlt: 'Reunião editorial e debate de ideias',
    tags: ['desinformação', 'ética', 'sociedade'],
  },
  {
    id: '11',
    slug: 'copa-2026-brasil-estreia-marrocos-ancelotti-escalacao',
    title: 'Copa do Mundo 2026: Ancelotti define titular e Brasil estreia dia 13 contra Marrocos',
    excerpt: 'Após vitória por 2 a 1 sobre o Egito, técnico italiano afirma ter escalação pronta. Wesley é cortado por lesão; Éderson é convocado. Torneio começa nesta quinta nos EUA, México e Canadá.',
    content: `A Seleção Brasileira encerra a preparação para a Copa do Mundo 2026 com a estreia marcada para sábado, 13 de junho, às 19h (horário de Brasília), contra Marrocos no MetLife Stadium, em Nova Jersey. A informação foi confirmada pelo G1, GE e CNN Brasil com base no calendário oficial da FIFA.

O torneio — primeiro disputado em três países (Estados Unidos, Canadá e México) — começa nesta quinta-feira, 11 de junho, com México x África do Sul no Estádio Azteca. A final está prevista para 19 de julho, no mesmo estádio da estreia brasileira.

No último amistoso antes do Mundial, o Brasil venceu o Egito por 2 a 1 em Cleveland, com gols de Bruno Guimarães e Endrick. Após a partida, Carlo Ancelotti declarou que já tem a escalação inicial definida para o duelo contra Marrocos: "Tenho a escalação inicial, a ideia é clara", afirmou o técnico.

O lateral-direito Wesley saiu lesionado aos 15 minutos com problema muscular na virilha e foi cortado da lista final. O volante Éderson, do Lyon, foi convocado em seu lugar. Marquinhos e Gabriel Magalhães, vindos da final da Champions League, seguem em recuperação física.

Na fase de grupos, o Brasil também enfrenta Haiti (19 de junho, em Filadélfia) e Escócia (24 de junho, em Miami). A Mundo News acompanha a convocação, lesões e calendário com base em fontes oficiais e veículos de referência.`,
    category: 'mundo',
    author: 'Lis Ramalho Barbosa',
    authorRole: 'Jornalista e colunista — Brasília',
    publishedAt: '2026-06-09T10:30:00',
    imageUrl: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&q=80',
    imageAlt: 'Bola de futebol em campo de gramado antes de partida',
    isBreaking: true,
    tags: ['Copa do Mundo', 'Seleção Brasileira', 'Ancelotti'],
  },
  {
    id: '10',
    slug: 'artigo-mapa-correspondentes-mundo',
    title: 'Artigo: Como funciona a rede global de correspondentes da Mundo News',
    excerpt: 'Conheça a estrutura que permite cobertura em tempo real das principais capitais do planeta.',
    content: `A Mundo News é coordenada pela editora-chefe Mirian Ramalho, em Curitiba, com o suporte de Jorge Ramalho Barbosa em tecnologia da informação, e pela jornalista e colunista Lis Ramalho Barbosa, em Brasília. A equipe combina edição central, infraestrutura digital, apuração política e cobertura nacional e internacional com base em fontes verificadas.

Nossa estrutura funciona em três camadas: reportagem local nas principais cidades, edição central com cruzamento de fontes nacionais e internacionais, e publicação em tempo real no portal.

Ao monitorar veículos como G1, CNN Brasil, Valor, Folha, BBC, Reuters e Al Jazeera, nossa redação central seleciona os fatos mais relevantes, verifica informações conflitantes e publica apenas o que pode ser atribuído a fontes confiáveis.

Quando um fato acontece em qualquer ponto do globo, temos alguém próximo para verificar, contextualizar e reportar com a precisão que nossos leitores merecem.`,
    category: 'artigo',
    author: 'Mirian Ramalho',
    authorRole: 'Editora-chefe',
    publishedAt: '2026-06-08T05:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    imageAlt: 'Mapa mundial e rede global de correspondentes',
    tags: ['correspondentes', 'estrutura', 'global'],
  },
  {
    id: '12',
    slug: 'decreto-big-techs-marco-civil-embate-congresso',
    title: 'Decreto sobre Big Techs amplia poderes da ANPD e gera embate no Congresso',
    excerpt: 'Governo reforça fiscalização de plataformas digitais. Oposição apresentou 29 PDLs para derrubar medida; STF julga recursos das empresas em 10 de junho.',
    content: `Decretos do presidente Lula que alteram a regulamentação do Marco Civil da Internet ampliam a fiscalização de Big Techs e reforçam a atuação da ANPD e da AGU, segundo a CNN Brasil e o Estadão.

Na Câmara, 29 deputados protocolaram projetos para sustar os decretos. Associações que representam Google, Meta, X e TikTok manifestaram preocupação com insegurança jurídica.

O STF marcou julgamento para 10 de junho sobre recursos das plataformas contra responsabilização por conteúdos de usuários.

A Mundo News apresenta o debate sem tom partidário, registrando posições do governo, oposição e setor privado.`,
    category: 'brasil',
    author: 'Lis Ramalho Barbosa',
    authorRole: 'Jornalista e colunista — Brasília',
    publishedAt: '2026-06-09T09:15:00',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80',
    imageAlt: 'Tecnologia e redes digitais',
    tags: ['Big Techs', 'ANPD', 'internet'],
  },
  {
    id: '13',
    slug: 'ons-corta-geracao-energia-inedito-brasil',
    title: 'Pela 1ª vez, ONS corta geração de energia por excesso de oferta no sistema',
    excerpt: 'Medida inédita equilibrou rede durante feriado de Corpus Christi. Alta de painéis solares e baixo consumo motivaram plano emergencial aprovado pela Aneel.',
    content: `O Operador Nacional do Sistema Elétrico acionou pela primeira vez um plano para cortar geração de energia devido ao excesso de oferta, informou o Valor Econômico.

A medida ocorreu no feriado prolongado de Corpus Christi, quando o consumo caiu e a geração distribuída — especialmente solar — permaneceu alta. O ONS classificou a operação como "sucesso".

Distribuidoras como Cemig, Copel e CPFL participaram dos cortes preventivos conforme protocolo da Aneel.

Especialistas veem o episódio como sinal da necessidade de modernizar a regulação do setor elétrico sem frear a transição energética.`,
    category: 'brasil',
    author: 'Mirian Ramalho',
    authorRole: 'Editora-chefe — Curitiba',
    publishedAt: '2026-06-09T08:45:00',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    imageAlt: 'Energia solar e sistema elétrico',
    tags: ['energia', 'ONS', 'solar'],
  },
  {
    id: '14',
    slug: 'governo-negocia-reverter-veto-ue-carne',
    title: 'Itamaraty intensifica negociação para reverter veto europeu à carne brasileira',
    excerpt: 'UE excluiu Brasil de lista de exportadores por regras sobre antimicrobianos. Medida entra em vigor em setembro; Mauro Vieira conversou com comissário de Comércio.',
    content: `O governo brasileiro intensifica negociações com a União Europeia para reverter a exclusão do país da lista de exportadores de carnes e produtos de origem animal, conforme G1 e Folha.

A UE oficializou a medida em 5 de junho, citando regras sobre uso de antimicrobianos na pecuária. O veto entra em vigor em 3 de setembro.

O ministro Mauro Vieira conversou com o comissário de Comércio europeu. O Ministério da Agricultura busca visitas técnicas aos criadouros para oferecer garantias sanitárias.

O Brasil é o maior exportador mundial de proteínas animais. A Mundo News acompanha o impacto econômico com imparcialidade.`,
    category: 'brasil',
    author: 'Lis Ramalho Barbosa',
    authorRole: 'Jornalista e colunista — Brasília',
    publishedAt: '2026-06-09T08:30:00',
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
    imageAlt: 'Produção de carne bovina',
    tags: ['agronegócio', 'exportação', 'UE'],
  },
  {
    id: '15',
    slug: 'eleicoes-peru-keiko-fujimori-empate-tecnico',
    title: 'Eleições no Peru: Keiko Fujimori lidera por margem mínima com apuração indefinida',
    excerpt: 'Com mais de 93% das urnas apuradas, candidata de direita tem 50,15% contra 49,85% de Roberto Sánchez. Votos rurais restantes podem inverter resultado.',
    content: `A eleição presidencial no Peru permanece indefinida após o segundo turno realizado no domingo, 7 de junho. Com mais de 93% das urnas apuradas, Keiko Fujimori lidera por margem mínima de cerca de 0,3 ponto percentual sobre Roberto Sánchez, segundo G1, Estadão e O Globo.

O cenário é de empate técnico. Os votos restantes vêm de zonas rurais remotas, onde Sánchez historicamente tem maior força eleitoral. Analistas afirmam que o resultado final pode demorar dias.

A eleição ocorre em meio a crise institucional — o Peru teve oito presidentes na última década — e preocupação com violência e crime organizado. Cerca de 27 milhões de eleitores participaram da votação, que transcorreu sem grandes incidentes.

Marie Dubois, correspondente em Paris, contextualiza o impacto para a América Latina. A Mundo News acompanha a apuração em tempo real.`,
    category: 'mundo',
    author: 'Marie Dubois',
    authorRole: 'Correspondente — Paris',
    publishedAt: '2026-06-09T09:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    imageAlt: 'Eleições e participação democrática',
    tags: ['Peru', 'eleições', 'América Latina'],
  },
  {
    id: '16',
    slug: 'ira-confirma-ataque-israel-complexo-petrolifero',
    title: 'Irã confirma ataque israelense a complexo petrolífero no Golfo Pérsico',
    excerpt: 'Agência estatal iraniana reporta bombardeio a instalação em Mahshahr. Escalada ocorre em meio a negociações de cessar-fogo mediadas pelos EUA.',
    content: `O Irã confirmou que Israel atacou um complexo petrolífero na cidade de Mahshahr, no Golfo Pérsico, ampliando a escalada militar na região, conforme Agência Brasil e CNN.

O ataque faz parte da troca de hostilidades entre os dois países — a mais grave desde a trégua de abril. Israel também atingiu alvos militares em Teerã, Isfahan e Tabriz.

Donald Trump exigiu que ambos os lados parem os ataques imediatamente e afirmou que negociações de paz continuam. O Irã, por sua vez, acusou os EUA de serem "responsáveis" pelas ações israelenses.

O petróleo Brent permanece acima de US$ 97. Ahmed Hassan acompanha os desdobramentos do Cairo.`,
    category: 'mundo',
    author: 'Ahmed Hassan',
    authorRole: 'Correspondente — Cairo',
    publishedAt: '2026-06-09T08:15:00',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    imageAlt: 'Indústria petrolífera e energia',
    isBreaking: true,
    tags: ['Irã', 'Israel', 'petróleo'],
  },
  {
    id: '17',
    slug: 'coreia-norte-kim-expande-arsenal-nuclear',
    title: 'Coreia do Norte anuncia planos para expandir arsenal nuclear',
    excerpt: 'Kim Jong-un reforça programa de armamento em meio a tensões na Ásia. Declaração ocorre paralelamente a crise no Oriente Médio e terremoto nas Filipinas.',
    content: `O líder norte-coreano Kim Jong-un anunciou planos para expandir o arsenal nuclear do país, segundo reportagem da BBC nesta segunda-feira.

A declaração ocorre em contexto de múltiplas crises globais: escalada entre Irã e Israel, terremoto de magnitude 7,8 nas Filipinas e volatilidade nos mercados asiáticos.

Analistas avaliam que Pyongyang busca reafirmar sua posição estratégica enquanto a atenção internacional se concentra no Oriente Médio.

Hiroshi Tanaka, correspondente em Tóquio, monitora a reação dos países vizinhos. A Mundo News registra os fatos sem especulação.`,
    category: 'mundo',
    author: 'Hiroshi Tanaka',
    authorRole: 'Correspondente — Tóquio',
    publishedAt: '2026-06-09T07:45:00',
    imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80',
    imageAlt: 'Cobertura internacional de defesa',
    tags: ['Coreia do Norte', 'nuclear', 'Ásia'],
  },
];

function sortByDate(items: NewsArticle[]): NewsArticle[] {
  return [...items].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: NewsArticle['category']): NewsArticle[] {
  return articles.filter((a) => a.category === category);
}

export function getBreakingNews(): NewsArticle[] {
  return articles.filter((a) => a.isBreaking);
}

export function getFeaturedArticle(): NewsArticle | undefined {
  return articles.find((a) => a.isFeatured);
}

export function getLatestArticles(limit = 10): NewsArticle[] {
  return sortByDate(articles).slice(0, limit);
}
