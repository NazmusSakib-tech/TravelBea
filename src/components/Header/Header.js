import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo1 from '../../utilities/images/logo/logo1.jpg'

const Header = () => {
    const {user, logOut} = useAuth();
    console.log(user?.displayName);
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg">

                <Container className="sticky-md-top">

                    <Navbar.Brand as={Link} to="/home" className="nav-brand d-flex align-items-center ">
   
                        <img
                            src={logo1}
                            width="100"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <h3 className="text-primary">TravelBea</h3>

                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover" as={NavLink} to="/home">Home</Nav.Link>
                        {user?.email?<Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover ms-2" as={NavLink} to="/myOrders">My Orders</Nav.Link>: ""}
                        {user?.email?<Nav.Link  activeClassName="on-select" className="text-dark fw-bold mouse-hover ms-2" as={NavLink} to="/addNewPackage">Add New Package</Nav.Link>: ""}
                        {user?.email?<Nav.Link  activeClassName="on-select" className="text-dark fw-bold mouse-hover ms-2" as={NavLink} to="/manageAllOrders">Manage All Orders</Nav.Link>: ""}

                      <Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover ms-2 w-sm-50" as={NavLink} to="/login">Login</Nav.Link>
                        {user?.email? <Navbar.Text className="ms-2 text-primary">
                            Signed in as: <span className="user-name-text fw-bold">{user?.displayName ? user?.displayName: "" }</span>
                        </Navbar.Text> : ""}
                         {user?.email?<Button onClick={logOut} className="mx-2 logout-btn">Log Out</Button> : ""}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;