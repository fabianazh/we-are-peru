'use client'

import Link from 'next/link'
import TextReveal from '@/components/Other/TextReveal'
import { IoArrowUpOutline } from 'react-icons/io5'
import PrimaryButton from '@/components/Button/PrimaryButton'

export default function About() {
    return (
        <>
            <section
                id="about"
                className="w-full flex flex-col px-5 lg:px-14 py-16 gap-4"
            >
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-2xl font-semibold">Galeri</h2>
                        <TextReveal
                            className="font-medium"
                            text="Temukan momen terbaik yang kami abadikan di bawah sini."
                        />
                    </div>
                    <PrimaryButton
                        href={'/galeri'}
                        className="text-sm w-fit shrink-0"
                    >
                        Temukan lebih
                    </PrimaryButton>
                </div>
            </section>
        </>
    )
}
