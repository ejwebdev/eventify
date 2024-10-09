import Hero from "../components/hero-page/Hero.jsx";
import About from "../components/about-page/About.jsx";
import Services from "../components/services-page/Services.jsx";
import Gallery from "../components/gallery-page/Gallery.jsx";
import Pricing from "../components/pricing-page/Pricing.jsx";

function Default() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Pricing />
        </>
    );
}

export default Default;
