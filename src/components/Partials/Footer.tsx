'use client'

import Link from 'next/link'
import { navItems } from '@/constants/component'
import { motion } from 'framer-motion'
import AppIcon from '@/components/Icon/AppIcon'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer
                id="footer"
                className={`flex flex-col relative px-5 gap-1 lg:px-16 py-4 lg:py-6`}
            >
                <nav className="w-full flex flex-col lg:flex-row justify-between lg:items-center lg:gap-4">
                    <AppIcon />
                    <ul className="w-fit flex gap-2 lg:gap-4">
                        {navItems.map(
                            (
                                navItem: { link: string; text: string },
                                index: number
                            ) => (
                                <motion.li
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                            delay: 0.1 + index * 0.15,
                                        },
                                    }}
                                    viewport={{
                                        amount: 'some',
                                        once: true,
                                    }}
                                >
                                    <Link
                                        className={`group text-[0.8em] pb-[0.5px] cursor-pointer relative text-black font-medium`}
                                        href={`${navItem.link}`}
                                    >
                                        {navItem.text}
                                        <div
                                            className={`absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left`}
                                        />
                                    </Link>
                                </motion.li>
                            )
                        )}
                    </ul>
                </nav>
                <div className={`flex items-center justify-between gap-6`}>
                    <span className="font-medium lg:font-semibold text-xs text-stone-600">
                        ©{currentYear} Created and Designed by{' '}
                        <Link href={`https://fabianazh.vercel.app`}>
                            Fabianazh
                        </Link>
                        .
                    </span>
                </div>
            </footer>
        </>
    )
}
