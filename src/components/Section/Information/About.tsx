'use client'

import TextReveal from '@/components/Other/TextReveal'

export default function About() {
    return (
        <>
            <section
                id="about"
                className="w-full lg:w-7/12 h-fit lg:h-auto lg:flex-grow shrink-0 flex flex-col gap-4"
            >
                <div className="w-full h-full flex gap-2 p-4 lg:p-6 rounded-xl shadow-sm bg-white">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            Tentang Kami
                        </h2>
                        <div className="w-full flex flex-col gap-1">
                            <span className="text-sm lg:text-base text-stone-800 font-medium text-justify">
                                Kelompok Peru adalah kelompok mahasiswa yang
                                penuh semangat dan tekad untuk meraih kesuksesan
                                bersama. Sebagai bagian dari MABIM (Masa
                                Bimbingan) Universitas Nusa Putra, kelompok kami
                                terbentuk dari berbagai latar belakang dan
                                keahlian, namun disatukan oleh tujuan yang sama:
                                belajar, berkolaborasi, dan saling mendukung
                                dalam perjalanan akademik dan kehidupan kampus.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-end justify-between gap-2 p-4 lg:p-6 rounded-xl shadow-sm bg-white">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            Apa itu Peru?
                        </h2>
                        <div className="w-full flex flex-col gap-1">
                            <span className="text-sm lg:text-base text-stone-800 font-medium text-justify">
                                Peru sendiri adalah negara di Amerika Selatan
                                yang terkenal dengan sejarah peradaban suku
                                Inca, Machu Picchu, dan keindahan alamnya
                                seperti pegunungan Andes dan hutan Amazon.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
