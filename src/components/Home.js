import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import {Helmet} from 'react-helmet'

const Home = () => {
  return (
      <>
        <Helmet>
    <title>Welcome to Tennessee Moving Waters</title>
    <meta name="Tennessee Moving Waters Home Page" content="A Middle Tennesse Fishing Guide service where we love to find big fish in smaller waters. We enjoy nature and the peace that comes with it, that is until we get one on the line and then we go crazy. It is an adrenaline rush hooking some of the fish we find. Take a look and give us a shout!" />
    <link rel="icon" type="image/png" href="https://images.prismic.io/alexprieu/b90cd64d-87b3-4646-a5aa-816b55d67013_Frame+2+%281%29.png?auto=compress,format" sizes="64x64" />
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-G85YFC6WJT"></script>
    <script>
    {` window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-G85YFC6WJT');`}
    </script>
  </Helmet>
        <div className='siteBanner'>

        <video className='video' src="https://res.cloudinary.com/alexprieuweb/video/upload/v1646775470/TNMW/2022-03-08_15-32-52_Trim_twsy8q.mp4" alt="" autoPlay muted loop style={{width: '100%'}}></video>
        <div className='videoText'><h1>Welcome To<br/>Tennessee Moving Waters<br/>Guide Service</h1></div>
        </div>
      <Container className="homeContainer" >
      <Row className='homeRow'>
          <Col>
          <img className='noDumping' alt='noDumping'  src='https://images.prismic.io/alexprieu/ee1dac01-a91c-4f52-89eb-200412947ce9_Screenshot_2022-04-07_160753_j9z51b+%281%29.png?auto=compress,format'/>
          </Col>
          </Row>
        <Row className="homeRow" >
            <Col >
            <p>
            We believe in taking  a different approach to a guided fishing trip. 
            We like to get away from the crowds and let you see what Tennessee truly has to offer.
            Take a trip with us off the beaten path and explore small rivers/streams that rarely see other anglers,
            but that doesn't mean we are talking about small fish. Giants roam these smaller waters and it is our goal 
            to give you a shot at the trophy fish of a lifetime.
            </p>
            </Col>
            </Row>

            <Row className="homeRow">
          <Col>
          <img alt='' src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649363972/TNMW/Home%20page%20pics/Screenshot_2022-04-07_153002_kwluwo.webp'/>
          </Col>
          <Col>
          <img alt='' src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649363992/TNMW/Home page pics/Screenshot_2022-04-07_153024_dvarwx.webp'/>
          </Col>
          <Col>
          <img alt='' src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649364010/TNMW/Home page pics/girl_with_musk_xpiv4y.webp'/>
          </Col>
        </Row>

        <Row className="homeRow" >
        <Col >
            <p>
            We offer many different trips for a variety of species including wading for smallmouth bass and kayak trips
            for smallmouth, musky, and brown trout. We also offer boat trips for musky and smallmouth on the larger waters.
            Our guides are professional and strive to give you the best experience possible.
            </p>
            </Col>
        </Row>

        <Row className="homeRow">
          <Row className='py-1'>
          <Col>
          <img alt='' src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649363972/TNMW/Home%20page%20pics/Screenshot_2022-04-07_152933_ycwj2o.webp'/>
          </Col>
          <Col>
          <img alt='' src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649363992/TNMW/Home page pics/Screenshot_2022-04-07_153609_pd3lha'/>
          </Col>
          <Col>
          <img alt='' src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649364010/TNMW/Home page pics/guy_with_musky_xx847h.webp'/>
          </Col>
          </Row>

          <Row className='py-1'>
          <Col>
          <img alt='' src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649363972/TNMW/Home%20page%20pics/jg_sjgbhe.webp'/>
          </Col>
          <Col>
          <img alt='' src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649363992/TNMW/Home page pics/nick_eilcfv.webp'/>
          </Col>
          <Col>
          <img alt='' src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649364010/TNMW/Home page pics/Screenshot_2022-04-07_160432_fioico.webp'/>
          </Col>
        </Row>
        </Row>

      </Container>
      <div></div>
      </>
  )
}

export default Home