import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import PreviewProduct from '../PreviewProduct';

const CollectionItem = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="bg-white relative shadow-lg mr-2 rounded-md px-2 pb-3">
      <PreviewProduct open={open} handleClose={handleOpen} />
      <div className="relative group cursor-pointer overflow-hidden">
        <div className="flex md:transition-transform md:duration-500 md:group-hover:translate-x-[-100%]">
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:group-hover:opacity-100 cursor-pointer opacity-0 transition-opacity duration-300"
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
        <div className="flex items-center gap-x-3 pl-2 border border-transparent rounded-full cursor-pointer hover:border-red transition">
          <span className="font-bold text-xs uppercase">Thêm vào giỏ</span>
          <span className="w-8 h-8 flex items-center justify-center bg-red rounded-full cursor-pointer">
            <svg
              version="1.0"
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0 512) scale(.1 -.1)">
                <path d="m2371 5100c-150-40-306-141-387-248l-35-48-492-58c-271-32-501-63-512-69-31-16-44-39-45-75 0-32 54-516 64-573 5-25 3-27-44-31-27-3-56-11-65-18s-78-117-155-245l-139-232-86-1660c-47-913-85-1692-85-1730 0-60 3-73 23-91l23-22h2125 2126l21 23c18 19 22 35 22 92 0 37-38 815-85 1728l-86 1660-139 232c-77 128-147 238-156 246-11 9-49 15-106 18-86 3-90 4-84 25 3 11 18 74 33 138 29 128 26 152-19 182-13 8-190 54-393 101-204 47-380 90-391 94-14 6-24 22-28 45-11 60-92 208-153 281-76 91-209 181-324 220-73 25-102 29-219 32-111 2-148-1-209-17zm318-176c139-34 279-140 353-265 21-34 36-64 34-66s-51 8-110 22c-113 28-152 27-180-4-8-9-34-96-56-192-23-95-43-182-46-191-4-14-72-44-80-35-1 1-19 139-39 306-19 167-40 311-44 320-21 39-55 45-163 33-56-7-103-10-106-7-8 8 127 68 183 81 72 18 178 17 254-2zm-329-258c0-2 14-117 30-256 17-139 27-256 23-260s-190-51-413-104c-308-74-410-102-427-118-31-29-30-70 7-220 17-67 30-128 30-135 0-10-45-13-203-13h-203l-56 478c-31 262-56 478-55 478 1 1 283 36 627 77s628 75 633 76c4 0 7-1 7-3zm1105-357c242-56 444-105 449-110 6-5-20-134-64-324l-74-315h-246-246l-82 343c-72 301-85 345-107 365-31 26-65 28-147 6-33-8-61-14-63-12-1 2 7 42 18 89l20 86 51-13c28-7 249-58 491-115zm-495-226c0-5 27-120 60-257 33-136 60-252 60-257s-276-9-643-9h-642l-28 117c-15 64-26 117-24 119 2 1 1194 291 1210 293 4 0 7-2 7-6zm-1980-282c0-9 14-119 25-203l5-38h-100c-55 0-100 3-100 6 0 18 145 244 156 244 8 0 14-4 14-9zm3239-110c39-66 71-122 71-125s-74-6-165-6-165 3-165 8c0 4 12 60 27 125l27 117h67 66l72-119zm155-373c3-35 40-733 81-1553s76-1511 78-1537l4-48h-1987-1987l4 48c2 26 37 717 78 1537s78 1518 81 1553l6 62h1818 1818l6-62z"></path>
                <path d="m1850 3209c-168-32-260-248-169-395 24-39 82-92 114-104 23-9 23-10 27-242 4-223 5-236 32-313 85-248 285-432 534-492 88-21 256-21 344 0 249 60 449 244 534 492 27 77 28 90 32 312l4 233 34 16c42 20 101 85 121 133 24 55 21 159-6 214-26 53-87 112-140 134-46 20-156 20-202 0-199-83-215-381-26-479l39-19-4-207c-5-237-17-291-88-400-225-349-715-349-940 0-71 109-83 164-88 400l-4 207 39 19c85 44 132 127 133 232 0 175-145 292-320 259z"></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
      {/* discount */}
      <div className="w-11 h-5 absolute top-2 text-14 rounded-sm bg-[#FF0000] items-center flex justify-center text-white">
        <span>-30%</span>
      </div>
    </div>
  );
};

export default CollectionItem;
