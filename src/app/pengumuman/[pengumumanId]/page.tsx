import AnnouncementDetail from '@/components/Section/Announcement/Detail/AnnouncementDetail'

export default function AnnouncementDetailPage({
    pengumumanId,
}: {
    pengumumanId: string
}) {
    return (
        <>
            <AnnouncementDetail pengumumanId={pengumumanId} />
        </>
    )
}
