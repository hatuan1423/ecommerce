const PreviewCoupon = () => {
  return (
    <div className="w-full text-14  flex items-center flex-col">
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <div className="py-3">Mã</div>
        <div className="col-span-3 uppercase font-bold w-full flex items-center ">
          VOUCHERT1-200K
        </div>
        <div className="row-start-2">Hạn sử dụng</div>
        <div className="col-span-3 row-start-2 w-full flex items-center ">
          19/08/2003
        </div>
      </div>
      <ul className="w-full">
        <li>Dành cho đơn hàng từ 3 triệu</li>
        <li>Mỗi khách hàng chỉ được sử dụng tối đa 1 lần</li>
        <li>Sao chép mã và nhập mã khuyến mãi ở trang thanh toán</li>
      </ul>
    </div>
  );
};

export default PreviewCoupon;
