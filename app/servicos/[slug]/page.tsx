// ==================================================
// 🎨 TEMPLATE SSG — Página de Serviço (service)
// Copiado para: app/[routePrefix]/[slug]/page.tsx
//
// BLOCOS OBRIGATÓRIOS (por ordem):
//  1. Schema JSON-LD (head)
//  2. Hero (H1, subheadline, proposta, CTA primário)
//  3. Dor e Contexto
//  4. Diferenciais e Mecanismo
//  5. Objeções + Respostas
//  6. FAQ Visível
//  7. GEO Local
//  8. Breadcrumb + Links Internos
//  9. CTA Final
// ==================================================
import { readFileSync, readdirSync } from 'fs';
import { join }    from 'path';
import type { Metadata } from 'next';
// Tipo de fallback local para evitar erros do TS
export type NicheBlueprint = any;

// Diretório configurado pelo engine/cli/build.ts via .env.local
const ARTICLES_SUBDIR = process.env.ARTICLES_SUBDIR || 'public/articles';
const ARTICLES_DIR    = join(process.cwd(), ARTICLES_SUBDIR);

// ── SSG ─────────────────────────────────────────────
export function generateStaticParams() {
  try {
    return readdirSync(ARTICLES_DIR)
      .filter(f => f.endsWith('.json'))
      .map(f => ({ slug: f.replace('.json', '') }));
  } catch { return []; }
}

function loadBlueprint(slug: string): NicheBlueprint | null {
  try {
    return JSON.parse(readFileSync(join(ARTICLES_DIR, `${slug}.json`), 'utf8'));
  } catch { return null; }
}

// ── SEO Dinâmico ────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = loadBlueprint(resolvedParams.slug);
  if (!data) return { title: 'Página não encontrada' };

  return {
    title:       data.seo.metaTitle,
    description: data.seo.metaDescription,
    keywords:    data.seo.keywords,
    robots:      data.seo.robots || 'index, follow',
    alternates:  { canonical: data.seo.canonicalUrl },
    openGraph: {
      title:       data.seo.openGraph.title,
      description: data.seo.openGraph.description,
      url:         data.seo.openGraph.url,
      type:        'website',
    },
    twitter: {
      card:        'summary_large_image',
      title:       data.seo.twitter.title,
      description: data.seo.twitter.description,
    },
  };
}

// ── Sub-componentes ─────────────────────────────────

function SchemaLD({ data }: { data: NicheBlueprint }) {
  const schemas = Object.values(data.schema || {}).filter(Boolean);
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}

function Breadcrumb({ routePath, title, baseUrl }: { routePath: string; title: string; baseUrl: string }) {
  const segments = routePath.split('/').filter(Boolean);
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
      <a href="/" className="hover:text-white transition-colors">Início</a>
      {segments.slice(0, -1).map((seg, i) => (
        <span key={i} className="flex items-center gap-2">
          <span>/</span>
          {seg === 'servicos' ? (
            <a href="/#servicos" className="hover:text-white transition-colors capitalize">{seg.replace(/-/g, ' ')}</a>
          ) : (
            <span className="capitalize">{seg.replace(/-/g, ' ')}</span>
          )}
        </span>
      ))}
      <span>/</span>
      <span className="text-white font-medium">{title}</span>
    </nav>
  );
}

function FAQAccordion({ faq }: { faq: NicheBlueprint['faq'] }) {
  if (!faq || faq.length === 0) return null;
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-6">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faq.map((item, i) => (
          <details key={i} className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 cursor-pointer">
            <summary className="flex items-center justify-between font-semibold text-white list-none">
              <span>{item.question}</span>
              <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ObjectionBusters({ data }: { data: NicheBlueprint }) {
  const { objections, proofs, triggers } = data.marketing;
  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold text-white mb-6">Por que escolher-nos?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Objeções */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-bold text-zinc-400 mb-3 text-sm uppercase tracking-wider">Preocupações Comuns</h3>
          <ul className="space-y-2">
            {objections.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="text-red-400 mt-0.5 shrink-0">✕</span>{obj}
              </li>
            ))}
          </ul>
        </div>
        {/* Gatilhos */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-bold text-zinc-400 mb-3 text-sm uppercase tracking-wider">Nossos Diferenciais</h3>
          <ul className="space-y-2">
            {triggers.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="text-green-400 mt-0.5 shrink-0">✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
        {/* Provas */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-bold text-zinc-400 mb-3 text-sm uppercase tracking-wider">Resultados Reais</h3>
          <ul className="space-y-2">
            {proofs.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="text-amber-400 mt-0.5 shrink-0">★</span>{p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GeoSection({ local }: { local: NicheBlueprint['local'] }) {
  if (!local?.city) return null;
  return (
    <section className="my-16 rounded-xl border border-white/10 bg-white/[0.03] p-8">
      <h2 className="text-xl font-bold text-white mb-4">Atendimento em {local.city}</h2>
      <p className="text-zinc-400 mb-4">{local.serviceArea}</p>
      {local.neighborhoods.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {local.neighborhoods.map((n, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full border border-white/10 text-zinc-400">
              {n}
            </span>
          ))}
        </div>
      )}
      {local.geoSignals.length > 0 && (
        <ul className="mt-4 space-y-1">
          {local.geoSignals.map((s, i) => (
            <li key={i} className="text-sm text-zinc-500">📍 {s}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function ProcessSteps({ steps }: { steps: string[] }) {
  if (!steps || steps.length === 0) return null;
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-white mb-6">Como Funciona</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-2xl font-black text-amber-400 mb-2">{String(i + 1).padStart(2, '0')}</div>
            <p className="text-zinc-300 text-sm">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Página Principal ─────────────────────────────────
export default async function NichePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = loadBlueprint(resolvedParams.slug);

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white">
        <div className="text-center">
          <p className="text-zinc-500 mb-2">Página não encontrada</p>
          <a href="/" className="text-amber-400 hover:text-white">← Voltar ao início</a>
        </div>
      </main>
    );
  }

  const { marketing, conversion, local } = data;
  const zapUrl = `https://wa.me/${conversion.whatsappNumber}?text=${encodeURIComponent(conversion.primaryCta.whatsappMessage)}`;
  const baseUrl = data.seo.canonicalUrl.split('/').slice(0, 3).join('/');

  return (
    <>
      <SchemaLD data={data} />
      <main className="min-h-screen bg-[#0A0A0A] text-white pb-32">

        {/* ── 1. HERO ───────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A22722,transparent_35%)]" />
          <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
            <Breadcrumb routePath={data.routePath} title={data.title} baseUrl={baseUrl} />

            <span className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-6">
              Serviço Especializado
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              {marketing.headline}
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4">
              {marketing.subheadline}
            </p>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto mb-10">
              {marketing.promise}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={zapUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-bold text-black hover:bg-amber-400 transition uppercase tracking-wide w-full sm:w-auto justify-center">
                {conversion.primaryCta.text}
              </a>
              <a href={conversion.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/10 transition uppercase tracking-wide w-full sm:w-auto justify-center">
                {conversion.secondaryCta.text}
              </a>
            </div>

            {/* Garantia no hero */}
            {conversion.guarantee && (
              <p className="mt-6 text-xs text-zinc-500">🔒 {conversion.guarantee}</p>
            )}
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">

          {/* ── 2. DOR E CONTEXTO ──────────────────── */}
          <section className="mt-16">
            <div className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: marketing.htmlContent }} />
          </section>

          {/* ── 3. MECANISMO ───────────────────────── */}
          {marketing.mechanism && (
            <section className="mt-12 rounded-xl border border-amber-500/20 bg-amber-500/5 p-8">
              <h2 className="text-xl font-bold text-white mb-3">Como resolvemos isso</h2>
              <p className="text-zinc-300">{marketing.mechanism}</p>
            </section>
          )}

          {/* ── 4. PROCESSO (STEPS) ────────────────── */}
          <ProcessSteps steps={conversion.steps} />

          {/* ── 5. OBJEÇÕES + GATILHOS + PROVAS ────── */}
          <ObjectionBusters data={data} />

          {/* ── 6. FAQ VISÍVEL ─────────────────────── */}
          <FAQAccordion faq={[...(data.faq || []), ...(local?.localFaq || [])]} />

          {/* ── 7. GEO LOCAL ───────────────────────── */}
          <GeoSection local={local} />

          {/* ── 8. CTA FINAL ───────────────────────── */}
          <section className="mt-20 rounded-[2rem] border border-amber-500/30 bg-white/[0.02] p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A22712,transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Pronto para resolver isso de vez?
              </h2>
              <p className="text-zinc-400 mb-3 text-lg max-w-xl mx-auto">
                {marketing.pains[0] || marketing.promise}
              </p>
              {conversion.urgency && (
                <p className="text-amber-400 text-sm font-semibold mb-8">⚡ {conversion.urgency}</p>
              )}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={zapUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-block rounded-full bg-amber-500 px-10 py-4 font-bold text-black hover:bg-amber-400 transition uppercase tracking-wide w-full sm:w-auto text-center">
                  {conversion.microcopy?.button || conversion.primaryCta.text}
                </a>
                <a href={conversion.secondaryCta.href}
                  className="inline-block rounded-full border border-white/20 px-10 py-4 font-bold text-white hover:bg-white/10 transition uppercase tracking-wide w-full sm:w-auto text-center">
                  {conversion.secondaryCta.text}
                </a>
              </div>
              {conversion.guarantee && (
                <p className="mt-6 text-xs text-zinc-600">🔒 {conversion.guarantee}</p>
              )}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
