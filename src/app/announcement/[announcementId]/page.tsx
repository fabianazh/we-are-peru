import AnnouncementDetail from '@/components/Section/Announcement/Detail/AnnouncementDetail'

export default function AnnouncementDetailPage({
    params: { announcementId },
}: {
    params: { announcementId: string }
}) {
    return (
        <>
            <AnnouncementDetail announcementId={announcementId} />
        </>
    )
}
