import { useState } from "react";

const CoinCounter = () => {
 const[coins, setCoins] = useState(0)

 const handleCointBtn = () =>{
  setCoins(coins * 2)
 }

  return (
    <div>
      
    </div>
  );
};

export default CoinCounter;