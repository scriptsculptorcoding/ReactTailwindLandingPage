import React from "react";

const Newsletter = () => {
  return (
    <div className= 'w-full py-16 text-white px-4'>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className='"md:text-4xl sm:text-3xl text-xl font-bold py-2'>
            Do you need help to optimize your earnings?
          </h1>
          <p>Sign up to our newsletter and stay up to date!</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="w-full p-3 flex width-full rounded-lg text-black"
              type="email"
              placeholder="Please enter your email address"
            ></input>
            <button className= 'text-black bg-[#00df9a] w-[100px] rounded-lg ml-4 my-6 h-12 font-medium'>Notify me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
