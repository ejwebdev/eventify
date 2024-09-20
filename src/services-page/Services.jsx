import "./services.css";

const services = [
    {
        icon: "cake",
        title: "Birthday Party",
        desc: "Celebrate your special day with a memorable and fun-filled birthday party expertly organized to ensure every detail is perfect.",
        link: "",
    },
    {
        icon: "local_bar",
        title: "Anniversaries",
        desc: "Celebrate your special milestones with our exceptional anniversary event planning services.",
        link: "",
    },
    {
        icon: "heart_check",
        title: "Wedding",
        desc: "Create unforgettable memories with our comprehensive wedding event planning services.",
        link: "",
    },
    {
        icon: "meeting_room",
        title: "Formal Event",
        desc: "Our formal event planning services ensure a sophisticated and seamless experience for your special occasions.",
        link: "",
    },
    {
        icon: "celebration",
        title: "Private Party",
        desc: "We offer exclusive private party planning to create memorable and intimate celebrations tailored to your desires.",
        link: "",
    },
    {
        icon: "comedy_mask",
        title: "Masquerade Party",
        desc: "We specialize in organizing captivating masquerade parties, blending mystery and elegance for an enchanting event experience.",
        link: "",
    },
];

function Services() {
    const servicesLink = (url) => {
        window.location.href = url;
    };

    return (
        <section className="services" id="services">
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
                            <div onClick={() => servicesLink(services.link)}>
                                <span className="material-symbols-rounded">
                                    arrow_outward
                                </span>
                                <p>Read More</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
