import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Partials/Footer'
import { dmSans } from './fonts'
import Header from '@/components/Partials/Header'
import SmoothScroll from '@/components/Other/SmoothScroll'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    keywords: [
        'This Is Peru',
        'We Are Peru',
        'This Peru 45',
        'Peru 45',
        'Kelompok Peru',
        'Kelompok Peru 45',
        'Kelompok 45',
        'Satu Hati, Satu Tekad, Satu Peru',
        'Peru',
        'thisisperu',
        'weareperu',
        'weareperu45',
        'peru45',
        'peru 45',
        'kelompok45',
        'thisisperupride',
        'peru pride',
        'peru pride 45',
        'peru nusa putra',
        'peru mabim 2024',
        'kelompok mabim 2024',
        'kelompok peru mabim 2024',
        'Mabim Nusa Putra 2024',
        'Mabim Nusa Putra University 2024',
        'Mabim Universitas Nusa Putra 2024',
    ],
    title: {
        default: 'This Is Peru',
        template: '%s | This Is Peru',
    },
    description:
        'Kelompok Peru adalah kelompok mahasiswa yang penuh semangat dan tekad untuk meraih kesuksesan bersama. Sebagai bagian dari MABIM (Masa Bimbingan) Universitas Nusa Putra, kelompok kami terbentuk dari berbagai latar belakang dan keahlian, namun disatukan oleh tujuan yang sama: belajar, berkolaborasi, dan saling mendukung dalam perjalanan akademik dan kehidupan kampus.',
    openGraph: {
        title: 'This Is Peru',
        description:
            'Kelompok Peru adalah kelompok mahasiswa yang penuh semangat dan tekad untuk meraih kesuksesan bersama. Sebagai bagian dari MABIM (Masa Bimbingan) Universitas Nusa Putra, kelompok kami terbentuk dari berbagai latar belakang dan keahlian, namun disatukan oleh tujuan yang sama: belajar, berkolaborasi, dan saling mendukung dalam perjalanan akademik dan kehidupan kampus.',
        url: process.env.NEXT_PUBLIC_BASE_URL,
        siteName: 'This Is Peru',
        locale: 'id_ID',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={dmSans.className}>
                <Analytics />
                <SpeedInsights />
                <Analytics />
                <SmoothScroll />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
