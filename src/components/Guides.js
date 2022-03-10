import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './Guides.css'
const Guides = () => {
  return (
      <>
      <h1>Guides</h1>
      <Container className="guidesContainer d-flex justify-content-center justify-content-around">
        <Card className='guideCard'>
            <Card.Img style={{padding: '.5em'}} variant="top" src="https://res.cloudinary.com/myclutch/image/upload/c_scale,f_webp,w_600/v1646697339/TNMW/Screenshot_2022-03-07_175528_vabhm3.webp" />
                <Card.Body>
                    <Card.Title>Nick Adams</Card.Title>
                    <Card.Text>
                    Nick has lived and fished in Middle TN for over 36 years. He is an avid multi-species trophy hunter. Over the years he has developed an 
                        extensive knowledge of Tennessee's rivers and streams. The time he has spent exploring on and in the water ensure that you will be
                        fishing in the right place at the right time. You will be hard-pressed to find a more dedicated or hardcore angler. 
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='guideCard'>
                <Card.Img style={{padding: '.5em'}} variant="top" src="https://res.cloudinary.com/myclutch/image/upload/c_scale,f_webp,w_600/v1646697636/TNMW/Screenshot_2022-03-07_180025_bjhmjs.webp" />
                    <Card.Body>
                        <Card.Title>J.G. Auman</Card.Title>
                        <Card.Text>
                        J.G. is a biologist and the head of aquatics at the Nashville Zoo. He has spent countless hours in Tennessee's rivers and streams doing field work, 
                        and of course, fishing. He is involved with projects working with endangered crayfish and hellbenders. 
                        </Card.Text>
                    </Card.Body>
            </Card>
        </Container>
      </>
  )
}

export default Guides