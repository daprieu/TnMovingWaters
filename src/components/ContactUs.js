import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { Button, Container, Form, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './ContactUs.css'

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xeqnjpkv");
  if (state.succeeded) {
      return (
        <Container className='py-3 contact'>
      <p>Your Message has been sent! Thank You!</p>
      </Container>
      );
  }
  return (
    <Container className='py-3 contact'>
      <h1>Contact Us</h1>
      <div className='d-flex flex-column pb-5 ' style={{fontSize: "1.25em"}}>
      <span>Thank you for visiting our website. </span>
      <span>
        Please contact us to request more information about 
        trip options 
      </span>
      <span>or to provide feedback about our website.</span>
      </div>
     <Row className='d-flex flex-column justify-content-start py-3' style={{textAlign: "left"}}>
       <p style={{marginBottom: 0}}>Mailing Address:</p>
        <span>125 Sunnymeade Dr</span>
        <span>Mt. Juliet, TN 37122</span>

        <p style={{marginBottom: 0}}>Office Number:</p> 
        <span>615-506-2951</span>
        

          <p style={{marginBottom: 0}}>Email:</p> 
          <span>
            <Link to='#'onClick={(e) => {window.location.href = "mailto:Tnmovingwaters@gmail.com"; 
            e.preventDefault();
            }}>Tnmovingwaters@gmail.com 
            </Link> 
            <span> or use the form below.</span>
          </span>
      </Row>
    <Row className="justify-content-md-center">

    <Col style={{width: "80%"}}>
    <Form onSubmit={handleSubmit} >
    <div className='form'>

      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name"/>
      </Form.Group>


    <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text" placeholder="Phone Number" name="phoneNumber"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Email" name="email"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Message" name="message"/>
  </Form.Group>
  </div>  
  <div className='formButton'>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </div>
    </Form>
    </Col>

    </Row>
    </Container>
  );
}

export default ContactUs