import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'


const Home = () => {
  return (
      <>
      
        <div className='siteBanner'>

        <video className='video' src="https://res.cloudinary.com/myclutch/video/upload/v1646775470/TNMW/2022-03-08_15-32-52_Trim_twsy8q.mp4" alt="" autoPlay muted loop style={{width: '100%'}}></video>
        <div className='videoText'><h1>Welcome To<br/>Tennessee Moving Waters<br/>Guide Service</h1></div>
        </div>
      <Container className="homeContainer" >
      {/* <img src="https://res.cloudinary.com/myclutch/image/upload/f_webp/v1646689618/TNMW/Screenshot_2022-03-07_154517_gun83u.webp" style={{width: '100%'}}/> */}
        {/* <h1>Welcome!</h1>
        <Card style={{alignItems: 'center', width: '30vw'}}>
        <Card.Img style={{width: '25vw', justifyContent:'center'}} variant="top" src="https://res.cloudinary.com/myclutch/image/upload/c_scale,f_webp,w_500/v1646355618/TNMW/20210517_142511_alhpep.jpg" />
        <Card.Body>
    <Card.Text>
            At TN Moving Waters Guide Service we take a different approach to a guided fishing trip. 
            We like to get away from the crowds and let you see what Tennessee truly has to offer.
    </Card.Text>
  </Card.Body>
        </Card> */}
        {/* <Row>
            <Col style={{textAlign: 'left'}}>
            At TN Moving Waters Guide Service we take a different approach to a guided fishing trip. 
            We like to get away from the crowds and let you see what Tennessee truly has to offer.
            </Col>
            <Col>
            </Col>
        </Row> */}
        <Row className="homeRow" >
            <Col >
            We believe in taking  a different approach to a guided fishing trip. 
            We like to get away from the crowds and let you see what Tennessee truly has to offer.
            Take a trip with us off the beaten path and explore small rivers/streams that rarely see other anglers,
            but that doesn't mean we are talking about small fish. Giants roam these smaller waters and it is our goal 
            to give you a shot at the trophy fish of a lifetime.
            We offer many different trips for a variety of species including wading for smallmouth bass and kayak trips
            for smallmouth, musky, and brown trout. We also offer boat trips for musky and smallmouth on the larger waters.
            Our guides are professional and strive to give you the best experience possible.
            </Col>
            <Col >
            

            <img src="https://res.cloudinary.com/myclutch/image/upload/c_scale,f_webp,w_500/v1646355527/TNMW/tnmw1_srrvr6.jpg" alt="musky" />
            
            </Col>
        </Row>
        {/* <Row>
            <Col style={{textAlign: 'left'}}>
            We offer many different trips for a variety of species including wading for smallmouth bass and kayak trips
            for smallmouth, musky, and brown trout. We also offer boat trips for musky and smallmouth on the larger waters.
            Our guides are professional and strive to give you the best experience possible.
            </Col>
            <Col>
            <img src="https://res.cloudinary.com/myclutch/image/upload/c_scale,f_webp,w_500/v1646355617/TNMW/20180716_220955_c17mwz.jpg"/>
            </Col>
        </Row> */}
      </Container>
      <div></div>
      </>
  )
}

export default Home