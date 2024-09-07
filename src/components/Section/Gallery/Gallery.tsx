'use client'

import Link from 'next/link'
import TextReveal from '@/components/Other/TextReveal'
import { motion } from 'framer-motion'
import { announcementService } from '@/services/announcementService'
import Image from 'next/image'
import { galleries, members } from '@/constants/model'

export default function Announcement() {
    const announcements = announcementService.getAllAnnouncements()

    return (
        <>
            <section
                id="announcement"
                className="w-full min-h-screen flex flex-col px-5 lg:px-14 py-24 gap-4 lg:gap-8"
            >
                {/* Heading */}
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-3xl font-semibold">Galeri</h2>
                        <TextReveal
                            className="font-medium text-stone-600"
                            text="Temukan kenangan terbaik dari perjalanan yang kami abadikan untuk mempererat kebersamaan kami."
                        />
                    </div>
                </div>
                {/* End Heading */}

                {/* Content */}

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-4">
                    {galleries.map((gallery: Gallery, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                    ease: 'easeOut',
                                    delay: 0.2 + index * 0.4,
                                },
                            }}
                            viewport={{
                                amount: 'some',
                                once: true,
                            }}
                        >
                            <Link
                                href={`/gallery/${gallery.id}`}
                                className="w-full h-auto flex-grow flex gap-8 justify-between p-4 bg-white group hover:bg-stone-50 duration-all transition-colors shadow-sm rounded-xl"
                            >
                                <div className="w-full flex flex-col gap-2 lg:gap-2">
                                    <span className="text-sm lg:text-lg font-bold">
                                        {gallery.title}
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-xs lg:text-sm text-stone-600 font-medium">
                                            {gallery.date}
                                        </span>
                                        <span className="text-xs lg:text-sm text-black font-semibold">
                                            {gallery.location.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-4/12 relative rounded-xl aspect-square shrink-0 overflow-hidden">
                                    <Image
                                        src={`${gallery.thumbnail}`}
                                        alt={`${gallery.title}`}
                                        width={800}
                                        height={800}
                                        className="w-full h-full absolute"
                                    />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                {/* End Content */}
            </section>
        </>
    )
}
