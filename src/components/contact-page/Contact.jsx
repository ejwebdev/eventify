import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const contactRight = [
    {
        icon: "perm_phone_msg",
        title: "Our Contact",
        desc: "+63977-434-5155",
        link: "tel:09774345155",
    },
    {
        icon: "stacked_email",
        title: "Email Address",
        desc: "ejwebdev25@gmail.com",
        link: "mailto:ejwebdev25@gmail.com",
    },
];

function Contact() {
    const [notification, setNotification] = useState({ message: "", type: "" });

    const showNotification = (message, type) => {
        setNotification({ message, type });

        setTimeout(() => {
            setNotification({ message: "", type: "" });
        }, 3000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_erca4ir",
                "template_6ll5m4f",
                e.target,
                "qHFSCAfpT8h7mF4gf"
            )
            .then(
                (response) => {
                    console.log("Success:", response);
                    showNotification("Message Sent!", "success");
                    e.target.reset();
                },
                (error) => {
                    console.error("Error:", error);
                    showNotification("Failed to Send.", "error");
                }
            );
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-cntnr">
                <div className="contact-left">
                    <form id="contact-form" onSubmit={sendEmail}>
                        <div className="contact-upper">
                            <div>
                                <label htmlFor="name">
                                    Name<span>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    autoComplete="off"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    Email<span>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                        </div>
                        <div className="contact-bottom">
                            <label htmlFor="message">
                                Message<span>*</span>
                            </label>
                            <textarea
                                id="message"
                                autoComplete="off"
                                name="message"
                                placeholder="Write Your Message Here"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                        <p>
                            <strong>Note:</strong> Please check your email
                            address after sending your message.
                        </p>
                    </form>
                    {notification.message && (
                        <div className={`notification ${notification.type}`}>
                            {notification.message}
                        </div>
                    )}
                </div>
                <div className="contact-right">
                    <h4>CONTACT US</h4>
                    <h2>Get in Touch with Us for Assistance</h2>
                    <p>
                        Reach out to Eventify for all your event planning needs.
                        Fill out our contact form, and our dedicated team will
                        assist you in creating your perfect event seamlessly.
                    </p>
                    <div className="contact-right-grid">
                        {contactRight.map((contactRight, index) => (
                            <div key={index}>
                                <span className="material-symbols-rounded">
                                    {contactRight.icon}
                                </span>
                                <div>
                                    <h3>{contactRight.title}</h3>
                                    <a href={contactRight.link}>
                                        {contactRight.desc}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
