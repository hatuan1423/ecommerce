import React, { useRef } from 'react';
import Wrapper from '../Wrapper';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Carousel } from 'antd';
import { COLLECTIONS } from '~/assets/data';
import CollectionItem from '../CollectionItem';

const Collection2 = () => {
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
    <Wrapper className="pb-70">
      <div className="w-full py-4 px-2 rounded-lg flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex mb-4 items-center justify-between">
          <div className="w-full">
            <span className="text-2xl text-red font-bold">
              Back To School - Up To 60%
            </span>
          </div>
          <div className="w-full flex gap-x-2 items-center justify-end">
            <div
              onClick={prev}
              className="flex items-center border-1 border-border justify-center hover:bg-red cursor-pointer shadow-sm w-7 h-7 rounded-full bg-white"
            >
              <IoIosArrowBack
                size={20}
                className="hover:text-white text-[#C1B8B7]"
              />
            </div>
            <div
              onClick={next}
              className="flex items-center border-1 border-border justify-center hover:bg-red cursor-pointer shadow-sm w-7 h-7 rounded-full bg-white"
            >
              <IoIosArrowForward
                size={20}
                className="hover:text-white text-[#C1B8B7]"
              />
            </div>
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
            {COLLECTIONS.map((item, index) => (
              <CollectionItem item={item} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </Wrapper>
  );
};

export default Collection2;
