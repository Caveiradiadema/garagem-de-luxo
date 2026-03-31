// ==================================================
// 🎨 TEMPLATE SSG — Página de Serviço (service)
// Gerado pela Super Máquina V3
// Este arquivo é 100% autônomo — sem dependências externas.
// ==================================================
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import type { Metadata } from 'next';

// Diretório dos blueprints (configurado via .env.local)
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadBlueprint(slug: string): any {
  try {
    return JSON.parse(readFileSync(join(ARTICLES_DIR, `${slug}.json`), 'utf8'));
  } catch { return null; }
}

// ── SEO Dinâmico ────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = loadBlueprint(slug);
  if (!data) return { title: 'Página não encontrada' };

  return {
    title:       data.seo?.metaTitle,
    description: data.seo?.metaDescription,
    keywords:    data.seo?.keywords,
    robots:      data.seo?.robots || 'index, follow',
    alternates:  { canonical: data.seo?.canonicalUrl },
    openGraph: {
      title:       data.seo?.openGraph?.title,
      description: data.seo?.openGraph?.description,
      url:         data.seo?.openGraph?.url,
      type:        'website',
    },
    twitter: {
      card:        'summary_large_image',
      title:       data.seo?.twitter?.title,
      description: data.seo?.twitter?.description,
    },
  };
}

// ── Sub-componentes ─────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SchemaLD({ data }: { data: any }) {
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

function Breadcrumb({ routePath, title }: { routePath: string; title: string }) {
  const segments = routePath.split('/').filter(Boolean);
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#a1a1aa', marginBottom: '2rem' }}>
      <a href="/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Início</a>
      {segments.slice(0, -1).map((seg, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ textTransform: 'capitalize' }}>{seg.replace(/-/g, ' ')}</span>
        </span>
      ))}
      <span style={{ opacity: 0.4 }}>/</span>
      <span style={{ color: '#fff', fontWeight: 500 }}>{title}</span>
    </nav>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FAQAccordion({ faq }: { faq: any[] }) {
  if (!faq || faq.length === 0) return null;
  return (
    <section style={{ marginTop: '4rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>Perguntas Frequentes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faq.map((item: { question: string; answer: string }, i: number) => (
          <details key={i} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', cursor: 'pointer' }}>
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600, color: '#fff', listStyle: 'none' }}>
              <span>{item.question}</span>
              <span style={{ color: '#a1a1aa', fontSize: '0.75rem' }}>▼</span>
            </summary>
            <p style={{ marginTop: '0.75rem', color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ObjectionBusters({ data }: { data: any }) {
  const { objections, proofs, triggers } = data.marketing;
  const sectionStyle = { padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem' };
  const titleStyle = { fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: '#a1a1aa', marginBottom: '1rem' };
  const itemStyle = { display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#a1a1aa' };

  return (
    <section style={{ margin: '4rem 0' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>Por que escolher-nos?</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {objections?.length > 0 && (
          <div style={sectionStyle}>
            <h3 style={titleStyle}>Preocupações Comuns</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {objections.map((obj: string, i: number) => (
                <li key={i} style={itemStyle}><span style={{ color: '#ef4444', flexShrink: 0 }}>✕</span>{obj}</li>
              ))}
            </ul>
          </div>
        )}
        {triggers?.length > 0 && (
          <div style={sectionStyle}>
            <h3 style={titleStyle}>Nossos Diferenciais</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {triggers.map((t: string, i: number) => (
                <li key={i} style={itemStyle}><span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span>{t}</li>
              ))}
            </ul>
          </div>
        )}
        {proofs?.length > 0 && (
          <div style={sectionStyle}>
            <h3 style={titleStyle}>Resultados Reais</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {proofs.map((p: string, i: number) => (
                <li key={i} style={itemStyle}><span style={{ color: '#f59e0b', flexShrink: 0 }}>★</span>{p}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GeoSection({ local }: { local: any }) {
  if (!local?.city) return null;
  return (
    <section style={{ margin: '4rem 0', padding: '2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Atendimento em {local.city}</h2>
      <p style={{ color: '#a1a1aa', marginBottom: '1rem' }}>{local.serviceArea}</p>
      {local.neighborhoods?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {local.neighborhoods.map((n: string, i: number) => (
            <span key={i} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa' }}>{n}</span>
          ))}
        </div>
      )}
      {local.geoSignals?.length > 0 && (
        <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
          {local.geoSignals.map((s: string, i: number) => (
            <li key={i} style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>📍 {s}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function ProcessSteps({ steps }: { steps: string[] }) {
  if (!steps || steps.length === 0) return null;
  return (
    <section style={{ margin: '3rem 0' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>Como Funciona</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {steps.map((step, i) => (
          <div key={i} style={{ flex: '1 1 200px', padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f59e0b', marginBottom: '0.5rem' }}>{String(i + 1).padStart(2, '0')}</div>
            <p style={{ color: '#d4d4d8', fontSize: '0.9375rem' }}>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Página Principal ─────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function NichePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = loadBlueprint(slug);

  if (!data) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0A0A0A', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Página não encontrada</p>
          <a href="/" style={{ color: '#f59e0b' }}>← Voltar ao início</a>
        </div>
      </main>
    );
  }

  const { marketing, conversion, local } = data;
  const zapUrl = `https://wa.me/${conversion.whatsappNumber}?text=${encodeURIComponent(conversion.primaryCta.whatsappMessage)}`;

  return (
    <>
      <SchemaLD data={data} />
      <main style={{ minHeight: '100vh', background: '#0A0A0A', color: '#fff', paddingBottom: '8rem' }}>

        {/* ── HERO ─────────────────────────────────── */}
        <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top, rgba(201,162,39,0.15), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '72rem', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center', zIndex: 1 }}>
            <Breadcrumb routePath={data.routePath} title={data.title} />

            <span style={{ display: 'inline-flex', padding: '0.5rem 1.25rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#f59e0b', background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.3)', borderRadius: '9999px', marginBottom: '1.5rem' }}>
              Serviço Especializado
            </span>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              {marketing.headline}
            </h1>

            <p style={{ fontSize: '1.125rem', color: '#a1a1aa', maxWidth: '42rem', margin: '0 auto 0.75rem' }}>
              {marketing.subheadline}
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto 2.5rem' }}>
              {marketing.promise}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <a href={zapUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '0.9375rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0A0A0A', background: '#f59e0b', borderRadius: '9999px', textDecoration: 'none', minWidth: '200px', justifyContent: 'center' }}>
                {conversion.primaryCta.text}
              </a>
              <a href={conversion.secondaryCta.href}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '0.9375rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', textDecoration: 'none', minWidth: '200px', justifyContent: 'center' }}>
                {conversion.secondaryCta.text}
              </a>
            </div>

            {conversion.guarantee && (
              <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#6b7280', opacity: 0.6 }}>🔒 {conversion.guarantee}</p>
            )}
          </div>
        </section>

        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* ── CONTEÚDO ──────────────────────────── */}
          <section style={{ marginTop: '4rem' }}>
            <div dangerouslySetInnerHTML={{ __html: marketing.htmlContent }} />
          </section>

          {/* ── MECANISMO ────────────────────────── */}
          {marketing.mechanism && (
            <section style={{ marginTop: '3rem', padding: '2rem', borderRadius: '0.75rem', border: '1px solid rgba(201,162,39,0.2)', background: 'rgba(201,162,39,0.05)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Como resolvemos isso</h2>
              <p style={{ color: '#d4d4d8' }}>{marketing.mechanism}</p>
            </section>
          )}

          {/* ── PROCESSO ────────────────────────── */}
          <ProcessSteps steps={conversion.steps} />

          {/* ── OBJEÇÕES ────────────────────────── */}
          <ObjectionBusters data={data} />

          {/* ── FAQ ──────────────────────────────── */}
          <FAQAccordion faq={[...(data.faq || []), ...(local?.localFaq || [])]} />

          {/* ── GEO ──────────────────────────────── */}
          <GeoSection local={local} />

          {/* ── CTA FINAL ────────────────────────── */}
          <section style={{ margin: '5rem 0', padding: '3rem 2rem', borderRadius: '1.5rem', border: '1px solid rgba(201,162,39,0.3)', background: 'rgba(255,255,255,0.02)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(201,162,39,0.08), transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
                Pronto para resolver isso de vez?
              </h2>
              <p style={{ color: '#a1a1aa', marginBottom: '0.5rem', fontSize: '1.125rem', maxWidth: '36rem', marginLeft: 'auto', marginRight: 'auto' }}>
                {marketing.pains?.[0] || marketing.promise}
              </p>
              {conversion.urgency && (
                <p style={{ color: '#f59e0b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem' }}>⚡ {conversion.urgency}</p>
              )}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                <a href={zapUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', padding: '1rem 2.5rem', fontWeight: 700, color: '#0A0A0A', background: '#f59e0b', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {conversion.microcopy?.button || conversion.primaryCta.text}
                </a>
                <a href={conversion.secondaryCta.href}
                  style={{ display: 'inline-block', padding: '1rem 2.5rem', fontWeight: 700, color: '#fff', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {conversion.secondaryCta.text}
                </a>
              </div>
              {conversion.guarantee && (
                <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#525252' }}>🔒 {conversion.guarantee}</p>
              )}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
