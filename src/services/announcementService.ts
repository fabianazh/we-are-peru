import { announcements } from '@/constants/model'

export const announcementService = {
    getAllAnnouncements: () => announcements,
    getAnnouncementDetail: (id: string) =>
        announcements.find(
            (announcement: Announcement) => announcement.id === id
        ),
}
