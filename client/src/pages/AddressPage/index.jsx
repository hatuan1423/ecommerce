import Wrapper from "~/components/Wrapper";
import { BiEdit } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Address = () => {
  return (
    <Wrapper className="w-full pb-8">
      <div className="w-full mb-12 border-t border-[#eae4e8]">
        <div className="w-full px-4">
          <div className="w-full mt-9 mb-12 px-8 pb-8 pt-6 flex flex-col">
            {/* 1 */}
            <div className="w-full flex flex-col items-center justify-center ">
              <span className="text-2xl font-bold text-red">
                Thông tin địa chỉ
              </span>
              <div className="w-full flex items-center my-5 justify-center mt-4">
                <h1 className="bg-black w-16 h-1" />
              </div>
            </div>
            {/* 2 */}
            <div className="w-full grid md:grid-cols-12  gap-4">
              <div className="col-span-3 gap-y-3 w-full flex flex-col">
                <span className="text-base uppercase text-red font-semibold">
                  Tài khoản
                </span>
                <ul className="text-14 gap-y-2 flex flex-col font-normal">
                  <li className=" hover:text-red">
                    <a href="">Thông tin tài khoản</a>
                  </li>
                  <li className=" text-red hover:text-red">
                    <a href="">Danh sách địa chỉ</a>
                  </li>
                  <li className="hover:text-red">
                    <a href="">Đăng xuất</a>
                  </li>
                </ul>
              </div>

              <div className="w-full col-span-9 grid md:grid-cols-12 gap-4">
                <div className="col-span-6 w-full flex flex-col md:px-4">
                  <div className="w-full bg-[#D9EDF7] py-4 px-3 flex items-center justify-between">
                    <div className="w-full text-14 font-semibold text-red">
                      Tuấn Dương{" "}
                      <span className="font-normal">(Địa chỉ mặc định)</span>
                    </div>
                    <div className="w-full gap-x-2 flex items-center justify-end">
                      <BiEdit className="hover:text-red cursor-pointer" />
                      <IoIosClose
                        size={22}
                        className="hover:text-red cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="w-full text-14 bg-white px-4 pb-4 pt-1 grid grid-cols-3 grid-rows-4 gap-2">
                    <div className="font-bold">Tuấn Dương</div>
                    <div className="col-span-2">2</div>
                    <div className="row-start-2 font-bold">Công ty:</div>
                    <div className="col-span-2 row-start-2">4</div>
                    <div className="row-start-3 font-bold">Địa chỉ:</div>
                    <div className="col-span-2 row-start-3">6</div>
                    <div className="row-start-4 font-bold">Số điện thoại:</div>
                    <div className="col-span-2 row-start-4">8</div>
                  </div>
                </div>
                <div className="col-span-6 w-full md:px-4 mb-8">
                  <div className="w-full p-3 text-14 bg-[#323232] text-white uppercase font-semibold text-center cursor-pointer">
                    Nhập địa chỉ mới
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Address;
