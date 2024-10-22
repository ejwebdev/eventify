import { useNavigate } from "react-router-dom";
import "./banner.css";

function Banner() {
    const navigate = useNavigate();
    const orderNowClick = () => {
        navigate("/contact");
    };

    return (
        <section className="banner">
            <div className="banner-cntnr">
                <h2>Let&apos;s Discuss Your Event Idea With Us</h2>
                <p>
                    Reach out to our team to discuss your event ideas today.
                    We&apos;re excited to help you create unforgettable
                    experiences that are tailored to your unique vision and
                    preferences.
                </p>
                <button onClick={orderNowClick}>Contact Us</button>
            </div>
        </section>
    );
}

export default Banner;
