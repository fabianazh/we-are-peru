import { montserrat } from '@/app/fonts'
import Link from 'next/link'

export default function AppIcon() {
    return (
        <>
            <Link
                href={`https://we-are-peru.vercel.app`}
                className={`text-black font-extrabold w-fit flex ${montserrat.className}`}
            >
                per<span className="text-[#fc0b1e]">u</span>.
            </Link>
        </>
    )
}
