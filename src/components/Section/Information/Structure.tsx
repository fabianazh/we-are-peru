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
                <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-6">
                    {members.map((member: Member, index: number) => (
                        <div
                            key={index}
                            onClick={() =>
                                setModal({ isOpen: true, data: member })
                            }
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
            </section>

            {/* Modal */}
            <AnimatePresence>
                {modal.isOpen === true && (
                    <motion.div className="w-screen h-screen fixed top-0 left-0 bg-transparent z-[60]">
                        {/* Modal Container */}
                        <div className="w-full h-full relative flex justify-center items-center z-0">
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
                                className="relative w-auto max-w-[90vw] lg:min-w-72 min-h-40 lg:min-h-56 bg-white z-10 shadow-sm rounded-2xl h-auto p-6 pr-14 lg:pr-16 lg:p-8 pt-5 lg:pt-7 flex flex-row-reverse gap-6"
                            >
                                {/* Close Button */}
                                <div
                                    onClick={() =>
                                        setModal({
                                            isOpen: false,
                                            data: null,
                                        })
                                    }
                                    className="absolute top-5 right-6 w-fit h-fit z-0 cursor-pointer translate-y-1 translate-x-1 text-stone-500"
                                >
                                    <FiX className="text-xl lg:text-xl" />
                                </div>
                                {/* End Close Button */}
                                {/* Content */}
                                <div className="w-fit flex flex-col shrink-0 gap-3 py-2 shrink-0">
                                    {/* Title */}
                                    <h4
                                        className={`text-xl lg:text-2xl font-semibold break-words`}
                                    >
                                        {modal?.data?.name}
                                    </h4>
                                    {/* End Title */}
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
