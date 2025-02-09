'use client'

import Link from 'next/link'
import TextReveal from '@/components/Other/TextReveal'
import { motion } from 'framer-motion'
import { announcementService } from '@/services/announcementService'

export default function Announcement() {
    const announcements = announcementService.getAllAnnouncements()

    return (
        <>
            <section
                id="announcement"
                className="w-full min-h-screen flex flex-col px-5 lg:px-14 py-24 gap-4"
            >
                {/* Heading */}
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-3xl font-semibold">
                            Pengumuman & Rangkuman
                        </h2>
                        <TextReveal
                            className="font-medium text-stone-600"
                            text="Temukan pengumuman & rangkuman hasil rapat kelompok kami di bawah sini."
                        />
                    </div>
                </div>
                {/* End Heading */}

                {/* Content */}
                <div className="w-full flex flex-col">
                    {announcements
                        .sort(
                            (a: Announcement, b: Announcement) =>
                                b.index - a.index
                        )
                        .map((announcement: Announcement, index: number) => (
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
                                className="w-full flex flex-col border-b py-4 lg:py-6 gap-3"
                            >
                                <div className="flex flex-col">
                                    <div className="w-fit flex gap-0.5 items-center text-xs text-stone-500 font-medium">
                                        <span>{announcement.date}</span>|
                                        <span>{announcement.time}</span>
                                    </div>
                                    <Link
                                        href={`/announcement/${announcement.id}`}
                                        className="flex w-fit gap-1 items-center"
                                    >
                                        <span className="text-base font-semibold">
                                            {announcement.title}
                                        </span>
                                    </Link>
                                </div>
                                <span className="text-sm block font-medium text-stone-700">
                                    {announcement.desc}
                                </span>
                                <Link
                                    href={`/announcement/${announcement.id}`}
                                    className="text-blue-800 text-sm font-medium"
                                >
                                    Baca selengkapnya
                                </Link>
                            </motion.div>
                        ))}
                </div>
                {/* End Content */}
            </section>
        </>
    )
}
