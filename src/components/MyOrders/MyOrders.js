import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrdersChild from './MyOrdersChild';

const MyOrders = () => {
    const [myOrders, setmyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/myOrders')
            .then(res => res.json())
            .then(result => (
                setmyOrders(result)
            ))
    }, [myOrders])

    // console.log(myOrders);
    return (
        <div className="container">
            <h2>My Orders</h2>
            <Row xs={1} md={4} className="p-3">
                {
                    myOrders?.filter(item => item?.email === user?.email).map(item => <MyOrdersChild key={item?._id} item={item}></MyOrdersChild>)
                }
            </Row>

        </div>
    );
};

export default MyOrders;