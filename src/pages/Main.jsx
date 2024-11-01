import Hero from "../components/hero-section/Hero.jsx";
import About from "../components/about-section/About.jsx";
import Services from "../components/services-section/Services.jsx";
import Gallery from "../components/gallery-section/Gallery.jsx";
import Testimonial from "../components/testimonial-section/Testimonial.jsx";
import Break from "../components/break-section/Break.jsx";
import Pricing from "../components/pricing-section/Pricing.jsx";

function Main() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Testimonial />
            <Break />
            <Pricing />
        </>
    );
}

export default Main;
