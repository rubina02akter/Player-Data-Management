import { useEffect, useState } from "react";
import Player from "../Player/Player";


const AllPlayers = () => {
 const [players, setPlayers] = useState([]);

 useEffect(() => {
  fetch('./fake.json')
  .then(res => res.json())
  .then(data => {
    setPlayers(data)
  })

 },[])
  




  return (
    <div className="grid grid-cols-3 gap-6 mt-5">
    {
      players.map((p)=><Player player={p}></Player>)
    }
    </div>
  );
};

export default AllPlayers;