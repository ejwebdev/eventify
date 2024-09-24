import aboutImg from "../../assets/about-img.webp";
import "./about.css";

const aboutRight = [
    {
        icon: "group",
        title: "Friendly Team",
        desc: "A highly supportive team ensuring event success.",
    },
    {
        icon: "acute",
        title: "Smooth Integration",
        desc: "A dedicated team ensuring seamless event execution.",
    },
];

function About() {
    return (
        <section className="about" id="aboutus">
            <div className="about-cntnr">
                <img
                    src={aboutImg}
                    alt="Eventify About Image"
                    draggable="false"
                />
                <div className="about-right">
                    <h4>ABOUT US</h4>
                    <h2>Turn Your Event Concept Into Reality</h2>
                    <p>
                        Welcome to our state-of-the-art eventify, where
                        technology and unparalleled expertise converge to
                        simplify your event planning. Trust us to manage the
                        logistics, so you can focus on crafting unforgettable
                        experiences.
                    </p>
                    <div className="about-right-grid">
                        {aboutRight.map((aboutRight, index) => (
                            <div key={index}>
                                <span className="material-symbols-rounded">
                                    {aboutRight.icon}
                                </span>
                                <div>
                                    <h3>{aboutRight.title}</h3>
                                    <p>{aboutRight.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
