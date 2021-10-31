import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrdersChild from './MyOrdersChild';
import "./MyOrders.css"
import Fade from 'react-reveal/Fade';


const MyOrders = () => {
    const [myOrders, setmyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {

        fetch('https://chilling-scarecrow-03735.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(result => {
                setmyOrders(result);

                console.log(result);
            })
    }, [])



    return (
        <div className="my-orders">
            <div className="container">
                <Fade left>
                    <h2 className=" display-6"> <u>My Orders</u> </h2>
                </Fade>
                <Fade right>
                    <Row xs={1} md={4} className="p-3">
                        {
                            myOrders?.filter(item => item?.email === user?.email).map(item => <MyOrdersChild key={item?._id} item={item}></MyOrdersChild>)
                        }
                    </Row>
                </Fade>

            </div>
        </div>
    );
};

export default MyOrders;