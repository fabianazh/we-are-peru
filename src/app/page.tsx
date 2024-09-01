import Header from '@/components/Partials/Header'
import Hero from '@/components/Section/Hero'
import About from '@/components/Section/About'
import Information from '@/components/Section/Information'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Information />
            </main>
        </>
    )
}
