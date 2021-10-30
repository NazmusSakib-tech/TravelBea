import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


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
        <div>
            <Button onClick={handleGoogleSignIN} className="btn btn-primary">Google Sign In</Button>
        </div>
    );
};

export default Login; <Button></Button>