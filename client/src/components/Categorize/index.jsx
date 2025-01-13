import React from "react";
import Wrapper from "../Wrapper";
import Button from "../Button";
import { CATEGORIZES } from "~/constants";

const Categorize = () => {
  return (
    <Wrapper className="h-full pb-70">
      <div className="relative w-full py-4 px-5 h-40 flex items-center gap-x-2 justify-between overflow-x-auto md:overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://theme.hstatic.net/200000796751/1001266995/14/categorize_img.jpg?v=82')] bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
        </div>
        <div className="relative z-10 flex items-center gap-x-2 justify-between w-full">
          <div className="flex flex-col items-center">
            <span className="text-white text-lg font-semibold">
              Xu hướng tìm kiếm
            </span>
            <Button
              title="Xem ngay"
              className="uppercase w-32 rounded-full py-1 bg-red flex items-center justify-center font-semibold text-white text-sm"
            />
          </div>

          <div className="flex space-x-4 md:flex-wrap md:space-x-0">
            {CATEGORIZES.map((item, idx) => (
              <div
                key={idx}
                className="flex-none w-28 flex px-4 flex-col items-center"
              >
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="object-cover"
                  />
                </div>
                <span className="text-white text-center">{item?.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Categorize;
