import "./globals.css";

const SITE_URL = "https://garagemdeluxo.vercel.app";

// 🛡️ FUNDAÇÃO: O Google lê isso se a página não tiver SEO próprio
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Garagem de Luxo Diadema | Estética Automotiva Premium",
    template: "%s | Garagem de Luxo Diadema",
  },
  description:
    "Estética automotiva premium em Diadema com lavagem técnica, vitrificação, polimento e cuidados de alto padrão.",
  keywords: [
    "estética automotiva Diadema",
    "lavagem técnica Diadema",
    "vitrificação automotiva",
    "polimento automotivo Diadema",
    "garagem de luxo",
    "detail automotivo",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "lyD9zFntJb2AGStj6Ar5L3btYDYwF069Pp68naBRtsw",
  },
  openGraph: {
    title: "Garagem de Luxo | Estética Automotiva Premium em Diadema",
    description:
      "Exclusividade e perfeição em cada detalhe para veículos que exigem acabamento de elite.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Garagem de Luxo",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Garagem de Luxo Diadema",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garagem de Luxo Diadema | Estética Automotiva Premium",
    description: "Lavagem técnica, vitrificação, polimento e acabamento premium em Diadema.",
    images: ["/Logo.png"],
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: "Garagem de Luxo",
    image: `${SITE_URL}/Logo.png`,
    url: SITE_URL,
    telephone: "+55 11 98124-0056",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua João de Almeida, 74 - Loja 4",
      addressLocality: "Diadema",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: "Diadema e região",
    priceRange: "$$",
    description:
      "Estética automotiva premium com lavagem técnica, vitrificação, polimento e tratamentos de acabamento em Diadema.",
  };

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}