import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {Helmet} from 'react-helmet'
import './Boats.css'

const Boats = () => {
  return (
      <>
    <Helmet>
    <title>Tennessee Moving Waters Boats</title>
    <meta name="Our Boats" content="Availble boats to use in our selected guide services." />
  </Helmet>
    <Container className='py-3 '>
    <h1>Our Boats</h1>
        <Row className='boats'>
            <Col>
                <h2>Johnboat</h2>
                <p >
                2021 G3 1860 Center console tunnel hull with 80hp jet outboard
                </p>
            </Col>
            <Col>
            <img  src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_600/v1646698032/TNMW/b1_da3elq.webp" alt="johnboat"/>
            </Col>
        </Row>
        <Row className='boats'>
            <Col>
                <h2>Kayaks</h2>
                <p>
                Bonafide RS117 and SS127 <br/>
                The ultimate moving water fishing kayaks. Super stable and very comfortable.
                </p>
            </Col>
            <Col>
            <img  src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_600/v1646698031/TNMW/b2_bnjjgb.webp" alt="kayaks"/>
            </Col>
        </Row>
        <Row className='boats'>
            <Col>
                <h2>Jet Boat</h2>
                <p>
                115/80 hp Yamaha outboard jet
                </p>
                
            </Col>
            <Col>
            <img src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_600/v1646698031/TNMW/b3_jbdqcy.webp" alt="jet boat"/>
            </Col>
        </Row>
        </Container>
    </>
  )
}

export default Boats