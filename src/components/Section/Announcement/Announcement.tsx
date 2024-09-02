'use client'

import Link from 'next/link'
import TextReveal from '@/components/Other/TextReveal'
import { announcements } from '@/constants/mode'
import { motion } from 'framer-motion'

export default function Announcement() {
    return (
        <>
            <section
                id="announcement"
                className="w-full flex flex-col px-14 py-24 gap-4"
            >
                {/* Heading */}
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-3xl font-semibold">
                            Pengumuman & Rangkuman
                        </h2>
                        <TextReveal
                            className="font-medium"
                            text="Temukan pengumuman & rangkuman hasil rapat kelompok kami di bawah sini."
                        />
                    </div>
                </div>
                {/* End Heading */}

                {/* Content */}
                <div className="w-full flex flex-col">
                    {announcements.map(
                        (announcement: Announcement, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.6,
                                        ease: 'easeOut',
                                        delay: 0.4 + index * 0.4,
                                    },
                                }}
                                viewport={{
                                    amount: 'some',
                                    once: true,
                                }}
                                className="w-full flex flex-col border-b py-4 lg:py-6 gap-0.5"
                            >
                                <div className="w-fit flex gap-0.5 items-center text-xs text-stone-500 font-medium">
                                    <span>{announcement.date}</span>|
                                    <span>{announcement.time}</span>
                                </div>
                                <Link
                                    href={`/pengumuman/${announcement.id}`}
                                    className="flex w-fit gap-1 items-center"
                                >
                                    <span className="text-base font-semibold">
                                        {announcement.name}
                                    </span>
                                </Link>
                                <span className="text-sm block font-medium text-stone-700 mt-4">
                                    {announcement.desc}
                                </span>
                                <Link
                                    href={`/pengumuman/${announcement.id}`}
                                    className="text-blue-800 text-sm font-medium mt-2"
                                >
                                    Baca selengkapnya
                                </Link>
                            </motion.div>
                        )
                    )}
                </div>
                {/* End Content */}
            </section>
        </>
    )
}
