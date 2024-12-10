import React from "react";
import "./Footer.css";

import Container from "react-bootstrap/Container";
const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <div className="footer">
        <Container className="footerContentWrapper">
          <div className="contact">
            <span>Tennessee Moving Waters Guide Service</span>
            <div>125 Sunnymeade Dr, Mt. Juliet, TN 37122</div>
            <div>E-mail: Tnmovingwaters@gmail.com</div>
            <div>Phone: (615) 506-2951</div>
            <div className="copyright">
              &copy; {getCurrentYear()} Tennessee Moving Waters Guide Service.
              All rights reserved.
            </div>
          </div>
          <div className="links">
            <a
              href="https://www.instagram.com/tnmovingwaters/"
              aria-label="Add us on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/tnmovingwatersguideservice/"
              aria-label="Add us on facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/channel/UCr3wIjfwL74OWshmIRkfevg"
              aria-label="Subscribe to our youtube channel"
            >
              YouTube
            </a>
          </div>
        </Container>
        <Container className="footerContentWrapper">
          <div className="heroImage">
            <img
              width={853}
              height={166}
              className="noDumping"
              alt="No Dumping Sign"
              src="https://images.prismic.io/alexprieu/ee1dac01-a91c-4f52-89eb-200412947ce9_Screenshot_2022-04-07_160753_j9z51b+%281%29.png?auto=compress,format"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
