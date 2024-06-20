import Header from "./components/header/headerdesktop";
import Hero from "./components/hero/hero";
import About from "./components/aboutus/about";
import Blogs from "./components/blogs/blogs";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Servicesgiven from "./components/services/services";
import { init } from './index.js'
import { useEffect } from "react";

function App() {

    useEffect(() => {
        init();
    });
    
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Servicesgiven></Servicesgiven>
            <Faq></Faq>
            <About></About>
            <Blogs></Blogs>
            <Footer></Footer>
        </>
    )

}

export default App;