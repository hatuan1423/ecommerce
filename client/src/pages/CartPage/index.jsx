import { Breadcrumb } from "antd";
import React from "react";
import Button from "~/components/Button";
import CouponItem from "~/components/CouponItem";
import Wrapper from "~/components/Wrapper";

const Cart = () => {
  return (
    <Wrapper>
      <div className="w-full py-2">
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: "Giỏ hàng",
            },
          ]}
        />
      </div>
      <div className=" w-full flex-col md:flex-row md:flex md:gap-x-3">
        <div className="w-full h-fit rounded-sm shadow-md bg-white flex items-center flex-col">
          <span className="w-full py-3 border-b px-4 text-red font-bold text-xl">
            Giỏ hàng của bạn
          </span>
          <span className="w-full py-5 px-4 text-xl font-thin">
            Giỏ hàng của bạn đang trống
          </span>
        </div>
        <div className="md:w-1/2 mt-3 md:mt-0 w-full md:px-4 flex mb-4 flex-col items-center gap-y-4">
          {/* 1 */}
          <div className="w-full p-4 rounded-md bg-white shadow-md flex flex-col items-center">
            <span className="text-left py-3 text-red font-bold text-xl w-full">
              Thông tin đơn hàng
            </span>
            <div className="w-full py-3 flex items-center border-y-1 justify-between">
              <span className="text-md font-semibold">Tổng tiền:</span>
              <span className="text-xl text-red font-bold">0đ</span>
            </div>
            <div className="w-full flex pt-1 gap-y-2 my-[10px] flex-col">
              <span className="text-sm">
                Phí vận chuyển sẽ được tính ở trang thanh toán
              </span>
              <span className="text-sm">
                Mã giảm giá được nhập ở trang thanh toán
              </span>
              <div className="w-full flex items-center border-1 border-red rounded-sm bg-[#FEE3E8] justify-center px-2 py-2">
                <span className="text-[13px] text-red">
                  Giỏ hàng của bạn hiện chưa đạt mức tối thiểu để thanh toán
                </span>
              </div>
            </div>

            <Button
              title="Thanh toán"
              className="w-full py-2 text-white font-semibold bg-[#5A5A5A] flex items-center justify-center uppercase"
            />
          </div>
          {/* 2 */}
          <div className="w-full gap-y-5 bg-white p-4 flex flex-col shadow-md items-center justify-center">
            <CouponItem />
            <CouponItem />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
