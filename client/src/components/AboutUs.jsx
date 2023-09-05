import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              Welcome to HealthBooker,
              where we're dedicated to simplifying your healthcare journey.
              With our comprehensive directory of qualified healthcare
              professionals and easy appointment booking,
              we're committed to putting your health first.
              Join us in your healthcare journey and experience
              the convenience of finding the right care when you need it,
              all in one place. Your health matters,
              and we're here to make it easier for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
