import { Link } from "react-router-dom";
import "./services.css";

const services = [
    {
        icon: "cake",
        title: "Birthday Party",
        desc: "Celebrate your special day with a memorable and fun-filled birthday party expertly organized to ensure every detail is perfect.",
        link: "/service-details",
    },
    {
        icon: "local_bar",
        title: "Anniversaries",
        desc: "Celebrate your special milestones with our exceptional anniversary event planning services.",
        link: "/service-details",
    },
    {
        icon: "heart_check",
        title: "Wedding",
        desc: "Create unforgettable memories with our comprehensive wedding event planning services.",
        link: "/service-details",
    },
    {
        icon: "meeting_room",
        title: "Formal Event",
        desc: "Our formal event planning services ensure a sophisticated and seamless experience for your special occasions.",
        link: "/service-details",
    },
    {
        icon: "celebration",
        title: "Private Party",
        desc: "We offer exclusive private party planning to create memorable and intimate celebrations tailored to your desires.",
        link: "/service-details",
    },
    {
        icon: "comedy_mask",
        title: "Masquerade Party",
        desc: "We specialize in organizing captivating masquerade parties, blending mystery and elegance for an enchanting event experience.",
        link: "/service-details",
    },
];

function Services() {
    return (
        <section className="services">
            <div className="services-cntnr">
                <h4>SERVICES</h4>
                <h2>Event Service We Offer</h2>
                <p>
                    We create unforgettable events with detailed planning,
                    seamless ticketing, and efficient management. We bring your
                    vision to life. Enjoy a flawless event while we handle the
                    logistics.
                </p>
                <div className="services-grid">
                    {services.map((services, index) => (
                        <div key={index}>
                            <span className="material-symbols-rounded">
                                {services.icon}
                            </span>
                            <h3>{services.title}</h3>
                            <p>{services.desc}</p>
                            <Link
                                to={services.link}
                                className="services-grid-link"
                            >
                                <span className="material-symbols-rounded">
                                    arrow_outward
                                </span>
                                <p>Read More</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
