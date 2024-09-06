'use client'

import TextReveal from '@/components/Other/TextReveal'
import { members } from '@/constants/model'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { disableScroll, enableScroll } from '@/utils/controllScroll'
import { AnimatePresence, motion } from 'framer-motion'
import { perspectiveItemVariant, overlayVariant } from '@/constants/variant'
import PrimaryButton from '@/components/Button/PrimaryButton'
import { FiX } from 'react-icons/fi'
import { alexBrush } from '@/app/fonts'

export default function Structure() {
    const [modal, setModal] = useState<{
        isOpen: boolean
        data: Member | null
    }>({ isOpen: false, data: null })

    useEffect(() => {
        modal.isOpen === true ? disableScroll() : enableScroll()
    }, [modal])

    return (
        <>
            <section
                id="structure"
                className="w-full flex flex-col gap-3 lg:gap-6"
            >
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            Struktur Kelompok
                        </h2>
                        <TextReveal
                            className="text-sm lg:text-base font-medium"
                            text="Susunan peran yang membentuk kekuatan kami."
                        />
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-3 lg:gap-4">
                    {members.map((member: Member, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                    ease: 'easeOut',
                                    delay: index * 0.09,
                                },
                            }}
                            viewport={{
                                amount: 'some',
                                once: true,
                            }}
                            onClick={() =>
                                setModal({ isOpen: true, data: member })
                            }
                            className="w-full h-auto flex flex-grow"
                        >
                            <div className="w-full h-auto shadow-sm border rounded-xl flex flex-grow flex-col gap-2.5 p-4 bg-white cursor-pointer hover:bg-stone-100 transition-all duration-[400ms] hover:shadow">
                                <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                                    <Image
                                        src={`${member.src}`}
                                        alt={`${member.name}`}
                                        width={200}
                                        height={200}
                                        className="h-fit w-full absolute"
                                    ></Image>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="px-3 w-fit rounded-3xl bg-stone-300/70 block lg:inline-block text-xs mt-1 text-black font-semibold">
                                        {member.role}
                                    </span>
                                    <div className="w-full flex flex-col gap-1 lg:gap-0">
                                        <span className="text-sm lg:text-base font-semibold break-words">
                                            {member.name}
                                        </span>
                                        <span className="block lg:inline-block text-xs lg:text-sm text-stone-700 font-semibold lg:mb-0.5">
                                            {member.major}
                                        </span>
                                        <span className="block lg:inline-block text-xs lg:text-sm text-stone-500 font-semibold">
                                            @{member.instagram}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {modal.isOpen === true && (
                    <motion.div className="w-screen h-screen fixed top-0 left-0 bg-transparent z-[60]">
                        {/* Modal Container */}
                        <div className="w-full h-full relative flex justify-center items-center z-0">
                            {/* Close Button */}
                            <motion.div
                                onClick={() =>
                                    setModal({
                                        isOpen: false,
                                        data: null,
                                    })
                                }
                                variants={{
                                    initial: {
                                        opacity: 0,
                                        scale: 0.95,
                                    },
                                    enter: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            delay: 0.3,
                                            duration: 0.2,
                                        },
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.95,
                                        transition: {
                                            duration: 0.2,
                                        },
                                    },
                                }}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                className="absolute hidden lg:flex top-8 right-8 w-fit h-fit z-0 cursor-pointer text-stone-600 z-10"
                            >
                                <FiX className="text-2xl lg:text-3xl" />
                            </motion.div>
                            {/* End Close Button */}
                            {/* Overlay */}
                            <motion.div
                                onClick={() =>
                                    setModal({
                                        isOpen: false,
                                        data: null,
                                    })
                                }
                                variants={overlayVariant}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                className="absolute w-full h-full bg-transparent backdrop-blur z-0"
                            ></motion.div>
                            {/* End Overlay */}
                            {/* Modal */}
                            <motion.div
                                variants={{
                                    initial: {
                                        opacity: 0,
                                        scale: 0.95,
                                    },
                                    enter: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            delay: 0.3,
                                            duration: 0.2,
                                        },
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.95,
                                        transition: {
                                            duration: 0.2,
                                        },
                                    },
                                }}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                className="relative w-96 max-w-[85vw] border min-h-40 lg:min-h-56 bg-white z-10 shadow-sm h-auto p-4 lg:p-5 flex"
                            >
                                {/* Close Button */}
                                <div
                                    onClick={() =>
                                        setModal({
                                            isOpen: false,
                                            data: null,
                                        })
                                    }
                                    className="flex lg:hidden absolute -top-8 -right-8 lg:-top-10 lg:-right-10 w-fit h-fit z-0 cursor-pointer text-stone-600"
                                >
                                    <FiX className="text-2xl lg:text-3xl" />
                                </div>
                                {/* End Close Button */}
                                {/* Content */}
                                <div className="w-full flex flex-col items-center shrink-0 gap-3 py-2">
                                    {/* Image */}
                                    <div className="w-full aspect-square overflow-hidden relative">
                                        <Image
                                            src={`${modal?.data?.src}`}
                                            alt={`${modal?.data?.name}`}
                                            width={200}
                                            height={200}
                                            className="h-fit w-full absolute"
                                        ></Image>
                                    </div>
                                    {/* End Image */}
                                    <span
                                        className={`my-1 block text-2xl lg:text-3xl font-bold ${alexBrush.className}`}
                                    >
                                        {modal?.data?.nickname}
                                    </span>
                                </div>
                                {/* End Content */}
                            </motion.div>
                            {/* End Modal */}
                        </div>
                        {/* End Modal Container */}
                    </motion.div>
                )}
            </AnimatePresence>
            {/* End Modal */}
        </>
    )
}
;``
