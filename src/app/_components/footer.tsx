import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer  data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" className="bg-gray-200 text-gray-700 py-7 mt-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row lg:flex-row md:justify-between lg:justify-between md:items-start lg:items-center">
          {/* Company Section */}
          <div className="mb-6 md:mb-0 lg:mb-0">
            <h1 className="font-bold text-lg md:text-xl lg:text-lg">Company</h1>
            <ul className="pt-4">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Eatswift Corporate</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Eatswift One</a></li>
              <li><a href="#" className="hover:underline">Eatswift Instant</a></li>
              <li><a href="#" className="hover:underline">Eatswift Dineout</a></li>
              <li><a href="#" className="hover:underline">Eatswift Genie</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0 lg:mb-0">
            <h1 className="font-bold text-lg md:text-xl lg:text-lg">Contact Us</h1>
            <ul className="pt-4">
              <li><a href="#" className="hover:underline">Help & Support</a></li>
              <li><a href="#" className="hover:underline">Partner with Us</a></li>
              <li><a href="#" className="hover:underline">Ride with Us</a></li>
            </ul>
          </div>

          {/* Available In Section */}
          <div className="mb-6 md:mb-0 lg:mb-0">
            <h1 className="font-bold text-lg md:text-xl lg:text-lg">Available in:</h1>
            <ul className="pt-4">
              <li><a href="#" className="hover:underline">Bangalore</a></li>
              <li><a href="#" className="hover:underline">Kerala</a></li>
              <li><a href="#" className="hover:underline">Hyderabad</a></li>
              <li><a href="#" className="hover:underline">Delhi</a></li>
              <li><a href="#" className="hover:underline">Mumbai</a></li>
              <li><a href="#" className="hover:underline">Pune</a></li>
            </ul>
          </div>

          {/* Life at Swiggy Section */}
          <div className="mb-6 md:mb-0 lg:mb-0">
            <h1 className="font-bold text-lg md:text-xl lg:text-lg">Life at Eatswift</h1>
            <ul className="pt-4">
              <li><a href="#" className="hover:underline">Explore with Eatswift</a></li>
              <li><a href="#" className="hover:underline">Eatswift News</a></li>
              <li><a href="#" className="hover:underline">Snackables</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="mb-6 md:mb-0 lg:mb-0">
            <h1 className="font-bold text-lg md:text-xl lg:text-lg">Legal</h1>
            <ul className="pt-4">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className='flex justify-center md:justify-end lg:justify-end'>
        <div className="text-center md:text-left lg:text-left">
          <div className="flex justify-center md:justify-end lg:justify-end space-x-4">
           <img className="h-[90px] w-[150px]" src="Logo.png" alt="Logo" />
          </div>
          <p>&copy; {new Date().getFullYear()} WebCraftCo. All rights reserved.</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;