import { useSelector } from "react-redux";

const AccountDetail = () => {
  const shop = useSelector((state) => state?.shop);
  return (
    <div className="w-full py-2 px-5">
      <div className="w-full text-center  border-b mb-3 pb-2">
        <span className="text-red uppercase text-base">
          Thông tin tài khoản
        </span>
      </div>
      <div className="w-full">
        <span className="mb-2">{`${shop?.firstName} ${shop?.lastName}`}</span>
        <ul>
          <li>Tài khoản của tôi</li>
          <li>Danh sách địa chỉ</li>
          <li>Đăng xuất</li>
        </ul>
      </div>
    </div>
  );
};

export default AccountDetail;
