'use client'

import TextReveal from '@/components/Other/TextReveal'

export default function About() {
    return (
        <>
            <section
                id="about"
                className="w-full flex flex-col px-5 lg:px-14 py-24 gap-4"
            >
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-2xl font-semibold">Tentang Kami</h2>
                        <span className="text-stone-600 font-medium">
                            Kami adalah kelompok mahasiswa yang penuh semangat
                            dan tekad untuk meraih kesuksesan bersama. Sebagai
                            bagian dari MABIM (Masa Bimbingan) Universitas Nusa
                            Putra, kelompok kami terbentuk dari berbagai latar
                            belakang dan keahlian, namun disatukan oleh tujuan
                            yang sama: belajar, berkolaborasi, dan saling
                            mendukung dalam perjalanan akademik dan kehidupan
                            kampus.
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
