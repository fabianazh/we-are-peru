'use client'

import TextReveal from '@/components/Other/TextReveal'

export default function Structure() {
    return (
        <>
            <section
                id="structure"
                className="w-full flex flex-col px-14 py-24 gap-4"
            >
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-2xl font-semibold">
                            Struktur Kelompok
                        </h2>
                        <TextReveal
                            className="font-medium"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique ea voluptate possimus, explicabo nesciunt vitae fugiat nisi ex iure ipsa rem debitis obcaecati. Minus quidem suscipit dignissimos, ad, necessitatibus molestiae soluta inventore quibusdam blanditiis dicta laborum, explicabo atque vero autem architecto recusandae repellendus excepturi tempore. Culpa ullam eius suscipit!"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
