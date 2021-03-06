import React, { useEffect, useState } from 'react';
import "./ManageAllOrders.css"

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [currentStatus, setCurrentStatus] = useState(true)


    useEffect(() => {
        fetch('https://chilling-scarecrow-03735.herokuapp.com/manageAllOrders')
            .then(res => res.json())
            .then(result => {

                setAllOrders(result);
                setCurrentStatus(true);
                
            })
    }, [currentStatus])

    // For Delete Product
    const handleDeleteOrders = (id, index) => {

        if (window.confirm("Are You Sure")) {

            const url = `https://chilling-scarecrow-03735.herokuapp.com/deleteOrder/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert("Your Order Deleted")
                        // allOrders[index].status="Approved";
                        setCurrentStatus(false);
                    }
                })
        }

    }

    //Update Status of Package
    const handleStatusUpdate = (id, index) => {
        const url = `https://chilling-scarecrow-03735.herokuapp.com/updateSingleOrder/${id}`;
        fetch(url, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(result => {
                alert("Updated....!!!!");
                setCurrentStatus(false);
            })

    }


    return (
        <div className="manage-all-orders p-3">
            <h2 className="p-3 fw-bold text-primary"> <u>Manage All Orders</u></h2>
            <div className=" mb-3 container" style={{ maxWidth: "800px" }}>
                <div >

                    {
                        allOrders.map((orders, index) => (
                            <div className="row g-0 m-3 border border-primary p-3 rounded">
                                <div className="col-md-4">
                                    <img src={orders?.service_image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{orders?.service_name}</h5>
                                        <p className="card-text">{orders?.service_shortdescribe}</p>
                                        {orders.status === "Pending" ? <h5 className="card-text"><small className="text-danger fw-bold">{orders?.status}</small></h5> :
                                            <h5 className="card-text"><small className="text-success fw-bold">{orders?.status}</small></h5>
                                        }
                                        <h6 className="text-success">E-mail: {orders?.email}</h6>
                                        <div>
                                            <button onClick={() => handleDeleteOrders(orders?._id)} className="btn btn-danger">Delete</button>
                                            {orders.status === "Approved" ? <button onClick={() => handleStatusUpdate(orders?._id)} className="btn btn-warning ms-2 disabled">Update Status</button> :
                                                <button onClick={() => handleStatusUpdate(orders?._id)} className="btn btn-warning ms-2">Update Status</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;