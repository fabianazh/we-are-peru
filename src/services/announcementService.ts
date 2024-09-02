import { announcements } from '@/constants/mode'

export const announcementService = {
    getAllAnnouncements: () => announcements,
    getAnnouncementDetail: (id: string) =>
        announcements.find(
            (announcement: Announcement) => announcement.id === id
        ),
}
