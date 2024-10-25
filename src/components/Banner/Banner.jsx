// import './Banner.css'

const Banner = ({handleCoinBtn}) => {

  return (
    <div className=' mx-12 bg-image py-12 text-center space-y-3 items-center flex rounded-xl flex-col bg-gradient-to-bl from-red-200 to-blue-950'>
      <img src="banner-main.png" alt="" />
      <h3 className='font-bold text-3xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
      <p className='text-white'>Beyond Boundaries Beyond Limits</p>
       <button
       onClick={handleCoinBtn}
        className='btn bg-[#E7FE29] border-black outline-[#E7FE29]'>Claim Free Credit</button>    
    </div>
  );
};

export default Banner;