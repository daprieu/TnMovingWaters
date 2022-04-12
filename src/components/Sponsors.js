import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Sponsors.css'


const Sponsors = () => {
  return (
    <Container>
      <h2>Our Sponsors</h2>
      <Row className='d-flex py-2'>
        <Col className='sponsor d-flex align-items-center justify-content-center'>
        <a href="https://stcroixrods.com/" aria-label="St. Croix Rods website">
          <img src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649785215/TNMW/st._croix_rods_vcjkbs.webp" alt="St. croix rods"/>
          </a>
        </Col>
        <Col className='sponsor d-flex align-items-center justify-content-center'>
        <a href="https://bonafidekayaks.com/" aria-label="Bonafide Kayaks website">
          <img src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649785215/TNMW/bonafide-logo-white_uynsad.webp" alt="Bonafide kayaks"/>
          </a>
        </Col>
        <Col className='sponsor d-flex align-items-center justify-content-center'>
        <a href="https://luckycraft.com/luckycrafthome/default.htm" aria-label="Lucky Craft website">
          <img src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649785215/TNMW/lucky_craft_1024x1024_b03aaf.webp" alt="Lucky Craft"/>
          </a>
        </Col>
        <Col className='sponsor d-flex align-items-center justify-content-center'>
        <a href="https://bullshad.com/" aria-label="Bullshad website">
          <img src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649785215/TNMW/bullshad_htjexc.webp" alt="Bullshad swimbaits"/>
          </a>
        </Col>
      </Row>
    </Container>
    
  )
}

export default Sponsors