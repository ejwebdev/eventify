import { useState } from "react";
import img1 from "../../assets/gallery-1.webp";
import img2 from "../../assets/gallery-2.webp";
import img3 from "../../assets/gallery-3.webp";
import img4 from "../../assets/gallery-4.webp";
import img5 from "../../assets/gallery-5.webp";
import "./gallery.css";

const gallery = [
    {
        img: img1,
        class: "md:col-span-2 md:row-span-2",
        link: "https://www.facebook.com/",
    },
    { img: img2, link: "https://www.instagram.com/" },
    { img: img3, link: "https://www.instagram.com/" },
    { img: img4, link: "https://www.instagram.com/" },
    { img: img5, link: "https://www.facebook.com/" },
];

function Gallery() {
    const [messageVisible, setMessageVisible] = useState(false);
    const handleLoadMore = () => {
        setMessageVisible(true);
        setTimeout(() => {
            setMessageVisible(false);
        }, 3000);
    };

    const galleryDetails = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="gallery">
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
                            <div className="gallery-grid-link">
                                <button
                                    onClick={() => galleryDetails(gallery.link)}
                                >
                                    View Post
                                </button>
                            </div>
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
