import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "../../axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function Login() {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const navigate = useNavigate()

const handleSubmit = (e)=>{
  e.preventDefault();
  axios.post('/postLogin',{
    email,
    password
  }).then((res)=>{
    if (res.data.success) {
      navigate('/home')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  })
}

  return (
    <div>
      <Navbar />
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h3 className="mb-3">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    value={email}
                  />
                  <label className="form-label" for="form1Example13">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    value={password}
                  />
                  <label className="form-label" for="form1Example23">
                    Password
                  </label>
                </div>

                <button type="submit" className="btn btn-dark  btn-block">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
