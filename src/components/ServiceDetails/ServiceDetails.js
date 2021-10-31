import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Button, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth'
import "./ServiceDetails.css";


const ServiceDetails = () => {
    const { serviceID } = useParams();
    const [service, setService] = useState({})
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        data.id = serviceID;
        data.email = user?.email;
        data.service_name = service?.name;
        data.service_image = service?.image;
        data.service_shortdescribe = service?.shortdescribe;
        data.price = service?.price;
        data.status = "Pending";

        fetch(`https://chilling-scarecrow-03735.herokuapp.com/booking`, {
            method: 'POST',
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Package Added")
                    reset();
                }
            })

    };

    useEffect(() => {
        const url = `https://chilling-scarecrow-03735.herokuapp.com/serviceDetails/${serviceID}`;
        fetch(url)
            .then(res => res.json())
            .then(result => setService(result))
    }, [])


    return (
        <div className="service-details">

            {/* <Row xs={1} md={4} className="g-4"> */}

            <div className="container py-5">
                <div className="row mx-auto d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={service?.image} />
                                <Card.Body>
                                    <Card.Title>{service?.name}</Card.Title>
                                    <Card.Text>
                                        {service?.fulldescribtion}
                                    </Card.Text>
                                    <Card.Text>
                                        <h4>Package Price: ${service?.price}</h4>
                                    </Card.Text>  
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>
                    <div className="col-md-6">
                        <h2 style={{textDecoration: "underline"}} className="text-uppercase text-warning" >Please Fill-up The Form</h2>
                        <form className="form-custom" onSubmit={handleSubmit(onSubmit)}>
                            <input className="mt-2" {...register("name")} placeholder="Name" defaultValue={user?.displayName} required /> <br />
                            <input className="mt-2" {...register("email")} placeholder="Name" defaultValue={user?.email} required /> <br />
                            <input className="mt-2" type="number" {...register("number")} placeholder="Mobile" required /> <br />
                            <input className="mt-2" type="text" {...register("address")} placeholder="Address" required /> <br />
                            <input className="bg-warning fw-bold border mt-2" type="submit" value="Checkout Booking" />
                        </form>
                    </div>
                </div>
            </div>


            {/* </Row> */}

        </div>
    );
};

export default ServiceDetails;