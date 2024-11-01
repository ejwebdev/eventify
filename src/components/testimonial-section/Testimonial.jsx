import profile1 from "../../assets/profile-1.webp";
import profile2 from "../../assets/profile-2.webp";
import profile3 from "../../assets/profile-3.webp";
import profile4 from "../../assets/profile-4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonial.css";

const testimonial = [
    {
        profile: profile1,
        name: "Enrico Jay Sison",
        loc: "Floridablanca",
        desc: "Eventify has transformed our event, boosting efficiency and delivering flawless experiences for clients every time.",
    },
    {
        profile: profile2,
        name: "Emily Cooper",
        loc: "Tarlac City",
        desc: "They simplified our workflow, helping us to deliver unforgettable events.",
    },
    {
        profile: profile3,
        name: "Julie Anne Santos",
        loc: "Balanga, Bataan",
        desc: "Makes event execution seamless and hassle free, resulting in memorable experiences for our guests.",
    },
    {
        profile: profile4,
        name: "Christian Zantua",
        loc: "San Jose Del Monte",
        desc: "They made event planning effortless and enhance coordination to ensure our event runs smoothly and successfully.",
    },
];

function Testimonial() {
    return (
        <section className="testimonial">
            <div className="testimonial-cntnr">
                <h4>TESTIMONIAL</h4>
                <h2>Feedback From Our Clients</h2>
                <p>
                    Discover their experiences and feedback, showcasing our
                    commitment to delivering exceptional, tailored event
                    planning services that make every occasion truly
                    unforgettable.
                </p>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        500: {
                            slidesPerView: 1,
                        },
                        750: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper"
                >
                    {testimonial.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <img
                                    src={testimonial.profile}
                                    alt="Eventify Testimonial Img"
                                    draggable="false"
                                />
                                <span className="material-symbols-rounded">
                                    format_quote
                                </span>
                            </div>
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.loc}</p>
                            <p>{testimonial.desc}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonial;
