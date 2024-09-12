import About from '@/components/Section/Information/About'
import Chant from '@/components/Section/Information/Chant'
import Structure from '@/components/Section/Information/Structure'

export async function generateMetadata() {
    return {
        title: 'Informasi',
        description:
            'Kelompok Peru adalah kelompok mahasiswa yang penuh semangat dan tekad untuk meraih kesuksesan bersama. Sebagai bagian dari MABIM (Masa Bimbingan) Universitas Nusa Putra, kelompok kami terbentuk dari berbagai latar belakang dan keahlian, namun disatukan oleh tujuan yang sama: belajar, berkolaborasi, dan saling mendukung dalam perjalanan akademik dan kehidupan kampus.',
    }
}

export default function InformationPage() {
    return (
        <>
            <div className="w-full flex flex-col gap-8 px-5 lg:px-14 py-24">
                <div className="w-full h-fit flex flex-col lg:flex-row gap-4">
                    <About />
                    <Chant />
                </div>
                <Structure />
            </div>
        </>
    )
}
