import GalleryDetail from '@/components/Section/Gallery/Detail/GalleryDetail'
import { galleryService } from '@/services/galleryService'

export async function generateStaticParams() {
    const galleries = galleryService.getAllGalleries()

    return galleries.map((gallery: Gallery) => ({
        galleryId: gallery.id,
    }))
}

export async function generateMetadata({
    params,
}: {
    params: {
        galleryId: string
    }
}) {
    const { galleryId } = params
    try {
        const gallery: Gallery | undefined | null =
            galleryService.getGalleryDetail(galleryId)

        if (gallery === undefined || gallery === null) {
            return {
                title: 'Galeri tidak dapat ditemukan!',
                description:
                    'Galeri yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                openGraph: {
                    title: 'Galeri tidak dapat ditemukan!',
                    description:
                        'Galeri yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                    images: [],
                },
                robots: 'noindex, nofollow',
            }
        }
        return {
            title: `${gallery?.title} | Galeri Kelompok Peru`,
            description:
                'Kelompok Peru adalah kelompok mahasiswa yang penuh semangat dan tekad untuk meraih kesuksesan bersama. Sebagai bagian dari MABIM (Masa Bimbingan) Universitas Nusa Putra, kelompok kami terbentuk dari berbagai latar belakang dan keahlian, namun disatukan oleh tujuan yang sama: belajar, berkolaborasi, dan saling mendukung dalam perjalanan akademik dan kehidupan kampus.',
            keywords: gallery?.keywords || `Galeri Kelompok Peru`,
            robots: 'index, follow',
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${galleryId}`,
            openGraph: {
                title: `${gallery?.title} | Galeri Kelompok Peru`,
                description:
                    'Kelompok Peru adalah kelompok mahasiswa yang penuh semangat dan tekad untuk meraih kesuksesan bersama. Sebagai bagian dari MABIM (Masa Bimbingan) Universitas Nusa Putra, kelompok kami terbentuk dari berbagai latar belakang dan keahlian, namun disatukan oleh tujuan yang sama: belajar, berkolaborasi, dan saling mendukung dalam perjalanan akademik dan kehidupan kampus.',
                images: gallery?.photos
                    ? [gallery?.thumbnail, ...gallery?.photos]
                    : [gallery?.thumbnail],
            },
        }
    } catch (error) {
        return {
            title: 'Galeri tidak dapat ditemukan!',
            description:
                'Galeri yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
            openGraph: {
                title: 'Galeri tidak dapat ditemukan!',
                description:
                    'Galeri yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                images: [],
            },
            robots: 'noindex, nofollow',
        }
    }
}

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
