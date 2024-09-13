import { galleries, announcements } from '@/constants/model'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const galleriesData = galleries.map((gallery: Gallery) => {
        return {
            url: `${baseUrl}/gallery/${gallery.id}`,
            lastModified: gallery.created_at,
        }
    })

    const announcementsData = announcements.map(
        (announcement: Announcement) => {
            return {
                url: `${baseUrl}/announcement/${announcement.id}`,
                lastModified: announcement.created_at,
            }
        }
    )

    const sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/information`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/announcement`,
            lastModified: new Date().toISOString(),
        },
        ...announcementsData,
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date().toISOString(),
        },
        ...galleriesData,
    ].map((item) => {
        return `
        <url>
          <loc>${item.url}</loc>
          <lastmod>${item.lastModified}</lastmod>
        </url>
      `
    })

    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${sitemap.join('')}
        </urlset>`,
        {
            headers: {
                'Content-Type': 'application/xml',
            },
        }
    )
}
