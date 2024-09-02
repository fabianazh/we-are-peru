import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Partials/Footer'
import { dmSans } from './fonts'
import Header from '@/components/Partials/Header'

export const metadata: Metadata = {
    title: 'We Are Peru',
    description: 'This is group of Peru',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={dmSans.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
