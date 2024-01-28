import React from "react";
import { ReactTyped } from "react-typed";

/* In Tailwind CSS, md stands for the medium breakpoint-so medium and larger screens (small desktops-tablets), 
sm stands for the small breakpoint - so small and larger screens (mobile devices). */

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full justify-center text-center flex flex-col mx-auto h-screen">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
        Analyzing data for business growth
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        Optimize with Data Insights
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-3" >
            Fast, flexible financing for
          </p>
          <ReactTyped
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={150}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-red-300 py-3 ">Monitor data analysis to increase your revenue</p>
        <button className= "text-black bg-[#00df9a] w-[150px] rounded-lg mx-auto my-6 py-3">Lets get started!</button>
      </div>
    </div>
  );
};

export default Hero;
