import AnnouncementDetail from '@/components/Section/Announcement/Detail/AnnouncementDetail'
import { announcementService } from '@/services/announcementService'

export async function generateStaticParams() {
    const announcements = announcementService.getAllAnnouncements()

    return announcements.map((announcement: Announcement) => ({
        announcementId: announcement.id,
    }))
}

export async function generateMetadata({
    params,
}: {
    params: {
        announcementId: string
    }
}) {
    const { announcementId } = params
    try {
        const announcement: Announcement | undefined | null =
            announcementService.getAnnouncementDetail(announcementId)

        if (announcement === undefined || announcement === null) {
            return {
                title: 'Pengumuman tidak dapat ditemukan!',
                description:
                    'Pengumuman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                openGraph: {
                    title: 'Pengumuman tidak dapat ditemukan!',
                    description:
                        'Pengumuman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                    images: [],
                },
                robots: 'noindex, nofollow',
            }
        }
        return {
            title: `${announcement?.title} | Pengumuman Kelompok Peru`,
            description:
                'Kelompok Peru adalah kelompok mahasiswa yang penuh semangat dan tekad untuk meraih kesuksesan bersama. Sebagai bagian dari MABIM (Masa Bimbingan) Universitas Nusa Putra, kelompok kami terbentuk dari berbagai latar belakang dan keahlian, namun disatukan oleh tujuan yang sama: belajar, berkolaborasi, dan saling mendukung dalam perjalanan akademik dan kehidupan kampus.',
            robots: 'index, follow',
        }
    } catch (error) {
        return {
            title: 'Pengumuman tidak dapat ditemukan!',
            description:
                'Pengumuman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
            openGraph: {
                title: 'Pengumuman tidak dapat ditemukan!',
                description:
                    'Pengumuman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                images: [],
            },
            robots: 'noindex, nofollow',
        }
    }
}

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
