import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          At HealthBooker, we take pride in our team of skilled and compassionate doctors
          who are committed to your well-being. Our experienced medical professionals
          are here to provide you with the highest quality care, ensuring that you receive
          personalized treatment and support throughout your healthcare journey.
          Whether you need routine check-ups, specialized medical expertise,
          or guidance on maintaining a healthy lifestyle, our doctors are here to serve you with
          expertise, empathy, and a genuine commitment to your health.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
