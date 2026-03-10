"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const zapUrl =
    "https://wa.me/5511981240056?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço%20de%20estética%20automotiva%20em%20Diadema.%20Vi%20o%20site%20e%20quero%20o%20melhor%20para%20o%20meu%20veículo.%20✨";

  const rotaUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Rua+João+de+Almeida,+74,+Centro,+Diadema,+SP";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.945447788414!2d-46.6260021!3d-23.6828551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce335e1da49ed93A%3A0xd1297bd77206b47e!2sGaragem%20de%20luxo!5e0!3m2!1spt-BR!2sbr!4v1709123456789!5m2!1spt-BR!2sbr";

  const servicos = [
    {
      t: "Lavagem Simples",
      d: "Limpeza interna e externa para manter o veículo bem cuidado no dia a dia.",
    },
    {
      t: "Lavagem Técnica Detalhada",
      d: "Remoção de contaminações com produtos adequados e cuidado refinado para preservar acabamento e pintura.",
    },
    {
      t: "Vitrificação de Elite",
      d: "Proteção cerâmica com brilho intenso, maior resistência e acabamento premium de longa duração.",
    },
    {
      t: "Polimento de Alta Definição",
      d: "Correção técnica de verniz para recuperar profundidade, reflexo e presença visual do veículo.",
    },
    {
      t: "Higienização Interna Bio",
      d: "Desinfecção interna com foco em limpeza profunda, redução de odores e renovação do ambiente.",
    },
    {
      t: "Impermeabilização de Tecidos",
      d: "Proteção para bancos e superfícies têxteis contra líquidos, manchas e desgaste prematuro.",
    },
    {
      t: "Limpeza Técnica de Motor",
      d: "Remoção cuidadosa de sujeira com atenção aos componentes sensíveis e acabamento limpo.",
    },
    {
      t: "Hidratação de Couro Premium",
      d: "Tratamento para recuperar maciez, aparência sofisticada e proteção contra ressecamento.",
    },
    {
      t: "Polimento de Faróis",
      d: "Restauração de transparência com acabamento mais limpo, seguro e visualmente renovado.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A22722,transparent_30%),radial-gradient(circle_at_bottom,#ffffff0d,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="inline-flex rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#E7C65A]">
                Estética Automotiva de Elite
              </span>

              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                GARAGEM DE LUXO
              </h1>

              <p className="mt-6 text-lg leading-8 text-zinc-300 md:text-xl">
                Exclusividade, acabamento e perfeição em cada detalhe para quem não
                aceita um cuidado comum para o próprio veículo.
              </p>

              <p className="mt-4 text-lg leading-8 text-zinc-400">
                Lavagem técnica, vitrificação, polimento e tratamentos premium no
                centro de Diadema para carros que exigem presença impecável.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={zapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C9A227] px-6 py-3 font-semibold text-black transition hover:bg-[#e7c65a]"
                >
                  Agendar no WhatsApp
                </a>

                <a
                  href="#servicos"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Ver serviços
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[#C9A227]/30 bg-black/20">
                  <Image
                    src="/Logo.png"
                    alt="Garagem de Luxo"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                    Presença premium
                  </p>
                  <h2 className="text-2xl font-bold text-white">
                    Cuidado automotivo com acabamento de elite
                  </h2>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-2xl font-black text-[#E7C65A]">Diadema</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">
                    Atendimento local
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-2xl font-black text-[#E7C65A]">Premium</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">
                    Acabamento
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-2xl font-black text-[#E7C65A]">Nano</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">
                    Proteção cerâmica
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-2xl font-black text-[#E7C65A]">Detalhe</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">
                    Atenção total
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-[#E7C65A]">
            Serviços
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Tratamentos pensados para elevar a presença do seu veículo
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {servicos.map((s) => (
            <motion.article
              key={s.t}
              variants={itemVariants}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="text-2xl font-bold text-white">{s.t}</h3>
              <p className="mt-4 leading-7 text-zinc-300">{s.d}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#E7C65A]">
                Geolocalização Diadema
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Rua João de Almeida, 74 - Loja 4, Centro — Diadema - SP
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                Atendimento com foco em acabamento premium para clientes que querem
                proteção, brilho, limpeza técnica e apresentação impecável.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={rotaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Traçar rota
                </a>
                <a
                  href={zapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C9A227] px-6 py-3 font-semibold text-black transition hover:bg-[#e7c65a]"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/20">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="420"
                style={{ border: 0, filter: "grayscale(1)", opacity: 0.82 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Garagem de Luxo em Diadema"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}