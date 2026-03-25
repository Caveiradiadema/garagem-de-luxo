import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/actions/', '/sucesso'],
    },
    // Atualizado com o domínio correto para o robô achar o XML
    sitemap: 'https://garagemdeluxo.vercel.app/sitemap.xml', 
  }
}