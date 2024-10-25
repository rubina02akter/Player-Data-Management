import './Player.css'
const Player = ({player,handleSelectPlayer}) => {
  const{playerId,name,country,image,role,battingType,biddingPrice,bowlingType} = player
  return (
    <div className='card space-y-3'>
      <img src={image} alt="" />
      <p className='text-xl'><i class="fa-solid fa-user w-6 text-2xl"></i>{name}</p>
      <div className='flex justify-between items-center text-center text-gray-500  font-normal'>
        <p><i class="fa-solid fa-flag w-5"></i>{country}</p>
        <button className='btn'>{role}</button>
      </div>
      <hr />
      <p className='font-semibold'>Rating</p>
      <div className='flex justify-between'>
      <p className=' font-medium text-md'>{battingType}</p>      
      <p className='font-semibold'>{bowlingType}</p>
      </div>
      
      <div className='flex justify-between items-center text-center'>
        <p className='font-medium'>Price: ${biddingPrice}</p>
        <button onClick={() => handleSelectPlayer(player)} className='btn font-thin bg-white text-black outline-none border-gray-300'>Choose Player</button>
      </div>
    </div>
  );
};

export default Player;