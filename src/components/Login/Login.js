import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Login.css"
import logo1 from '../../utilities/images/logo/logo1.jpg'



const Login = () => {
    const { googleSignInMethod } = useAuth();
    let history = useHistory();
    let location = useLocation();
    const redirect_uri = location.state?.from || "/home";
    const handleGoogleSignIN = () => {
        console.log("btn Click from accounts");
        googleSignInMethod()
            .then(() => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="d-flex justify-content-center align-items-center p-3 bg-dark">
            <div className="login-button d-flex justify-content-center align-items-center flex-column">
                <img src={logo1} width="150px" alt="" className="mb-2" />
                <Button onClick={handleGoogleSignIN} className="btn btn-primary">Google Sign In</Button>
            </div>
        </div>
    );
};

export default Login; <Button></Button>