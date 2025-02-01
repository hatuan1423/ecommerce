import React from 'react';
import Wrapper from '../Wrapper';
import Collection3Item from '../Collection3Item';

const Collection3 = () => {
  return (
    <Wrapper className="md:pb-70 pb-4">
      <div className="w-full shadow-sm md:flex items-center bg-white">
        <div className="w-full flex pt-5 pr-5 flex-col">
          <div className="w-full mb-5 pl-4">
            <span className="w-full text-2xl font-bold text-red">
              Chút xinh xắn cho nhà tắm
            </span>
          </div>
          <div className="grid  md:grid-cols-3 grid-rows-3 gap-4">
            <div className="w-full border-b">
              <Collection3Item />
            </div>
            <div className="w-full border-b">
              <Collection3Item />
            </div>
            <div className="w-full border-b">
              <Collection3Item />
            </div>
            <div className="w-full border-b">
              <Collection3Item />
            </div>
            <div className="w-full border-b">
              <Collection3Item />
            </div>
            <div className="w-full border-b">
              <Collection3Item />
            </div>
            <div>
              <Collection3Item />
            </div>
            <div>
              <Collection3Item />
            </div>
            <div>
              <Collection3Item />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-pink-50">
          <img
            src="https://theme.hstatic.net/200000796751/1001266995/14/home_collection_3_banner.jpg?v=82"
            alt=""
            className="w-full h-full object-cover bg-no-repeat"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Collection3;
