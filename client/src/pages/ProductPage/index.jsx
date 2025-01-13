import { Breadcrumb, InputNumber } from "antd";
import Wrapper from "~/components/Wrapper";
import { FaFacebook, FaFacebookMessenger, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import useSlider from "~/hooks/useSlider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

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
    <Wrapper className="w-full">
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

      <div className="w-full flex ">
        <div className="w-[80%] rounded-md flex flex-col bg-white">
          <div className="w-full flex">
            <div className="w-32">
              {images.map((image, index) => (
                <img
                  onClick={() => handleStyleChange(index)}
                  src={image.src}
                  alt=""
                  className={`${
                    currentIndex === index && "border-1 border-red"
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
            <FaFacebook size={30} color="#25479B" />
            <FaFacebookMessenger size={30} color="#0084FF" />
            <AiFillTwitterCircle size={30} color="#55ACEE" />
            <FaPinterest size={30} color="#CD242A" />
          </div>
        </div>
        <div className="w-full rounded-md pl-4 flex flex-col items-center gap-y-3">
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
                    <span className="text-[12px] px-2 font-medium text-red">{`Style ${
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
                  // <label key={index}>
                  //   <input
                  //     type="radio"
                  //     name="productStyle"
                  //     value={index}
                  //     checked={currentIndex === index}
                  //     onChange={() => handleStyleChange(index)}
                  //   />
                  //   {`Style ${index + 1}`}
                  // </label>
                ))}
              </div>
            </div>
            <div className="w-full flex items-center">
              <span className="text-sm  font-semibold">Số lượng:</span>
              <InputNumber min={1} max={10} defaultValue={3} />
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
            <div className="w-full flex items-center justify-between gap-2"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
