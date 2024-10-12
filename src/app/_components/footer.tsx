import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer  data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" className="bg-gray-200 text-gray-700 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row justify-between md:items-start">
          {/* Company Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="font-bold text-xl">Company</h1>
            <ul className="pt-4">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Swiggy Corporate</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Swiggy One</a></li>
              <li><a href="#" className="hover:underline">Swiggy Instant</a></li>
              <li><a href="#" className="hover:underline">Swiggy Dineout</a></li>
              <li><a href="#" className="hover:underline">Swiggy Genie</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="font-bold text-xl">Contact Us</h1>
            <ul className="pt-4">
              <li><a href="#" className="hover:underline">Help & Support</a></li>
              <li><a href="#" className="hover:underline">Partner with Us</a></li>
              <li><a href="#" className="hover:underline">Ride with Us</a></li>
            </ul>
          </div>

          {/* Available In Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="font-bold text-xl">Available in:</h1>
            <ul className="pt-4">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>

          {/* Life at Swiggy Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="font-bold text-xl">Life at Swiggy</h1>
            <ul className="pt-4">
              <li><a href="#" className="hover:underline">Explore with Swiggy</a></li>
              <li><a href="#" className="hover:underline">Swiggy News</a></li>
              <li><a href="#" className="hover:underline">Snackables</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="font-bold text-xl">Legal</h1>
            <ul className="pt-4">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className='flex justify-center md:justify-end'>
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-end space-x-4">
           <img className="h-[90px] w-[150px]" src="Logo.png" alt="Logo" />
          </div>
          <p>&copy; {new Date().getFullYear()} Eat Swift. All rights reserved.</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;