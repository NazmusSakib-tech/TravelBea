import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row, Button } from 'react-bootstrap';

const MyOrdersChild = (props) => {

    const { service_name, service_image, service_shortdescribe, _id, status, price } = props.item;




    const handleDeleteOrders = (id) => {

        if (window.confirm("Are You Sure")) {

            const url = `https://chilling-scarecrow-03735.herokuapp.com/deleteOrder/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert("Your Order Deleted")
                        window.location.reload(false);

                    }
                })
        }

    }




    return (
        <>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={service_image} />
                    <Card.Body>
                        <Card.Title>{service_name}</Card.Title>
                        <Card.Text>
                            {service_shortdescribe}
                        </Card.Text>
                        <Card.Text>
                            <h3 className="fw-bold text-primary">${price}</h3>
                        </Card.Text>
                        {status === "Pending" ?
                            <Card.Text className="text-danger fw-bold">
                                {status}
                            </Card.Text> :
                            <Card.Text className="text-success fw-bold">
                                {status}
                            </Card.Text>}
                        <Button onClick={() => handleDeleteOrders(_id)} className="btn btn-danger m-2">Cancel Booking</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </>
    );
};

export default MyOrdersChild;