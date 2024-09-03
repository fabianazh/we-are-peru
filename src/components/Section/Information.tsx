import Link from 'next/link'
import { IoArrowUpOutline } from 'react-icons/io5'

export default function Information() {
    return (
        <>
            <section
                id="information"
                className="w-full flex flex-col px-5 lg:px-14 py-16 gap-4"
            >
                <h2 className="text-2xl font-semibold">Informasi Lainnya</h2>
                <div className="w-full h-fit flex justify-between">
                    <div className="w-full mx-auto shrink-0 grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-2 lg:gap-8">
                        <div className="relative w-full shadow-sm rounded-xl flex flex-col gap-1 p-4 pl-5 overflow-hidden border bg-red-200">
                            <div className="w-0.5 h-full rounded-xl absolute left-0 top-0"></div>
                            <span className="font-semibold">
                                Pengumuman & Rangkuman
                            </span>
                            <span className="text-sm font-medium">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Deserunt ipsum delectus
                                dignissimos qui cum repellendus aliquid beatae
                                incidunt corporis quisquam.
                            </span>
                            <Link
                                href={'/'}
                                className="w-fit flex place-self-end items-center justify-center gap-1 bg-white hover:bg-stone-200 transition-colors duration-300 px-4 shadow-sm rounded-full py-1"
                            >
                                <span className="font-medium text-xs">
                                    Lihat Detail
                                </span>
                                <IoArrowUpOutline className="rotate-45 text-sm" />
                            </Link>
                        </div>
                        <div className="relative w-full shadow-sm rounded-xl flex flex-col gap-1 p-4 pl-5 overflow-hidden border bg-white">
                            <div className="w-0.5 h-full rounded-xl absolute left-0 top-0"></div>
                            <span className="font-semibold">Absensi</span>
                            <span className="text-sm font-medium">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Deserunt ipsum delectus
                                dignissimos qui cum repellendus aliquid beatae
                                incidunt corporis quisquam.
                            </span>
                            <Link
                                href={'/'}
                                className="w-fit flex place-self-end items-center justify-center gap-1 bg-stone-100 hover:bg-stone-200 transition-colors duration-300 px-4 shadow-sm rounded-full py-1"
                            >
                                <span className="font-medium text-xs">
                                    Lihat Detail
                                </span>
                                <IoArrowUpOutline className="rotate-45 text-sm" />
                            </Link>
                        </div>
                        <div className="relative w-full shadow-sm rounded-xl flex flex-col gap-1 p-4 pl-5 overflow-hidden border bg-green-200">
                            <div className="w-0.5 h-full rounded-xl absolute left-0 top-0"></div>
                            <span className="font-semibold">Galeri</span>
                            <span className="text-sm font-medium">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Deserunt ipsum delectus
                                dignissimos qui cum repellendus aliquid beatae
                                incidunt corporis quisquam.
                            </span>
                            <Link
                                href={'/'}
                                className="w-fit flex place-self-end items-center justify-center gap-1 bg-white hover:bg-stone-200 transition-colors duration-300 px-4 shadow-sm rounded-full py-1"
                            >
                                <span className="font-medium text-xs">
                                    Lihat Detail
                                </span>
                                <IoArrowUpOutline className="rotate-45 text-sm" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
