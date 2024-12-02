import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Tennessee Moving Waters</title>
        <meta
          name="Tennessee Moving Waters Home Page"
          content="A Middle Tennesse Fishing Guide service where we love to find big fish in smaller waters. We enjoy nature and the peace that comes with it, that is until we get one on the line and then we go crazy. It is an adrenaline rush hooking some of the fish we find. Take a look and give us a shout!"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://images.prismic.io/alexprieu/b90cd64d-87b3-4646-a5aa-816b55d67013_Frame+2+%281%29.png?auto=compress,format"
          sizes="64x64"
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

      <div className="hero">
        <Container className="heroContentWrapper">
          <div className="heroCopy">
            <h1>Tennessee Moving Waters</h1>
            <p>Discover Untouched Beauty, Trophy Fish, and Expert Guides</p>
          </div>
        </Container>
      </div>
      <Container className="homeContentWrapper">
        <div className="homeRow">
          <div className="mainContent">
            <p>
              With years of experience fishing Tennessee’s waters, we’ve
              mastered the art of finding those hidden gems—untouched streams
              and rivers teeming with life. At Tennessee Moving Waters, we take
              you beyond the usual crowded spots to explore serene, lesser-known
              waterways. But don’t let their size fool you; these waters are
              home to some of the largest trophy fish you’ll ever encounter.
              Whether you’re wading for smallmouth bass, kayaking for musky or
              brown trout, or boating across expansive waters, our professional
              guides will ensure you have an unforgettable fishing adventure
              while learning about the unique ecology and habits of these
              incredible fish.
            </p>
            <div className="heroImage">
              <img
                className="noDumping"
                alt="No Dumping Sign"
                src="https://images.prismic.io/alexprieu/ee1dac01-a91c-4f52-89eb-200412947ce9_Screenshot_2022-04-07_160753_j9z51b+%281%29.png?auto=compress,format"
              />
            </div>
          </div>
          <div className="homeImageGallery">
            <img
              alt=""
              src="https://images.prismic.io/alexprieu/Z01KOpbqstJ977wJ_image000000.jpg?auto=format,compress"
            />

            <img
              alt=""
              src="https://images.prismic.io/alexprieu/Z01KO5bqstJ977wK_image000001.jpg?auto=format,compress"
            />

            <img
              alt=""
              src="https://images.prismic.io/alexprieu/Z01KPJbqstJ977wL_image000002.jpg?auto=format,compress"
            />

            <img
              alt=""
              src="https://images.prismic.io/alexprieu/Z01KPZbqstJ977wM_image000003.jpg?auto=format,compress"
            />
            <img
              alt=""
              src="https://images.prismic.io/alexprieu/Z01KOZbqstJ977wI_image000004.jpg?auto=format,compress"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
