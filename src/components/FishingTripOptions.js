import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./FishingTripOptions.css"
import {Helmet} from 'react-helmet'

const FishingTripOptions = () => {
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
        <h1>FISHING TRIPS</h1>
        <p className='bodyText'>
            We offer a variety of fishing trips for various species. We try to stay on a trophy bite. Certain times of the year are better for each species of fish. 
            If you are looking to catch a BIG fish, we will take you out for the hottest bite for that time of year.
        </p>
        <Row className='fishingTrips'>
            <Col>
                <h2>Smallmouth wading & kayak trips</h2>
                <p >
                Take a journey deep into the heart of Tennessee where giant Bronzebacks roam almost unknown to most anglers. 
                These trips are a little off the beaten path but the time it takes to get there is always made up for by the beautiful scenery and wide array of 
                wildlife that may be encountered. It almost takes you back in time when you slip into the creek and start to become one with your surroundings. 
                The fun then starts when the first smallmouth is hooked, these fish are so strong and acrobatic in the shallow water, it's mind-blowing. 
                And we are not talking about little 12 inch fish, targeting fish primarily in the 16 to 22" range, you are in for a fight when you hook into one of these beasts. 
                From March until November.
                </p>
                <p>Wading trips are $400 for 2 people. </p>
                <p>Kayak trips $400 for 2 people(4-5hrs) $500(7-8hrs) $600(10+hrs) Additional people can be added for 
                $100 each. We provide kayaks and all fishing gear</p>
                
                
            </Col>
            <Col>
            <img  src="https://images.prismic.io/alexprieu/4164ab77-52ea-4ec0-93c9-810db26090f2_20200428_210805_ewhmi4.jpg?auto=compress,format" alt="Smallmouth wading and kayak trips"/>
            </Col>
        </Row>
        <Row className='fishingTrips'>
            <Col>
                <h2>Musky boat & kayak trips</h2>
                <p>
                If you think you are ready to battle one of the strongest fish swimming in fresh water, then the mighty muskellunge awaits. We chase these awesome beasts in some 
                of the most beautiful areas in Tennessee. We fish out of a 2021 G3 18ft jet-powered jonboat on the larger portions of the Caney Fork and Collins Rivers but love to 
                take the kayaks up into the skinny water. It is an amazing experience fighting these awesome fish out of a kayak, but not for the faint of heart.  
                </p>
                <p>
                Kayak trips $500 for 
                2 people(7-8hrs)
                </p>
                <p>Boat trips $400 for 2 people(4-5hrs) $500(8+hrs) additional people can be added for $100 each.</p>
            </Col>
            <Col>
            <img  src="https://images.prismic.io/alexprieu/86d7f6f3-f3e4-4d07-8806-d814a5a21f47_tnmw4_pcbwkk.jpg?auto=compress,format" alt="Musky boat and kayak trips"/>
            </Col>
        </Row>
        <Row className='fishingTrips'>
            <Col>
                <h2>Brown Trout boat & kayak trips</h2>
                <p>
                Take a float down the beautiful Caney Fork River in search of monster brown trout. We routinely see bald eagles, river otters, and many other types of wildlife. 
                </p>
                <p>$400 for 2 people $100 for each additional person.</p>
            </Col>
            <Col>
            <img src="https://images.prismic.io/alexprieu/eea3bc37-123b-440e-b7f1-ab43d765a76c_Screenshot_2022-03-07_183207_nmxe7n.webp?auto=compress,format" alt="Brown Trout boat and kayak trips"/>
            </Col>
        </Row>
        <Row className='fishingTrips'>
            <Col>
                <h2>River Striper</h2>
                <p>
                For a short time each year (June - Sept.) we offer a unique opportunity to wade for giant stripers. Most fish are caught on topwater, and it is always a night bite. If you aren't scared 
                of the dark, this is something you've got to try. 
                </p>
                <p>
                    $300 for 2 people(4-5hrs) $100 each additional person. You will need to bring your own waders.
                </p>
            </Col>
            <Col>
            <img src="https://images.prismic.io/alexprieu/aa30749f-4eaf-4e0c-a4a4-9e703bdd2cc5_20170818_214019_z7hlv4.webp?auto=compress,format" alt="River striper"/>
            </Col>
        </Row>
        <Row className='fishingTrips'>
            <Col>
                <h2>Combo Trips</h2>
                <p>
                During certain times of the year we have the opportunity to chase multiple different species of trophy fish in a single day/night. These trips take some effort but the rewards can be amazing. 
                </p>
                <p>
                    Contact us for availability.
                </p>
            </Col>
            <Col>
            <img src="https://images.prismic.io/alexprieu/32e46208-f3f7-4579-aca6-7ccccf5479a7_Screenshot_2022-03-07_183539_tbo5jq.webp?auto=compress,format" alt="combo trips"/>
            </Col>
        </Row>
        <p className='bodyText'>
        We provide kayaks, tackle, and top-of-the-line equipment but you can bring your own if you prefer. You will need a TN fishing license, rain gear (if necessary), snacks, and drinks, and we highly recommend polarized sunglasses.  
        </p>
        <span className='contact'>
        <strong>Phone:</strong> 615-506-2951        

        <strong>E-mail:</strong> Tnmovingwaters@gmail.com
        </span>
        </Container>
      </>


  )
}

export default FishingTripOptions