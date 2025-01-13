import { Breadcrumb } from "antd";
import Wrapper from "~/components/Wrapper";
import { FaFacebook, FaFacebookMessenger, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import useSlider from "~/hooks/useSlider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import CouponItem from "~/components/CouponItem";
import Button from "~/components/Button";
import { FaPlus } from "react-icons/fa";
import ProductRelated from "~/components/ProductRelated";
import ProductViewed from "~/components/ProductViewed";

const Product = () => {
  const images = [
    {
      id: 1,
      src: "https://product.hstatic.net/200000796751/product/susana_bath_sponge_baya_2002072_1_copy_f355fffae2cb4894aaefdb3b1c02fa63_compact.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://product.hstatic.net/200000796751/product/susana_bath_sponge_baya_2002071_copy_3e725b3d3a134f12ae086b9f75545d35_compact.jpg",
      alt: "Image 2",
    },
  ];

  const images2 = [
    {
      src: "https://product.hstatic.net/200000796751/product/susana_bath_sponge_baya_2002072_1_copy_f355fffae2cb4894aaefdb3b1c02fa63_master.jpg",
      alt: "Image 1",
    },
    {
      src: "https://product.hstatic.net/200000796751/product/susana_bath_sponge_baya_2002071_copy_3e725b3d3a134f12ae086b9f75545d35_master.jpg",
      alt: "Image 2",
    },
  ];

  const { currentIndex, sliderRef, nextSlide, prevSlide, goToSlide } =
    useSlider(images2.length);

  const handleStyleChange = (index) => {
    goToSlide(index);
  };

  return (
    <Wrapper className="w-full pb-8">
      <div className="w-full py-2">
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: "Product",
            },
          ]}
        />
      </div>

      <div className="w-full flex flex-col md:flex md:flex-row">
        {/* trai */}
        <div className="md:w-[80%] h-fit md:sticky md:top-0 rounded-md  flex flex-col bg-white">
          <div className="w-full flex flex-col md:flex md:flex-row ">
            <div className="w-24 flex md:flex md:flex-col gap-3 p-2 h-2w-24">
              {images.map((image, index) => (
                <img
                  onClick={() => handleStyleChange(index)}
                  src={image.src}
                  alt=""
                  className={`border-1 border-border ${
                    currentIndex === index && "border-red"
                  }`}
                />
              ))}
            </div>
            <div className="relative w-full max-w-xl mx-auto overflow-hidden">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images2.map((image, index) => (
                  <img src={image?.src} alt="" />
                ))}
              </div>
              <IoIosArrowBack
                onClick={prevSlide}
                size={30}
                className="absolute cursor-pointer top-1/2 left-0 transform -translate-y-1/2"
              />
              <IoIosArrowForward
                onClick={nextSlide}
                size={30}
                className="absolute cursor-pointer top-1/2 right-0 transform -translate-y-1/2"
              />
            </div>
          </div>
          <div className="w-full py-3 px-4 flex items-center justify-center gap-2">
            <span>Chia sẻ:</span>
            <FaFacebook size={27} color="#25479B" />
            <FaFacebookMessenger size={27} color="#0084FF" />
            <AiFillTwitterCircle size={30} color="#55ACEE" />
            <FaPinterest size={26} color="#CD242A" />
          </div>
        </div>
        {/* phai */}
        <div className="w-full md:overflow-y-auto md:h-screen  rounded-md pl-4 flex flex-col items-center gap-y-3">
          {/* 1 */}
          <div className="w-full flex flex-col gap-y-2 px-4 bg-white shadow-md">
            <div className="w-full flex flex-col pt-4 mb-4 gap-y-1">
              <span className="text-2xl font-bold text-red">
                Cọ Lưng Kèm Bông Tắm Nhựa 2 Đầu SUSANA
              </span>
              <div className="w-full flex gap-x-3">
                <span>
                  Mã sản phẩm:
                  <span className="text-red font-semibold">2002071</span>
                </span>
                <span>
                  Tình trạng:
                  <span className="text-red font-semibold">Còn hàng</span>
                </span>
                <span>
                  Thương hiệu:
                  <span className="text-red font-semibold">SUSANA</span>
                </span>
              </div>
            </div>
            <div className="w-full flex gap-x-10 bg-[#FAFAFA] p-4 mb-4 items-center">
              <span className="text-sm font-semibold">Giá</span>
              <span className="text-red text-2xl font-semibold">89,000đ</span>
            </div>
            <div className="w-full flex items-center gap-10">
              <span className="text-sm  font-semibold">Kiểu dáng:</span>
              <div className="w-full flex items-center gap-x-3">
                {images2.map((image, index) => (
                  <div
                    onClick={() => handleStyleChange(index)}
                    className={`py-2 px-3 rounded-sm cursor-pointer relative bg-white border-1 flex items-center justify-center  ${
                      currentIndex === index && "border-red"
                    }`}
                  >
                    <span className="text-[12px] px-2 font-medium text-red">{`Loại ${
                      index + 1
                    }`}</span>
                    <div
                      className={`absolute  top-0 right-0 h-0 ${
                        currentIndex === index ? "block" : "hidden"
                      }`}
                    >
                      <div class="w-0 relative  border-l-[20px] border-red border-b-transparent border-l-transparent border-r-[20px] border-b-[20px]">
                        <IoMdCheckmark
                          size={10}
                          color="#fff"
                          className="absolute top-0 left-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex items-center">
              <span className="text-sm font-semibold">Số lượng:</span>
              <form className="">
                <label
                  for="quantity-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Choose quantity:
                </label>
                <div className="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="999"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity-input"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full flex mt-4 items-center gap-4 justify-between">
              <button className="relative border-1 border-red w-full flex items-center justify-center gap-x-2 py-2 px-6 bg-white text-black  rounded-lg overflow-hidden group">
                <span className="absolute inset-0 bg-red transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative uppercase font-semibold group-hover:text-white">
                  Thêm vào giỏ
                </span>
              </button>
              <button className="relative w-full flex items-center justify-center gap-x-2 py-2 px-6 bg-red text-black border-2 border-transparent rounded-lg overflow-hidden group">
                <span className="absolute inset-0 bg-pink-50 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative uppercase text-white font-semibold group-hover:text-white">
                  Mua ngay
                </span>
              </button>
            </div>
            <div className="w-full flex mt-4 mb-4 items-center justify-between gap-2">
              <div className="w-full gap-x-2 flex items-center">
                <span className="w-8">
                  <img
                    src="https://theme.hstatic.net/200000796751/1001266995/14/product_deliverly_1_ico.png?v=82"
                    alt=""
                  />
                </span>
                <span className="text-14 font-normal">1 Năm Bảo Hành</span>
              </div>
              <div className="w-full gap-x-2 flex items-center">
                <span className="w-16">
                  <img
                    src="https://theme.hstatic.net/200000796751/1001266995/14/product_deliverly_2_ico.png?v=82"
                    alt=""
                  />
                </span>
                <span className="text-14 font-normal">
                  Hỗ trợ đổi trong 3 ngày cho sản phẩm nguyên giá
                </span>
              </div>
              <div className="w-full gap-x-2 flex items-center">
                <span className="w-8">
                  <img
                    src="https://theme.hstatic.net/200000796751/1001266995/14/product_deliverly_3_ico.png?v=82"
                    alt=""
                  />
                </span>
                <span className="text-14 font-normal">
                  Hotline: <span className="font-bold">1900 63 64 76</span>{" "}
                  (9-21h)
                </span>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full bg-white p-4 shadow-md ">
            <div className="w-full flex gap-2 overflow-x-auto md:grid md:grid-cols-2 md:gap-y-5">
              <div>
                <CouponItem />
              </div>
              <div>
                <CouponItem />
              </div>
              <div>
                <CouponItem />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full p-4 bg-white shadow-md">
            <div className="text-sm font-medium text-center  border-b border-gray-200 ">
              <ul className="flex flex-wrap -mb-px">
                <li className="me-2">
                  <a
                    href="#"
                    className="inline-block py-2  border-b-2 border-red rounded-t-lg active uppercase text-lg font-semibold text-red"
                  >
                    Mô tả sản phẩm
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full flex pt-5 flex-col">
              {/* 1 */}
              <div className="w-full text-14 font-normal">
                + Thiết kế đồng bộ, tinh tế, tiện dụng, phù hợp với nhiều không
                gian phòng tắm
                <br /> + Được làm bằng chất liệu nhựa cao cấp chịu được va đập
                mạnh, chịu nhiệt tốt.
                <br /> + Màu sắc tối giản, đa dạng lựa chọn, giữ cho phòng tắm
                của bạn sạch sẽ và gọn gàng
                <div>----------</div>
                <div className="w-full grid grid-cols-2 grid-rows-7 gap-1">
                  <span className="text-14 font-bold">Sản phẩm</span>
                  <span>Bông tắm</span>
                  <span className="text-14 font-bold">Bộ sưu tập</span>
                  <span>SUSANA</span>
                  <span className="text-14 font-bold">Kích cỡ</span>
                  <span>D11xL38D11xL38</span>
                  <span className="text-14 font-bold">Màu sắc</span>
                  <span>Màu be</span>
                  <span className="text-14 font-bold">Chất liệu</span>
                  <span>Nhựa</span>
                  <span className="text-14 font-bold">Xuất sứ</span>
                  <span>Trung Quốc</span>
                  <span className="text-14 font-bold">Đơn vị</span>
                  <span>PCS</span>
                </div>
                <div>----------</div>
              </div>
              {/* 2 */}
              <div className="w-full flex items-center justify-center">
                <Button
                  title="Xem thêm nội dung"
                  iconLeft={<FaPlus size={11} />}
                  iconLeftStyles="mr-2"
                  className="py-2 border-1 border-red rounded-sm px-4 flex items-center justify-center text-14 text-red"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ProductRelated />
      </div>
      <div className="w-full">
        <ProductViewed />
      </div>
    </Wrapper>
  );
};

export default Product;
