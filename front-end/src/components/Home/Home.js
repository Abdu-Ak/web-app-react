import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
 
function Home() {

  const auth = useSelector((state) => {
    return state;
  });
  const navigate = useNavigate()


  useEffect(()=>{
  
    if (auth === undefined) {
      navigate("/");
    } else if(auth === "" || auth.accountType !== "user" ){
      navigate("/");
    }
  })
  return (
   <div>
    <Navbar/>
     <div className="img d-flex justify-content-center">

<img
src="https://img.freepik.com/premium-vector/internet-shop-concept-girl-make-order-shopping-vector-buyer-sale-internet-shopping-online-woman-buy-web-shop-illustration_461812-1062.jpg?w=2000"
height="50%"
width="50%"
alt='home'
/>
</div>
   </div>
  )
}

export default Home