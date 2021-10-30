import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [currentStatus, setCurrentStatus] = useState(true)


    useEffect(() => {
        fetch('http://localhost:5000/manageAllOrders')
            .then(res => res.json())
            .then(result => {

                setAllOrders(result);
                setCurrentStatus(true);
                console.log(result);
            })
    }, [currentStatus])

    // For Delete Product
    const handleDeleteOrders = (id, index) => {

        if (window.confirm("Are You Sure")) {

            const url = `http://localhost:5000/deleteOrder/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert("Your Order Deleted")
                        // allOrders[index].status="Approved";
                    }
                })
        }

    }

    //Update Status of Package
    const handleStatusUpdate = (id, index) => {
        const url = `http://localhost:5000/updateSingleOrder/${id}`;
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
        <>
            <h2>Manage All Orders</h2>
            <div class=" mb-3 container" style={{ maxWidth: "800px" }}>
                <div >

                    {
                        allOrders.map((orders, index) => (
                            <div class="row g-0 m-3 border border-primary p-3 rounded">
                                <div class="col-md-4">
                                    <img src={orders?.service_image} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{orders?.service_name}</h5>
                                        <p class="card-text">{orders?.service_shortdescribe}</p>
                                        {orders.status === "Pending" ? <h5 class="card-text"><small class="text-danger">{orders?.status}</small></h5> :
                                            <h5 class="card-text"><small class="text-success">{orders?.status}</small></h5>
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

        </>
    );
};

export default ManageAllOrders;