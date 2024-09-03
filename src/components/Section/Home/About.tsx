'use client'

import Link from 'next/link'
import TextReveal from '@/components/Other/TextReveal'
import PrimaryButton from '@/components/Button/PrimaryButton'

export default function About() {
    return (
        <>
            <section
                id="about"
                className="w-full flex flex-col px-5 lg:px-14 py-16 gap-4"
            >
                <h2 className="text-2xl font-semibold">About the Group</h2>
                <div className="w-full h-fit flex justify-between">
                    <div className="w-8/12 shrink-0 flex flex-col gap-2">
                        <TextReveal
                            className="font-medium"
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus exercitationem voluptatum est distinctio voluptates nobis dolores quos harum laboriosam ex necessitatibus sed eligendi fugiat amet dolorum aspernatur, illum possimus? Pariatur possimus libero incidunt aliquid eius! Placeat corrupti itaque fugit quae aliquid dolorum magnam eveniet autem, iste sapiente nemo ipsa explicabo."
                        />

                        <div className="w-full flex gap-2 items-center py-2">
                            <PrimaryButton href="/">
                                Struktur Organisasi
                            </PrimaryButton>
                            <PrimaryButton href={'/'}>
                                Yel-Yel Grup
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
