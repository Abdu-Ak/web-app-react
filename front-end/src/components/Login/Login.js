import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const auth = useSelector((state) => {
    return state;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/postLogin", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.success) {
         
          dispatch({
            type: "StoreToken",
            token : res.data.token,
            accountType:res.data.accountType,
            id: res.data.id
          })
        
           if (res.data.accountType === "admin") {
             navigate('/admin')
           }else if(res.data.accountType === "user"){
            navigate('/home')
           }
             
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  useEffect(()=>{
  
   if (auth !==undefined) {
      if(auth.token !== ""){
        if (auth.accountType === "user") {
          navigate("/home");
        } else if(auth.accountType === "admin") {
          navigate('/admin')
        }
      }
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <h4 className="text-light">Welcome..!</h4>
            </ul>

            <div className="d-flex align-items-center">
              <Link to={"/signup"} style={{ textDecoration: "none" }}>
                <h6 className="text-white">Register</h6>
              </Link>
            </div>
          </div>
        </div>
      </nav>
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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
