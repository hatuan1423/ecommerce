import { CgDanger } from "react-icons/cg";
import Button from "../Button";

const CouponItem = () => {
  return (
    <div className="w-full relative shadow-sm flex items-center gap-x-5 px-2 bg-[#FDF0D1] rounded-xl border-border border-1">
      <span className="p-3 bg-[#F1C150] rounded-xl">
        <img
          src="https://theme.hstatic.net/200000796751/1001266995/14/home_coupon_1_img.png?v=82"
          alt=""
        />
      </span>

      <div className="w-1 h-32 -translate-x-[5px] border-l-2 border-dashed border-border"></div>
      <div className="w-full  flex gap-y-2 flex-col items-center">
        <div className="w-full flex flex-col">
          <span className="text-sm font-bold">Giam 300.000</span>
          <span className="text-sm">Đơn hàng từ 3 triệu</span>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-sm">
            Mã: <span className="font-bold">ABCD</span>
          </span>
          <span className="text-sm">Đơn hàng từ 3 triệu</span>
        </div>
      </div>
      {/* <CgDanger size={20} />
        <Button
          title="Sao chép mã"
          className="text-white uppercase w-28 text-xs rounded-full py-1 flex items-center font-light justify-center bg-red"
        /> */}

      <div className="w-6 h-6 bg-bg rounded-full absolute top-0 translate-x-24 transform -translate-y-1/2"></div>
      <div className="w-6 h-6 bg-bg rounded-full absolute -bottom-3 translate-x-24 transform "></div>
    </div>
  );
};

export default CouponItem;
