import facebook from "../../assets/facebook.svg";
import tiktok from "../../assets/tiktok.svg";
import messenger from "../../assets/messenger.svg";
import instagram from "../../assets/instagram.svg";
import "./footer.css";

function Footer() {
    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Event Listener
    const links = (id, event) => {
        event.preventDefault();
        smoothScroll(id);
    };

    const refreshPage = () => {
        window.location.href = "";
    };
    const facebookLink = () => {
        window.open("https://www.facebook.com/", "_blank");
    };
    const tiktokLink = () => {
        window.open("https://www.tiktok.com/", "_blank");
    };
    const messengerLink = () => {
        window.open("https://www.messenger.com/", "_blank");
    };
    const instagramLink = () => {
        window.open("https://www.instagram.com/", "_blank");
    };

    return (
        <section className="footer">
            <div className="footer-cntnr">
                <div className="footer-top">
                    <h3 onClick={refreshPage}>Eventify.</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="#home" onClick={(e) => links("home", e)}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#aboutus"
                                onClick={(e) => links("aboutus", e)}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                onClick={(e) => links("services", e)}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#gallery"
                                onClick={(e) => links("gallery", e)}
                            >
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={(e) => links("contact", e)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p>&copy; 2024 Enrico Jay Sison</p>
                    <div className="footer-socials">
                        <img
                            src={facebook}
                            alt="Eventify Facebook"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={facebookLink}
                        />
                        <img
                            src={tiktok}
                            alt="Eventify Tiktok"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={tiktokLink}
                        />
                        <img
                            src={messenger}
                            alt="Eventify Messenger"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={messengerLink}
                        />
                        <img
                            src={instagram}
                            alt="Eventify Instagram"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={instagramLink}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
