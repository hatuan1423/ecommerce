import React, { useRef } from 'react';
import Wrapper from '../Wrapper';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosArrowDropright,
} from 'react-icons/io';
import { Carousel } from 'antd';
import { BLOGS, COLLECTIONS } from '~/assets/data';
import CollectionItem from '../CollectionItem';
import BlogItem from '../BlogItem';

const Blog = () => {
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
              Bài Viết Mới Nhất
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
            slidesToShow={4}
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
            {BLOGS.map((item, index) => (
              <BlogItem item={item} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blog;
