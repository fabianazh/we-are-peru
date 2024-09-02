'use client'

import { urbanist } from '@/app/fonts'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <>
            <section
                id="home"
                className="w-full min-h-screen flex items-center justify-center pt-10"
            >
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex gap-4 px-5 lg:px-14 items-end justify-between">
                        <div className="w-fit h-fit flex flex-col">
                            <h1
                                className={`text-6xl leading-none h-fit text-black font-extrabold ${urbanist.className}`}
                            >
                                WeArePeru!
                            </h1>
                            <div className="w-full flex flex-col">
                                <span className="font-medium text-xl">
                                    &quot;Kelompok Peru Jaya! Jaya! Jaya!&quot;
                                </span>
                            </div>
                        </div>
                        <div className="w-fit gap-4 items-center flex"></div>
                    </div>
                    <div className="relative w-full flex overflow-hidden h-[27rem] z-0">
                        {/* Layer */}
                        <motion.div
                            initial={{ x: 0 }}
                            whileInView={{
                                x: '100%',
                                transition: {
                                    duration: 1,
                                    ease: [0.19, 0, 0.6, 1],
                                    delay: 0.2,
                                },
                            }}
                            viewport={{
                                amount: 'some',
                                once: true,
                            }}
                            className="w-full bg-white h-full absolute top-0 right-0 z-10"
                        />
                        {/* End Layer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    ease: 'easeOut',
                                    duration: 1,
                                },
                            }}
                            viewport={{
                                amount: 'some',
                                once: true,
                            }}
                            className="w-full h-full"
                        >
                            <Image
                                alt="Machu Picchu"
                                src={'/img/background/bg1.jpg'}
                                width={2500}
                                height={1500}
                                className="w-full h-fit"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
