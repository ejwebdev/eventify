import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css";

function Header() {
    // Scroll-based Background Change
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const refreshPage = () => {
        window.location.href = "";
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const location = useLocation();
    const header =
        location.pathname === "/"
            ? isScrolled
                ? "bg-priColor fixed"
                : "bg-transparent fixed"
            : "bg-priColor sticky";

    // Event Listener
    const pageLinks = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <header className={`header ${header}`}>
            <nav className="nav">
                <h3 onClick={refreshPage}>Eventify.</h3>
                <ul className={isMenuOpen ? "left-0" : "-left-[200%]"}>
                    <li>
                        <Link to="/" onClick={pageLinks}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutus" onClick={pageLinks}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown();
                            }}
                        >
                            Services
                            <span className="material-symbols-rounded">
                                keyboard_arrow_down
                            </span>
                        </a>
                        <ul
                            className={`dropdown ${
                                isDropdownOpen ? "open" : "hidden"
                            }`}
                        >
                            <li>
                                <Link to="/services" onClick={pageLinks}>
                                    Offers
                                </Link>
                            </li>
                            <li>
                                <Link to="/service-details" onClick={pageLinks}>
                                    Service Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/gallery" onClick={pageLinks}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={pageLinks}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <span className="material-symbols-rounded" onClick={toggleMenu}>
                    {isMenuOpen ? "close" : "segment"}
                </span>
            </nav>
        </header>
    );
}

export default Header;
