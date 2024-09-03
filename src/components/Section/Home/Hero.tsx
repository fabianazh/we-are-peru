'use client'

import { poppins } from '@/app/fonts'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PrimaryButton from '@/components/Button/PrimaryButton'

export default function Hero() {
    return (
        <>
            <section
                id="home"
                className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-0 lg:px-20 gap-10 lg:gap-8"
            >
                <div className="w-full lg:w-6/12 shrink-0 flex flex-col h-fit px-5 lg:pl-0 lg:pr-10">
                    <div className="w-fit shrink-0 flex flex-col">
                        <h1
                            className={`font-medium lg:font-semibold text-xl lg:text-4xl ${poppins.className}`}
                        >
                            Selamat datang!{' '}
                        </h1>
                        <h2 className="font-semibold lg:font-extrabold text-3xl lg:text-6xl lg:whitespace-nowrap">
                            Di Web Kelompok Peru.
                        </h2>
                        <span className="font-medium lg:font- block mt-2 text-stone-700 lg:text-lg">
                            Temukan semangat kebersamaan dan prestasi Kelompok
                            Peru. Jelajahi informasi, struktur, yel-yel,
                            pengumuman, dan dokumentasi kegiatan kami di sini!
                        </span>
                        <div className="w-fit items-center gap-2 py-4 flex">
                            <PrimaryButton href={'/information'}>
                                Cari tahu tentang kami
                            </PrimaryButton>
                        </div>
                    </div>
                    {/* <span
                        className={`font-medium text-lg ${poppins.className}`}
                    >
                        Selamat datang! di website resmi kelompok Peru.
                    </span> */}
                </div>
                <div className="w-full lg:w-fit flex relative gap-4 px-5 lg:px-0">
                    <div className="relative w-fit h-fit flex flex-col gap-4">
                        <div className="w-44 lg:w-56 aspect-square overflow-hidden rounded-md">
                            <Image
                                src={'/img/background/bg-2.avif'}
                                alt="Hero 1"
                                width={500}
                                height={600}
                                className="w-full h-fit"
                            />
                        </div>
                        <div className="font-semibold text-lg flex flex-col justify-center w-full h-fit px-2">
                            <span>
                                Satu <span className="text-red-600">Hati</span>,
                            </span>
                            <span className=" block">Satu Tekad,</span>
                            <span className="">Satu Peru!</span>
                        </div>
                    </div>
                    <div className="relative w-fit flex flex-col h-fit">
                        <div className="bg-green-200 rounded-md shadow-sm w-48 lg:w-56 flex flex-col p-4 -translate-x-16 -translate-y-6 lg:-translate-y-10">
                            <span className="font-semibold text-lg">
                                Kontak Kami
                            </span>
                            <span className="text-sm font-medium">
                                Instagram
                            </span>
                            <span className="text-sm font-medium">Tiktok</span>
                        </div>
                        <div className="w-44 lg:w-56 h-48 lg:h-72 overflow-hidden rounded-md flex items-end lg:-translate-y-6">
                            <Image
                                src={'/img/background/bg-1.jpeg'}
                                alt="Hero 1"
                                width={500}
                                height={600}
                                className="w-56 h-fit"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
