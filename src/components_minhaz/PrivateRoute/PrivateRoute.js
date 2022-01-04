import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    // const { user, isLoading } = useAuth();
    const userInfo = window?.localStorage?.getItem('userInfo') && JSON?.parse(window?.localStorage?.getItem('userInfo'));
    let location = useLocation();
    console.log(userInfo);
    // if (isLoading) {
    //     return 'loading'
    // }
    if (userInfo?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;