import { urbanist } from '@/app/fonts'

export default function Hero() {
    return (
        <>
            <section
                id="home"
                className="w-full min-h-screen flex items-center px-14 justify-between bg-stone-50"
            >
                <div className="w-fit h-fit flex flex-col gap-2">
                    <h1
                        className={`text-[7.5rem] leading-none h-fit text-black font-extrabold ${urbanist.className}`}
                    >
                        We <span className="block">Are</span>
                        <span className="block">Peru</span>
                    </h1>
                    <div className="w-full flex flex-col">
                        <span className="font-medium text-lg">
                            Selamat Datang di website resmi kelompok Peru.
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
