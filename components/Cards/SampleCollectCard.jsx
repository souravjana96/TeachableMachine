import React, { useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IoMdMore } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BiFolderPlus } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const SampleCollectCard = ({ samples, setSamples, index }) => {
  const inputRef = useRef(null);
  const imageUploaderInputRef = useRef(null);
  const [imageUploadEnabled, setImageUploadEnabled] = useState(false);

  const adjustInputWidth = (e) => {
    const inputElement = e.target;
    const text = inputElement.value;

    // Create a temporary span element to measure text width
    const span = document.createElement("span");
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.style.whiteSpace = "pre";
    span.style.fontSize = "20px";
    span.textContent = text;

    // Append the span to the body to get its width
    document.body.appendChild(span);
    const width = span.offsetWidth;

    // Remove the temporary span
    document.body.removeChild(span);

    // Set the input's width to accommodate the text content
    inputElement.style.width = width + 5 + "px";

    // Update the sampleClass state
    // setSampleClass(text);
    setSamples((prev) => {
      let newArr = [...prev];
      newArr[index].name = text;
      return newArr;
    });
  };

  const handleIconClick = () => {
    // Focus the input element when the icon is clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleUploadFile = () => {
    imageUploaderInputRef.current.click();
  };
  const handleAddNewImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSamples((prev) => {
        let newArr = [...prev];
        let isPresent = newArr[index].images.find(
          ({ name }) => file.name === name
        );

        if (!isPresent) {
          newArr[index].images.push(file);
          e.target.value = "";
        }

        return newArr;
      });
    }
  };
  const handleRemoveImage = (i) => {
    setSamples((prev) => {
      let newArr = [...prev];
      let images = [...prev[index].images];
      images.splice(i, 1);
      newArr[index].images = [...images];
      return newArr;
    });
  };
  return (
    <div className="w-full my-6 border border-gray-200 rounded-xl shadow-md">
      <div className="flex items-center justify-between border-b px-4 py-4">
        <div className="flex items-center gap-1">
          <input
            ref={inputRef}
            type="text"
            value={samples[index]?.name}
            onChange={adjustInputWidth}
            //   onChange={(e) => {
            //     setSampleClass(e.target.value);
            //   }}
            className="text-xl font-semibold w-[70px]"
          />
          <MdOutlineModeEditOutline
            onClick={handleIconClick}
            className="text-xl text-gray-400"
          />
        </div>
        <IoMdMore className="text-xl text-gray-400" />
      </div>
      {!imageUploadEnabled ? (
        <div className="p-2">
          <p className="font-semibold text-base p-2">Add Image Samples</p>
          <button
            className="p-3 rounded-xl bg-[#e8f0fe] hover:bg-[#ccdefd]"
            onClick={() => setImageUploadEnabled(true)}
          >
            <div className="flex flex-col justify-center text-center text-[#1b68d2]">
              <BsUpload
                className="m-auto text-xl font-extrabold"
                strokeWidth={"1"}
              />
              <p className="text-sm">Upload</p>
            </div>
          </button>
        </div>
      ) : (
        <div className="flex h-[400px]">
          <div className="w-[50%] bg-[#e8f0fe] text-[#1b68d2] p-3">
            <div className="flex justify-between items-center">
              <p>File</p>
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => setImageUploadEnabled(false)}
              />
            </div>
            {/* <div> */}
            <button
              className="p-3 w-full rounded-md bg-[#c3d8fc] hover:bg-[#b0ccfc] focus:outline-none focus:ring-2 focus:ring-blue-300 my-4"
              onClick={handleUploadFile}
            >
              <input
                type="file"
                ref={imageUploaderInputRef}
                className="hidden"
                accept="image/jpeg, image/png"
                onChange={handleAddNewImage}
              />
              <div className="flex flex-col justify-center text-center text-[#1b68d2]">
                <BiFolderPlus
                  className="m-auto text-2xl font-extrabold"
                  //   strokeWidth={"1"}
                  size={"32"}
                />
                <p className="text-sm text-center">
                  Choose images from your files, or drag & drop here
                </p>
              </div>
            </button>
            {/* </div> */}
          </div>
          <div className="w-[50%]">
            {samples[index].images?.length > 0 && (
              <p className="font-semibold text-sm p-2">
                {samples[index].images.length} image Samples
              </p>
            )}
            <PerfectScrollbar>
              <div className="grid grid-cols-4 gap-2 p-2">
                {samples[index].images.map((file, i) => {
                  return (
                    <div key={i} className="group relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file?.name}
                        className="w-full aspect-square object-cover rounded-2xl"
                      />
                      <button
                        className="hidden group-hover:block absolute top-0 right-0 bg-transparent p-2 text-gray-300 hover:text-red-500"
                        onClick={() => {
                          handleRemoveImage(i);
                        }}
                      >
                        <RiDeleteBin6Line className="shadow-md text-xl" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleCollectCard;
