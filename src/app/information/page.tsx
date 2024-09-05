import About from '@/components/Section/Information/About'
import Chant from '@/components/Section/Information/Chant'
import Structure from '@/components/Section/Information/Structure'

export default function InformationPage() {
    return (
        <>
            <div className="w-full flex flex-col gap-8 px-5 lg:px-14 py-24">
                <div className="w-full h-fit flex flex-col lg:flex-row gap-4">
                    <About />
                    <Chant />
                </div>
                <Structure />
            </div>
        </>
    )
}
