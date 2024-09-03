'use client'

// import Navbar from '@/components/Partials/Navbar'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavButton from '@/components/Partials/NavButton'
import AppIcon from '@/components/Icon/AppIcon'
import Navbar from './Navbar'
import NavModal from './NavModal'

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

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
            {/* Navbar Modal */}
            <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* Navbar Modal */}
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
                <AppIcon />
                {/* End Logo and Name */}
                {/* Navbar */}
                <Navbar />
                <NavButton
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    containerClassName="flex lg:hidden"
                />
                {/* End Navbar */}

                {/* Nav Button */}
                {/* <NavButton isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                {/* End Nav Button */}
            </motion.header>
            {/* End Header */}
        </>
    )
}
