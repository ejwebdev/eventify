import { Link } from "react-router-dom";
import { useState } from "react";
import img1 from "../../assets/gallery-1.webp";
import img2 from "../../assets/gallery-2.webp";
import img3 from "../../assets/gallery-3.webp";
import img4 from "../../assets/gallery-4.webp";
import img5 from "../../assets/gallery-5.webp";
import "./gallery.css";

const gallery = [
    { img: img1, class: "md:col-span-2 md:row-span-2", link: "details" },
    { img: img2, link: "details" },
    { img: img3, link: "details" },
    { img: img4, link: "details" },
    { img: img5, link: "details" },
];

function Gallery() {
    const [messageVisible, setMessageVisible] = useState(false);
    const handleLoadMore = () => {
        setMessageVisible(true);
        setTimeout(() => {
            setMessageVisible(false);
        }, 3000);
    };

    return (
        <section className="gallery" id="gallery">
            <div className="gallery-cntnr">
                <h4>GALLERY</h4>
                <h2>Some of Our Past Events</h2>
                <p>
                    Explore curated past events showcasing memorable experiences
                    and client visions brought to life. See our commitment to
                    flawless execution.
                </p>
                <div className="gallery-grid">
                    {gallery.map((gallery, index) => (
                        <div key={index} className={gallery.class}>
                            <img
                                src={gallery.img}
                                draggable="false"
                                alt="Eventify Gallery"
                            />
                            <Link
                                to={gallery.link}
                                className="gallery-grid-link"
                            >
                                <button>View Details</button>
                            </Link>
                        </div>
                    ))}
                </div>
                <button onClick={handleLoadMore}>Load More</button>
                {messageVisible && <p>No more photos to load.</p>}
            </div>
        </section>
    );
}

export default Gallery;
