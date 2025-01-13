import React from "react";
import Wrapper from "../Wrapper";
import CouponItem from "../CouponItem";

const Coupon = () => {
  return (
    <Wrapper className="w-full pl-4 overflow-x-auto">
      <div className="w-max py-10 grid grid-flow-col auto-cols-[minmax(0,1fr)] gap-x-4">
        <CouponItem home />
        <CouponItem home />
        <CouponItem home />
      </div>
    </Wrapper>
  );
};

export default Coupon;
