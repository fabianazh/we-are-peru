'use client'

import TextReveal from '@/components/Other/TextReveal'
import { members } from '@/constants/mode'
import Image from 'next/image'

export default function Structure() {
    return (
        <>
            <section
                id="structure"
                className="w-full flex flex-col gap-4 lg:gap-6"
            >
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            Struktur Kelompok
                        </h2>
                        <TextReveal
                            className="text-sm lg:text-base font-medium"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit "
                        />
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
                                    className="h-full w-full absolute"
                                ></Image>
                            </div>
                            <div className="flex flex-col-reverse lg:flex-col gap-0.5">
                                <div className="w-full flex flex-col lg:flex-row lg:items-center gap-0.5 lg:gap-1 text-xs lg:text-sm text-stone-600 font-medium">
                                    <span>{member.role}</span>
                                    <span className="hidden lg:inline-block">
                                        /
                                    </span>
                                    <span>{member.major}</span>
                                </div>
                                <span className="text-sm lg:text-base font-semibold">
                                    {member.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
