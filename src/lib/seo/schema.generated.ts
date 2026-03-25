export type JsonLdNode = Record<string, unknown>;

export const siteSchemaGraph: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://garagem-de-luxo.vercel.app#organization",
      "name": "Garagem de Luxo",
      "url": "https://garagem-de-luxo.vercel.app",
      "description": "Garagem de Luxo: O Brilho do Seu Veículo de Elite. Estética automotiva premium no Centro de Diadema.",
      "logo": "https://garagem-de-luxo.vercel.app/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5511999999999",
        "contactType": "Customer Service",
        "areaServed": "Diadema"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Exemplo, 123",
        "addressLocality": "Diadema",
        "addressRegion": "SP",
        "postalCode": "09900-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.6827,
        "longitude": -46.5926
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://garagem-de-luxo.vercel.app#website",
      "url": "https://garagem-de-luxo.vercel.app",
      "name": "Garagem de Luxo",
      "publisher": {
        "@id": "https://garagem-de-luxo.vercel.app#organization"
      },
      "inLanguage": "pt-BR"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://garagem-de-luxo.vercel.app#localbusiness",
      "name": "Garagem de Luxo",
      "url": "https://garagem-de-luxo.vercel.app",
      "areaServed": "Centro de Diadema",
      "description": "Serviços de estética automotiva e lava rápido de alta qualidade no Centro de Diadema.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Exemplo, 123",
        "addressLocality": "Diadema",
        "addressRegion": "SP",
        "postalCode": "09900-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.6827,
        "longitude": -46.5926
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "servesCuisine": "Estética automotiva e Lava rápido",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lavagem Premium",
              "description": "Limpeza externa completa com produtos de alta qualidade."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Polimento Técnico",
              "description": "Restauração do brilho e remoção de riscos superficiais."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enceramento Protetor",
              "description": "Aplicação de cera de alta performance para brilho e proteção."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Higienização Interna",
              "description": "Limpeza profunda e detalhada do interior do veículo."
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://garagem-de-luxo.vercel.app#service-1",
      "name": "Soluções de estética automotiva",
      "provider": {
        "@id": "https://garagem-de-luxo.vercel.app#organization"
      },
      "areaServed": "Centro de Diadema"
    },
    {
      "@type": "Service",
      "@id": "https://garagem-de-luxo.vercel.app#service-2",
      "name": "Lavagem de carros de luxo",
      "provider": {
        "@id": "https://garagem-de-luxo.vercel.app#organization"
      },
      "areaServed": "Centro de Diadema"
    },
    {
      "@type": "Service",
      "@id": "https://garagem-de-luxo.vercel.app#service-3",
      "name": "Polimento",
      "provider": {
        "@id": "https://garagem-de-luxo.vercel.app#organization"
      },
      "areaServed": "Centro de Diadema"
    },
    {
      "@type": "Service",
      "@id": "https://garagem-de-luxo.vercel.app#service-4",
      "name": "Enceramento",
      "provider": {
        "@id": "https://garagem-de-luxo.vercel.app#organization"
      },
      "areaServed": "Centro de Diadema"
    },
    {
      "@type": "Service",
      "@id": "https://garagem-de-luxo.vercel.app#service-5",
      "name": "Higienização interna",
      "provider": {
        "@id": "https://garagem-de-luxo.vercel.app#organization"
      },
      "areaServed": "Centro de Diadema"
    },
    {
      "@type": "Service",
      "@id": "https://garagem-de-luxo.vercel.app#service-6",
      "name": "Proteção de pintura",
      "provider": {
        "@id": "https://garagem-de-luxo.vercel.app#organization"
      },
      "areaServed": "Centro de Diadema"
    },
    {
      "@type": "Service",
      "@id": "https://garagem-de-luxo.vercel.app/centro-de-diadema#service",
      "name": "Estética Automotiva no Centro de Diadema",
      "description": "Serviços especializados de estética automotiva e lava rápido para veículos de luxo no Centro de Diadema.",
      "provider": {
        "@id": "https://garagem-de-luxo.vercel.app#localbusiness"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Centro de Diadema",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.6827,
            "longitude": -46.5926
          }
        }
      ]
    }
  ]
};
export const routeSchemaByPath: Record<string, JsonLdNode[]> = {
  "/": [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://garagem-de-luxo.vercel.app#page",
      "name": "Garagem de Luxo: Estética Automotiva Premium no Centro de Diadema",
      "url": "https://garagem-de-luxo.vercel.app",
      "description": "Bem-vindo à Garagem de Luxo, o destino principal para estética automotiva de elite no Centro de Diadema. Oferecemos serviços incomparáveis para manter seu veículo de luxo impecável.",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@id": "https://garagem-de-luxo.vercel.app#website"
      },
      "about": "Garagem de Luxo"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://garagem-de-luxo.vercel.app#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://garagem-de-luxo.vercel.app"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://garagem-de-luxo.vercel.app#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que a Garagem de Luxo faz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Garagem de Luxo atua com foco em Estética automotiva e Lava rápido, oferecendo soluções alinhadas às necessidades reais do público."
          }
        },
        {
          "@type": "Question",
          "name": "Para quem a Garagem de Luxo é indicada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Garagem de Luxo atende pessoas e empresas que precisam de mais clareza, resultado e presença forte em Centro de Diadema."
          }
        },
        {
          "@type": "Question",
          "name": "Quais serviços a Garagem de Luxo oferece?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Garagem de Luxo trabalha com soluções como Soluções de estética automotiva, estruturando atendimento e proposta conforme o contexto do projeto."
          }
        },
        {
          "@type": "Question",
          "name": "Como contratar a Garagem de Luxo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O primeiro passo é entrar em contato, explicar o objetivo e receber uma orientação inicial sobre a melhor estratégia."
          }
        }
      ]
    }
  ]
};
export function getSchemaForPath(pathname: string): JsonLdNode[] {
  return routeSchemaByPath[pathname] ?? [];
}
