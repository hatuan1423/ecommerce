import React from "react";
import { Carousel } from "antd";
import Wrapper from "../Wrapper";
import { SLIDER_IMGS } from "~/constants";

const Slider = () => (
  <Wrapper className="h-full px-0">
    <Carousel
      className="w-full h-full"
      autoplay
      arrows
      autoplaySpeed={5000}
      effect="fade"
    >
      {SLIDER_IMGS.map((item) => (
        <div key={item?.label}>
          <div className="md:hidden">
            <img
              className="w-full h-full object-cover bg-no-repeat"
              src={item?.mb}
              alt={item?.label}
            />
          </div>
          <div className="hidden md:block">
            <img
              className="w-full rounded-md h-full object-cover bg-no-repeat"
              src={item?.pc}
              alt={item?.label}
            />
          </div>
        </div>
      ))}
    </Carousel>
  </Wrapper>
);
export default Slider;
