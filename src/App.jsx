import { useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

import Footer from './components/Footer/Footer'
import Subscribe from './components/SubscribeField/Subscribe'
import { ToastContainer, toast,Bounce } from 'react-toastify';

function App() {
  //Credin value added
const [coins,setCoins] = useState(0);
const [selectedPlayers, setSelectedPlayers] = useState([]);
const handleCoinBtn = () => {
  setCoins(coins + 6000000);

  //tostify here

  toast(`Credit added to your Account`)
};


//active handler 
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

const handleSelectPlayer = (player) => {
  setSelectedPlayers((prev) => {
   
    const matchingPlayers = prev.filter((selected) => selected.playerId === player.playerId);

    if (matchingPlayers.length === 0) {
      return [...prev, player];
    } else {
      toast(`Player ${player.name} is already selected!`);
      return prev; 
    }
  });
};

//handle delete player
const handleDeletePlayer = (playerId) => {
  setSelectedPlayers((prev) => prev.filter((player) => player.playerId !== playerId));
};


  return (
    <div>
     <Navbar coins={coins}></Navbar>
     <Banner handleCoinBtn={handleCoinBtn}></Banner>
     <CardContainer handleIsActive={handleIsActive} isActive={isActive} handleSelectPlayer={handleSelectPlayer} selectedPlayers={selectedPlayers} handleDeletePlayer={handleDeletePlayer}></CardContainer>
     <Subscribe></Subscribe>
     <Footer></Footer>
     <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      progress={undefined}
      transition={Bounce}
      />
    </div>
  )
}

export default App
