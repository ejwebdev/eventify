import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const location = useLocation();
    const bgColor =
        location.pathname === "/"
            ? isScrolled
                ? "bg-priColor"
                : "bg-transparent"
            : "bg-priColor";

    const navigate = useNavigate();

    // Event Listener
    const links = (id, event) => {
        event.preventDefault();
        setIsMenuOpen(false);
        setIsDropdownOpen(false);

        if (window.location.pathname === "/") {
            smoothScroll(id);
        } else {
            navigate("/", { replace: true });
            setTimeout(() => smoothScroll(id), 0);
        }
    };

    const pageClick = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <header className={`header ${bgColor}`}>
            <nav className="nav">
                <h3 onClick={refreshPage}>Eventify.</h3>
                <ul className={isMenuOpen ? "left-0" : "-left-[200%]"}>
                    <li>
                        <a href="#home" onClick={(e) => links("home", e)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#aboutus" onClick={(e) => links("aboutus", e)}>
                            About Us
                        </a>
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
                                <a
                                    href="#products"
                                    onClick={(e) => links("services", e)}
                                >
                                    Offers
                                </a>
                            </li>
                            <li>
                                <Link to="service-details" onClick={pageClick}>
                                    Service Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#gallery" onClick={(e) => links("gallery", e)}>
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => links("contact", e)}>
                            Contact
                        </a>
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
