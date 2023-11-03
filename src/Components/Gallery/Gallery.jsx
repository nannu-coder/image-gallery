import image1 from "../../Images/image-1.webp";
import image2 from "../../Images/image-2.webp";
import image3 from "../../Images/image-3.webp";
import image4 from "../../Images/image-4.webp";
import image5 from "../../Images/image-5.webp";
import image6 from "../../Images/image-6.webp";
import image7 from "../../Images/image-7.webp";
import image8 from "../../Images/image-8.webp";
import image9 from "../../Images/image-8.webp";
import image10 from "../../Images/image-10.jpeg";
import image11 from "../../Images/image-11.jpeg";
import AddImageBtn from "../AddImageBtn/AddImageBtn";

const Gallery = () => {
  return (
    <div className="grid gap-5 grid-cols-5">
      <img
        className="col-span-2 row-span-2 border rounded-md"
        src={image1}
        alt=""
      />
      <img className="border rounded-md" src={image2} alt="" />
      <img className="border rounded-md" src={image3} alt="" />
      <img className="border rounded-md" src={image4} alt="" />
      <img className="border rounded-md" src={image5} alt="" />
      <img className="border rounded-md" src={image6} alt="" />
      <img className="border rounded-md" src={image7} alt="" />
      <img className="border rounded-md" src={image8} alt="" />
      <img className="border rounded-md" src={image9} alt="" />
      <img className="border rounded-md" src={image10} alt="" />
      <img className="border rounded-md" src={image11} alt="" />
      {/* <button>add image</button> */}
      <AddImageBtn />
    </div>
  );
};

export default Gallery;
