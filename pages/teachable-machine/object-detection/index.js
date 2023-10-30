import React, { useState } from "react";
import SampleCollectCard from "@/components/Cards/SampleCollectCard";
import { MdAddBox } from "react-icons/md";
import TrainModel from "@/components/Cards/TrainModel";
import Preview from "@/components/Cards/Preview";

const ObjectDetection = () => {
  const [samples, setSamples] = useState([
    {
      name: "Class 1",
      images: [],
    },
  ]);

  const addNewClass = () => {
    setSamples([
      ...samples,
      {
        name: "Class " + (samples.length + 1),
        images: [],
      },
    ]);
  };
  return (
    <div className="flex justify-center items-center gap-6 m-5">
      <div className="w-[600px]">
        {samples.map((ele, i) => {
          return (
            <SampleCollectCard
              key={i}
              samples={samples}
              setSamples={setSamples}
              index={i}
            />
          );
        })}

        <button
          type="button"
          className="text-gray-500 bg-transparent border-dashed border-2 border-gray-300 hover:border-[#1b68d2] hover:text-[#1b68d2] font-medium rounded-lg text-lg px-5 py-5 text-center inline-flex items-center justify-center gap-2 mr-2 mb-2 w-full"
          onClick={addNewClass}
        >
          <MdAddBox size={"24"} />
          Add a Class
        </button>
      </div>
      <TrainModel />
      <Preview />
    </div>
  );
};

export default ObjectDetection;
