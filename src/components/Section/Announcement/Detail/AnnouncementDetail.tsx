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
                className="w-full min-h-screen flex flex-col px-5 lg:px-14 py-10 gap-6"
            >
                {/* Heading */}
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1.5">
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
                <div className="w-full flex flex-col gap-2 font-medium text-stone-600">
                    <span className="font-medium">{announcement?.desc}</span>
                    {/* Announcements */}
                    {announcement?.announcements && (
                        <div className="w-fit flex flex-col">
                            <span className="text-stone-800 font-semibold">
                                Pengumuman
                            </span>
                            <ul className="flex flex-col list-inside px-4 py-1">
                                {announcement?.announcements.map(
                                    (item: string, index: number) => (
                                        <li
                                            key={index}
                                            className="w-fit flex gap-2.5 items-start"
                                        >
                                            <div className="w-1 h-1 mt-2.5 shrink-0 aspect-square rounded-full bg-black" />{' '}
                                            {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                    {/* End Announcements */}
                    {/* Summaries */}
                    {announcement?.summaries && (
                        <div className="w-fit flex flex-col">
                            <span className="text-stone-800 font-semibold">
                                Ringkasan
                            </span>
                            <ul className="flex flex-col list-inside px-4 py-1">
                                {announcement?.summaries.map(
                                    (item: string, index: number) => (
                                        <li
                                            key={index}
                                            className="w-fit flex gap-2.5 items-start"
                                        >
                                            <div className="w-1 h-1 mt-2.5 shrink-0 aspect-square rounded-full bg-black" />{' '}
                                            {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                    {/* End Summaries */}
                    <div className="w-fit flex flex-col py-2 text-stone-800">
                        <span>Salam,</span>
                        <span>Sekretaris kelompok Peru.</span>
                    </div>
                </div>
                {/* End Content */}
            </section>
        </>
    )
}
