
export const metadata = {
  title: "Garagem de Luxo | Especialistas em Lavagem Tecnica Detalhada Diadema",
  description: "Serviço premium de Lavagem Tecnica Detalhada Diadema em Diadema. Exclusividade, acabamento e perfeição em cada detalhe.",
  alternates: { canonical: "https://garagemdeluxo.vercel.app/seo-para/lavagem-tecnica-detalhada-diadema" },
};

export default function Page() {
  const zapUrl = "https://wa.me/5511981240056?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20sobre%20Lavagem%20Tecnica%20Detalhada%20Diadema%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20premium%20para%20meu%20ve%C3%ADculo.%20%E2%9C%A8";

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
             Lavagem Tecnica Detalhada Diadema
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
  <h2 class="text-2xl font-bold text-white border-b border-white/10 pb-2">Por que o caso de Lavagem Técnica Detalhada em Diadema se agrava?</h2>
  <p class="text-zinc-300 text-lg">pintura contaminada por féculas, asfalto ou poluição que lavagens comuns não removem sem agredir o verniz. Veja como resolver isso de forma definitiva e com alto padrão.</p>
  
  <div class="grid md:grid-cols-2 gap-6 my-8">
    <div class="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/10">
      <h3 class="font-bold text-red-500 mb-2">❌ Risco Comum #1: Uso de Produtos Abrasivos</h3>
      <p class="text-sm text-zinc-300">O uso de produtos abrasivos ou químicos fortes para tentar remover as contaminações pode danificar a pintura do veículo, levando a riscos e desgaste prematuro.</p>
    </div>
    <div class="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/10">
      <h3 class="font-bold text-red-500 mb-2">❌ Risco Comum #2: Falta de Especialização</h3>
      <p class="text-sm text-zinc-300">Muitos serviços de lavagem não possuem especialização em estética automotiva, o que pode resultar em técnicas inadequadas e falta de conhecimento sobre os produtos certos para usar, podendo piorar a situação.</p>
    </div>
  </div>
  
  <h3 class="text-xl font-bold text-[#E7C65A]">Como a Garagem de Luxo resolve isso</h3>
  <p class="text-zinc-300">A Garagem de Luxo oferece uma solução personalizada e exclusiva para a lavagem técnica detalhada em Diadema, utilizando produtos de alto padrão e técnica especializada para remover as contaminações de forma segura e eficaz, preservando a integridade da pintura do veículo. Nossa equipe de especialistas em estética automotiva premium trabalha com dedicação para garantir que cada detalhe seja tratado com cuidado e atenção, proporcionando um resultado final que超a as expectativas dos nossos clientes.</p>
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
