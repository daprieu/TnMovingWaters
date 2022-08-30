import React from 'react'
import { PrismicRichText, useSinglePrismicDocument } from '@prismicio/react'
import { Col, Container, Row } from 'react-bootstrap'
import "./FishingTripOptions.css"
import {Helmet} from 'react-helmet'

const FishingTripOptions = () => {
    const [document] = useSinglePrismicDocument('fishing_trip_options')
    
  return (
      <>
        <Helmet>
            
            <title>Fishing Trip Options</title>
            <meta name="Fishign Trip Options" content="We have a variety of fishing guide options, take a look to see what we offer." />
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-G85YFC6WJT"></script>
            <script>
            {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G85YFC6WJT');`}
            </script>
        </Helmet>
        <Container className='py-3 '>
        <div>
      {document && (
        <>
        <PrismicRichText field={document.data.title} />
        <PrismicRichText field={document.data.subtitle} />
        {document.data.body.map((fishingOption, index)=>{
            
            return(
            <span key={index}> 
            <Row className='fishingTrips'>
            <Col>
            <h2>{fishingOption.items[0].fishing_trip_option_title[0].text}</h2>
            {fishingOption.items[0].information.map((text, index) => {
               return <p key={"text"+index}>{text.text}</p>
            })}
            </Col>
            <Col>
            <img  src={fishingOption.items[0].image.url} alt={fishingOption.items[0].image.alt}/>
            </Col>
        </Row>
        
            </span> 
            )
        })}
        {document.data.lower_page_text.map((lowerPageText, index)=>{
            return <p  key={"lpt"+index}>{lowerPageText.text}</p>
        })}
        </>
      )}
    </div>
        
        
        </Container>
      </>


  )
}

export default FishingTripOptions