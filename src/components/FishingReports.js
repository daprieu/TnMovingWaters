import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './FishingReports.css'

const FishingReports = () => {
  return (
    <Container>
      <h1>FishingReports</h1>
      <Row className='reportImages'>
        <Col>
      <img alt="guy with fish" src='https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649361111/TNMW/guy_with_fish_3_glhyjj.webp'/>
      </Col>
      <Col>
      <img alt="gut with fish 2" src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649360975/TNMW/guy_with_fish_2_ksp6ye.webp"/>
      </Col>
      <Col>
      <img alt="gut with fish 3" src="https://res.cloudinary.com/alexprieuweb/image/upload/c_scale,f_webp,w_300/v1649361021/TNMW/guy_with_fish_tdvjys.webp"/>
      </Col>
      </Row>
      
      <iframe className='facebookIFrame'  title="TN Moving Waters Facebook page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftnmovingwatersguideservice&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" 
       height="500" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </Container>
    
  )
}

export default FishingReports