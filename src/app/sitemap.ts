import { galleries, announcements } from '@/constants/model'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || 'https://this-is-peru.vercel.app'

    const galleriesData = galleries.map((gallery) => ({
        url: `${baseUrl}/gallery/${gallery.id}`,
        lastModified: gallery.created_at,
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    const announcementsData = announcements.map((announcement) => ({
        url: `${baseUrl}/announcement/${announcement.id}`,
        lastModified: announcement.created_at,
        priority: 0.6,
    }))

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/information`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/announcement`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        ...announcementsData,
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
        },
        ...galleriesData,
    ]
}