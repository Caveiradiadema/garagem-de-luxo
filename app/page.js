import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const zapUrl = "https://wa.me/5511981240056?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria%20t%C3%A9cnica%20para%20o%20meu%20ve%C3%ADculo.%20Prezo%20pela%20exclusividade%20e%20vi%20que%20na%20Garagem%20de%20Luxo%20ele%20estar%C3%A1%20em%20boas%20m%C3%A3os.%20%E2%9C%A8";

  const servicos = [
    { t: "Lavagem Técnica Detalhada", d: "Limpeza profunda com PH neutro. Onde fazer lavagem técnica em Diadema? Na Garagem de Luxo." },
    { t: "Vitrificação de Pintura", d: "Proteção nano-cerâmica de alta durabilidade e brilho profundo contra agentes externos." },
    { t: "Espelhamento de Pintura", d: "Nivelamento técnico do verniz para um reflexo de alta definição e remoção de riscos leves." },
    { t: "Polimento Técnico", d: "Correção de imperfeições para o brilho perfeito. Especialista em polimento em Diadema." },
    { t: "Higienização Interna", d: "Limpeza detalhada com desinfecção profunda, eliminando 99% de bactérias e odores." },
    { t: "Impermeabilização de Tecidos", d: "Proteção avançada contra líquidos e manchas, preservando a originalidade do estofado." },
    { t: "Limpeza Técnica de Motor", d: "Remoção de sujidade com proteção dielétrica, garantindo segurança e estética premium." },
    { t: "Hidratação de Couro", d: "Tratamento especializado para preservar o toque macio e evitar rachaduras no couro." },
    { t: "Polimento de Faróis", d: "Restauração da clareza original e aplicação de proteção UV contra amarelamento." },
    { t: "Revitalização de Plásticos", d: "Recuperação do aspecto de novo com proteção duradoura contra o ressecamento solar." }
  ];

  // Dados Estruturados para o Google (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "name": "Garagem de Luxo Diadema",
    "description": "Estética automotiva premium em Diadema. Lavagem técnica, polimento e vitrificação.",
    "image": "https://garagemdeluxo.com/Logo.png",
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
    "url": "https://garagemdeluxo.com"
  };

  return (
    <>
      <Head>
        <title>Garagem de Luxo Diadema | Estética Automotiva Premium</title>
        <meta name="description" content="Lavagem técnica, vitrificação e polimento de alto padrão em Diadema. Excelência e brilho para seu veículo." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <main className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#C9A227] selection:text-black">
        {/* Otimização AEO Invisível */}
        <div className="sr-only">
          <h2>Melhor estética automotiva em Diadema</h2>
          <p>Onde lavar o carro no centro de Diadema? A Garagem de Luxo oferece lavagem técnica detalhada e polimento premium.</p>
        </div>

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

        {/* HERO SECTION - H1 SEMÂNTICO */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')] bg-cover bg-center opacity-40 grayscale"></div>
          
          <div className="relative z-20 space-y-6">
            <span className="text-[#C9A227] tracking-[0.7em] text-[10px] uppercase opacity-80 font-bold block">Estética Automotiva de Elite em Diadema</span>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter uppercase italic leading-tight text-white">
              GARAGEM <span className="font-bold text-white not-italic">DE LUXO</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 font-light text-sm md:text-lg italic opacity-70">
              "Da lavagem técnica à vitrificação: a perfeição em cada detalhe."
            </p>
            <div className="pt-10">
               <a href={zapUrl} target="_blank" className="bg-black/80 border border-[#C9A227]/40 px-8 py-5 backdrop-blur-md rounded-sm inline-block shadow-[0_0_40px_rgba(201,162,39,0.15)] hover:border-[#C9A227] transition-all group">
                  <p className="text-[#C9A227] text-[11px] uppercase tracking-widest font-bold group-hover:scale-105 transition-transform">Consulte Pacotes de Lavagem e Estética</p>
               </a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS - H2 SEMÂNTICO */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-2xl font-light uppercase tracking-[0.4em] border-b border-white/5 pb-8 inline-block">Serviços <span className="text-[#C9A227] font-bold">Atelier</span></h2>
             <p className="text-gray-500 text-xs mt-4 uppercase tracking-widest">Onde a estética automotiva em Diadema vira arte</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((s, i) => (
              <div key={i} className="group relative p-8 bg-[#0A0A0A] border border-white/5 transition-all duration-300 rounded-sm hover:border-[#C9A227]/30 hover:bg-[#111]">
                <h3 className="text-[#C9A227] text-lg font-bold mb-3 italic tracking-tight">{s.t}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{s.d}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 bg-[#C9A227]"></div>
              </div>
            ))}
          </div>
        </section>

        {/* LOCALIZAÇÃO - GEO OPTIMIZED */}
        <section className="py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-[#C9A227] text-xs uppercase tracking-[0.6em]">Geolocalização Diadema</h2>
              <p className="text-3xl font-light text-white italic">Rua João de Almeida, 74<br/><span className="font-bold text-[#C9A227] text-xl uppercase not-italic">Centro — Diadema - SP</span></p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="https://maps.google.com/?q=Garagem+de+Luxo+Diadema" target="_blank" className="inline-block px-10 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#C9A227] transition-all">
                    Traçar Rota
                  </a>
                  <a href={zapUrl} target="_blank" className="inline-block px-10 py-4 border border-[#C9A227] text-[#C9A227] font-bold text-xs uppercase tracking-widest hover:bg-[#C9A227] hover:text-black transition-all">
                    Chamar no WhatsApp
                  </a>
              </div>
            </div>
            <div className="w-full h-[400px] grayscale opacity-60 border border-white/10 rounded-sm overflow-hidden shadow-2xl bg-[#111]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.551221714574!2d-46.62343442466657!3d-23.656276278733917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce449339281a81%3A0xc39116812845645d!2sR.%20Jo%C3%A3o%20de%20Almeida%2C%2074%20-%20Centro%2C%20Diadema%20-%20SP%2C%2009920-140!5e0!3m2!1spt-BR!2sbr!4v1716760000000!5m2!1spt-BR!2sbr" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>

        <footer className="py-20 text-center opacity-30 text-[9px] tracking-[0.5em] uppercase">
          Garagem de Luxo — Atelier de Estética Automotiva Diadema — 2026
        </footer>
      </main>
    </>
  );
}