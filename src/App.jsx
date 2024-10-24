import { useState } from 'react'
import './App.css'
import AllCardContainer from './components/AllCardContainer/AllCardContainer'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {
 const[isActive,setIsActive] = useState({
  cart:true,
  status: "available"
 })
 const handleIsActive = (status) =>{
 if(status == "available"){
  setIsActive({
    cart:true,
    status: "available"
   })
 }
 else{
  setIsActive({
    cart: false,
    status: "selected"
   })
 }

 }



  return (
    <div className='mx-12'>
     <Navbar></Navbar>
     <Banner></Banner>
     <AllCardContainer handleIsActive={handleIsActive} isActive={isActive}></AllCardContainer>
    </div>
  )
}

export default App
