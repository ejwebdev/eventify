import facebook from "../../assets/facebook.svg";
import tiktok from "../../assets/tiktok.svg";
import messenger from "../../assets/messenger.svg";
import instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
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
