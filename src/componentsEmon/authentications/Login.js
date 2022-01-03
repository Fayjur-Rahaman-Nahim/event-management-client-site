import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ErrorMessage from '../Loading/ErrorMessage';
import Loading from '../Loading/Loading';
import { login } from '../state/actions/userActions';
import './Auth.css';
const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const onSubmit = async subData => {
        dispatch(login(subData, reset, navigate))
    };

    useEffect(() => {
        if (userInfo) {
            navigate(location?.state?.from || '/')
        }
    }, [location?.state?.from, navigate, userInfo])
    return (
        <div className="py-5 mt-5">
            <Container>
                <h2 className="text-center">Login</h2>
                {error && <ErrorMessage style={{ backgroundColor: 'red' }}>
                    {error}
                </ErrorMessage>}
                {loading && <Loading className="my-2" />}
                <form onSubmit={handleSubmit(onSubmit)} className="d-block text-start">
                    <br />
                    <div className="col-lg-5 d-block m-auto">
                        <label htmlFor="orofile-photo">Email</label><br />
                        <input className="mt-2" type="email"{...register("email", { required: true, minLength: 0 })} placeholder="Email" required />
                    </div>
                    <br />
                    <div className="col-lg-5 d-block m-auto">
                        <label htmlFor="orofile-photo">Password</label><br />
                        <input className="mt-2" type="password"{...register("password", { required: true, minLength: 0 })} placeholder="Password" required />
                    </div>
                    <br />
                    <div className="col-lg-5 d-block m-auto text-start">
                        <button className="btn btn-primary mt-2 px-5 py-2 text-end d-block m-auto" type="submit"> Login </button>
                    </div>

                </form>
                <div className="text-center py-4">
                    <Link to="/register" className="text-danger">create a new account</Link>
                </div>
            </Container>
        </div>
    );
};

export default Login;