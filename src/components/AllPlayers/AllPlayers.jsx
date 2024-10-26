import { useEffect, useState } from "react";
import Player from "../Player/Player";


const AllPlayers = ({handleSelectPlayer}) => {
 const [players, setPlayers] = useState([]);

 useEffect(() => {
  fetch('./fake.json')
  .then(res => res.json())
  .then(data => {
    setPlayers(data)
  })

 },[])
  




  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-5 mx-12">
    {
      players.map((p)=><Player key={p.playerId} player={p} handleSelectPlayer={handleSelectPlayer}></Player>)
    }
    </div>
  );
};

export default AllPlayers;