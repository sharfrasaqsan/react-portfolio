import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Sharfras is a highly dedicated developer who consistently delivers high-quality work.",
      author: "Project Manager, Oscar Wylee",
    },
    {
      quote:
        "His React skills and attention to responsive design helped us modernize our web presence.",
      author: "Lead Developer, KINIT Pvt Ltd",
    },
    {
      quote:
        "Always willing to go the extra mile. He was a key contributor to many successful product launches.",
      author: "Tech Lead, Freelance Client",
    },
    {
      quote:
        "Sharfras is a quick learner and a great team player. He communicates effectively and meets deadlines.",
      author: "Senior Developer, Remote Project",
    },
    {
      quote:
        "One of the most reliable frontend developers I’ve worked with. His UI work always exceeded expectations.",
      author: "UI/UX Designer, Startup Team",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="py-5" id="testimonials">
      <div className="container">
        <h4 className="mb-5 text-center fw-bold text-dark">What People Say</h4>
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-3 pb-4">
              <div
                className="card shadow border-0 rounded-4 p-4 mx-auto"
                style={{ maxWidth: "768px" }}
              >
                <div className="card-body text-center">
                  <FaQuoteLeft className="text-primary fs-2 mb-3" />
                  <p className="card-text fst-italic fs-5">"{t.quote}"</p>
                  <hr />
                  <p className="mb-0 fw-semibold text-secondary">
                    — {t.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
