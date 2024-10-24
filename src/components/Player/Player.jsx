import './Player.css'
const Player = ({player}) => {
  const{playerId,name,country,image,role,battingType,biddingPrice} = player
  return (
    <div className='card space-y-3'>
      <img src={image} alt="" />
      <p className='text-xl'><i class="fa-solid fa-user w-6 text-2xl"></i>{name}</p>
      <div className='flex justify-between items-center text-center text-gray-500'>
        <p><i class="fa-solid fa-flag w-5"></i>{country}</p>
        <button className='btn'>All-rounder</button>
      </div>
      <hr />
      <p className='font-semibold'>Rating</p>
      <p className='font-semibold'>{battingType}</p>
      <div className='flex justify-between items-center text-center'>
        <p className='font-semibold'>Price: ${biddingPrice}</p>
        <button className='btn'>Choose Player</button>
      </div>
    </div>
  );
};

export default Player;