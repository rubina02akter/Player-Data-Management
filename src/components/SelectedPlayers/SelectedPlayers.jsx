
const SelectedPlayers = ({ selectedPlayers , handleIsActive}) => {
 
  return (
    <div className="mx-12">
      {selectedPlayers.length > 0 ? (
        <ul className="">
          {selectedPlayers.map(player => (
           <li key={player.playerId} className="space-y-3 border-2 p-2 rounded-lg mt-5 mb-5 space-y-4">
           <div className="flex">
            <div>
            <img className="w-12 h-12 object-cover rounded-lg mr-5" src={player.image} alt={player.name} />
            </div>

            <div>
            <p className='text-xl'>{player.name}</p>
           <p className='font-semibold'>{player.battingType}</p>
            </div>

           </div>

       <button>delete</button>
         </li>
       
          ))}
        </ul>
      ) : (
        <p>No players selected.</p>
      )}
      <button onClick={()=> handleIsActive("available")} className="btn bg-[#E7FE29]  font-semibold text-md">Add More Player</button>
    </div>
  );
};

export default SelectedPlayers;
