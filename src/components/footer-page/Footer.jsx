import facebook from "../../assets/facebook.svg";
import tiktok from "../../assets/tiktok.svg";
import messenger from "../../assets/messenger.svg";
import instagram from "../../assets/instagram.svg";
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
                <div>
                    <h3 onClick={refreshPage}>Eventify.</h3>
                </div>
                <div>
                    <img
                        src={facebook}
                        alt="Eventify Facebook"
                        draggable="false"
                        onClick={facebookLink}
                    />
                    <img
                        src={tiktok}
                        alt="Eventify Tiktok"
                        draggable="false"
                        onClick={tiktokLink}
                    />
                    <img
                        src={messenger}
                        alt="Eventify Messenger"
                        draggable="false"
                        onClick={messengerLink}
                    />
                    <img
                        src={instagram}
                        alt="Eventify Instagram"
                        draggable="false"
                        onClick={instagramLink}
                    />
                </div>
                <div>
                    <p>&copy; 2024 Enrico Jay</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
