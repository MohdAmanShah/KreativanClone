import About from './Components/aboutus/about'
import Faq from './Components/faq/faq'
import Hero from './Components/hero/hero'
import Services from './Components/services/services'
import Blog from './Components/blogs/blogs'

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Faq />
            <About />
            <Blog />
        </>
    );
}