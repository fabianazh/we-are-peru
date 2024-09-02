import Link from 'next/link'
import { IoArrowUpOutline } from 'react-icons/io5'

export default function PrimaryButton({
    as = 'link',
    href,
    children,
    className,
}: {
    as?: 'link' | 'button'
    href?: string
    children: React.ReactNode
    className?: string
}) {
    return (
        <>
            <Link
                href={`${href}`}
                className={`w-fit flex items-center justify-center gap-1 font-medium text-xs bg-stone-200/50 hover:bg-stone-400/50 transition-colors duration-300 px-4 shadow-sm rounded-full py-1 ${className}`}
            >
                {children}
                <IoArrowUpOutline className="rotate-45 text-sm" />
            </Link>
        </>
    )
}
