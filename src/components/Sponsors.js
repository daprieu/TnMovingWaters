import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <Container>
      <h2>Our Sponsors</h2>
      <Row className="d-flex py-2">
        <Col className="sponsor d-flex align-items-center justify-content-center">
          <a
            href="https://stcroixrods.com/"
            aria-label="St. Croix Rods website"
            target="_blank"
          >
            <img
              src="https://images.prismic.io/alexprieu/e544fc20-1c66-43a5-b2a9-09dd565b29c5_st._croix_rods_vcjkbs.png?auto=compress,format"
              alt="St. croix rods"
            />
          </a>
        </Col>
        <Col className="sponsor d-flex align-items-center justify-content-center">
          <a
            href="https://bonafidekayaks.com/"
            aria-label="Bonafide Kayaks website"
            target="_blank"
          >
            <img
              src="https://images.prismic.io/alexprieu/dfb6912f-f56b-4cfa-a73d-50e47707b228_bonafide-logo-white_uynsad.webp?auto=compress,format"
              alt="Bonafide kayaks"
            />
          </a>
        </Col>
        <Col className="sponsor d-flex align-items-center justify-content-center">
          <a
            href="https://luckycraft.com/luckycrafthome/default.htm"
            aria-label="Lucky Craft website"
            target="_blank"
          >
            <img
              src="https://images.prismic.io/alexprieu/74999daf-2f62-4701-b49b-31e5b9efaeca_lucky_craft_1024x1024_b03aaf.webp?auto=compress,format"
              alt="Lucky Craft"
            />
          </a>
        </Col>
        <Col className="sponsor d-flex align-items-center justify-content-center">
          <a
            href="https://bullshad.com/"
            aria-label="Bullshad website"
            target="_blank"
          >
            <img
              src="https://images.prismic.io/alexprieu/8eb97ab6-7c8f-489b-a879-1bfbc4b762cd_bullshad_htjexc.webp?auto=compress,format"
              alt="Bullshad swimbaits"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Sponsors;
