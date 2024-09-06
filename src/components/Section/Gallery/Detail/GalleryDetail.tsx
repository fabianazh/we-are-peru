'use client'

import TextReveal from '@/components/Other/TextReveal'
import { motion } from 'framer-motion'
import ArrowButton from '@/components/Button/ArrowButton'
import { galleryService } from '@/services/galleryService'
import Link from 'next/link'
import Image from 'next/image'

export default function GalleryDetail({ galleryId }: { galleryId: string }) {
    const gallery = galleryService.getGalleryDetail(galleryId)

    return (
        <>
            <section className="w-full h-fit flex gap-2 items-center justify-between pt-20 lg:pt-24 px-5 lg:px-14">
                <ArrowButton href="/gallery" direction="left">
                    Kembali
                </ArrowButton>
            </section>
            <section
                id="gallery"
                className="w-full h-fit flex flex-col px-5 lg:px-14 py-10 gap-6 lg:gap-8"
            >
                {/* Heading */}
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            {gallery?.title}
                        </h2>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm lg:text-sm text-stone-500 font-medium">
                                {gallery?.date}
                            </span>
                            <Link
                                href={`${gallery?.location.url}`}
                                className="text-sm lg:text-sm text-blue-700 font-semibold"
                            >
                                {gallery?.location.name}
                            </Link>
                        </div>
                    </div>
                </div>
                {/* End Heading */}

                {/* Content */}
                <div className="w-full columns-2 md:columns-3 lg:columns-4 ap-4 lg:gap-6 font-medium text-stone-600">
                    {gallery?.medias.map((media: string, index: number) => (
                        <div key={index} className="w-full mb-4 lg:mb-6">
                            <Image
                                src={`${media}`}
                                alt={media}
                                width={400}
                                height={500}
                                className="w-full h-fit"
                            />
                        </div>
                    ))}
                </div>
                {/* End Content */}
            </section>
        </>
    )
}
