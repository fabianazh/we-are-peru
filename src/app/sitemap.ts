import { galleries, announcements } from '@/constants/model'

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const galleriesData = galleries.map((gallery: Gallery) => {
        return {
            url: `${baseUrl}/gallery/${gallery.id}`,
            lastModified: new Date().toISOString(),
        }
    })

    const announcementsData = announcements.map(
        (announcement: Announcement) => {
            return {
                url: `${baseUrl}/announcement/${announcement.id}`,
                lastModified: new Date().toISOString(),
            }
        }
    )

    return [
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
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date().toISOString(),
        },
        ...announcementsData,
        ...galleriesData,
    ]
}
