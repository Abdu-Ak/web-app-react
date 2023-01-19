/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'


function profile() {
const [image,setImage] = useState(null)
const [dp,setDp] = useState(null)
const [details,setDetails] = useState([])  

const dispatch = useDispatch()
const navigate = useNavigate()
const auth = useSelector((state)=>{
    return state;
})

const handleImage =()=>{
   
  let file = new FormData()
  file.append("image",image);
    axios
      .post(`http://localhost:3000/setDp/${auth.id}`,file , {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res)=>{
        setDp(res.data.image)
        setImage(null)
      })
}
const  handleLogout = ()=>{
    dispatch({
     type: "RemoveToken",
    })
    navigate('/')
 }


useEffect(()=>{
   

   
    if (auth === undefined) {
        navigate("/");
      } else {
        if (auth.token === "" || auth.accountType !== "user") {
          navigate("/");
        }else{
            axios.post("http://localhost:3000/profile",{
                token: auth.token,
                id: auth.id
        
            }).then((res)=>{
                 
                if (res.data.success) {
                    setDetails(res.data.details)
                    setDp(res.data.details.image.url)
                }
              
            })
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
       <li className="nav-item">
       
         <h3 className='text-white'>Profile</h3>
         
       
       </li>
     </ul>
    

     <div class="d-flex align-items-center">
       <Link to={'/profile'}>
       <img
           src="https://freesvg.org/img/abstract-user-flat-4.png"
           className="rounded-circle"
           height="25"
           alt="Black and White Portrait of a Man"
           loading="lazy"
         />
       </Link>
 
       <h6 className='text-white   px-4 me-4 mt-2  ' style={{cursor:'pointer'}} onClick={handleLogout} >Logout</h6>

      
       
      
     </div>
   </div>
   
 </div>

</nav>
  <div className="row justify-content-center my-5 py-5">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src={dp ? dp :  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"  }  alt="avatar"
              className="rounded-circle img-fluid" style={{width : '150px' ,height:"200px" }}/>
            <h5 className="my-3">{details.name}</h5>
            <p className="text-muted mb-1">{details.email}</p>
            <p className="text-muted mb-4">{details.phone}</p>
            <div className="mb-2">
             <div>
             <input type="file" className='btn btn-outline-dark'  onChange={(event) => {
              setImage(event.target.files[0]);
            }} />
                </div> 
                <div>
                <button className='btn btn-outline-dark mt-3' type='button'onClick={handleImage} >{dp ? "Change image" : "Add image" }</button>
                </div>
            

              
           
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>

  )
}

export default profile