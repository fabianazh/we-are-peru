import { montserrat } from '@/app/fonts'
import Link from 'next/link'

export default function AppIcon({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
    return (
        <>
            <Link
                href={`https://we-are-peru.vercel.app`}
                className={`text-black font-extrabold w-fit flex ${
                    size === 'sm' ? 'text-base' : 'text-xl'
                } ${montserrat.className}`}
            >
                per<span className="text-[#fc0b1e]">u</span>.
            </Link>
        </>
    )
}
