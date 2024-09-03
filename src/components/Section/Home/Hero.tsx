'use client'

import { poppins } from '@/app/fonts'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <>
            <section
                id="home"
                className="w-full min-h-screen flex items-center justify-center"
            >
                <div className="w-6/12 flex flex-col h-fit">
                    <h1 className={`font-medium text-5xl ${poppins.className}`}>
                        Selamat datang!{' '}
                        <span className="block mt-2">
                            di website resmi{' '}
                            <span className="block mt-2">kelompok Peru.</span>
                        </span>
                    </h1>
                    {/* <span
                        className={`font-medium text-lg ${poppins.className}`}
                    >
                        Selamat datang! di website resmi kelompok Peru.
                    </span> */}
                </div>
                <div className="w-4/12 shrink-0 flex relative gap-4">
                    <Image
                        src={'/img/background/bg-2.avif'}
                        alt="Hero 1"
                        width={500}
                        height={600}
                        className="w-48 h-fit"
                    />
                    <Image
                        src={'/img/background/bg-1.jpeg'}
                        alt="Hero 1"
                        width={500}
                        height={600}
                        className="w-56 h-fit mt-28"
                    />
                </div>
            </section>
        </>
    )
}
