import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
const Boats = () => {
  return (
      <>
      
    <h1>Boats</h1>
    <Container   >
    <Row xs={1} md={1} lg={3}>
        <Col >
            <Card className='boatCards'>
                <Card.Img style={{padding: '.5em'}} variant="top" src="https://res.cloudinary.com/myclutch/image/upload/c_scale,f_webp,w_600/v1646698032/TNMW/b1_da3elq.webp" />
                    <Card.Body>
                        <Card.Title>Johnboat</Card.Title>
                        <Card.Text>
                            2021 G3 1860 Center console tunnel hull with 80hp jet outboard
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card >
                    <Card.Img style={{padding: '.5em'}} variant="top" src="https://res.cloudinary.com/myclutch/image/upload/c_scale,f_webp,w_600/v1646698031/TNMW/b2_bnjjgb.webp" />
                        <Card.Body>
                            <Card.Title>Kayaks</Card.Title>
                            <Card.Text>
                            Bonafide RS117 and SS127

                            The ultimate moving water fishing kayaks. Super stable and very comfortable.
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card >
                    <Card.Img style={{padding: '.5em'}} variant="top" src="https://res.cloudinary.com/myclutch/image/upload/c_scale,f_webp,w_600/v1646698031/TNMW/b3_jbdqcy.webp" />
                        <Card.Body>
                            <Card.Title>Jet Boat</Card.Title>
                            <Card.Text>
                            115/80 hp Yamaha outboard jet 
                            </Card.Text>
                        </Card.Body>
                </Card>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default Boats