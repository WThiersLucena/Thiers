import type { CatalogSolutionDetailData } from './catalog-solution-detail.types';

export const CATALOG_SOLUTION_PRESETS: Record<
  string,
  CatalogSolutionDetailData
> = {
  clinicas: {
    themeModifier: 'catalog-detail--clinic',
    eyebrow: 'Agenda para clínicas e consultórios',
    titleLine1: 'Sua clínica no ritmo certo,',
    titleAccent: 'do agendamento ao financeiro',
    titleLine2: '',
    tagline:
      'Agenda híbrida, prontuário enxuto, portal do paciente e visão de caixa integrada para você parar de remendar planilhas.',
    lead: 'Enquanto a equipe atende, o sistema organiza confirmações, fila de espera e informações essenciais em um só lugar para reduzir faltas, retrabalho e ruído operacional.',
    strip: [
      {
        label: 'Foco em',
        value: 'confirmações e fila',
        hint: 'menos mesa vazia e menos stress na recepção',
      },
      {
        label: 'Visão',
        value: 'financeira clara',
        hint: 'sem perder o cuidado com o paciente',
      },
    ],
    showcaseImage: 'assets/Odonto.png',
    showcaseAlt:
      'Mockup Thiers Odonto: landing, painel administrativo e experiência em desktop, tablet e smartphone.',
    valueTitle: 'Transmita segurança antes mesmo da consulta',
    valueText:
      'Pacientes percebem quando o processo é profissional: agendar online, receber lembretes e ter clareza sobre horários e documentos. Isso reforça confiança na sua marca e libera sua equipe para o que importa: o atendimento clínico.',
    features: [
      {
        icon: '📅',
        title: 'Agenda e recepção',
        text: 'Confirmações, encaixes e visão do dia para a recepção não virar gargalo.',
      },
      {
        icon: '📋',
        title: 'Prontuário enxuto',
        text: 'Registre o essencial com rapidez e mantenha histórico acessível para a equipe.',
      },
      {
        icon: '💳',
        title: 'Financeiro integrado',
        text: 'Acompanhe produção, pagamentos e indicadores sem planilhas paralelas.',
      },
    ],
    finalTitle: 'Pronto para organizar sua clínica com método?',
    finalText:
      'Conte o tamanho da operação e o que precisa priorizar. Alinhamos escopo, prazo e investimento com transparência.',
    waDemo:
      'Olá! Vim da página Agenda para clínicas e quero ver uma demonstração ou exemplos reais da solução.',
    waPlan:
      'Olá! Tenho interesse na solução de agenda e gestão para clínica. Podemos alinhar escopo, prazo e investimento?',
    waFinal:
      'Olá! Quero profissionalizar a operação da minha clínica com a Thiers. Qual o próximo passo?',
  },

  'site-institucional': {
    themeModifier: 'catalog-detail--institutional',
    eyebrow: 'Site institucional e presença digital',
    titleLine1: 'Sua marca no digital,',
    titleAccent: 'com presença séria e conversão',
    titleLine2: '',
    tagline:
      'Site institucional coerente com seu posicionamento: hierarquia clara, performance e integração com canais quando fizer sentido.',
    lead: 'Quando alguém pesquisa o seu negócio, o site é a âncora de credibilidade. Entregamos estrutura, conteúdo orientado a resultado e base técnica para evoluir sem refazer tudo a cada campanha.',
    strip: [
      {
        label: 'Foco em',
        value: 'credibilidade',
        hint: 'mensagem clara e navegação objetiva',
      },
      {
        label: 'Entrega',
        value: 'performance',
        hint: 'carregamento rápido e boas práticas de SEO técnico',
      },
    ],
    showcaseImage: 'assets/avakian.png',
    showcaseAlt:
      'Mockup responsivo do site institucional Avakian em monitor, notebook, tablet e smartphone.',
    valueTitle: 'Primeira impressão que sustenta preço e confiança',
    valueText:
      'Um site institucional bem feito organiza serviços, cases e contatos em um fluxo lógico. Isso melhora conversão de campanhas, indicações e buscas orgânicas porque o visitante encontra respostas rápido.',
    features: [
      {
        icon: '🏢',
        title: 'Arquitetura de conteúdo',
        text: 'Seções pensadas para guiar visitante e reforçar proposta de valor.',
      },
      {
        icon: '⚡',
        title: 'Performance',
        text: 'Páginas leves e boas práticas para ranquear e não perder visita no carregamento.',
      },
      {
        icon: '🔗',
        title: 'Integrações',
        text: 'Conecte formulários, WhatsApp, redes e materiais de apoio quando fizer sentido.',
      },
    ],
    finalTitle: 'Quer um site que represente bem o seu negócio?',
    finalText:
      'Vamos alinhar identidade, páginas necessárias e próximos passos. Transparência em prazo e investimento desde o início.',
    waDemo:
      'Olá! Vim da página Site + presença digital e quero ver referências ou demonstração de site institucional.',
    waPlan:
      'Olá! Tenho interesse em site institucional com a Thiers. Podemos conversar sobre escopo e investimento?',
    waFinal:
      'Olá! Quero fortalecer a presença digital da minha empresa com um site profissional. Qual o próximo passo?',
  },

  'profissionais-autonomos': {
    themeModifier: 'catalog-detail--barber',
    eyebrow: 'Profissionais autônomos',
    titleLine1: 'Agenda e vitrine no nível',
    titleAccent: 'do seu serviço',
    titleLine2: '',
    tagline:
      'Mostre portfólio, organize horários e converta visitas em reservas com um fluxo simples para quem trabalha solo ou em equipe pequena.',
    lead: 'Você não precisa parecer improvisado para ser acessível. Um painel enxuto com agenda, serviços e comunicação clara ajuda a precificar melhor e reduzir faltas.',
    strip: [
      {
        label: 'Para quem',
        value: 'quer agenda cheia',
        hint: 'com menos troca de mensagem repetida',
      },
      {
        label: 'Resultado',
        value: 'imagem profissional',
        hint: 'sem complicar o dia a dia',
      },
    ],
    showcaseImage: 'assets/Barbearia.png',
    showcaseAlt:
      'Mockup responsivo do sistema para barbearia: vitrine, agendamento e experiência em vários dispositivos.',
    valueTitle: 'Menos improviso, mais respeito pelo seu tempo',
    valueText:
      'Cliente percebe quando o agendamento é claro e a vitrine mostra serviços com previsibilidade. Isso aumenta conversão e reduz retrabalho no WhatsApp.',
    features: [
      {
        icon: '✂️',
        title: 'Serviços e preços',
        text: 'Organize pacotes, duração e valores com clareza para o cliente escolher rápido.',
      },
      {
        icon: '📆',
        title: 'Agenda inteligente',
        text: 'Bloqueios, confirmações e visão do dia para você controlar a carga de trabalho.',
      },
      {
        icon: '📱',
        title: 'Experiência mobile',
        text: 'Seu cliente agenda pelo celular com fluidez, onde estiver.',
      },
    ],
    finalTitle: 'Quer profissionalizar sua agenda autônoma?',
    finalText:
      'Conte seu ramo e como você atende hoje. Ajustamos o escopo para caber no seu ritmo e no seu orçamento.',
    waDemo:
      'Olá! Vim da página Profissionais autônomos e quero ver demonstração ou referências de agenda + vitrine.',
    waPlan:
      'Olá! Sou profissional autônomo e quero alinhar escopo e investimento para vitrine + agenda com a Thiers.',
    waFinal:
      'Olá! Quero organizar minha agenda e minha presença digital com a Thiers. Qual o próximo passo?',
  },

  'restaurante-gestao': {
    themeModifier: 'catalog-detail--restaurant',
    eyebrow: 'Restaurante e gestão',
    titleLine1: 'Operação de restaurante,',
    titleAccent: 'do salão à cozinha',
    titleLine2: '',
    tagline:
      'PDV, controle de caixa, estoque e delivery com painel administrativo para escalar sem perder o controle do rush.',
    lead: 'Horário de pico pede velocidade e clareza. Centralize pedidos, mesas e produção para reduzir erro, desperdício e estresse na equipe.',
    strip: [
      {
        label: 'Foco em',
        value: 'fluxo no rush',
        hint: 'comandas e cozinha alinhadas',
      },
      {
        label: 'Gestão',
        value: 'estoque e custo',
        hint: 'para saber onde está o dinheiro',
      },
    ],
    showcaseImage: 'assets/Restaurante.png',
    showcaseAlt:
      'Referência visual de solução para restaurante: operação, cardápio e gestão integrados.',
    valueTitle: 'Escala com disciplina, não com caos',
    valueText:
      'Quando o cardápio, o caixa e o estoque conversam, você evita buracos financeiros e melhora atendimento no salão e no delivery com menos retrabalho.',
    features: [
      {
        icon: '🍽️',
        title: 'PDV e salão',
        text: 'Mesas, comandas e pagamentos com fluxo rápido no horário cheio.',
      },
      {
        icon: '📦',
        title: 'Estoque e custos',
        text: 'Saiba o que entra, o que sai e onde ajustar precificação e compras.',
      },
      {
        icon: '🛵',
        title: 'Delivery integrado',
        text: 'Organize pedidos para produção e entrega sem perder o fio da meada.',
      },
    ],
    finalTitle: 'Pronto para estruturar seu restaurante?',
    finalText:
      'Conte porte da operação e canais (salão, delivery, filiais). Montamos proposta com escopo e cronograma transparentes.',
    waDemo:
      'Olá! Vim da página Restaurante e gestão e quero ver demonstração ou referências de PDV + operação.',
    waPlan:
      'Olá! Tenho restaurante e quero alinhar escopo e investimento em gestão integrada com a Thiers.',
    waFinal:
      'Olá! Quero organizar PDV, estoque e delivery do meu restaurante com a Thiers. Qual o próximo passo?',
  },
};
