import { announcements } from '@/constants/mode'

export const announcementService = {
    getAllAnnouncements: () => announcements,
    getAnnouncementDetail: (pengumumanId: string) =>
        announcements.find(
            (announcement: Announcement) => announcement.id === pengumumanId
        ),
}
