import React from 'react'
import "./NavBar.css"

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'

export const MWNavBar = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className="navbar" sticky='top' >
   
    <Container className='d-flex justify-content-center' >
      <Row className='d-flex'>
      <Col className="w-25 d-flex flex-column ">
        <Navbar.Brand href="/" className="d-flex flex-column align-items-center"  >
                <img
                alt="Tennessee Moving Waters Logo"
                src="https://res.cloudinary.com/alexprieuweb/image/upload/f_webp/v1646927504/TNMW/TNMW_stkaoa.webp"
                style={{width: '120px'}}
                width={120}
                height={27.9167}
                />
            <span>Tennessee Moving Waters</span>
            </Navbar.Brand>
            </Col>
          
            
        {/* </Row> */}
        {/* <Row className="d-flex justify-content-center"> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse  className="" id="responsive-navbar-nav ">
          <Col sm   >
            
            <Nav fill className="linktext" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/fishing-trip-options">Fishing Trip Options</Nav.Link>
            <Nav.Link href="/fishing-reports">Fishing Reports</Nav.Link>
            <Nav.Link href="/boats">Boats</Nav.Link>
            <Nav.Link href="/guides">Guides</Nav.Link>              
            <Nav.Link className="text-right" href="/contact-us">Contact Us</Nav.Link>
            </Nav>
            
            </Col>
            </Navbar.Collapse>
        </Row>
      
      
    </Container>
  </Navbar>
</>
  )
}
