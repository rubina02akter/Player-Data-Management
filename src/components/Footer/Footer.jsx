import './Footer.css'
const Footer = () => {
  return (
    <div className="relative">
    {/* Footer */}
    <div className="text-white bg-[#06091A] p-12 mt-64 pt-32 font-thin">
      <div className="flex justify-center items-center">
        <img src="logo-footer.png" alt="" />
      </div>
  
      <div className="grid grid-cols-3 gap-20 mt-12">
        <div>
          <p className='font-bold mb-4'>About Us</p>
          <p>We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
  
        <div>
          <h2 className='font-bold mb-4'>Quick Links</h2>
          <ul className="list-disc ml-8">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
  
        <div>
          <h2 className='font-bold mb-3'>Subscribe</h2>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <div className="flex mt-3">
            <input className='rounded-l-lg px-4' type="text" placeholder="Enter your email" />
            <button className='bg-gradient-to-r from-yellow-500 to-fuchsia-400 px-6 py-2 rounded-r-lg text-black font-bold'>Subscribe</button>
          </div>
        </div>
      </div>
      <hr className='mt-6' />
      <p className='text-center mt-6'>@2024 Your Company All Rights Reserved.</p>
    </div>
  
    {/* Newsletter */}
    <div className="absolute left-0 right-0 newsletter border-2 p-3 mx-48 rounded-xl backdrop-blur-2xl" >
      <div className='flex flex-col justify-center items-center space-y-3 border-2  bg-gradient-to-bl from-pink-100 to-blue-200 p-12 px-48 rounded-xl'>
        <h2 className='font-bold text-2xl '>Subscribe to our Newsletter</h2>
        <p className='text-gray-700 text-sm'>Get the latest updates and news right in your inbox!</p>
        <div>
          <input className='border-2 py-3 px-10 rounded-lg' type="text" placeholder='Enter your email' />
          <button className='btn ml-2  px-12 bg-gradient-to-r from-fuchsia-400 to-yellow-500'>Subscribe</button>
        </div>
      </div>
    </div>
  
  </div>
  
  
 
  );
};

export default Footer;