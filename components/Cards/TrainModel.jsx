import React from "react";

const TrainModel = () => {
  return (
    <div className="w-[250px] my-6 border border-gray-200 rounded-xl shadow-md">
      <div className="flex border-b px-4 py-4">
        <p className="text-xl font-semibold">Training</p>
      </div>
      <div className="flex justify-center items-center p-4">
        <button className="py-1 px-4 border bg-gray-300 rounded-md">Train Model</button>
      </div>
    </div>
  );
};

export default TrainModel;
