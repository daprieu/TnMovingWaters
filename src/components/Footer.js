import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container className="footerContentWrapper">
          <div className="contact">
            <span>Tennessee Moving Waters Guide Service</span>
            <div>125 Sunnymeade Dr, Mt. Juliet, TN 37122</div>
            <div>E-mail: Tnmovingwaters@gmail.com</div>
            <div>Phone: (615) 506-2951</div>
          </div>
          <div className="links">
            <a
              href="https://www.instagram.com/tnmovingwaters/?hl=en"
              aria-label="Add us on Instagram"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/tnmovingwatersguideservice/"
              aria-label="Add us on facebook"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.youtube.com/channel/UCr3wIjfwL74OWshmIRkfevg"
              aria-label="Subscribe to our youtube channel"
            >
              <BsYoutube />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
