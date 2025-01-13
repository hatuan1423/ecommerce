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

const ProductRelated = () => {
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
    <div className="w-full py-4 mt-5 rounded-lg flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex mb-4 items-center justify-between">
        <div className="w-full">
          <span className="text-2xl text-red font-bold">
            Xem thêm sản phẩm cùng loại
          </span>
        </div>
        <div className="w-full flex items-center justify-end">
          <IoIosArrowDropleftCircle
            onClick={prev}
            size={30}
            className="text-black cursor-pointer"
          />
          <IoIosArrowDroprightCircle
            onClick={next}
            size={30}
            className="text-black cursor-pointer"
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
    </div>
  );
};

export default ProductRelated;
