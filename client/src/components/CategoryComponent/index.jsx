import CameraIcon from "~/assets/images/categories/camera.svg";
import ComputerIcon from "~/assets/images/categories/computer.svg";
import GamingIcon from "~/assets/images/categories/gaming.svg";
import HeadphoneIcon from "~/assets/images/categories/headphone.svg";
import PhoneIcon from "~/assets/images/categories/phone.svg";
import WatchesIcon from "~/assets/images/categories/watches.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PRODUCTS = [
  {
    title: "Phones",
    icon: PhoneIcon,
  },
  {
    title: "Smart Watches",
    icon: WatchesIcon,
  },
  {
    title: "Cameras",
    icon: CameraIcon,
  },
  {
    title: "Headphones",
    icon: HeadphoneIcon,
  },
  {
    title: "Computers",
    icon: ComputerIcon,
  },
  {
    title: "Gaming",
    icon: GamingIcon,
  },
];

const CategoryComponent = () => {
  return (
    <div className="w-full h-[192px] bg-yellow-100 px flex items-center justify-center px-40 py-20">
      <div className="flex flex-col">
        <div className="flex items-center justify-between pb-3">
          <h1>Browse By Category</h1>
          <div className="flex gap-2">
            <IoIosArrowBack />
            <IoIosArrowForward />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="flex flex-col items-center bg-slate-200 p-4 rounded-xl"
            >
              <h1>{product.title}</h1>
              <div className="flex items-center justify-between">
                <img src={product.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
