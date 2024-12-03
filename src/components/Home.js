import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./Home.css";

const Hero = () => (
  <div className="hero">
    <Container className="heroContentWrapper">
      <div className="heroCopy">
        <h1>Tennessee Moving Waters</h1>
        <p>
          Where Wild Waters Meet Trophy Fish. Explore Tennessee’s untouched
          rivers and streams with expert guides who turn every cast into an
          adventure. Find peace in nature—and adrenaline in the fight.
        </p>
      </div>
    </Container>
  </div>
);

const AboutSection = () => (
  <section className="aboutSection">
    <Container className="homeContentWrapper">
      <Row className="align-items-center">
        <Col className="mainContent">
          <h2>About Us</h2>
          <div className="about">
            <p>
              With years of experience fishing Tennessee’s waters, we’ve
              mastered the art of finding those hidden gems—untouched streams
              and rivers teeming with life. At Tennessee Moving Waters, we take
              you beyond the usual crowded spots to explore serene, lesser-known
              waterways. But don’t let their size fool you; these waters are
              home to some of the largest trophy fish you’ll ever encounter.
            </p>
            <p>
              Whether you’re wading for smallmouth bass, kayaking for musky or
              brown trout, or boating across expansive waters, our professional
              guides will ensure you have an unforgettable fishing adventure
              while learning about the unique ecology and habits of these
              incredible fish.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="homeImageGallery">
          {[
            "Z01KOpbqstJ977wJ_image000000.jpg",
            "Z01KO5bqstJ977wK_image000001.jpg",
            "Z01KPJbqstJ977wL_image000002.jpg",
            "Z01KPZbqstJ977wM_image000003.jpg",
            "Z01KOZbqstJ977wI_image000004.jpg",
          ].map((image, index) => (
            <img
              key={index}
              alt={`Gallery image ${index + 1}`}
              src={`https://images.prismic.io/alexprieu/${image}?auto=format,compress`}
            />
          ))}
        </Col>
      </Row>
    </Container>
  </section>
);

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Tennessee Moving Waters</title>
        <meta
          name="description"
          content="A Middle Tennessee fishing guide service that takes you to serene, lesser-known waterways for an unforgettable adventure."
        />
        <link
          rel="icon"
          type="image/png"
          href="https://images.prismic.io/alexprieu/b90cd64d-87b3-4646-a5aa-816b55d67013_Frame+2+%281%29.png?auto=compress,format"
          sizes="64x64"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G85YFC6WJT"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G85YFC6WJT');
          `}
        </script>
      </Helmet>
      <Hero />
      <AboutSection />
    </>
  );
};

export default Home;
