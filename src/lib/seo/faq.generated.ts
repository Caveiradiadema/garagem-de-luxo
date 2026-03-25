export type FAQItem = {
  question: string;
  answer: string;
  intent: string;
  voice_style: string;
};

export const globalFaq: FAQItem[] = [
  {
    "question": "O que a Garagem de Luxo faz?",
    "answer": "A Garagem de Luxo atua com foco em Estética automotiva e Lava rápido, oferecendo soluções alinhadas às necessidades reais do público.",
    "intent": "entendimento",
    "voice_style": "natural"
  },
  {
    "question": "Para quem a Garagem de Luxo é indicada?",
    "answer": "A Garagem de Luxo atende pessoas e empresas que precisam de mais clareza, resultado e presença forte em Centro de Diadema.",
    "intent": "qualificação",
    "voice_style": "natural"
  },
  {
    "question": "Quais serviços a Garagem de Luxo oferece?",
    "answer": "A Garagem de Luxo trabalha com soluções como Soluções de estética automotiva, estruturando atendimento e proposta conforme o contexto do projeto.",
    "intent": "comercial",
    "voice_style": "natural"
  },
  {
    "question": "Como contratar a Garagem de Luxo?",
    "answer": "O primeiro passo é entrar em contato, explicar o objetivo e receber uma orientação inicial sobre a melhor estratégia.",
    "intent": "conversão",
    "voice_style": "natural"
  },
  {
    "question": "A Garagem de Luxo atende em Centro de Diadema?",
    "answer": "Sim. A operação considera o contexto geográfico principal do projeto e adapta a comunicação para o público mais relevante.",
    "intent": "geolocalização",
    "voice_style": "natural"
  },
  {
    "question": "Quanto tempo leva para ver evolução com a Garagem de Luxo?",
    "answer": "O tempo varia conforme a base atual do projeto, a concorrência e a consistência da execução, mas a estrutura correta acelera a construção de autoridade.",
    "intent": "objeção",
    "voice_style": "natural"
  },
  {
    "question": "Por que escolher a Garagem de Luxo em vez de uma solução genérica?",
    "answer": "A Garagem de Luxo combina posicionamento, clareza semântica e execução orientada a contexto, evitando conteúdo solto e estratégia superficial.",
    "intent": "objeção",
    "voice_style": "natural"
  },
  {
    "question": "Qual é o diferencial da Garagem de Luxo?",
    "answer": "O diferencial está em unir estratégia, contexto do negócio e estrutura pronta para busca, descoberta e conversão.",
    "intent": "diferencial",
    "voice_style": "natural"
  }
];
export const faqByRoute: Record<string, FAQItem[]> = {
  "/": [
    {
      "question": "O que a Garagem de Luxo faz?",
      "answer": "A Garagem de Luxo atua com foco em Estética automotiva e Lava rápido, oferecendo soluções alinhadas às necessidades reais do público.",
      "intent": "entendimento",
      "voice_style": "natural"
    },
    {
      "question": "Para quem a Garagem de Luxo é indicada?",
      "answer": "A Garagem de Luxo atende pessoas e empresas que precisam de mais clareza, resultado e presença forte em Centro de Diadema.",
      "intent": "qualificação",
      "voice_style": "natural"
    },
    {
      "question": "Quais serviços a Garagem de Luxo oferece?",
      "answer": "A Garagem de Luxo trabalha com soluções como Soluções de estética automotiva, estruturando atendimento e proposta conforme o contexto do projeto.",
      "intent": "comercial",
      "voice_style": "natural"
    },
    {
      "question": "Como contratar a Garagem de Luxo?",
      "answer": "O primeiro passo é entrar em contato, explicar o objetivo e receber uma orientação inicial sobre a melhor estratégia.",
      "intent": "conversão",
      "voice_style": "natural"
    }
  ]
};
export function getFaqForPath(pathname: string): FAQItem[] {
  return faqByRoute[pathname] ?? [];
}
