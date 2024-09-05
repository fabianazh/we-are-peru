'use client'

import { montserrat } from '@/app/fonts'
import TextReveal from '@/components/Other/TextReveal'

export default function About() {
    return (
        <>
            <section
                id="about"
                className="w-full lg:w-7/12 h-fit lg:h-auto lg:flex-grow shrink-0 flex flex-col p-4 lg:p-6 rounded-xl border shadow-sm gap-4"
            >
                <div className="w-full flex items-end justify-between gap-2">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            Tentang Kami
                        </h2>
                        <div className="w-full flex flex-col gap-1">
                            <span className="indent-4 text-sm lg:text-base text-stone-800 font-medium text-justify">
                                Kelompok{' '}
                                <span
                                    className={`inline-block text-black font-bold ${montserrat.className}`}
                                >
                                    per<span className="text-[#fc0b1e]">u</span>
                                </span>
                                . adalah kelompok mahasiswa yang penuh semangat
                                dan tekad untuk meraih kesuksesan bersama.
                                Sebagai bagian dari MABIM (Masa Bimbingan)
                                Universitas Nusa Putra, kelompok kami terbentuk
                                dari berbagai latar belakang dan keahlian, namun
                                disatukan oleh tujuan yang sama: belajar,
                                berkolaborasi, dan saling mendukung dalam
                                perjalanan akademik dan kehidupan kampus.
                            </span>
                            <span className="indent-4 text-sm lg:text-base text-stone-800 font-medium text-justify">
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
