import "./details.css";

function Details() {
    const backHome = () => {
        window.location.href = "/";
    };

    return (
        <section className="details">
            <div className="details-cntnr">
                <h1>Soon!</h1>
                <p>This page is under development. Thank you for Visiting!</p>
                <button onClick={backHome}>Back to Home</button>
            </div>
        </section>
    );
}

export default Details;
