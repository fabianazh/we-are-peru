'use client'

import TextReveal from '@/components/Other/TextReveal'

export default function Chant() {
    return (
        <>
            <section
                id="chant"
                className="w-full flex flex-col px-5 lg:px-14 py-24 gap-4"
            >
                <div className="w-full flex items-end justify-between gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-2xl font-semibold">Yel-Yel</h2>
                        <TextReveal
                            className="font-medium text-stone-600"
                            text="Yel-yel adalah cerminan semangat dan kekompakan Kelompok Peru. Setiap teriakan adalah langkah menuju kemenangan dan kebersamaan yang tak tergoyahkan."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
