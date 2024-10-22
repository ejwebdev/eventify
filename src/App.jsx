import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header-page/Header.jsx";
import Default from "./pages/Default.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Details from "./components/details-page/Details.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./components/contact-page/Contact.jsx";
import Banner from "./components/banner-page/Banner.jsx";
import Footer from "./components/footer-page/Footer.jsx";

function App() {
    // Scroll to Top when route change
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Default />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service-details" element={<Details />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Banner />
            <Footer />
        </>
    );
}

export default App;
