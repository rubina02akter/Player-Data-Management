import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-3 mt-12'>
      <h2 className='font-bold text-3xl'>Subscribe to our Newsletter</h2>
      <p className='text-gray-700'>Get the latest updates and news right in your inbox!</p>
      <div>
        <input className='border-2 py-3 px-20 rounded-lg' type="text" placeholder='Enter your email' />
        <button className='btn ml-2'>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;