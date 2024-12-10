import React from "react";
import Container from "react-bootstrap/Container";
import "./FishingTripOptions.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const tripDetails = [
  {
    title: "Smallmouth Wading & Kayak Trips",
    description: `Embark on an unforgettable journey deep into the heart of Tennessee, where giant Bronzebacks thrive in waters hidden from most anglers. These adventures may take you a bit off the beaten path, but the beautiful scenery and diverse wildlife make the trip well worth it. Experience a step back in time as you wade into the creek, becoming one with your surroundings.`,
    excitement: `The excitement truly begins when you hook your first smallmouth—these fish are renowned for their incredible strength and acrobatics in shallow water. And we’re not talking about small fish; our trips focus on fish in the 16 to 22" range, promising a thrilling fight every time. Available from March through November, this is an experience you won’t forget.`,
    pricing: [
      { type: "Wading Trips", price: "$400 for 2 people" },
      {
        type: "Kayak Trips",
        subItems: [
          { duration: "4-5 hours", price: "$400 for 2 people" },
          { duration: "7-8 hours", price: "$500 for 2 people" },
          { duration: "10+ hours", price: "$600 for 2 people" },
        ],
      },
      { type: "Additional participants", price: "$100 per person" },
    ],
    additionalInfo:
      "All kayaks and fishing gear are provided for your convenience, ensuring a seamless and enjoyable experience.",
    imageUrl:
      "https://images.prismic.io/alexprieu/4164ab77-52ea-4ec0-93c9-810db26090f2_20200428_210805_ewhmi4.jpg?auto=compress,format",
    altText: "Smallmouth wading and kayak trips",
  },
  {
    title: "Musky Boat & Kayak Trips",
    description: `If you think you are ready to battle one of the strongest fish swimming in fresh water, then the mighty muskellunge awaits. We chase these awesome beasts in some of the most beautiful areas in Tennessee. We fish out of a 2021 G3 18ft jet-powered jonboat on the larger portions of the Caney Fork and Collins Rivers but love to take the kayaks up into the skinny water. It is an amazing experience fighting these awesome fish out of a kayak, but not for the faint of heart.`,
    pricing: [
      { type: "Kayak Trips", price: "$500 for 2 people (7-8hrs)" },
      {
        type: "Boat Trips",
        subItems: [
          { duration: "4-5 hours", price: "$400 for 2 people" },
          { duration: "8+ hours", price: "$500 for 2 people" },
        ],
      },
      { type: "Additional participants", price: "$100 per person" },
    ],
    imageUrl:
      "https://images.prismic.io/alexprieu/86d7f6f3-f3e4-4d07-8806-d814a5a21f47_tnmw4_pcbwkk.jpg?auto=compress,format",
    altText: "Musky boat and kayak trips",
  },
  {
    title: "Brown Trout boat & kayak trips",
    description: `Take a float down the beautiful Caney Fork River in search of monster brown trout. We routinely see bald eagles, river otters, and many other types of wildlife.`,
    pricing: [
      {
        type: "Boat Trips",

        price: "$400 for 2 people",
      },
      {
        type: "Kayak Trips",

        price: "$400 for 2 people",
      },
      { type: "Additional participants", price: "$100 per person" },
    ],
    additionalInfo:
      "All kayaks and fishing gear are provided for your convenience, ensuring a seamless and enjoyable experience.",
    imageUrl:
      "https://images.prismic.io/alexprieu/eea3bc37-123b-440e-b7f1-ab43d765a76c_Screenshot_2022-03-07_183207_nmxe7n.webp?auto=format,compress",
    altText: "Brown Trout boat and kayak trips",
  },
  {
    title: "River Striper",
    description: `For a short time each year (June - Sept.) we offer a unique opportunity to wade for giant stripers. Most fish are caught on topwater, and it is always a night bite. If you aren't scared of the dark, this is something you've got to try.`,
    pricing: [
      { type: "Wading Trips", price: "$300 for 2 people (4-5hrs)" },
      { type: "Additional participants", price: "$100 per person" },
    ],
    additionalInfo: "You will need to bring your own waders.",
    imageUrl:
      "https://images.prismic.io/alexprieu/aa30749f-4eaf-4e0c-a4a4-9e703bdd2cc5_20170818_214019_z7hlv4.webp?auto=format,compress",
    altText: "River Striper trips",
  },
  {
    title: "Combo Trips",
    description: `During certain times of the year we have the opportunity to chase multiple different species of trophy fish in a single day/night. These trips take some effort but the rewards can be amazing.`,
    additionalInfo: "Contact us for availability.",
    imageUrl:
      "https://images.prismic.io/alexprieu/32e46208-f3f7-4579-aca6-7ccccf5479a7_Screenshot_2022-03-07_183539_tbo5jq.webp?auto=format,compress",
    altText: "Combo trips",
  },
  // Add more trip objects as needed
];

const FishingTripOptions = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Fishing Trip Options</title>
          <meta
            name="description"
            content="We have a variety of fishing guide options, take a look to see what we offer."
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-G85YFC6WJT"
          ></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G85YFC6WJT');`}
          </script>
        </Helmet>
      </HelmetProvider>
      <Container className="fishing-trips-container">
        <header className="sectionHeader">
          <h1>Fishing Trips</h1>
          <p className="bodyText">
            We offer a variety of fishing trips for various species. We try to
            stay on a trophy bite. Certain times of the year are better for each
            species of fish. If you are looking to catch a BIG fish, we will
            take you out for the hottest bite for that time of year.
          </p>
        </header>
        <div className="tripsSection">
          {tripDetails.map((trip, index) => (
            <section key={index} className="fishingTrip">
              <div className="tripDetailsWrapper">
                <h2>{trip?.title}</h2>
                <p>{trip?.description}</p>
                {trip?.excitement && <p>{trip?.excitement}</p>}
                <h3>Trip Pricing</h3>
                <ul>
                  {trip?.pricing &&
                    trip?.pricing.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.type}</strong>: {item.price}
                        {item.subItems && (
                          <ul>
                            {item.subItems.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                {subItem.duration}: {subItem.price}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
                {trip?.additionalInfo && <p>{trip?.additionalInfo}</p>}
              </div>
              <div className="tripImageWrapper">
                <img src={trip?.imageUrl} alt={trip?.altText} />
              </div>
            </section>
          ))}
        </div>
        <footer className="contact-info">
          <p className="bodyText">
            We provide kayaks, tackle, and top-of-the-line equipment but you can
            bring your own if you prefer. You will need a TN fishing license,
            rain gear (if necessary), snacks, and drinks, and we highly
            recommend polarized sunglasses.
          </p>
          <div className="contact">
            <strong>Phone:</strong> 615-506-2951
            <strong>E-mail:</strong> Tnmovingwaters@gmail.com
          </div>
        </footer>
      </Container>
    </>
  );
};

export default FishingTripOptions;
