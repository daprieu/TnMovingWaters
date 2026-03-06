import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Home.css";

const Hero = () => (
  <div className="hero">
    <Container className="heroContentWrapper">
      <div className="heroCopy">
        <h1>Tennessee Moving Waters</h1>
        <span>
          Where Wild Waters Meet Trophy Fish. Explore untouched
          rivers and streams around Nashville with expert guides who turn every cast into an
          adventure. Find peace in nature—and adrenaline in the fight.
        </span>
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
              and rivers teeming with life in and around the surronding areas Nashville and middle Tennessee. At Tennessee Moving Waters, we take
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
              width={100}
              height={100}
              loading="lazy"
              key={index}
              alt={`Gallery item ${index + 1}`}
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
      <HelmetProvider>
        <Helmet>
          <title>Welcome to Tennessee Moving Waters</title>
          <meta
            name="description"
            content="Discover untouched rivers and streams around Nashville with expert fishing guides. Explore serene waterways, catch trophy fish like smallmouth bass and musky, and enjoy unforgettable adventures in nature. Book your guided fishing trip today!"
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
      </HelmetProvider>
      <Hero />
      <AboutSection />
    </>
  );
};

export default Home;
