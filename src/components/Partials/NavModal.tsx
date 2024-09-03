'use client'

import Link from 'next/link'
import { navItems } from '@/constants/component'
import { AnimatePresence, motion } from 'framer-motion'
import { perspectiveItemVariant } from '@/constants/variant'
import AppIcon from '@/components/Icon/AppIcon'

export default function NavModal({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen: (isopen: boolean) => void
}) {
    return (
        <>
            {/* Nav Container */}
            <motion.div
                variants={{
                    open: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            y: { duration: 0.3, ease: 'easeOut' },
                            opacity: { duration: 0.4 },
                        },
                    },
                    closed: {
                        opacity: 0,
                        y: '60px',
                        transition: {
                            y: { duration: 0.2, ease: 'easeOut' },
                            opacity: { duration: 0.4 },
                        },
                    },
                }}
                animate={isOpen ? 'open' : 'closed'}
                initial="closed"
                className={`fixed bottom-0 lg:bottom-auto flex justify-center lg:top-5 lg:right-5 z-50 h-fit w-full lg:w-auto px-4 lg:px-0`}
            >
                <AnimatePresence>
                    {isOpen && (
                        <div className="pl-8 pr-8 lg:pl-10 lg:pr-10 flex flex-col gap-12 lg:gap-16 bg-white rounded-b-none lg:rounded-b-xl rounded-xl pt-6 lg:pt-10 pb-9 lg:pb-16 w-full lg:w-80">
                            <motion.div
                                variants={perspectiveItemVariant}
                                custom={0}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                className="w-full flex justify-between relative lg:static h-fit items-center lg:items-start"
                            >
                                <AppIcon size="lg" />
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="outline-none grid place-items-center bg-transparent cursor-pointer w-fit h-fit relative top-0 right-0 border-none z-[100]"
                                >
                                    <svg
                                        width="23"
                                        height="23"
                                        viewBox="0 0 23 23"
                                        className="w-4 h-4 lg:w-4 lg:h-4"
                                    >
                                        <path
                                            fill="transparent"
                                            strokeWidth="3"
                                            stroke="hsl(0, 0%, 18%)"
                                            strokeLinecap="round"
                                            d="M 3 3 L 20 20"
                                        />
                                        <path
                                            fill="transparent"
                                            strokeWidth="3"
                                            stroke="hsl(0, 0%, 18%)"
                                            strokeLinecap="round"
                                            d="M 3 20 L 20 3"
                                        />
                                    </svg>
                                </button>
                            </motion.div>
                            {/* Nav Item */}
                            <nav className="border-box flex flex-col gap-4">
                                <motion.span
                                    variants={perspectiveItemVariant}
                                    custom={1}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className={`text-xl lg:text-xl font-black`}
                                >
                                    We Are Peru!
                                </motion.span>
                                <ul className={`flex flex-col gap-2 lg:gap-2`}>
                                    {navItems.map(
                                        (
                                            item: {
                                                link: string
                                                text: string
                                            },
                                            index: number
                                        ) => (
                                            <motion.li
                                                key={index}
                                                variants={
                                                    perspectiveItemVariant
                                                }
                                                custom={index}
                                                animate="enter"
                                                exit="exit"
                                                initial="initial"
                                                className="relative w-fit inline-block h-fit group"
                                            >
                                                <Link
                                                    onClick={() =>
                                                        setIsOpen(!isOpen)
                                                    }
                                                    className={`text-base lg:text-base cursor-pointer relative pb-[1px] text-black font-medium`}
                                                    href={item.link}
                                                >
                                                    {item.text}
                                                    <div className="absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left" />
                                                </Link>
                                            </motion.li>
                                        )
                                    )}
                                </ul>
                            </nav>
                            {/* End Nav Item */}
                            {/* Bottom Menu */}
                            <div className="flex w-full flex-col gap-5">
                                <motion.span
                                    variants={perspectiveItemVariant}
                                    custom={1}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className="text-sm lg:text-sm font-medium text-stone-700"
                                >
                                    &copy; {new Date().getFullYear()} Fabian
                                    Azhar.{' '}
                                    <span className="block lg:block">
                                        All rights reserved.
                                    </span>
                                </motion.span>
                            </div>
                            {/* End Bottom Menu */}
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
            {/* End Nav Container */}
        </>
    )
}
