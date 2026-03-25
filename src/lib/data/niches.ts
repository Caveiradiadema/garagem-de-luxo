export type NicheData = {
  slug: string;
  title: string;
  industry: string;
  painPoint: string;
};

export const seoNiches: NicheData[] = [
  // ==================================================
  // 🚗 SERVIÇOS DE PROTEÇÃO E ACABAMENTO (Alto Valor)
  // ==================================================
  { 
    slug: 'vitrificacao-elite-diadema', 
    title: 'Vitrificação de Elite em Diadema', 
    industry: 'Proteção Automotiva', 
    painPoint: 'pintura sem brilho, sem proteção contra riscos leves e agentes climáticos, desejo de efeito "zero km" duradouro' 
  },
  { 
    slug: 'polimento-alta-definicao-diadema', 
    title: 'Polimento de Alta Definição em Diadema', 
    industry: 'Restauração de Pintura', 
    painPoint: 'riscos superficiais, swirl marks (riscos circulares), pintura fadada ou sem reflexo e profundidade visual' 
  },
  { 
    slug: 'impermeabilizacao-tecidos-diadema', 
    title: 'Impermeabilização de Tecidos em Diadema', 
    industry: 'Proteção de Interiores', 
    painPoint: 'medo de derramar líquidos nos bancos, manchas difíceis de remover e desgaste prematuro do tecido' 
  },

  // ==================================================
  // 🛋️ HIGIENE E INTERIOR (Saúde e Conforto)
  // ==================================================
  { 
    slug: 'higienizacao-interna-bio-diadema', 
    title: 'Higienização Interna Bio em Diadema', 
    industry: 'Limpeza Automotiva', 
    painPoint: 'interior com mau cheiro, manchas profundas, presença de ácaros e sensação de ambiente pouco saudável' 
  },
  { 
    slug: 'hidratacao-couro-premium-diadema', 
    title: 'Hidratação de Couro Premium em Diadema', 
    industry: 'Cuidado com Interiores', 
    painPoint: 'bancos de couro ressecados, com aparência envelhecida ou riscando facilmente por falta de nutrição' 
  },

  // ==================================================
  // 🛠️ MANUTENÇÃO E DETALHES (Rotina)
  // ==================================================
  { 
    slug: 'lavagem-tecnica-detalhada-diadema', 
    title: 'Lavagem Técnica Detalhada em Diadema', 
    industry: 'Lavagem Automotiva', 
    painPoint: 'pintura contaminada por féculas, asfalto ou poluição que lavagens comuns não removem sem agredir o verniz' 
  },
  { 
    slug: 'limpeza-tecnica-motor-diadema', 
    title: 'Limpeza Técnica de Motor em Diadema', 
    industry: 'Mecânica e Estética', 
    painPoint: 'motor sujo com acúmulo de óleo e poeira, dificuldade para identificar vazamentos ou falta de cuidado visual ao abrir o capô' 
  },
  { 
    slug: 'polimento-farois-diadema', 
    title: 'Polimento de Faróis em Diadema', 
    industry: 'Segurança e Estética', 
    painPoint: 'faróis amarelados ou oxidados que comprometem a visibilidade noturna e deixam o carro com aparência velha' 
  },
  { 
    slug: 'lavagem-simples-diadema', 
    title: 'Lavagem Simples em Diadema', 
    industry: 'Limpeza Básica', 
    painPoint: 'rotina corrida que impede a limpeza adequada do carro, necessidade de manutenção diária da aparência' 
  },
];