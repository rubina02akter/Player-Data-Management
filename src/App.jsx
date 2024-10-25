import { useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AllPlayers from './components/AllPlayers/AllPlayers'
import Footer from './components/Footer/Footer'
import Subscribe from './components/SubscribeField/Subscribe'

function App() {
const [coins,setCoins] = useState(0)
const handleCoinBtn = () => {
  setCoins(coins + 6000000);
};



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
    <div>
     <Navbar coins={coins}></Navbar>
     <Banner handleCoinBtn={handleCoinBtn}></Banner>
     <CardContainer handleIsActive={handleIsActive} isActive={isActive}></CardContainer>
     <AllPlayers></AllPlayers>
     <Subscribe></Subscribe>
     <Footer></Footer>
    </div>
  )
}

export default App
