import React from 'react'

import { Link } from 'react-router-dom'



function Navbar() {
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
       <h4 className='text-light'>Welcome..!</h4>
     </ul>
    

     <div className="d-flex align-items-center">
       <Link to={'/signup'} style={{textDecoration:'none' }}>
       <h6 className='text-white'>Register</h6>
       </Link>
       
     </div>
   </div>
 
 </div>
 
</nav>

    </div>
  )
}

export default Navbar