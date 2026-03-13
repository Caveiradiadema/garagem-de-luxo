import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://garagemdeluxo.vercel.app'
  
  return [
    {
      // A barra final garante que o GSC entenda que é a rota raiz absoluta
      url: `${baseUrl}/`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}