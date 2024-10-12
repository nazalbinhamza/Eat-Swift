import React from "react";
import Nav from "./_components/nav";

export default function Home() {
  return (
    <div className="home-container">
      <Nav />
      <div className="flex justify-end md:mt-[-85px]">
        <img data-aos="fade-left" className="w-[80%] z-[-1]" src="homebg.png" />
      </div>
      <div className="flex justify-end">
        <img
          data-aos="fade-left"
          className="w-[50%] h-[50%] mt-[-180px] md:mt-[-750px]"
          src="food.png"
        />
      </div>
      <div className="flex justify-start">
        <h1 data-aos="fade-right" className="text-[20px] font-serif ml-[20px] mt-[-170px] md:ml-[70px] md:mt-[-620px] md:text-[70px]">
          Enjoy Healthy And<br></br>Delicious Food
        </h1>
      </div>
      <div className="flex justify-start">
        <button data-aos="fade-right" className=" bg-black text-white w-[120px] h-[30px] ml-[20px] mt-[-100px] md:w-[200px] md:h-[70px] rounded-full md:mt-[-400px] md:ml-[70px]">
          Order Now
        </button>
      </div>
      <div className="flex justify-start">
        <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-offset="100" className="font-bold font-kantumruy text-[15px] mt-[-30px] ml-[20px] md:text-[25px] md:ml-[90px] md:mt-[-50px] tracking-widest">
          What's on your mind?
        </h1>
      </div>
      <div data-aos="fade-right" data-aos-duration="1500" data-aos-offset="100" className="flex justify-start gap-4 md:gap-24">
        <div className="flex flex-col items-center">
          <img
            className="ml-[10px] w-[60px] h-[60px] md:h-auto md:w-[200px] md:ml-[70px] md:mt-[30px]"
            src="biriyani.png"
          />
          <h1 className="text-[10px] font-semibold md:text-[18px] md:ml-[70px]">
            Biriyani
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[60px] h-[60px] md:h-auto md:w-[140px] md:mt-[30px]"
            src="icecream.png"
          />
          <h1 className="text-[10px] font-semibold md:text-[18px]">IceCream</h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[60px] h-[60px] md:h-auto md:w-[140px] md:mt-[30px]"
            src="cakes.png"
          />
          <h1 className="text-[10px] font-semibold md:text-[18px]">Cakes</h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[60px] h-[60px] md:h-auto md:w-[165px] md:mt-[30px]"
            src="paratha.png"
          />
          <h1 className="text-[10px] font-semibold md:text-[18px]">Paratha</h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[60px] h-[60px] md:h-auto md:w-[137px] md:mt-[30px]"
            src="noodles.png"
          />
          <h1 className="text-[10px] font-semibold md:text-[18px]">Noodles</h1>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1500" data-aos-offset="100" className="flex flex-col  mt-10 ml-[5%] md:ml-[7%]">
        <h1 className="text-xl md:text-3xl font-bold mb-8">Best Place to Eat Across Cities</h1>
        <div className="flex flex-wrap justify-start gap-3 md:gap-10 mb-8 w-[370px] md:w-[1000px]">
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl md:text-[18px] md:h-[60px] md:w-[260px]">
            Bangalore
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl md:text-[18px] md:h-[60px] md:w-[260px]">
            Hyderabad
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl md:text-[18px] md:h-[60px] md:w-[260px]">
            Mumbai
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl md:text-[18px] md:h-[60px] md:w-[260px]">
            Ahmedabad
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl md:text-[18px] md:h-[60px] md:w-[260px]">
            Chennai
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl md:text-[18px] md:h-[60px] md:w-[260px]">
            Nagpur
          </button>
        </div>
        <h2 className="text-xl md:text-3xl font-bold mb-4">Explore Every Restaurant Near Me</h2>
        <div className="flex flex-wrap justify-start gap-3 md:gap-9">
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md border border-gray-100 text-[10px] md:text-[17px] hover:shadow-xl md:h-[60px] md:w-[300px]">
            Restaurants Near Me
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md border border-gray-100 text-[10px] md:text-[17px] hover:shadow-xl  md:h-[60px] md:w-[300px]">
            Top rated Restaurants Near Me
          </button>
        </div>
        <br/>
      </div>
    </div>
  );
}