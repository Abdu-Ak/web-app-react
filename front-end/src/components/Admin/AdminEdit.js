import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function AdminEdit() {
  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state;
  });

  const [errors,setErrors] = useState({})
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, SetPhone] = useState("");


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
      } else{
        setErrors(false)
      }

  }
  const handleSubmit= (e)=>{
    e.preventDefault();
    validate();
    if (!errors) {
      axios
        .post("http://localhost:3000/admin/edituser", {
          id : data.data,
          name,
          email,
          phone,
        }).then((res)=>{
          if (res.data.success) {
            navigate('/admin')
          }
        })
  }
}

  useEffect(() => {
    axios.post("http://localhost:3000/admin/getedit", {
      id: data.data,
    }).then((res)=>{
    
      setName(res.data.details.name)
      setEmail(res.data.details.email)
      SetPhone(res.data.details.phone)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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
                        Edit User
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
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
                              Name
                            </label>
                            <p className="text-danger">{errors.name}</p>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
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
                              Email
                            </label>
                            <p className="text-danger">{errors.email}</p>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
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

                      

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-dark btn-lg">
                            Submit
                          </button>
                        </div>
                      </form>
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

export default AdminEdit;
