import { useState } from "react";
import { FaEye } from "react-icons/fa";
import PreviewProduct from "../PreviewProduct";

const CollectionItem = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="bg-white shadow-md mr-2 rounded-md px-2 pb-3">
      <PreviewProduct open={open} handleClose={handleOpen} />
      <div className="relative group cursor-pointer overflow-hidden">
        <div className="flex transition-transform duration-500 group-hover:translate-x-[-100%]">
          <img
            src="https://product.hstatic.net/200000796751/product/2002527.1_bc0ddc2d40d44455a86bc4c9a443272e_large.jpg"
            alt=""
            className="w-full rounded-md object-cover bg-no-repeat"
          />

          <img
            src="https://product.hstatic.net/200000796751/product/2002527.1_bc0ddc2d40d44455a86bc4c9a443272e_large.jpg"
            alt=""
            className="w-full rounded-md object-cover bg-no-repeat"
          />
        </div>

        <FaEye
          size={28}
          onClick={handleOpen}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 cursor-pointer opacity-0 transition-opacity duration-300"
        />
      </div>
      <div className="w-full flex items-center flex-col justify-center gap-y-3 py-2 px-3">
        <div className="w-full flex flex-col items-center">
          <span className="text-xs text-ascent-2">ANNE</span>
          <span className="text-sm text-center font-medium">
            Bát ăn cơm gốm sứ ANNE màu ngẫu nhiên H5.7xD11.3
          </span>
          <span className="font-semibold text-sm">39.000 đ</span>
        </div>
        {/* 2 */}
        <div className="w-full flex items-center gap-x-2 justify-center">
          <span className="font-semibold text-sm uppercase">Thêm vào giỏ</span>
          <span className="w-8 h-8 flex items-center justify-center bg-red rounded-full cursor-pointer">
            <svg
              version="1.0"
              className="w-4 h-4"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0 512) scale(.1 -.1)">
                <path d="..." />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
