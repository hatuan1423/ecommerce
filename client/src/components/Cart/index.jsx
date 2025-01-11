import React from "react";
import Button from "../Button";

const Cart = () => {
  return (
    <div className="w-80 py-1 px-2 flex gap-y-3 items-center justify-center flex-col">
      {/* 1 */}
      <div className="w-full flex py-1 items-center justify-center">
        <span className="uppercase text-red  text-lg">Giỏ hàng</span>
      </div>
      {/* 2 */}
      <div className="w-full flex py-4 items-center border-t border-b justify-center flex-col">
        <div className="stroke-red">
          <svg width="50" height="50" viewBox="0 0 81 70">
            <g
              transform="translate(0 2)"
              stroke-width="4"
              fill="none"
              fill-rule="evenodd"
            >
              <circle stroke-linecap="square" cx="34" cy="60" r="6"></circle>
              <circle stroke-linecap="square" cx="67" cy="60" r="6"></circle>
              <path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"></path>
            </g>
          </svg>
        </div>
        <span>Hiện chưa có sản phẩm</span>
      </div>
      {/* 3 */}
      <div className="w-full flex items-center justify-between">
        <span className="text-black uppercase">Tổng tiền :</span>
        <span className="text-red font-bold">0đ</span>
      </div>
      {/* 4 */}
      <Button
        title="Xem giỏ hàng"
        className="w-full flex items-center justify-center text-white bg-red uppercase rounded-full py-2 text-xs"
      />
    </div>
  );
};

export default Cart;
