
const Footer = () => {
  return (
    <div className="text-white bg-[#06091A] mt-56 p-12">
      <div className="flex justify-center items-center"><img src="logo-footer.png" alt="" /></div>
     
      <div  className="grid grid-cols-3 gap-20 mt-12 ">
       
       <div>
       <p>About Us</p>
       <p>We are a passionate team dedicated to providing the best services to our customers.</p>
       </div>

       <div>
        <h2>Quick Links</h2>
        <ul className="list-disc">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
       </div>
       <div>
        <h2>Subscribe</h2>
        <p>Subscribe to our newsletter for the latest updates.</p>
        <div className="flex">
          <input type="text" />
          <button></button>
        </div>
       </div>



      </div>
    </div>
  );
};

export default Footer;