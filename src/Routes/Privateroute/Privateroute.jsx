import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const Privateroute = ({ children }) => {
    let location = useLocation()
    let { users, loading } = useContext(AuthContext)
    if (loading) {
        return <Spinner animation="grow" />;
    }
    if (!users) {
        return <Navigate
            to='/login' state={{ from: location }} replace
        ></Navigate>
    }
    return children
};

export default Privateroute;