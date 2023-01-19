import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import Swal from "sweetalert2";



function AdminUser() {
  const [users, setUSers] = useState([]);
  const [search, setsearch] = useState(null);
  const [filteredDocs, setFilteredDocs] = useState([]);
  const dispatch=useDispatch()
  const navigate = useNavigate()
  

  const handleLogout = () => {
    dispatch({
      type: "RemoveToken",
    });
    navigate("/");
  };

  
const handleSearch = (e)=>{
    setsearch(e.target.value);
   if (search !== "") {
    const filtered = users.filter((value) =>
    value.name.toLowerCase().includes(search.toLowerCase())
  );
  setFilteredDocs(filtered);
   }
}


  useEffect(() => {
    axios.post("http://localhost:3000/admin/getusers").then((res) => {
      setUSers(res.data.details);
    });
  });

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
              <li className="nav-item">
                <h3 className="text-white">Admin Panel</h3>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <div className="container-fluid me-5 ">
                
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    aria-describedby="search-addon"
                    onChange={(e)=>{handleSearch(e)}}
                  />
               
              </div>
              <Link to={"/adduser"} style={{textDecoration:"none"}}>
              <div className="d-flex me-5 pe-3 "> 
                <h6 className="text-white">
                  Add
                </h6>
                <i className="text-white fa ms-1 mt-1 fa-plus"></i>
              </div>
              </Link>
              <h6 className="text-white" onClick={handleLogout}>
                Logout
              </h6>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="table-responsive m-5 p-5">
          <table
            id="userTable"
            className="table table-secondary table-hover  table-bordered border-dark"
          >
            <thead>
              <tr>
                <th scope="col"> NAME</th>
                <th scope="col">E-MAIL</th>
                <th scope="col">PHONE NUMBER</th>
                <th scope="col">PROFILE</th>
                <th scope="col">OPTION</th>
              </tr>
            </thead>

            <tbody>
              {search ===null && users.map((data)=>{
                return(
                    <tr key={data._id}>
                <td>{data.name} </td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.image ? <img src={data.image.url} alt="profile" style={{width:'100px', height:"100px" }}  /> : <p>No profile</p> } </td>
                <td style={{ width: "20%" }}>
                  <div class="d-flex justify-content-evenly ">
                      <button className="btn btn-outline-primary" onClick={()=>{
                         dispatch({
                            type: "addData",
                            data: data._id
                          });
                          navigate("/edituser")
                      }} ><i className="fa fa-edit"></i></button>
                      <button className="btn btn-outline-danger" onClick={()=>{
                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                          })
                          .then((result) => {
                            console.log(result);
                            if (result.isConfirmed) {
                                axios.post("http://localhost:3000/admin/delete", {
                            id: data._id,
                          }).then((res)=>{
                               if (res.data.success) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                  )
                               }
                          })
                              
                            }
                          })
                       
                      }} ><i className="fa fa-trash"></i></button>
                  </div>
                </td>
              </tr>
                )
              })}
              {search ==="" && users.map((data)=>{
                return(
                    <tr key={data._id}>
                <td>{data.name} </td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.image ? <img src={data.image.url} alt="profile" style={{width:'100px', height:"100px" }}  /> : <p>No profile</p> } </td>
                <td style={{ width: "20%" }}>
                  <div class="d-flex justify-content-evenly ">
                      <button className="btn btn-outline-primary" onClick={()=>{
                         dispatch({
                            type: "addData",
                            data: data._id
                          });
                          navigate("/edituser")
                      }} ><i className="fa fa-edit"></i></button>
                      <button className="btn btn-outline-danger" onClick={()=>{
                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                          })
                          .then((result) => {
                            console.log(result);
                            if (result.isConfirmed) {
                                axios.post("http://localhost:3000/admin/delete", {
                            id: data._id,
                          }).then((res)=>{
                               if (res.data.success) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                  )
                               }
                          })
                              
                            }
                          })
                       
                      }} ><i className="fa fa-trash"></i></button>
                  </div>
                </td>
              </tr>
                )
              })}
              {search !==null &&  filteredDocs.map((data)=>{
                return(
                    <tr key={data._id}>
                <td>{data.name} </td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.image ? <img src={data.image.url} alt="profile" style={{width:'100px', height:"100px" }}  /> : <p>No profile</p> } </td>
                <td style={{ width: "20%" }}>
                  <div class="d-flex justify-content-evenly ">
                      <button className="btn btn-outline-primary" onClick={()=>{
                         dispatch({
                            type: "addData",
                            data: data._id
                          });
                          navigate("/edituser")
                      }} ><i className="fa fa-edit"></i></button>
                      <button className="btn btn-outline-danger" onClick={()=>{
                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                          })
                          .then((result) => {
                            console.log(result);
                            if (result.isConfirmed) {
                                axios.post("http://localhost:3000/admin/delete", {
                            id: data._id,
                          }).then((res)=>{
                               if (res.data.success) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                  )
                               }
                          })
                              
                            }
                          })
                       
                      }} ><i className="fa fa-trash"></i></button>
                  </div>
                </td>
              </tr>
                )
              })}
               {filteredDocs.length === 0 && search !== null && (
          <div className="d-flex justify-content-center mt-5 pt-5 ">
            <h1>No result</h1>
          </div>
        )} 
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default AdminUser;
