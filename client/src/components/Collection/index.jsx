import React, { useRef } from "react";
import Wrapper from "../Wrapper";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosArrowDropright,
} from "react-icons/io";
import { Carousel } from "antd";
import { COLLECTIONS } from "~/assets/data";
import CollectionItem from "../CollectionItem";

const Collection = () => {
  const carouselRef = useRef(null);

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <Wrapper>
      <div className="w-full py-4 px-2 rounded-lg bg-[#FFEEF0] flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex mb-4 items-center justify-between">
          <div className="w-full flex items-center gap-x-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red"></span>
              <span className="absolute inline-flex h-full w-full rounded-full bg-red opacity-75 animate-ping"></span>
            </span>
            <div className="w-full md:text-2xl font-bold">
              Đồ bếp nhập khẩu cao cấp
            </div>
          </div>
          <div className="w-full flex gap-x-1 items-center justify-end">
            <IoIosArrowDropleftCircle
              onClick={prev}
              size={35}
              className="text-white  cursor-pointer hover:text-red"
            />

            <IoIosArrowDroprightCircle
              onClick={next}
              size={35}
              className="text-white cursor-pointer hover:text-red"
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          <Carousel
            ref={carouselRef}
            slidesToShow={5}
            slidesToScroll={1}
            dots={false}
            infinite={false}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {COLLECTIONS.map((item) => (
              <CollectionItem item={item} />
            ))}
          </Carousel>
        </div>

        {/* Button */}
        <div className="w-full flex mt-4 items-center justify-center">
          <button className="relative w-[324px] flex items-center justify-center gap-x-2 py-2 px-6 bg-white text-black border-2 border-transparent rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-red transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative group-hover:text-white">Xem tất cả</span>
            <IoIosArrowDropright
              size={18}
              className="relative text-ascent-2 group-hover:text-white"
            />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Collection;
