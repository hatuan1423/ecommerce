import React from 'react';
import Wrapper from '../Wrapper';

const Banner = () => {
  return (
    <Wrapper className="w-full h-full grid-cols-1 gap-y-4 pb-[70px] md:gap-x-[30px] grid md:grid-cols-2">
      <div className="rounded-lg cursor-pointer relative  overflow-hidden bg-cover bg-no-repeat">
        <img
          src="https://theme.hstatic.net/200000796751/1001266995/14/homebanner_1_img.jpg?v=82"
          alt=""
          className="rounded-lg transition duration-300 ease-in-out hover:scale-110 object-cover w-full h-full bg-no-repeat"
        />
      </div>
      <div className="rounded-lg cursor-pointer relative  overflow-hidden bg-cover bg-no-repeat">
        <img
          src="https://theme.hstatic.net/200000796751/1001266995/14/homebanner_2_img.jpg?v=82"
          alt=""
          className="rounded-lg transition duration-300 ease-in-out hover:scale-110 object-cover w-full h-full bg-no-repeat"
        />
      </div>
    </Wrapper>
  );
};

export default Banner;
