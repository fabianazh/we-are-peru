import GalleryDetail from '@/components/Section/Gallery/Detail/GalleryDetail'

export default function GalleryDetailPage({
    params: { galleryId },
}: {
    params: { galleryId: string }
}) {
    return (
        <>
            <GalleryDetail galleryId={galleryId} />
        </>
    )
}
