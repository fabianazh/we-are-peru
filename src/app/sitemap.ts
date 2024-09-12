import { galleries, announcements } from '@/constants/model'

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const galleriesData = galleries.map((gallery: Gallery) => {
        return {
            url: `${baseUrl}/${gallery.id}`,
            lastModified: new Date(),
        }
    })

    const announcementsData = announcements.map(
        (announcement: Announcement) => {
            return {
                url: `${baseUrl}/${announcement.id}`,
                lastModified: new Date(),
            }
        }
    )

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/information`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/announcement`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
        },
        ...announcementsData,
        ...galleriesData,
    ]
}
