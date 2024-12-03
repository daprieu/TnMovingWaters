import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./Boats.css";

const Boats = () => {
  return (
    <>
      <Helmet>
        <title>Tennessee Moving Waters Boats</title>
        <meta
          name="Our Boats"
          content="Availble boats to use in our selected guide services."
        />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G85YFC6WJT"
        ></script>
        <script>
          {` window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-G85YFC6WJT');`}
        </script>
      </Helmet>
      <Container className="boats-container">
        <h1>Our Boats</h1>
        <Row className="boats">
          <Col>
            <h2>Jonboat</h2>
            <p>
              2021 G3 1860 Center console tunnel hull with 80hp jet outboard
            </p>
          </Col>
          <Col>
            <img
              src="https://images.prismic.io/alexprieu/d79cce5c-a531-4bc8-a2ac-27a0204c3800_b1_da3elq.jpg?auto=compress,format"
              alt="johnboat"
            />
          </Col>
        </Row>
        <Row className="boats">
          <Col>
            <h2>Kayaks</h2>
            <p>
              Bonafide RS117 and SS127 <br />
              The ultimate moving water fishing kayaks. Super stable and very
              comfortable.
            </p>
          </Col>
          <Col>
            <img
              src="https://images.prismic.io/alexprieu/e214c87c-7cfd-4c59-9b10-4b8a07a834ee_b2_bnjjgb.jpg?auto=compress,format"
              alt="kayaks"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Boats;
