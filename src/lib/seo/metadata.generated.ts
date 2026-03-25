import type { Metadata } from "next";

export const defaultMetadata: Record<string, unknown> = {
  "title": "Garagem de Luxo - Estética Automotiva Premium em Diadema",
  "description": "Descubra a Garagem de Luxo, seu centro de estética automotiva de elite no Centro de Diadema. Serviços de lavagem, polimento, enceramento e mais para veículos de alto padrão.",
  "keywords": [
    "Garagem de Luxo",
    "Estética automotiva Diadema",
    "Lava rápido premium Diadema",
    "Polimento Diadema",
    "Enceramento automotivo Diadema",
    "Cuidados com carros de luxo",
    "Detailing automotivo",
    "Lavagem detalhada",
    "Proteção de pintura",
    "Higienização automotiva",
    "Centro de Diadema serviços",
    "Carros de luxo Diadema"
  ],
  "metadataBase": "https://garagem-de-luxo.vercel.app"
};
export const metadataByRoute: Record<string, Metadata> = {
  "/": {
    "title": "Garagem de Luxo: Estética Automotiva Premium no Centro de Diadema",
    "description": "Bem-vindo à Garagem de Luxo, o destino principal para estética automotiva de elite no Centro de Diadema. Oferecemos serviços incomparáveis para manter seu veículo de luxo impecável.",
    "keywords": [
      "Garagem de Luxo",
      "Estética automotiva",
      "Lava rápido premium",
      "Centro de Diadema"
    ],
    "alternates": {
      "canonical": "https://garagem-de-luxo.vercel.app"
    },
    "openGraph": {
      "title": "Garagem de Luxo: Estética Automotiva Premium no Centro de Diadema",
      "description": "Bem-vindo à Garagem de Luxo, o destino principal para estética automotiva de elite no Centro de Diadema. Oferecemos serviços incomparáveis para manter seu veículo de luxo impecável.",
      "url": "https://garagem-de-luxo.vercel.app",
      "siteName": "Garagem de Luxo",
      "locale": "pt_BR",
      "type": "website"
    },
    "twitter": {
      "card": "summary_large_image",
      "title": "Garagem de Luxo: Estética Automotiva Premium no Centro de Diadema",
      "description": "Bem-vindo à Garagem de Luxo, o destino principal para estética automotiva de elite no Centro de Diadema. Oferecemos serviços incomparáveis para manter seu veículo de luxo impecável."
    },
    "robots": {
      "index": true,
      "follow": true
    }
  }
};
export function getMetadataForPath(pathname: string): Metadata {
  return (metadataByRoute[pathname] ?? metadataByRoute["/"] ?? {}) as Metadata;
}
