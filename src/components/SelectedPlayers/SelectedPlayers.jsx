
const SelectedPlayers = ({ selectedPlayers , handleIsActive, handleDeletePlayer}) => {
 
  return (
    <div className="mx-12">
      {selectedPlayers.length > 0 ? (

        <div>
          {selectedPlayers.map(player => (
           <div className="space-y-3 border-2 p-2 rounded-lg mt-5 mb-5 space-y-4 flex justify-between items-center">
           <div key={player.playerId} >
           <div className="flex">
            <div>
            <img className="w-12 h-12 object-cover rounded-lg mr-5" src={player.image} alt={player.name} />
            </div>

            <div>
            <p className='text-xl'>{player.name}</p>
           <p className='font-semibold'>{player.battingType}</p>
            </div>
           </div>

     
         </div>

         <div>
          <button onClick={() => handleDeletePlayer(player.playerId)} className="btn bg-white border-none outline-none mb-4 flex justify-center items-center"><img className="w-8 mb-2" src="delete.png" alt="" />Delete</button>
         </div>
         </div>
          ))}
        </div>
      ) : (
        <p className="text-3xl font-bold text-center m-5 p-6">No players selected.</p>
      )}
      <button onClick={()=> handleIsActive("available")} className="btn bg-[#E7FE29]  font-semibold text-md">Add More Player</button>
    </div>
  );
};

export default SelectedPlayers;
