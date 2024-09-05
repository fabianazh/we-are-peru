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
                        <h2 className="text-3xl font-semibold">Galeri</h2>
                        <TextReveal
                            className="font-medium text-stone-600"
                            text="Temukan kenangan terbaik dari perjalanan yang kami abadikan untuk mempererat kebersamaan kami."
                        />
                    </div>
                </div>
                {/* End Heading */}

                {/* Content */}
                <div className="w-full flex gap-6"></div>
                {/* End Content */}
            </section>
        </>
    )
}
