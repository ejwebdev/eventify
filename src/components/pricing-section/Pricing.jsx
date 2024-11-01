import { useNavigate } from "react-router-dom";
import "./pricing.css";

const pricing = [
    {
        title: "Formal Events",
        price: "14,990",
        perks: [
            "Full Services",
            "Decorations",
            "Music & Photos",
            "Catering",
            "Entertainment",
        ],
    },
    {
        title: "Parties",
        price: "4,590",
        perks: [
            "Full Services",
            "Decorations",
            "Music & Photos",
            "Catering",
            "Entertainment",
        ],
    },
    {
        title: "Wedding",
        price: "21,990",
        perks: [
            "Full Services",
            "Decorations",
            "Music & Photos",
            "Catering",
            "Entertainment",
        ],
    },
    {
        title: "Festivals",
        price: "9,590",
        perks: [
            "Full Services",
            "Decorations",
            "Music & Photos",
            "Catering",
            "Entertainment",
        ],
    },
];

function Pricing() {
    const navigate = useNavigate();
    const contactClick = () => {
        navigate("/contact");
    };

    return (
        <section className="pricing">
            <div className="pricing-cntnr">
                <h4>PRICING</h4>
                <h2>Select Your Event Package</h2>
                <p>
                    Choose from our best event packages at Eventify. We offer
                    uniquely tailored plans to fit your budget and make your
                    event truly unforgettable and special.
                </p>
                <div className="pricing-grid">
                    {pricing.map((pricing, index) => (
                        <div key={index}>
                            <h3>{pricing.title}</h3>
                            <p>Starts From</p>
                            <h2>
                                <span>₱</span>
                                {pricing.price}
                            </h2>
                            <div className="pricing-grid-perks">
                                {pricing.perks.map((perks, perksIndex) => (
                                    <div key={perksIndex}>
                                        <span className="material-symbols-rounded">
                                            arrow_outward
                                        </span>
                                        <p>{perks}</p>
                                    </div>
                                ))}
                            </div>
                            <button onClick={contactClick}>Get Started</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
