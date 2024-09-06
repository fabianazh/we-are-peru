'use client'

import { poppins, montserrat } from '@/app/fonts'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PrimaryButton from '@/components/Button/PrimaryButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
import TextReveal from '@/components/Other/TextReveal'
import Link from 'next/link'
import { GrInstagram } from 'react-icons/gr'
import { FaTiktok } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export default function Hero() {
    return (
        <>
            <section
                id="home"
                className="w-full min-h-screen flex items-center px-5 pt-24 lg:pt-6 lg:px-14 gap-4 mb-16 lg:mb-0"
            >
                <div className="flex flex-col lg:flex-row gap-4 w-full h-full">
                    <div className="h-auto flex flex-col gap-4 w-full lg:w-9/12 flex-auto">
                        <div className="flex flex-col lg:flex-row gap-4 w-full h-fit shrink-0">
                            <div className="p-4 lg:p-6 lg:pb-8 flex flex-col gap-1 bg-white border shadow-sm overflow-hidden rounded-xl w-full lg:w-7/12">
                                <h1
                                    className={`font-medium lg:font-semibold text-2xl ${poppins.className}`}
                                >
                                    Selamat Datang!
                                </h1>
                                <span className="font-normal text-stone-500 text-sm lg:text-base">
                                    Temukan semangat kebersamaan dan prestasi
                                    Kelompok Peru. Jelajahi informasi, struktur,
                                    yel-yel, pengumuman, dan dokumentasi
                                    kegiatan kami di sini!
                                </span>
                            </div>
                            <div className="bg-transparent group border shadow-sm relative flex flex-col lg:flex-row overflow-hidden rounded-xl w-full lg:w-5/12 z-0">
                                <div
                                    className={`w-full justify-center lg:w-11/12 flex flex-col p-4 lg:p-6 bg-gradient-to-r from-white via-white to-transparent h-full z-10 ${poppins.className}`}
                                >
                                    <span className="text-xl font-semibold">
                                        Satu Hati,
                                    </span>
                                    <span className="text-xl font-semibold">
                                        Satu Tekad,
                                    </span>
                                    <span className="text-xl font-semibold">
                                        Satu{' '}
                                        <span
                                            className={`font-extrabold ${montserrat.className}`}
                                        >
                                            per
                                            <span className="text-[#fc0b1e]">
                                                u
                                            </span>
                                            .
                                        </span>
                                    </span>
                                </div>
                                <div className="h-full w-fit absolute right-0 top-0">
                                    <Image
                                        src={'/img/peru/flag.png'}
                                        alt="Peru"
                                        width={500}
                                        height={500}
                                        className="h-full w-fit"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col lg:flex-row gap-4">
                            <div className="group relative flex flex-col overflow-hidden rounded-xl p-4 lg:p-6 pb-6 lg:pb-0 w-full lg:w-3/12 border shadow-sm gap-4 bg-white">
                                <span className="font-semibold text-xl text-stone-800">
                                    Peta Negara Peru
                                </span>
                                <div className="w-6/12 lg:w-full mx-auto h-fit px-8">
                                    <Image
                                        src={'/img/peru/map.png'}
                                        alt="Peru"
                                        width={500}
                                        height={500}
                                        className="w-fit h-full"
                                    />
                                </div>
                            </div>
                            <div className="relative flex flex-col overflow-hidden rounded-xl p-4 lg:p-6 w-full lg:w-9/12 border shadow-sm gap-6 h-auto bg-white">
                                <div className="w-full h-fit flex flex-col lg:flex-row items-start lg:items-end justify-between gap-3 lg:gap-1">
                                    <div className="w-full flex flex-col">
                                        <h2 className="text-lg font-semibold">
                                            Galeri
                                        </h2>
                                        <TextReveal
                                            className="text-sm lg:text-sm font-medium text-stone-600"
                                            text="Temukan momen terbaik yang kami abadikan di bawah sini."
                                        />
                                    </div>
                                    <PrimaryButton
                                        href={'/gallery'}
                                        className="text-sm w-fit shrink-0"
                                    >
                                        Temukan lebih
                                    </PrimaryButton>
                                </div>
                                <div className="w-full h-auto grid grid-cols-5 gap-4">
                                    <div className="h-full w-fit rounded-lg overflow-hidden">
                                        <Image
                                            src={'/img/gallery/1-sep/192.jpg'}
                                            alt="Peru"
                                            width={200}
                                            height={200}
                                            className="h-fit flex"
                                        />
                                    </div>
                                    <div className="h-full w-fit rounded-lg overflow-hidden">
                                        <Image
                                            src={'/img/gallery/1-sep/1911.jpg'}
                                            alt="Peru"
                                            width={200}
                                            height={200}
                                            className="h-fit flex"
                                        />
                                    </div>
                                    <div className="h-full w-fit rounded-lg overflow-hidden">
                                        <Image
                                            src={'/img/gallery/1-sep/1915.jpg'}
                                            alt="Peru"
                                            width={200}
                                            height={200}
                                            className="h-fit flex"
                                        />
                                    </div>
                                    <div className="h-full w-fit rounded-lg overflow-hidden">
                                        <Image
                                            src={'/img/gallery/1-sep/1916.jpg'}
                                            alt="Peru"
                                            width={200}
                                            height={200}
                                            className="h-fit flex"
                                        />
                                    </div>
                                    <div className="h-full w-fit rounded-lg overflow-hidden">
                                        <Image
                                            src={'/img/gallery/1-sep/195.jpg'}
                                            alt="Peru"
                                            width={200}
                                            height={200}
                                            className="h-fit flex"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[20%] h-auto flex flex-row lg:flex-col shrink-0 gap-4">
                        <div className="w-6/12 lg:w-full group border shaodw-sm relative flex items-end overflow-hidden rounded-xl lg:flex-grow h-auto lg:h-60 shrink-0">
                            <Image
                                src={'/img/background/bg-1.jpeg'}
                                alt="Peru"
                                width={800}
                                height={900}
                                className="h-fit w-full"
                            />
                        </div>
                        <div className="w-6/12 lg:w-full border shadow-sm relative flex flex-col overflow-hidden rounded-xl p-4 lg:p-6 flex-grow lg:h-40 lg:shrink-0 gap-2 bg-white">
                            <span className="font-semibold text-lg">
                                Kontak Kami
                            </span>
                            <div className="w-full flex flex-col gap-3">
                                <Link
                                    href="https://instagram.com/thisisperupride_"
                                    className="text-sm flex items-center gap-2"
                                >
                                    <GrInstagram className="text-xs" />
                                    <span className="font-semibold text-stone-600">
                                        thisisperu_
                                    </span>
                                </Link>
                                <Link
                                    href="/"
                                    className="text-sm flex items-center gap-2"
                                >
                                    <FaTiktok />
                                    <span className="font-semibold text-stone-600">
                                        thisisperu_45
                                    </span>
                                </Link>
                                <Link
                                    href="/"
                                    className="text-sm flex items-center gap-2"
                                >
                                    <FaYoutube />
                                    <span className="font-semibold text-stone-600">
                                        peru.
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
