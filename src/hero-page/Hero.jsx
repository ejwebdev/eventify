import "./hero.css";

function Hero() {
    const bookMeeting = () => {
        window.open("https://calendly.com/ejwebdev25", "_blank");
    };

    return (
        <section className="home" id="home">
            <div className="home-cntnr">
                <h4>EVENTIFY</h4>
                <h1>Event Planner</h1>
                <p>
                    Easily plan, organize, and execute unforgettable events with
                    our expert organization and solutions.
                </p>
                <button onClick={bookMeeting}>Book Now</button>
            </div>
        </section>
    );
}

export default Hero;
