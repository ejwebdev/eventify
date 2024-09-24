import { Link } from "react-router-dom";
import "./details.css";

function Details() {
    return (
        <section className="details">
            <div className="details-cntnr">
                <h1>Soon!</h1>
                <p>This page is under development. Thank you for Visiting!</p>
                <Link to="/" className="details-link">
                    <button>Back to Home</button>
                </Link>
            </div>
        </section>
    );
}

export default Details;
