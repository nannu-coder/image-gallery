import { useState } from "react";
import { useRef } from "react";
import icon from "../../Images/icon.png";

const AddImageBtn = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // You can add further logic to handle the selected file here.
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileInputChange}
      />
      {/* <button
        onClick={openFileInput}
        className="flex flex-col items-center justify-center border-dotted w-full h-full p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
      > */}
      <button
        onClick={openFileInput}
        className="flex flex-col items-center justify-center border  w-full h-full p-2 rounded-lg  cursor-pointer"
      >
        <img src={icon} alt="Add Images" className="" />
        <span>Add Images</span>
      </button>
    </div>
  );
};

export default AddImageBtn;
