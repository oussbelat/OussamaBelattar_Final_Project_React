import React from "react";
import Images from "../constant/image"; 
import '../App.css'

export default function About() {

  return (
    <>
     
      <div
        className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center g"
       
      >
        <div className="absolute inset-0  bg-opacity-40" />
        <h2 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold z-10 tracking-wide">
          ABOUT
        </h2>
      </div>

  
      <div className="max-w-6xl mx-auto px-6 py-12 font-sans">
        <div className="flex flex-col md:flex-row gap-10 items-start">
         
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow">
            <img
              src={Images.fr5}
              alt="Our Journey"
              className="w-full h-140 object-cover rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-90 cursor-pointer"
              draggable={false}
            />
          </div>

        
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl  mb-6">Our Story</h1>
            <p className="text-gray-400 leading-relaxed mb-6">
             Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
            </p>

            <div className="m-7 border-l-4 border-gray-200 pl-4">
              <p className=" text-gray-400 mb-2">
                "Creativity is just connecting things. When you ask creative
                people how they did something, they feel a little guilty because
                they didn't really do it. They just saw something. It seemed
                obvious to them after a while."
              </p>
              <p className="font-medium  text-gray-500">- Steve Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


