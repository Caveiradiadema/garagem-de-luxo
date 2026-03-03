import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://garagemdeluxo.vercel.app"),
  title: "Garagem de Luxo Diadema | Estética Automotiva Premium",
  description: "Exclusividade e perfeição em cada detalhe na Rua João de Almeida, 74. Vitrificação e polimento no centro de Diadema.",
  keywords: ["estética automotiva Diadema", "lavagem técnica", "vitrificação", "polimento de luxo"],
  robots: "index, follow",
  verification: {
    google: "lyD9zFntJb2AGStj6Ar5L3btYDYwF069Pp68naBRtsw",
  },
  openGraph: {
    title: "Garagem de Luxo | Estética Automotiva de Elite em Diadema",
    description: "A perfeição em cada detalhe, no coração de Diadema.",
    type: "website",
    locale: "pt_BR",
    url: "https://garagemdeluxo.vercel.app",
    images: [{ url: "/Logo.png", width: 1200, height: 630, alt: "Garagem de Luxo Diadema" }],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="antialiased">{children}</body>
    </html>
  );
}