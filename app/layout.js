import "./globals.css";

// Configuração dinâmica de URL para Vercel ou Local
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
  ? "https://" + process.env.NEXT_PUBLIC_VERCEL_URL 
  : "https://garagemdeluxo.com.br";

export const metadata = {
  title: "Garagem de Luxo Diadema | Estética Automotiva Premium & Lavagem Técnica",
  description: "Exclusividade e perfeição em cada detalhe na Rua João de Almeida, 74. Vitrificação, polimento e lavagem técnica detalhada no centro de Diadema.",
  keywords: ["estética automotiva Diadema", "lavagem técnica detalhada", "vitrificação de pintura SP", "polimento de luxo", "higienização automotiva Diadema"],
  alternates: {
    canonical: "https://garagemdeluxo.com.br",
  },
  robots: "index, follow",
  openGraph: {
    title: "Garagem de Luxo | Estética Automotiva de Elite em Diadema",
    description: "Referência em cuidado automotivo premium no coração de Diadema.",
    type: "website",
    locale: "pt_BR",
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "name": "Garagem de Luxo",
    "image": "https://garagemdeluxo.com.br/Logo.png",
    "description": "Estética automotiva de elite em Diadema. Especialista em vitrificação, polimento e lavagem técnica.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua João de Almeida, 74",
      "addressLocality": "Diadema",
      "addressRegion": "SP",
      "postalCode": "09920-140",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.6826622,
      "longitude": -46.6212458
    },
    "telephone": "+5511981240056",
    "url": "https://garagemdeluxo.com.br",
    "openingHours": "Mo-Sa 09:00-18:00"
  };

  return (
    <html lang="pt-br">
      <head>
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Diadema" />
        <meta name="geo.position" content="-23.6826622;-46.6212458" />
        <meta name="ICBM" content="-23.6826622, -46.6212458" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}