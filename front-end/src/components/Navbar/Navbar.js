import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'



function Navbar() {


  const navigate =useNavigate()
  const dispatch = useDispatch()
 
const  handleLogout = ()=>{
   dispatch({
    type: "RemoveToken",
   })
   navigate('/')
}
 



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
          <Link to={'/home'} style={{textDecoration:'none'}} >
          <h3 className='text-white'>Home</h3>
          </Link>
        
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

    </div>
  )
}

export default Navbar