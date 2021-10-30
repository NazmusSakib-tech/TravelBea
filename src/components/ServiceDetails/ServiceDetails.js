import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Button, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth'
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
        data.status = "Pending";

        fetch(`http://localhost:5000/booking`, {
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
        const url = `http://localhost:5000/serviceDetails/${serviceID}`;
        fetch(url)
            .then(res => res.json())
            .then(result => setService(result))
    }, [])


    return (
        <>
            <h2>Service Details Page{serviceID}</h2>

            {/* <Row xs={1} md={4} className="g-4"> */}

            <div className="row">
                <div className="col-md-4">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={service?.image} />
                            <Card.Body>
                                <Card.Title>{service?.name}</Card.Title>
                                <Card.Text>
                                    {service?.shortdescribe}
                                </Card.Text>
                                <Card.Text>
                                    {service?.price}
                                </Card.Text>

                                <NavLink to={`/updateProduct/${service?._id}`}>
                                    <Button>Update</Button>
                                </NavLink>
                                <Button className="btn btn-danger m-2">Delete</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
                <div className="col-md-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} placeholder="name" /> <br />
                        <input type="number" {...register("number")} placeholder="mobile number" /> <br />
                        <input type="text" {...register("address")} placeholder="address" /> <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>


            {/* </Row> */}

        </>
    );
};

export default ServiceDetails;