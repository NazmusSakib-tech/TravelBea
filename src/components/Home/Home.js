import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row, Button, Carousel, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import faq1 from '../../utilities/images/faq1.jpg'
import Fade from 'react-reveal/Fade';
import './Home.css'
import sld2 from '../../utilities/images/slider/sld2.jpg'
import sld3 from '../../utilities/images/slider/sld3.jpg'
import sld4 from '../../utilities/images/slider/sld4.jpg'



const Home = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('https://chilling-scarecrow-03735.herokuapp.com/services')
            .then(res => res.json())
            .then(result => setServices(result))
    }, [])



    return (
        <div>
            {/* slider start */}


            <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src={sld4}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Nature Your Love</h2>
                            <p>The mountains are calling and I must go</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src={sld2}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Welcome Beach Lovers</h2>
                            <p>Only at the beach can we go a splishin’ and a splashin</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src={sld3}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>A Journey That You Enjoy</h2>
                            <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail</p>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



            {/* slider end */}

            {/* Package Section Start */}
            <div className="container p-3">
                <h2 className="p-4 fw-bold text-warning" style={{textDecoration: "underline"}}>Our Current Packages</h2>
                <Row xs={1} md={4} className="g-4">
                    {
                        services?.map(service =>
                            <CardGroup className="">
                                <Card className="bg-image hover-zoom">
                                    <Card.Img variant="top" src={service.image} />
                                    <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>
                                            {service.shortdescribe.slice(0,100)}
                                        </Card.Text>
                                        <Card.Text>
                                            <h4><span className="text-primary">Package Price:</span> <span className="text-warning fw-bold">${service.price}</span> </h4>
                                        </Card.Text>

                                        {/* <NavLink to={`/serviceDetails/${service._id}`}>
                                            <Button className="btn btn-warning fw-bold">Book Now</Button>
                                        </NavLink> */}

                                    </Card.Body>
                                    <Card.Text className="p-3">
                                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                                        <NavLink to={`/serviceDetails/${service._id}`}>
                                            <Button className="btn btn-warning fw-bold">Book Now</Button>
                                        </NavLink>
                                    </Card.Text>
                                </Card>
                            </CardGroup>
                        )
                    }
                </Row>
            </div>


            {/* Some FAQ About Journy */}
            <div className="container p-3">
                <div className="row">
                    <Fade left>
                        <div className="col-md-6">
                            <img src={faq1} alt="" className="img-fluid" />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-6">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button
                                            class="accordion-button"
                                            type="button"
                                            data-mdb-toggle="collapse"
                                            data-mdb-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Can people who have recently recovered from COVID-19 travel?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-mdb-parent="#accordionExample"
                                    >
                                        <div class="accordion-body text-start">
                                            <strong>Yes, people who have recovered</strong>  from COVID-19 can safely travel if they tested positive for COVID-19 in the past 90 days and have met criteria to end isolation.

                                            People can continue to test positive for up to 90 days after a COVID-19 diagnosis without being infectious to others. For this reason, travelers who have recovered from COVID-19 in the past 90 days do not need to get tested before or after travel. If they develop COVID-19 symptoms after travel, they should isolate and consult with a healthcare provider for testing recommendations.

                                            Those traveling by air to the United States from a foreign country can show documentation of recovery from COVID-19 instead of a negative test result before boarding their flight.

                                            These travelers should follow other travel recommendations and requirements for domestic and international travel.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-mdb-toggle="collapse"
                                            data-mdb-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            How can I protect myself from COVID-19 when using different types of transportation?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-mdb-parent="#accordionExample"
                                    >
                                        <div class="accordion-body text-start">
                                            <strong>Maintaining physical distance</strong> to prevent COVID-19 is often difficult on public transportation. People may not be able to keep a distance of 6 feet from others on airplanes, trains, or buses.

                                            Protect yourself from COVID-19 by getting fully vaccinated and by wearing a mask on public transportation. Wearing a mask over your nose and mouth is required on in indoor areas of planes, buses, trains, and other forms of public transportation traveling into, within, or out of the United States, and while indoors at U.S. transportation hubs (such as airports and stations), even for those people who have been fully vaccinated.

                                            All travelers should take steps to protect themselves and others.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-mdb-toggle="collapse"
                                            data-mdb-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            How does CDC determine the COVID-19 Travel Health Notice Level of a destination?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-mdb-parent="#accordionExample"
                                    >
                                        <div class="accordion-body">
                                            Maintaining physical distance to prevent COVID-19 is often difficult on public transportation. People may not be able to keep a distance of 6 feet from others on airplanes, trains, or buses.

                                            Protect yourself from COVID-19 by getting fully vaccinated and by wearing a mask on public transportation. Wearing a mask over your nose and mouth is required on in indoor areas of planes, buses, trains, and other forms of public transportation traveling into, within, or out of the United States, and while indoors at U.S. transportation hubs (such as airports and stations), even for those people who have been fully vaccinated.

                                            All travelers should take steps to protect themselves and others.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

            </div>

            {/* End Of Accondian */}


            {/* Bg Images Start */}

            <div className="explore">
                <div className="text-position-center">
                    <h1>Hellow Travellers</h1>
                    <button className="btn btn-warning fw-bold ">Explore Now</button>
                </div>
            </div>

            {/* Bg Images End */}



        </div>
    );
};

export default Home;