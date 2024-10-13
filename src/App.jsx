import { Routes, Route } from "react-router-dom";
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
    return (
        <>
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
