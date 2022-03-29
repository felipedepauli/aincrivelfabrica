import React from "react";
import { Link as ScrollLink } from "react-scroll";

const herosectionData = {
  name: "Felipe de Pauli",
  aboutMe:
    "And who is Felipe de Pauli? Well, I wrote a little about me here, but if you want, we can talk some day and I'll explain a bit better.",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/herooo.jpg)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>


        <ScrollLink
            activeClass="active"
            to="section-portfolios"
            spy={true}
            smooth={true}
            offset={-50}
            className="btn btn-default btn-lg mr-3"
            duration={
              500}
          >
            <i className="icon-grid"></i>View Portfolio
          </ScrollLink>

        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>

        <ScrollLink
            activeClass="active"
            to="section-contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="btn btn-border-light btn-lg"
          >
          <i className="icon-phone"></i><i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
