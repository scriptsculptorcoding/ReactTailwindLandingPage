import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx:auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
        <p className="text-[#00df9a] font-bold"> DATA ANALYTICS DASHBOARD</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">Manage Data Analytics with Us </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          corporis minus fugit rerum temporibus sit nesciunt ex praesentium id
          perspiciatis cumque, deserunt dolores accusantium. Reprehenderit nam
          maiores beatae reiciendis alias!
        </p>
        <button className=' bg-black text-gray-200 w-[150px] rounded-lg mx-auto md:mx-0 my-6 py-3' > Click to get started  </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
