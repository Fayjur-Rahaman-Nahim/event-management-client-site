import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from '../Loading/ErrorMessage';
import Loading from '../Loading/Loading';
import { registerUser } from '../state/actions/userActions';
import './Auth.css';
const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [picUrl, setPicUrl] = useState('https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg');
  const [password2, setPassword2] = useState('')
  const [picMessage, setPicMessage] = useState(null);
  const { register, reset, handleSubmit } = useForm();
  const imageUploadHandler = (pics) => {
    if (!pics) {
      return setPicMessage('Please select a image')
    };
    setPicMessage(null)
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "zembergoWebData");
      data.append("cloud_name", "dydja7ouv");
      fetch("https://api.cloudinary.com/v1_1/dydja7ouv/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPicUrl(data?.url?.toString());
        })
        .catch((err) => {
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const onSubmit = async subData => {
    if (password2 !== subData.password) {
      setErr(`Password do not matched!`);
      return;
    } else {
      setErr(false)
      dispatch(registerUser(subData, picUrl, reset))
    };
  }
  useEffect(() => {
    if (userInfo) {
      navigate('/login')
    }
  }, [navigate, userInfo])
  const errMessage = err || error;
  return (
    <div className="py-5 mt-5">
      <Container>
        <h2 className="text-center">Register</h2>
        {errMessage && <ErrorMessage style={{ backgroundColor: 'red' }}>
          {errMessage}
        </ErrorMessage>}
        {loading && <Loading className="my-2" />}
        <form onSubmit={handleSubmit(onSubmit)} className="d-block m-auto">
          <div className="col-lg-5 d-block m-auto text-start">
            <label htmlFor="orofile-photo">Name</label><br />
            <input className="mt-2 d-block" type="text"{...register("name", { required: true, minLength: 0 })} placeholder="Name" required />
          </div>
          <br />
          <div className="col-lg-5 d-block m-auto text-start">
            <label htmlFor="orofile-photo">Email</label><br />
            <input className="mt-2" type="email"{...register("email", { required: true, minLength: 0 })} placeholder="Email" required />
          </div>
          <br />
          <div className="col-lg-5 d-block m-auto text-start">
            {picMessage && <ErrorMessage style={{ backgroundColor: 'red' }}>
              {picMessage}
            </ErrorMessage>}
            <label htmlFor="orofile-photo">Select Profile Photo</label>
            <input type="file" onChange={(e) => imageUploadHandler(e.target.files[0])} id="custom-file"
            />
          </div>
          <br />
          <div className="col-lg-5 d-block m-auto text-start">
            <label htmlFor="orofile-photo">Password</label><br />
            <input className="mt-2" type="password"{...register("password", { required: true, minLength: 0 })} placeholder="Password" required />
          </div>
          <br />
          <div className="col-lg-5 d-block m-auto text-start">
            <label htmlFor="orofile-photo">Confirm Password</label><br />
            <input type="password" onBlur={(e) => setPassword2(e.target.value)} className="mt-2" placeholder="Confirm Password" required />
          </div>
          <br />
          <div className="col-lg-5 d-block m-auto text-start">
            <button className="btn btn-primary mt-2 px-5 py-2 text-end d-block m-auto" type="submit">Register </button>
          </div>
        </form>
        <div className="text-center py-4">
          <span>Already have an account  <Link to="/login" className="text-danger">Login</Link></span>
        </div>
      </Container>
    </div>
  );
};

export default Register;