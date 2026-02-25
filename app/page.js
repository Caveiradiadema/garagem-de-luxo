"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const zapUrl = "https://wa.me/5511981240056?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20de%20est%C3%A9tica%20automotiva%20em%20Diadema.%20Vi%20o%20site%20e%20quero%20o%20melhor%20pro%20meu%20ve%C3%ADculo.%20%E2%9C%A8";

  const servicos = [
    { t: "Lavagem Simples", d: "Limpeza convencional interna e externa para a manutenção do dia a dia do seu veículo." },
    { t: "Lavagem Técnica Detalhada", d: "Remoção de contaminações invisíveis com PH neutro, preservando a alma do seu veículo em Diadema." },
    { t: "Vitrificação de Elite (Nano)", d: "Blindagem cerâmica de alta resistência. Brilho espelhado e proteção por até 3 anos." },
    { t: "Polimento de Alta Definição", d: "Correção cirúrgica de verniz. Nivelamento técnico para o reflexo perfeito em Diadema." },
    { t: "Higienização Interna Bio", d: "Desinfecção profunda com eliminação de 99% de bactérias e odores." },
    { t: "Impermeabilização de Tecidos", d: "Proteção avançada contra líquidos e manchas, preservando o estofado." },
    { t: "Limpeza Técnica de Motor", d: "Remoção de sujidade com proteção dielétrica para componentes eletrônicos." },
    { t: "Hidratação de Couro Premium", d: "Tratamento que devolve o toque macio e evitam rachaduras no couro." },
    { t: "Polimento de Faróis", d: "Restauração da clareza original e aplicação de proteção UV definitiva." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8 } }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-[#C9A227] selection:text-black">
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center bg-black/90 backdrop-blur-xl border-b border-white/5">
        <div className="relative w-48 h-16">
          <Image src="/Logo.png" alt="Logo Garagem de luxo" fill className="object-contain scale-125" priority />
        </div>
        <a href={zapUrl} target="_blank" className="text-[10px] tracking-[0.4em] uppercase border border-[#C9A227]/60 px-6 py-2 hover:bg-[#C9A227] hover:text-black transition-all font-bold">
          Agendar Agora
        </a>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A] z-10"></div>
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070)] bg-cover bg-center opacity-40 grayscale"></div>
        <motion.div initial={{opacity:0, filter:"blur(15px)"}} animate={{opacity:1, filter:"blur(0px)"}} transition={{duration:1.5}} className="relative z-20 space-y-6">
          <span className="text-[#C9A227] tracking-[0.7em] text-[10px] uppercase font-bold block">Estética Automotiva de Elite</span>
          <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter uppercase italic text-white">GARAGEM <span className="font-bold not-italic">DE LUXO</span></h1>
          <a href={zapUrl} target="_blank" className="mt-10 bg-black/80 border border-[#C9A227]/40 px-8 py-5 backdrop-blur-md inline-block hover:border-[#C9A227] transition-all group">
             <p className="text-[#C9A227] text-[11px] uppercase tracking-widest font-bold">Agendar Estética em Diadema</p>
          </a>
        </motion.div>
      </section>

      {/* Serviços com Efeito Escada */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s, i) => (
            <motion.div key={i} variants={itemVariants} className="group p-8 bg-[#0D0D0D] border border-white/5 rounded-sm hover:border-[#C9A227]/30 transition-all">
              <h3 className="text-[#C9A227] text-lg font-bold mb-3 italic tracking-tight">{s.t}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{s.d}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 bg-[#C9A227]"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Localização Completa */}
      <motion.section 
        initial={{opacity:0, y:40}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}}
        className="py-24 bg-[#080808] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-[#C9A227] text-xs uppercase tracking-[0.6em]">Geolocalização Diadema</h2>
            <p className="text-3xl font-light text-white italic">Rua João de Almeida, 74 - Loja 4<br/><span className="font-bold text-[#C9A227] text-xl uppercase not-italic">Centro — Diadema - SP</span></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+João+de+Almeida+74+Centro+Diadema+SP7" target="_blank" className="inline-block px-10 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#C9A227] transition-all">Traçar Rota</a>
                <a href={zapUrl} target="_blank" className="inline-block px-10 py-4 border border-[#C9A227] text-[#C9A227] font-bold text-xs uppercase tracking-widest hover:bg-[#C9A227] hover:text-black transition-all">Chamar no WhatsApp</a>
            </div>
          </div>
          <div className="w-full h-[400px] grayscale opacity-60 border border-white/10 overflow-hidden bg-[#111]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.945447788414!2d-46.6260021!3d-23.6828551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce335e1da49ed9%3A0xd1297bd77206b47e!2sGaragem%20de%20luxo!5e0!3m2!1spt-BR!2sbr!4v1709123456789!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </motion.section>

      <footer className="py-20 text-center opacity-30 text-[9px] tracking-[0.5em] uppercase">Garagem de luxo — 2026</footer>
    </main>
  );
}
