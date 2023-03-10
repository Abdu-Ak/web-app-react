import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";

function Signup() {
  const navigate = useNavigate();
  
  const [errors,setErrors] = useState({})
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [password, setPassword] = useState("");

const validate = ()=>{  
    if (name==="") {
       setErrors({name:'username required..!'})
    } else if(!/^[A-Za-z\s]*$/.test(name)) {
      setErrors({name:'Username should only contain alphabets and space'})
    }else if (email==="") {
      setErrors({email:'email required..!'})
    }else if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setErrors({email:'Invalid email..!'})
    }else if (phone==="") {
      setErrors({phone:'phone number required..!'})
    }else if (phone.length !== 10) {
      setErrors({phone:'Invalid phone number..!'})
    }else if (password==="") {
      setErrors({password:'Password required..!'})
    }else if (password.length < 4) {
      setErrors({password:'Password should have atleast 4 characters..!'})
    } else{
      setErrors(false)
    }

}

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
   if (!errors) {
    axios
    .post("/register", {
      name,
      email,
      phone,
      password,
    })
    .then((response) => {
      console.log(response);
      navigate("/");
    });
   }
   
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 mb-4 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                                
                              }}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                            <p className="text-danger">{errors.name}</p>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 mb-4 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                            <p className="text-danger">{errors.email}</p>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone fa-lg me-3 mb-4 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="form3Example4c"
                              value={phone}
                              onChange={(e) => {
                                SetPhone(e.target.value);
                              }}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4c">
                              Phone Number
                            </label>
                            <p className="text-danger">{errors.phone}</p>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 mb-4 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4cd">
                              password
                            </label>
                            <p className="text-danger">{errors.password}</p>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            Already have a account ?{" "}
                            <Link
                              className="text-danger  "
                              style={{
                                textDecoration: "none",
                                fontWeight: "bold",
                              }}
                              to={"/"}
                            >
                              {" "}
                              Login
                            </Link>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-dark btn-lg">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
