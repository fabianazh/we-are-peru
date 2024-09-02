'use client'

import Link from 'next/link'
import TextReveal from '@/components/Other/TextReveal'
import { motion } from 'framer-motion'
import { announcementService } from '@/services/announcementService'

export default function AnnouncementDetail({
    pengumumanId,
}: {
    pengumumanId: string
}) {
    const announcement = announcementService.getAnnouncementDetail(pengumumanId)
    console.log(pengumumanId)
    console.log(announcement?.id)
    return (
        <>
            <section
                id="announcement"
                className="w-full min-h-screen flex flex-col px-14 py-24 gap-4"
            >
                {/* Heading */}
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-3xl font-semibold">
                            {announcement?.title}
                        </h2>
                        <span>{announcement?.date}</span>
                        {/* <TextReveal
                            className="font-medium"
                            text="Temukan pengumuman & rangkuman hasil rapat kelompok kami di bawah sini."
                        /> */}
                    </div>
                </div>
                {/* End Heading */}

                {/* Content */}
                {/* End Content */}
            </section>
        </>
    )
}
