import React from "react";

const Preview = () => {
  return (
    <div className="w-[350px] my-6 border border-gray-200 rounded-xl shadow-md">
      <div className="flex border-b px-4 py-4">
        <p className="text-xl font-semibold">Preview</p>
      </div>
      <div className="flex justify-center items-center p-4">
        <p>You must train a model before you can preview it here</p>
      </div>
    </div>
  );
};

export default Preview;
