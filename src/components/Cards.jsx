import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="Single user pic"
          ></img>
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center py-4 text-4xl font-bold">100PLN</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8">500 GB Storage</p>
            <p className="py-2 mx-8">1 Granted User</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[100px] rounded-lg mx-auto my-6 h-12 font-medium">
            Start trial
          </button>
        </div>
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 relative">
          <div className="absolute top-0 right-0 bg-yellow-500 text-white px-1 py-1 rounded-lg mt-2 mr-2 ">
            Best Seller
          </div>
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="Single user pic"
          ></img>
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center py-4 text-4xl font-bold">150PLN</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8">1 TB Storage</p>
            <p className="py-2 mx-8">2 Granted Users</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[100px] rounded-lg mx-auto my-6 h-12 font-medium">
            Start trial
          </button>
        </div>
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="Single user pic"
          ></img>
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center py-4 text-4xl font-bold">200PLN</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8">2 TB Storage</p>
            <p className="py-2 mx-8">3 Granted Users</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[100px] rounded-lg mx-auto my-6 h-12 font-medium">
            Start trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
