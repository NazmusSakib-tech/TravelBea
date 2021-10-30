import React from 'react';
import { Card, CardGroup, Row, Button } from 'react-bootstrap';

const MyOrdersChild = (props) => {

    const { service_name, service_image, service_shortdescribe, _id } = props.item;

    const handleDeleteOrders = (id) => {

        if (window.confirm("Are You Sure")) {

            const url = `http://localhost:5000/deleteOrder/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert("Your Order Deleted")
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

                        </Card.Text>
                        <Button onClick={() => handleDeleteOrders(_id)} className="btn btn-danger m-2">Delete</Button>
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