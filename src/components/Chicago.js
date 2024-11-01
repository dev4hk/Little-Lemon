import React from "react";
import ChicagoImageOne from "../assets/images/restaurant chef B.jpg";
import ChicagoImageTwo from "../assets/images/restaurant.jpg";

const Chicago = () => {
  return (
    <section className="chicago">
      <div></div>
      <article className="chicago-details" aria-label="restaurant intro">
        <h2 className="chicago-title">Little Lemon</h2>
        <h3 className="markazi-text chicago-subtitle">Chicago</h3>
        <p className="chicago-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </article>
      <div className="chicago-images" aria-label="restaurant images">
        <img
          className="chicago-image1"
          src={ChicagoImageOne}
          alt="chicago-image1"
        />
        <img
          className="chicago-image2"
          src={ChicagoImageTwo}
          alt="chicago-image2"
        />
      </div>
      <div></div>
    </section>
  );
};

export default Chicago;
