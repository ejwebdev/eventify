import Hero from "../components/hero-page/Hero.jsx";
import About from "../components/about-page/About.jsx";
import Services from "../components/services-page/Services.jsx";
import Gallery from "../components/gallery-page/Gallery.jsx";
import Testimonial from "../components/testimonial-page/Testimonial.jsx";
import Break from "../components/break-page/Break.jsx";
import Pricing from "../components/pricing-page/Pricing.jsx";

function DefaultPage() {
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

export default DefaultPage;
