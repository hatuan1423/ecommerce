import { Popover } from "antd";
import { PiWarningCircleLight } from "react-icons/pi";
import PreviewCoupon from "../PreviewCoupon";

const CouponItem = ({ home }) => {
  return (
    <div className="w-[333px] h-[99px] relative shadow-sm flex items-center px-2 bg-[#FDF0D1] rounded-xl border-border border-1">
      <div className="bg-[#F1C150] p-[10px] rounded-xl">
        <img
          src="https://theme.hstatic.net/200000796751/1001266995/14/home_coupon_1_img.png?v=82"
          alt=""
          className="object-cover bg-no-repeat "
        />
      </div>
      <div className="w-1 h-full translate-x-1 border-l-[1px] border-dashed border-border"></div>
      <div className="w-full h-full  p-[10px] flex flex-col justify-between">
        <div className="w-full flex items-center">
          <div className="w-full flex flex-col ">
            <span className="text-sm font-semibold">Giảm 200.000đ</span>
            <span className="text-xs">Đơn hàng từ 3 triệu</span>
          </div>
          <Popover content={<PreviewCoupon />} placement="bottom">
            <PiWarningCircleLight size={24} className="cursor-pointer" />
          </Popover>
        </div>
        <div className="w-full flex items-center">
          <div className="w-full flex flex-col">
            <span className="text-xs x">
              Mã: <span className="text-xs font-semibold">VOUCHERT1-200K</span>
            </span>
            <span className="text-xs">HSD: 31/01/2025</span>
          </div>
          <button className="w-[150px] uppercase bg-red text-[10px] leading-tight rounded-full text-white py-1">
            Sao chép mã
          </button>
        </div>
      </div>
      <div
        className={`w-4 h-4 ${
          home ? "bg-bg" : " bg-white"
        } rounded-full absolute top-0 translate-x-[66px] transform -translate-y-1/2`}
      ></div>
      <div
        className={`w-4 h-4 ${
          home && "bg-bg"
        } rounded-full absolute -bottom-3 translate-x-[66px] transform`}
      ></div>
    </div>
  );
};

export default CouponItem;
