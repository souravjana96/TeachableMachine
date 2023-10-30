import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="h-[700px] bg-[#0e3c6e] flex justify-center items-center">
        <div className="h-[370px] w-[1200px] flex">
          <div className="w-[50%] text-white">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-[#f7b504]"></div>
              <p className="capitalize text-lg">CREATED BY VIZUARA</p>
            </div>
            <h1 className="text-6xl my-6 font-bold">AI Labs for JSPM Group</h1>
            <p className="text-lg my-1">Created by IIT Madras graduates, AI PhDs from USA.</p>
            <p className="text-lg mt-4 mb-10">Completely aligned with the CBSE syllabus.</p>
            <div>
              <button className="bg-white text-black px-5 py-2 rounded-full">
                Start Course
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <img
              src={
                "https://jspm-ai-course.mywpsite.org/wp-content/uploads/2023/07/20200316170356-GettyImages-1145585734.jpeg"
              }
              alt="vizuara"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
