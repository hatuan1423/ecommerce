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
import Button from "../Button";

const CollectionNav = () => {
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
      <div className="w-full pb-4 md:pb-70 py-4 px-2 rounded-lg flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex-col md:flex md:flex-row mb-4 items-center md:justify-between">
          <span className="md:text-2xl w-full text-lg text-red font-bold">
            Sản phẩm nổi bật
          </span>
          <div className="w-full flex mt-2 md:mt-0 gap-x-3 items-center md:justify-end">
            <Button
              title="Sản phẩm mới"
              className="w-32 md:w-36 font-semibold flex items-center justify-center text-sm rounded-full py-1 md:py-2 bg-red text-white"
            />
            <Button
              title="Sofa New Arrival"
              className="w-32 md:w-36 py-1 md:py-2 text-ascent-2 font-semibold flex items-center justify-center text-sm border-border border-1 bg-white rounded-full"
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full grid grid-cols-2 md:grid-cols-6 grid-rows-5 md:grid-rows-2 gap-1">
          <div className="row-span-2 hidden md:block w-full  h-full">
            <img
              src="https://theme.hstatic.net/200000796751/1001266995/14/home_coll_1_banner.jpg?v=82"
              alt=""
              className="w-full h-full bg-no-repeat"
            />
          </div>
          <div>
            <CollectionItem />
          </div>
          <div className="md:col-start-2 md:row-start-2">
            <CollectionItem />
          </div>
          <div className="md:col-start-3 md:row-start-2">
            <CollectionItem />
          </div>
          <div className="md:col-start-3 md:row-start-1">
            <CollectionItem />
          </div>
          <div className="md:col-start-4 md:row-start-1">
            <CollectionItem />
          </div>
          <div className="md:col-start-4 md:row-start-2">
            <CollectionItem />
          </div>
          <div className="md:col-start-5 md:row-start-1">
            <CollectionItem />
          </div>
          <div className="md:col-start-5 md:row-start-2">
            <CollectionItem />
          </div>
          <div className="md:col-start-6 md:row-start-1">
            <CollectionItem />
          </div>
          <div className="md:col-start-6">
            <CollectionItem />
          </div>
        </div>

        {/* Button */}
        <div className="w-full flex mt-4 items-center justify-center">
          <button className="relative border-red  w-[324px] flex items-center justify-center gap-x-2 py-2 px-6 bg-white text-red border-2 border-transparent rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-red transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative group-hover:text-white">
              Xem tất cả <span className="font-bold ">Sản phẩm mới</span>
            </span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CollectionNav;
