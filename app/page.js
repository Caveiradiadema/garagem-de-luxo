import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://garagemdeluxo.vercel.app"),
  title: "Estética Automotiva em Diadema | Garagem de Luxo",
  description: "Estética automotiva premium em Diadema - SP. Vitrificação, polimento e lavagem técnica.",
  openGraph: {
    title: "Garagem de Luxo | Diadema",
    description: "Estética automotiva premium em Diadema.",
    url: "https://garagemdeluxo.vercel.app",
    siteName: "Garagem de Luxo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Garagem de Luxo Diadema",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  const zapUrl = "https://wa.me/5511981240056?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20de%20est%C3%A9tica%20automotiva%20em%20Diadema.%20Vi%20o%20site%20e%20quero%20o%20melhor%20pro%20meu%20ve%C3%ADculo.%20%E2%9C%A8";

  const servicos = [
    { t: "Lavagem Simples", d: "Limpeza convencional interna e externa para a manutenção do dia a dia do seu veículo." },
    { t: "Lavagem Técnica Detalhada", d: "Muito além de uma limpeza. Removemos contaminações invisíveis com PH neutro, preservando a alma do seu veículo em Diadema." },
    { t: "Vitrificação de Elite (Nano)", d: "Blindagem cerâmica de alta resistência. Brilho espelhado e proteção hidrofóbica por até 3 anos contra agentes externos." },
    { t: "Polimento de Alta Definição", d: "Correção cirúrgica de verniz. Nivelamento técnico para o reflexo perfeito e remoção de riscos em Diadema." },
    { t: "Higienização Interna Bio", d: "Desinfecção profunda com eliminação de 99% de bactérias e odores. Renovação total do seu ambiente interno." },
    { t: "Impermeabilização de Tecidos", d: "Proteção avançada contra líquidos e manchas, preservando a originalidade e o toque do estofado." },
    { t: "Limpeza Técnica de Motor", d: "Segurança e estética premium. Remoção de sujidade com proteção dielétrica para componentes eletrônicos." },
    { t: "Hidratação de Couro Premium", d: "Tratamento com óleos essenciais que devolvem o toque macio e evitam rachaduras no couro original." },
    { t: "Polimento de Faróis", d: "Restauração da clareza original e aplicação de proteção UV definitiva contra o amarelamento solar." }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "name": "Garagem de Luxo Diadema",
    "image": "https://garagemdeluxo.vercel.app/Logo.png",
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
    "url": "https://garagemdeluxo.vercel.app"
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-[#C9A227] selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center bg-black/90 backdrop-blur-xl border-b border-white/5">
        <div className="relative w-48 h-16 group">
          <div className="absolute inset-0 bg-[#C9A227]/10 blur-2xl rounded-full opacity-50 transition-opacity"></div>
          <Image src="/Logo.png" alt="Logo Garagem de Luxo Diadema" fill className="object-contain relative z-10 scale-125 drop-shadow-[0_0_15px_rgba(201,162,39,0.3)]" priority />
        </div>
        <a href={zapUrl} target="_blank" className="text-[10px] tracking-[0.4em] uppercase border border-[#C9A227]/60 px-6 py-2 hover:bg-[#C9A227] hover:text-black transition-all font-bold">
          Agendar Agora
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A] z-10"></div>
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070)] bg-cover bg-center opacity-40 grayscale"></div>
        
        <div className="relative z-20 space-y-6">
          <span className="text-[#C9A227] tracking-[0.7em] text-[10px] uppercase opacity-80 font-bold block">Estética Automotiva de Elite em Diadema</span>
          <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter uppercase italic leading-tight text-white">
            GARAGEM <span className="font-bold text-white not-italic">DE LUXO</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-light text-sm md:text-lg italic opacity-70">
            "Não lavamos carros, restauramos o orgulho de dirigir uma máquina impecável."
          </p>
          <div className="pt-10">
             <a href={zapUrl} target="_blank" className="bg-black/80 border border-[#C9A227]/40 px-8 py-5 backdrop-blur-md rounded-sm inline-block shadow-[0_0_40px_rgba(201,162,39,0.15)] hover:border-[#C9A227] transition-all group">
                <p className="text-[#C9A227] text-[11px] uppercase tracking-widest font-bold group-hover:scale-105 transition-transform">Agendar Estética em Diadema</p>
             </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-2xl font-light uppercase tracking-[0.4em] border-b border-white/5 pb-8 inline-block">Serviços <span className="text-[#C9A227] font-bold">Atelier</span></h2>
           <p className="text-gray-500 text-xs mt-4 uppercase tracking-widest">Onde a estética automotiva em Diadema vira arte</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s, i) => (
            <div key={i} className="group relative p-8 bg-[#0D0D0D] border border-white/5 transition-all duration-300 rounded-sm hover:border-[#C9A227]/30 hover:bg-[#111]">
              <h3 className="text-[#C9A227] text-lg font-bold mb-3 italic tracking-tight">{s.t}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{s.d}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 bg-[#C9A227]"></div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÃO & MAPA */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-[#C9A227] text-xs uppercase tracking-[0.6em]">Geolocalização Diadema</h2>
            <p className="text-3xl font-light text-white italic">Rua João de Almeida, 74<br/><span className="font-bold text-[#C9A227] text-xl uppercase not-italic">Centro — Diadema - SP</span></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://www.google.com/maps/dir/?api=1&destination=-23.6826622,-46.6212458" target="_blank" className="inline-block px-10 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#C9A227] transition-all">
                  Traçar Rota
                </a>
                <a href={zapUrl} target="_blank" className="inline-block px-10 py-4 border border-[#C9A227] text-[#C9A227] font-bold text-xs uppercase tracking-widest hover:bg-[#C9A227] hover:text-black transition-all">
                  Chamar no WhatsApp
                </a>
            </div>
          </div>
          <div className="w-full h-[400px] grayscale opacity-60 border border-white/10 rounded-sm overflow-hidden shadow-2xl bg-[#111]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.784537166589!2d-46.62382072466587!3d-23.68266217871724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44e363a011a7%3A0xe549551381226068!2sR.%20Jo%C3%A3o%20de%20Almeida%2C%2074%20-%20Centro%2C%20Diadema%20-%20SP%2C%2009920-140!5e0!3m2!1spt-BR!2sbr!4v1700000000000" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center opacity-30 text-[9px] tracking-[0.5em] uppercase">
        Garagem de Luxo — Atelier de Estética Automotiva Diadema — 2026
      </footer>
    </main>
  );
}



