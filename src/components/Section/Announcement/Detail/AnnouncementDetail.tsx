'use client'

import Link from 'next/link'
import TextReveal from '@/components/Other/TextReveal'
import { motion } from 'framer-motion'
import { announcementService } from '@/services/announcementService'
import ArrowButton from '@/components/Button/ArrowButton'

export default function AnnouncementDetail({
    announcementId,
}: {
    announcementId: string
}) {
    const announcement =
        announcementService.getAnnouncementDetail(announcementId)
    return (
        <>
            <section className="w-full h-fit flex gap-2 items-center justify-between pt-24 px-5 lg:px-14">
                <ArrowButton href="/announcement" direction="left">
                    Kembali
                </ArrowButton>
            </section>
            <section
                id="announcement"
                className="w-full min-h-screen flex flex-col px-14 py-10 gap-6"
            >
                {/* Heading */}
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-xl font-semibold">
                            {announcement?.title}
                        </h2>
                        <span className="text-sm text-stone-700 font-medium">
                            {announcement?.date} | {announcement?.time}
                        </span>
                        {/* <TextReveal
                            className="font-medium"
                            text="Temukan pengumuman & rangkuman hasil rapat kelompok kami di bawah sini."
                        /> */}
                    </div>
                </div>
                {/* End Heading */}

                {/* Content */}
                <div className="w-full flex flex-col gap-2 font-medium">
                    <span className="font-medium">{announcement?.desc}</span>
                    <div className="w-fit flex flex-col">
                        <span className="">Pengumuman</span>
                        <ul className="flex flex-col list-disc list-inside px-4">
                            <li>loremre</li>
                            <li>loremre</li>
                            <li>loremre</li>
                        </ul>
                    </div>
                    <div className="w-fit flex flex-col">
                        <span className="">Rangkuman</span>
                        <ul className="flex flex-col list-disc list-inside px-4">
                            <li>loremre</li>
                            <li>loremre</li>
                            <li>loremre</li>
                        </ul>
                    </div>
                </div>
                {/* End Content */}
            </section>
        </>
    )
}
