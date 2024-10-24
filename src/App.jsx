import { useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AllPlayers from './components/AllPlayers/AllPlayers'

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
     <CardContainer handleIsActive={handleIsActive} isActive={isActive}></CardContainer>
     <AllPlayers></AllPlayers>
    </div>
  )
}

export default App
