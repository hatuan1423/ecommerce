import Wrapper from '~/components/Wrapper';

const Account = () => {
  return (
    <Wrapper className="w-full md:pb-8">
      <div className="w-full mb-12 border-t border-[#eae4e8]">
        <div className="w-full px-4">
          <div className="w-full mt-9 mb-12 px-8 pb-8 pt-6 flex flex-col">
            {/* 1 */}
            <div className="w-full flex flex-col items-center justify-center ">
              <span className="text-2xl font-bold text-red">
                Tài khoản của bạn
              </span>
              <div className="w-full flex items-center justify-center mt-4">
                <h1 className="bg-black w-16 h-1" />
              </div>
            </div>
            {/* 2 */}
            <div className="w-full md:grid md:grid-cols-12 md:grid-rows-2 gap-4">
              <div className="col-span-3 mb-5 md:mb-0 row-span-2 gap-y-3 w-full flex flex-col">
                <span className="text-base uppercase text-red font-semibold">
                  Tài khoản
                </span>
                <ul className="text-14 gap-y-2 flex flex-col font-normal">
                  <li className="text-red hover:text-red">
                    <a href="/account">Thông tin tài khoản</a>
                  </li>
                  <li className="hover:text-red">
                    <a href="/account/address">Danh sách địa chỉ</a>
                  </li>
                  <li className="hover:text-red">
                    <a href="">Đăng xuất</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-9 col-start-4">
                <div className="col-span-9 col-start-4 w-full">
                  <div className="w-full  text-md uppercase font-bold border-b border-solid border-[ #ededed] pb-2">
                    Thông tin tài khoản
                  </div>
                  <ul className="w-full text-14 flex flex-col">
                    <li className="text-red text-base font-semibold mt-3 mb-1">
                      Tuấn Dương
                    </li>
                    <li className="mb-1">hatuan1423@gmail.com</li>
                    <li>Vietnam</li>
                    <li className="underline cursor-pointer mt-1 mb-4 hover:text-red text-ascent-2">
                      Xem địa chỉ
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-9 col-start-4 row-start-2 w-full">
                <div className="w-full my-8 px-3 py-2 bg-[#d9edf7]">
                  <div className="w-full p-3 bg-white text-14 font-normal">
                    <p>Bạn chưa đặt mua sản phẩm.</p>
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

export default Account;
