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
 * Notícias de última hora — atualizado em 16/07/2026.
 * Fontes: BBC, Agência Brasil, USTR, AP, Reuters, CNN Brasil, Al Jazeera.
 * Redação imparcial com verificação cruzada de fatos.
 */
export const articles: NewsArticle[] = [
  {
    id: '1',
    slug: 'eua-tarifas-25-brasil-reciprocidade-marco-lastimavel',
    title: 'EUA confirmam tarifas de 25% sobre produtos brasileiros; Brasil anuncia reciprocidade',
    excerpt:
      'Medida do USTR entra em vigor em 22 de julho. Planalto classifica o dia 15 como “marco lastimável” e diz que acionará a Lei de Reciprocidade e a OMC.',
    content: `O Escritório do Representante Comercial dos Estados Unidos (USTR) anunciou nesta quarta-feira, 15 de julho de 2026, o fim da investigação sobre práticas comerciais brasileiras e a aplicação de tarifas de 25% sobre uma série de produtos exportados aos EUA.

A decisão, chancelada pelo presidente Donald Trump, entra em vigor em 22 de julho. Segundo o representante Jamieson Greer, a ação busca enfrentar o que Washington considera práticas comerciais desleais. A lista inclui etanol, máquinas agrícolas, roupas, calçados e material elétrico. Café, suco de laranja, carne bovina, petróleo e aeronaves ficaram fora da sobretaxa adicional.

Em nota, o governo brasileiro repudiou a medida e afirmou que o dia 15 de julho “passará para a história das relações entre Brasil e EUA como um marco lastimável”. Brasília anunciou que iniciará os trâmites da Lei de Reciprocidade, aprovada pelo Congresso, e levará o caso à Organização Mundial do Comércio (OMC).

A investigação, baseada na Seção 301 da Lei de Comércio de 1974, citou temas como o Pix, acesso ao mercado de etanol, propriedade intelectual, combate à corrupção e desmatamento. O governo brasileiro rejeita a legitimidade das alegações e destaca que os EUA acumularam superávit comercial com o Brasil nos últimos 15 anos.

A Federação das Indústrias do Estado de São Paulo (Fiesp) e a Confederação Nacional da Indústria (CNI) também criticaram a taxação. A Mundo News registra posições oficiais de Washington e Brasília sem tom partidário e atualiza a cobertura conforme novos documentos forem publicados.`,
    category: 'brasil',
    author: 'Lis Ramalho Barbosa',
    authorRole: 'Jornalista e colunista — Brasília',
    publishedAt: '2026-07-16T07:30:00',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    imageAlt: 'Comércio internacional e contêineres em porto',
    isFeatured: true,
    isBreaking: true,
    tags: ['tarifas', 'EUA', 'comércio', 'reciprocidade'],
  },
  {
    id: '2',
    slug: 'eua-ira-sexto-dia-ormuz-ataque-petroleiro',
    title: 'EUA e Irã entram no sexto dia de ataques; forças americanas desabilitam petroleiro no Golfo',
    excerpt:
      'Washington amplia bombardeios e reimpõe bloqueio naval. Teerã responde com drones e mísseis contra bases aliadas no Golfo. Estreito de Ormuz segue sob forte tensão.',
    content: `Estados Unidos e Irã mantêm troca de ataques pelo sexto dia consecutivo, em 16 de julho de 2026, após o colapso da trégua firmada em junho, segundo BBC, Associated Press e NPR.

O Comando Central dos EUA (Centcom) informou uma onda de ataques a centros de comando, defesas costeiras e instalações de mísseis, incluindo alvos em Bandar Abbas e na ilha Greater Tunb. Relatos da mídia estatal iraniana também apontam impactos em regiões próximas a Teerã e na província de Semnan.

Em paralelo, forças americanas desabilitaram o petroleiro M/T Belma, de bandeira de Curaçao, que, segundo o Centcom, ignorou avisos ao tentar seguir para o terminal de Kharg Island, violando o bloqueio naval reimposto a portos iranianos. Teerã classificou o Estreito de Ormuz como “linha vermelha” e afirmou ter atacado alvos em Kuwait, Bahrein e Jordânia.

O tráfego de navios pelo estreito caiu fortemente, pressionando o mercado de petróleo. A Mundo News prioriza comunicados oficiais e agências internacionais, distinguindo fatos confirmados de declarações políticas.`,
    category: 'mundo',
    author: 'Ahmed Hassan',
    authorRole: 'Correspondente — Cairo',
    publishedAt: '2026-07-16T08:15:00',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    imageAlt: 'Navios petroleiros e rota marítima estratégica',
    isBreaking: true,
    tags: ['Irã', 'EUA', 'Ormuz', 'petróleo'],
  },
  {
    id: '3',
    slug: 'industria-brasileira-repudia-taxacao-eua',
    title: 'Indústria brasileira repudia taxação dos EUA e alerta para perda de competitividade',
    excerpt:
      'Fiesp, Fiemg e CNI criticam sobretaxa de 25%. Entidades dizem que medida unilateral reduz competitividade do Brasil frente a outros exportadores.',
    content: `Entidades industriais brasileiras reagiram com dureza ao anúncio dos Estados Unidos de sobretaxar em 25% produtos brasileiros a partir de 22 de julho, conforme Agência Brasil.

A Fiesp afirmou lamentar “com profunda preocupação” a medida e destacou que a decisão, por se limitar de forma unilateral ao Brasil, reduz a competitividade do país perante concorrentes globais. A Fiemg também manifestou preocupação com o aumento tarifário.

O presidente da CNI, Ricardo Alban, afirmou que os efeitos das tarifas já eram sentidos: segundo a confederação, 20 dos 27 estados reduziram exportações ao mercado norte-americano no primeiro trimestre. “Diante do anúncio de hoje, o cenário tende a piorar”, disse.

O governo federal reiterou que acionará instrumentos de reciprocidade e proteção setorial previstos no Plano Brasil Soberano. A Mundo News acompanha o impacto econômico com base em dados oficiais e pronunciamentos verificáveis.`,
    category: 'brasil',
    author: 'Mirian Ramalho',
    authorRole: 'Editora-chefe — Curitiba',
    publishedAt: '2026-07-16T07:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
    imageAlt: 'Linha de produção industrial',
    isBreaking: true,
    tags: ['indústria', 'exportação', 'tarifas'],
  },
  {
    id: '4',
    slug: 'incendios-canada-fumaca-toronto-eua',
    title: 'Mais de 800 incêndios no Canadá: fumaça deixa Toronto com ar perigoso e alerta nos EUA',
    excerpt:
      'Qualidade do ar em Toronto chega a níveis “muito alto risco”. Névoa atinge Médio Oeste, Grandes Lagos e Nordeste americano às vésperas da final da Copa.',
    content: `Mais de 800 incêndios florestais estão ativos no Canadá nesta quinta-feira, 16 de julho de 2026, com concentrações críticas em Ontário, Manitoba e Saskatchewan, segundo BBC, Reuters e Environment Canada.

A fumaça empurrada dos focos no noroeste de Ontário degradou a qualidade do ar em Toronto a níveis classificados como “muito alto risco” (índice 10+). Monitoramentos da IQAir chegaram a colocar Toronto e Detroit entre as piores cidades do mundo em qualidade do ar.

Nos Estados Unidos, alertas abrangem o Médio Oeste superior, a região dos Grandes Lagos e o Nordeste. Nova York registrou ar “não saudável”, e autoridades pediram redução de atividades físicas ao ar livre. A névoa ocorre dias antes da final da Copa do Mundo 2026, marcada para o dia 19 em Nova Jersey.

Especialistas esperam melhora gradual com mudança dos ventos no fim de semana. A Mundo News reforça orientações oficiais de saúde pública e evita alarmismo sem base em dados meteorológicos.`,
    category: 'mundo',
    author: 'Carlos Mendes',
    authorRole: 'Correspondente — Nova York',
    publishedAt: '2026-07-16T06:45:00',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    imageAlt: 'Paisagem coberta por fumaça e névoa',
    isBreaking: true,
    tags: ['Canadá', 'incêndios', 'clima', 'saúde'],
  },
  {
    id: '5',
    slug: 'pix-alvo-investigacao-ustr-tarifas',
    title: 'Pix entra no centro da disputa comercial: EUA acusam Brasil de favorecer sistema nacional',
    excerpt:
      'Relatório do USTR aponta conflito de interesses do Banco Central no Pix. Lula já disse que o sistema “é do Brasil” e não será negociado.',
    content: `O sistema de pagamentos instantâneos Pix tornou-se um dos eixos da investigação comercial norte-americana que resultou nas tarifas de 25%, segundo documentos do USTR e reportagens da BBC News Brasil.

Washington alega que políticas brasileiras favorecem o “campeão nacional” Pix em detrimento de empresas americanas de meios de pagamento. O relatório também questiona o papel do Banco Central como regulador e operador do sistema.

Do lado brasileiro, o argumento é de que o Pix é infraestrutura pública digital e patrimônio nacional. Em abril, o presidente Lula afirmou: “O Pix é do Brasil e ninguém vai fazer a gente mudar o Pix.” Em nota desta semana, o governo classificou as alegações como descabidas.

Especialistas em comércio internacional alertam que o tema mistura soberania tecnológica e disputa tarifária. A Mundo News apresenta as acusações e as respostas oficiais lado a lado, sem qualificar o mérito político da controvérsia.`,
    category: 'brasil',
    author: 'Lis Ramalho Barbosa',
    authorRole: 'Jornalista e colunista — Brasília',
    publishedAt: '2026-07-16T06:15:00',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    imageAlt: 'Pagamento digital por celular',
    tags: ['Pix', 'EUA', 'Banco Central', 'tecnologia'],
  },
  {
    id: '6',
    slug: 'rs-alerta-temporais-rios-atmosfericos',
    title: 'Defesa Civil do RS emite alerta para temporais ligados a “rios atmosféricos”',
    excerpt:
      'Previsão aponta chuva intensa e risco de temporais no Sul. Meteorologistas explicam o papel dos corredores de umidade na atmosfera.',
    content: `A Defesa Civil do Rio Grande do Sul emitiu alerta para temporais nesta semana de julho de 2026, com previsão de chuvas intensas associadas à passagem de umidade concentrada na atmosfera — fenômeno conhecido como “rio atmosférico”, conforme cobertura da BBC News Brasil.

Rios atmosféricos são longos corredores de vapor d’água que, ao encontrar frentes frias ou relevo, podem gerar acumulados elevados de chuva em curto período. Em episódios anteriores, o fenômeno já contribuiu para enchentes e deslizamentos no Sul do país.

Autoridades pedem atenção a boletins municipais, risco de alagamentos e ventos fortes. A Mundo News recomenda acompanhamento dos canais oficiais da Defesa Civil e evita reproduzir informações não confirmadas sobre danos até que haja balanços oficiais.`,
    category: 'brasil',
    author: 'Mirian Ramalho',
    authorRole: 'Editora-chefe — Curitiba',
    publishedAt: '2026-07-15T22:30:00',
    imageUrl: 'https://images.unsplash.com/photo-1527482797697-01785c6c9e1b?w=800&q=80',
    imageAlt: 'Chuva intensa e céu carregado',
    tags: ['clima', 'Rio Grande do Sul', 'Defesa Civil'],
  },
  {
    id: '7',
    slug: 'copa-2026-final-domingo-qualidade-ar-nova-jersey',
    title: 'Copa do Mundo 2026: final no domingo em Nova Jersey sob alerta de fumaça',
    excerpt:
      'Decisão do Mundial está marcada para 19 de julho. Autoridades de Nova York pedem cautela com a qualidade do ar por causa dos incêndios no Canadá.',
    content: `A final da Copa do Mundo 2026 está marcada para domingo, 19 de julho, em Nova Jersey, no MetLife Stadium, no mesmo complexo que sediou a estreia do Brasil no torneio. A informação consta do calendário oficial da FIFA e de coberturas da imprensa esportiva internacional.

A proximidade da decisão coincide com alerta de qualidade do ar no Nordeste americano, causado pela fumaça de incêndios florestais no Canadá. Autoridades de Nova York pediram redução de atividades intensas ao ar livre nesta quarta e quinta-feira.

Organizadores e autoridades locais acompanham as condições atmosféricas. Não há, até o momento, indicação oficial de adiamento da final. A Mundo News atualiza a cobertura esportiva com base em fontes oficiais da FIFA e órgãos de saúde pública.`,
    category: 'mundo',
    author: 'Lis Ramalho Barbosa',
    authorRole: 'Jornalista e colunista — Brasília',
    publishedAt: '2026-07-15T20:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&q=80',
    imageAlt: 'Bola de futebol em campo de gramado',
    tags: ['Copa do Mundo', 'futebol', 'EUA'],
  },
  {
    id: '8',
    slug: 'petroleo-sobe-bloqueio-ormuz-mercados',
    title: 'Petróleo sobe com bloqueio no Estreito de Ormuz e queda no tráfego de navios',
    excerpt:
      'Cruzamentos no estreito caem bem abaixo da média pré-conflito. Analistas ligam volatilidade dos preços à disputa naval entre EUA e Irã.',
    content: `O mercado internacional de petróleo reagiu à reimposição do bloqueio naval americano a portos iranianos e à queda no tráfego pelo Estreito de Ormuz, rota por onde passa parcela crítica do petróleo mundial, segundo BBC e dados de inteligência marítima.

Em 15 de julho, monitoramentos apontaram apenas 11 petroleiros e cargueiros cruzando o estreito, número muito inferior à média pré-conflito, estimada em cerca de 138 embarcações por dia. O Centcom afirmou ter redirecionado navios e desabilitado o petroleiro Belma após avisos ignorados.

Investidores acompanham o risco de prolongamento do conflito e o efeito sobre fretes e seguros. A Mundo News separa cotações e fatos verificados de especulação sobre preços futuros.`,
    category: 'mundo',
    author: 'Carlos Mendes',
    authorRole: 'Correspondente — Nova York',
    publishedAt: '2026-07-15T18:40:00',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    imageAlt: 'Gráficos de mercado e commodities',
    tags: ['petróleo', 'mercados', 'Ormuz'],
  },
  {
    id: '9',
    slug: 'opiniao-tarifas-fatos-alem-do-ruido-eleitoral',
    title: 'Opinião: No tarifaço, o leitor precisa de fatos — não só de narrativa eleitoral',
    excerpt:
      'A disputa comercial com os EUA mistura diplomacia, economia e campanha. O jornalismo responsável separa o que está documentado do que é acusação política.',
    content: `A imposição de tarifas de 25% pelos Estados Unidos sobre produtos brasileiros já virou combustível de campanha no Brasil. De um lado, o governo acusa adversários de terem colaborado com Washington; de outro, a oposição atribui o desfecho à condução diplomática do Planalto.

Para o leitor, o essencial é distinguir três camadas: (1) o que o USTR publicou e quando a medida vale; (2) o que o governo brasileiro anunciou como resposta institucional; (3) o que são interpretações partidárias.

Fontes como BBC, Agência Brasil e o próprio comunicado do USTR permitem reconstruir a linha do tempo sem transformar cada manchete em arma eleitoral. Imparcialidade não é fingir que não há conflito: é mostrar documentos, datas, exceções tarifárias e posições oficiais com clareza.

Na Mundo News, nossa regra permanece: verificar antes de publicar, contextualizar impacto econômico e não confundir opinião com reportagem.`,
    category: 'opiniao',
    author: 'Mirian Ramalho',
    authorRole: 'Editora-chefe',
    publishedAt: '2026-07-16T05:30:00',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    imageAlt: 'Redação e monitoramento de notícias',
    tags: ['jornalismo', 'tarifas', 'imparcialidade'],
  },
  {
    id: '10',
    slug: 'artigo-como-ler-cobertura-ormuz-e-tarifas',
    title: 'Artigo: Como acompanhar, com método, as crises de Ormuz e do tarifaço',
    excerpt:
      'Dois eixos dominam a agenda global desta semana. Um guia prático para cruzar fontes sem cair em desinformação.',
    content: `Em 16 de julho de 2026, duas agendas se sobrepõem: a escalada militar em torno do Estreito de Ormuz e a retaliação tarifária dos EUA contra o Brasil. Em crises simultâneas, o risco de informação incompleta cresce.

Método recomendado pela redação da Mundo News:

1. Priorize agências e veículos com correção pública (Reuters, AP, BBC, Agência Brasil).
2. Separe comunicado oficial de análise de comentarista.
3. Confira datas de vigência — no tarifaço, 22 de julho é o marco operacional.
4. Em conflitos armados, desconfie de números de baixas sem atribuição a fonte nomeada.
5. Observe o que ficou de fora da medida: no caso brasileiro, isenções a café, carne e suco de laranja importam tanto quanto a alíquota de 25%.

Cobertura responsável é ritmo sustentado de verificação, não corrida por clique.`,
    category: 'artigo',
    author: 'Elena Volkov',
    authorRole: 'Correspondente — Londres',
    publishedAt: '2026-07-15T16:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80',
    imageAlt: 'Jornais e portais de notícias',
    tags: ['mídia', 'verificação', 'geopolítica'],
  },
  {
    id: '11',
    slug: 'governo-brasil-plano-soberano-danos-tarifas',
    title: 'Governo diz que usará Plano Brasil Soberano para proteger setores atingidos',
    excerpt:
      'Nota oficial promete preservar empregos e diversificar mercados. Itamaraty e equipe econômica avaliam retaliação calibrada.',
    content: `Além de anunciar o acionamento da Lei de Reciprocidade e da OMC, o governo brasileiro afirmou que manterá, pelo Plano Brasil Soberano, medidas de proteção aos setores afetados pelas tarifas americanas de 25%.

Segundo a nota da Secom, o objetivo é preservar empregos e capacidade produtiva, ao mesmo tempo em que o país busca diversificar parcerias comerciais — citando acordos do Mercosul com União Europeia, EFTA e Singapura.

O ministro da Fazenda, Dario Durigan, já havia sinalizado na terça-feira (14) que a reciprocidade voltaria à mesa caso o tarifaço fosse confirmado. Diplomatas e o MDIC também admitiam desfecho desfavorável nas negociações de última hora.

A Mundo News acompanhará decretos, listas de produtos e eventuais medidas compensatórias assim que forem publicados em Diário Oficial ou documentos oficiais.`,
    category: 'brasil',
    author: 'Lis Ramalho Barbosa',
    authorRole: 'Jornalista e colunista — Brasília',
    publishedAt: '2026-07-15T21:20:00',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    imageAlt: 'Brasília e atividade de governo',
    tags: ['governo', 'economia', 'comércio exterior'],
  },
  {
    id: '12',
    slug: 'opiniao-fumaca-transfronteirica-clima-saude',
    title: 'Opinião: Fumaça sem fronteira exige política climática com urgência sanitária',
    excerpt:
      'Incêndios no Canadá afetam milhões nos EUA. A crise do ar é lembrete de que clima e saúde pública já são agenda de segurança.',
    content: `Quando a fumaça de incêndios canadenses transforma Toronto e cidades americanas em zonas de ar “perigoso”, o debate climático deixa o campo abstrato e entra no cotidiano: escolas, esportes ao ar livre e até a logística de um Mundial de futebol.

Não se trata de culpar um único verão. Trata-se de reconhecer que eventos extremos recorrentes exigem preparação sanitária, alertas claros e cooperação internacional. Autoridades que pedem “fique em casa” cumprem papel imediato; governos que só reagirem depois da crise falham no médio prazo.

O jornalismo, por sua vez, deve evitar tanto o negacionismo quanto o espetáculo do desastre. Dados de Environment Canada, NOAA e IQAir são o chão factual. O resto é contextualização responsável.`,
    category: 'opiniao',
    author: 'Elena Volkov',
    authorRole: 'Correspondente — Londres',
    publishedAt: '2026-07-16T05:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
    imageAlt: 'Debate público e sociedade',
    tags: ['clima', 'saúde', 'opinião'],
  },
  {
    id: '13',
    slug: 'artigo-rede-correspondentes-crise-dupla',
    title: 'Artigo: Como a Mundo News cobre ao mesmo tempo Brasília e o Golfo',
    excerpt:
      'Uma crise comercial e uma crise militar exigem mesas editoriais distintas — e o mesmo padrão de verificação.',
    content: `Cobrir simultaneamente o tarifaço EUA-Brasil e a escalada no Estreito de Ormuz exige disciplina editorial. Na Mundo News, a editoria de Brasília liderada por Lis Ramalho Barbosa cruza notas oficiais, documentos do USTR e reações industriais. A cobertura internacional, com apoio de correspondentes e agências, prioriza Centcom, autoridades do Golfo e reportagens de AP/BBC/Reuters.

A edição central em Curitiba, sob Mirian Ramalho, decide o que sobe para destaque, o que vai para breaking e o que espera confirmação. Tecnologia e publicação ficam a cargo de Jorge Ramalho Barbosa, para que o portal permaneça estável em picos de audiência.

O método não muda com a urgência: atribuir fonte, datar fatos, corrigir com transparência.`,
    category: 'artigo',
    author: 'Mirian Ramalho',
    authorRole: 'Editora-chefe',
    publishedAt: '2026-07-15T14:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    imageAlt: 'Mapa mundial e rede de correspondentes',
    tags: ['correspondentes', 'redação', 'método'],
  },
  {
    id: '14',
    slug: 'trump-ameaca-novos-ataques-ira-negociacoes',
    title: 'Trump pressiona Irã a retomar negociações sob ameaça de novos ataques',
    excerpt:
      'Presidente americano exige que Teerã “se comporte” e volte às conversas. Irã mantém retaliação e chama Ormuz de linha vermelha.',
    content: `O presidente dos Estados Unidos, Donald Trump, voltou a pressionar o Irã a retomar negociações, alertando para novas ações militares caso Teerã não “se comporte”, conforme relatos da BBC e da imprensa americana nesta semana.

A declaração ocorre enquanto Washington amplia a campanha de ataques e reativa o bloqueio naval. O Irã, por sua vez, afirma ter atingido bases e instalações ligadas aos EUA na região e rejeita concessões sobre o Estreito de Ormuz.

Diplomatas e analistas descrevem um impasse: cada lado acusa o outro de violar o entendimento de junho. A Mundo News registra as declarações atribuídas a fontes nomeadas e evita projetar desfechos militares sem evidência.`,
    category: 'mundo',
    author: 'Ahmed Hassan',
    authorRole: 'Correspondente — Cairo',
    publishedAt: '2026-07-15T17:10:00',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
    imageAlt: 'Diplomacia e tensão internacional',
    tags: ['Trump', 'Irã', 'diplomacia'],
  },
  {
    id: '15',
    slug: 'brasil-segundo-mais-tarifado-eua-analise',
    title: 'Com nova tarifa, Brasil pode virar 2º país mais tarifado pelos EUA, diz estudo',
    excerpt:
      'Global Trade Alert estima que alíquota média efetiva brasileira subiria para cerca de 14,9%, atrás apenas da China.',
    content: `Cálculos do projeto Global Trade Alert (GTA), citados pela BBC News Brasil, indicam que, com as novas tarifas de 25%, o Brasil pode se tornar o segundo país com maiores tarifas efetivas impostas pelos Estados Unidos, atrás da China.

Hoje o Brasil aparece em posição intermediária no ranking de tarifas efetivas; com a medida, a média efetiva estimada subiria para cerca de 14,9%. O GTA também aponta o Brasil como um dos países com maior aumento tarifário no segundo mandato de Trump.

Os números consideram tarifas efetivas — não apenas alíquotas nominais — e ajudam a dimensionar o choque comercial além do debate político doméstico. A Mundo News trata as projeções como estimativas de centro de pesquisa, não como decisão oficial do USTR.`,
    category: 'brasil',
    author: 'Mirian Ramalho',
    authorRole: 'Editora-chefe — Curitiba',
    publishedAt: '2026-07-15T19:50:00',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    imageAlt: 'Análise econômica e comércio global',
    tags: ['tarifas', 'China', 'comércio'],
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
