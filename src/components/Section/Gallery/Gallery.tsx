'use client'

import Link from 'next/link'
import TextReveal from '@/components/Other/TextReveal'
import { motion } from 'framer-motion'
import { announcementService } from '@/services/announcementService'
import Image from 'next/image'
import { members } from '@/constants/model'

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
                <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-3 lg:gap-6">
                    {members.map((member: Member, index: number) => (
                        <div
                            key={index} 
                            className="w-full h-auto shadow-sm border rounded-xl flex flex-grow flex-col gap-2.5 p-4 bg-white"
                        >
                            <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                                <Image
                                    src={`${member.src}`}
                                    alt={`${member.name}`}
                                    width={200}
                                    height={200}
                                    className="h-fit w-full absolute"
                                ></Image>
                            </div>
                            <div className="flex flex-col gap-0.5 hyphens-auto2xvc n cfv fcrrdcfredcedcedcedcedcrfcfrvfvrrfvfrv">
                                <span className="text-sm lg:text-base font-semibold">
                                    {member.name}
                                </span>
                                <span className="block lg:inline-block text-xs lg:text-sm text-stone-500 font-medium">
                                    {member.role}
                                </span>
                                <span className="block lg:inline-block text-xs lg:text-sm text-stone-700 font-semibold">
                                    {member.major}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End Content */}
            </section>
        </>
    )
}
