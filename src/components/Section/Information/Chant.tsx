'use client'

import TextReveal from '@/components/Other/TextReveal'

export default function Chant() {
    return (
        <>
            <section
                id="chant"
                className="w-full lg:5/12 h-fit lg:flex-grow lg:h-auto flex flex-col p-4 lg:p-6 rounded-xl border shadow-sm gap-4"
            >
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-2">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            Yel-Yel
                        </h2>
                        <div className="w-full h-auto rounded-xl overflow-hidden">
                            <iframe 
                                // height="315"
                                src="https://www.youtube.com/embed/uCQiKowwByM?si=sNGpmluBwTIOG3vQ"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className='w-full h-56'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
