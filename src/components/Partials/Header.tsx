'use client'

// import Navbar from '@/components/Partials/Navbar'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavButton from '@/components/Partials/NavButton'
import Link from 'next/link'
import { navItems } from '@/constants/component'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        onClick={() => setIsOpen(!isOpen)}
                        variants={{
                            initial: {
                                opacity: 0,
                            },
                            enter: {
                                opacity: 1,
                                transition: {
                                    duration: 0.3,
                                },
                            },
                            exit: {
                                opacity: 0,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.3,
                                },
                            },
                        }}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className="fixed w-screen h-screen top-0 left-0 bg-black/50 backdrop-blur-sm z-40"
                    ></motion.div>
                )}
            </AnimatePresence>
            {/* End Overlay */}
            {/* Navbar */}
            {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
            {/* Navbar */}
            {/* Header */}
            <motion.header
                // variants={{
                //     visible: { y: 0 },
                //     hidden: { y: '-100%' },
                // }}
                // animate={hidden ? 'hidden' : 'visible'}
                // transition={{ duration: 0.35, ease: 'easeInOut' }}
                className={`w-full h-fit fixed top-0 left-0 z-30 transition-all duration-200 py-4 px-5 lg:px-14 flex items-center justify-between ${
                    isScrolled
                        ? 'bg-white/80 backdrop-blur shadow-sm'
                        : 'bg-transparent'
                }`}
            >
                {/* Logo and Name */}
                <Link
                    href={'https://fabianazh.vercel.app'}
                    className={`text-sm text-black w-fit h-fit inline-block font-medium lg:font-semibold group`}
                >
                    WeArePeru.
                </Link>
                {/* End Logo and Name */}
                {/* Navbar */}
                <nav className="w-fit hidden lg:flex z-0">
                    <ul className="w-fit flex gap-2 lg:gap-4">
                        {navItems.map(
                            (
                                navitem: { link: string; text: string },
                                index: number
                            ) => (
                                <li key={index}>
                                    <Link
                                        className={`group text-[0.8em] cursor-pointer relative text-black font-medium`}
                                        href={navitem.link}
                                    >
                                        {navitem.text}
                                        <div
                                            className={`absolute w-full h-[2px] ${
                                                pathname === navitem.link
                                                    ? 'scale-x-100'
                                                    : 'scale-x-0'
                                            } bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left`}
                                        />
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
                {/* End Navbar */}

                {/* Nav Button */}
                {/* <NavButton isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                {/* End Nav Button */}
            </motion.header>
            {/* End Header */}
        </>
    )
}
