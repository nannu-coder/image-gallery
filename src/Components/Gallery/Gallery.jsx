import { useState } from "react";
import { Data } from "../../Data/Data";
import AddImageBtn from "../AddImageBtn/AddImageBtn";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  console.log(selectedImages);

  const handleImageClick = (image) => {
    if (selectedImages.includes(image)) {
      setSelectedImages(
        selectedImages.filter((selected) => selected !== image)
      );
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const isImageSelected = (image) => selectedImages.includes(image);

  return (
    <div className="grid gap-5 grid-cols-5">
      {Data.map((img, index) => (
        <div
          key={index}
          className={
            index === 0
              ? "col-span-2 row-span-2 border rounded-md relative cursor-pointer"
              : "border rounded-md relative cursor-pointer"
          }
        >
          <img
            key={index}
            className={`w-full h-auto rounded-lg transition-opacity ${
              isImageSelected(img) ? "opacity-50" : ""
            } hover:opacity-50`}
            src={img.img}
            alt={`Image ${img.id}`}
            onClick={() => handleImageClick(img)}
          />
          {/* <div
            className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition-opacity duration-300 ${
              isImageSelected(img) ? "opacity-50" : ""
            }`}
          /> */}

          {isImageSelected(img) && (
            <div className="absolute top-2 left-2 text-black font-bold text-xl">
              ✓
            </div>
          )}
        </div>
      ))}
      <AddImageBtn />
    </div>
  );
};

export default Gallery;
