
export const metadata = {
  title: "Garagem de Luxo | Especialistas em Insulfilm Diadema",
  description: "Serviço premium de Insulfilm Diadema em Diadema. Exclusividade, acabamento e perfeição em cada detalhe.",
  alternates: { canonical: "https://garagemdeluxo.vercel.app/seo-para/insulfilm-diadema" },
};

export default function Page() {
  const zapUrl = "https://wa.me/5511981240056?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20sobre%20Insulfilm%20Diadema%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20premium%20para%20meu%20ve%C3%ADculo.%20%E2%9C%A8";

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pb-24">
      {/* Banner Superior Premium */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A22722,transparent_30%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center">
          
          {/* Link de Voltar para a Home */}
          <div className="mb-10 relative z-20">
            <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#E7C65A] hover:text-white transition-colors">
              &larr; Voltar para a Página Inicial
            </a>
          </div>

          <span className="inline-flex rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#E7C65A] mb-6">
            Serviço Especializado
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
             Insulfilm Diadema
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Acabamento de elite e proteção avançada no centro de Diadema para carros que exigem presença impecável.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl mt-16 px-6 relative z-20">
        {/* Conteúdo Injetado pela IA (Dark Mode) */}
        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: `<div class="space-y-8">
  <h2 class="text-2xl font-bold text-white border-b border-white/10 pb-2">Por que o caso de Insulfilm e Película em Diadema se agrava?</h2>
  <p class="text-zinc-300 text-lg">Calor excessivo dentro do carro, raios solares danificando o estofado ou necessidade de privacidade. Veja como resolver isso de forma definitiva e com alto padrão.</p>
  
  <div class="grid md:grid-cols-2 gap-6 my-8">
    <div class="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/10">
      <h3 class="font-bold text-red-500 mb-2">❌ Risco Comum #1</h3>
      <p class="text-sm text-zinc-300">Uso de Insulfilm de baixa qualidade, que pode não oferecer proteção adequada contra os raios UV e o calor, danificando o interior do veículo e comprometendo a estética automotiva.</p>
    </div>
    <div class="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/10">
      <h3 class="font-bold text-red-500 mb-2">❌ Risco Comum #2</h3>
      <p class="text-sm text-zinc-300">Instalação inadequada da película, o que pode levar a bolhas de ar, falhas na adesão ou até mesmo danos ao vidro do veículo, comprometendo a estética e a funcionalidade do Insulfilm.</p>
    </div>
  </div>
  
  <h3 class="text-xl font-bold text-[#E7C65A]">Como a Garagem de Luxo resolve isso</h3>
  <p class="text-zinc-300">A Garagem de Luxo oferece soluções personalizadas e exclusivas para Insulfilm e Película em Diadema, utilizando apenas materiais de alta qualidade e técnicas avançadas de instalação. Nossa equipe de especialistas garante a aplicação perfeita da película, proporcionando uma barreira eficaz contra o calor e os raios UV, preservando a estética premium do seu veículo e garantindo confort e privacidade ao dirigir.</p>
</div>` }} 
        />
        
        {/* Call to Action Fixo (Máquina de Vendas Dupla) */}
        <div className="mt-20 rounded-[2rem] border border-[#C9A227]/30 bg-white/[0.02] p-10 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A22711,transparent_70%)]" />
           <div className="relative z-10">
             <h3 className="text-3xl font-black text-white mb-4">Seu carro merece o melhor tratamento</h3>
             <p className="text-zinc-400 mb-8 text-lg">Agende agora seu horário na Garagem de Luxo ou conheça nossa estrutura.</p>
             
             {/* Botoes Lado a Lado */}
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <a 
                 href={zapUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block rounded-full bg-[#C9A227] px-8 py-4 font-bold text-black transition hover:bg-[#e7c65a] uppercase tracking-wide w-full sm:w-auto"
               >
                 Agendar no WhatsApp
               </a>
               <a 
                 href="/"
                 className="inline-block rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10 uppercase tracking-wide w-full sm:w-auto"
               >
                 Ver todos os serviços
               </a>
             </div>

           </div>
        </div>
      </section>
    </main>
  );
}
