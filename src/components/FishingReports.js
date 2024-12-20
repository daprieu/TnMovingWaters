import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./FishingReports.css";
import { Helmet } from "react-helmet";

const FishingReports = () => {
  return (
    <>
      <Helmet>
        <title>Take a look at some of our Fishing Reports!</title>
        <meta
          name="fishing reports"
          content="Fishing reports from our guide trips."
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
      <Container>
        <h1>FishingReports</h1>
        <Row className="reportImages">
          <Col>
            <img
              alt="guy with fish"
              src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649361111/TNMW/guy_with_fish_3_glhyjj.webp"
            />
          </Col>
          <Col>
            <img
              alt="gut with fish 2"
              src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649360975/TNMW/guy_with_fish_2_ksp6ye.webp"
            />
          </Col>
          <Col>
            <img
              alt="gut with fish 3"
              src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649361021/TNMW/guy_with_fish_tdvjys.webp"
            />
          </Col>
        </Row>
        <h2>Find more on our Facebook page!</h2>
        <iframe
          className="facebookIFrame"
          title="TN Moving Waters Facebook page"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftnmovingwatersguideservice&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Container>
    </>
  );
};

export default FishingReports;
