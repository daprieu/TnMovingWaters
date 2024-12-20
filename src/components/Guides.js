import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./Guides.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Guides = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Tennessee Moving Waters Guides</title>
          <meta
            name="Our Nashville Native Fishing Guides"
            content="Meet the our fishing guides. J.G. and Nick now everything there is to finding the largest and strongest fish that are sure to put up a fight. Between cast they may share some Tennessee knowledge with you too!"
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
      </HelmetProvider>
      <Container className="guides-container">
        <h1>Guides</h1>
        <Row className="guidesContainer d-flex justify-content-center justify-content-around">
          <Card className="guideCard">
            <Card.Img
              style={{ padding: ".5em" }}
              variant="top"
              src="https://images.prismic.io/alexprieu/4461a98b-1e66-414e-bb0f-14593253fa25_Screenshot_2022-03-07_175528_vabhm3.png?auto=compress,format"
            />
            <Card.Body>
              <Card.Title>Nick Adams</Card.Title>
              <Card.Text>
                Nick has lived and fished in Middle TN for over 36 years. He is
                an avid multi-species trophy hunter. Over the years he has
                developed an extensive knowledge of Tennessee's rivers and
                streams. The time he has spent exploring on and in the water
                ensure that you will be fishing in the right place at the right
                time. You will be hard-pressed to find a more dedicated or
                hardcore angler.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="guideCard">
            <Card.Img
              style={{ padding: ".5em" }}
              variant="top"
              src="https://images.prismic.io/alexprieu/5d7d0c90-1007-4cd7-a6d6-51a635a2b75d_Screenshot_2022-03-07_180025_bjhmjs.png?auto=compress,format"
            />
            <Card.Body>
              <Card.Title>J.G. Auman</Card.Title>
              <Card.Text>
                J.G. is a biologist and the Life Support Systems Manager at the
                Nashville Zoo. He has spent countless hours in Tennessee's
                rivers and streams doing field work, and of course, fishing. He
                is involved with projects working with endangered crayfish and
                hellbenders.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Guides;
