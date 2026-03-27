import { MetadataRoute } from 'next'

// Importa o cardápio de serviços da Garagem
// (Se o sitemap estiver na pasta 'app', ele precisa voltar uma pasta e entrar em 'src')
import { seoNiches } from '../src/lib/data/niches' 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://garagemdeluxo.vercel.app'
  const lastModified = new Date()

  // 1. A RAIZ INTOCÁVEL (Landing Page Principal)
  const rootRoute = [
    {
      // A barra final garante que o GSC entenda que é a rota absoluta
      url: `${baseUrl}/`, 
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1, // Prioridade máxima
    },
  ]

  // 2. O EXÉRCITO DE CONVERSÃO (SEO Programático)
  const dynamicRoutes = seoNiches.map((niche) => ({
    url: `${baseUrl}/servicos/${niche.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9, // Alta prioridade para captação de clientes
  }))

  // 3. VAPO! Junta a Landing Page com os 10 nichos específicos
  return [...rootRoute, ...dynamicRoutes]
}