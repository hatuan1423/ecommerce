import { useState } from "react";
import TextInput from "../TextInput";
import Wrapper from "../Wrapper";
import { IoSearch } from "react-icons/io5";
import { HEADERS, SUB_HEADERS } from "~/constants";
import { Badge, Drawer, Popover } from "antd";
import { CgMenuLeft } from "react-icons/cg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Login from "../Login";
import Cart from "../Cart";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenDrawer = () => setOpenDrawer(!openDrawer);
  const [collapse, setCollapse] = useState(null);
  const toggleCollapse = (index) =>
    setCollapse(collapse === index ? null : index);

  const handleOpenChangeLogin = () => {
    setOpenLogin(!openLogin);
  };

  return (
    <Wrapper className="bg-red flex flex-col pt-[18px] pb-4">
      <div className="w-full flex items-center justify-between">
        {/* 1 */}
        <div className="flex items-center justify-center gap-x-5">
          <CgMenuLeft
            onClick={handleOpenDrawer}
            size={30}
            className="text-white cursor-pointer block lg:hidden"
          />

          <Drawer
            placement="left"
            closable={false}
            onClose={handleOpenDrawer}
            open={openDrawer}
          >
            <div className="h-full flex flex-col">
              <ul
                id="faq-accordion"
                data-accordion="collapse"
                className="w-full flex-1 flex flex-col gap-y-6"
              >
                {SUB_HEADERS.map((item, index) => (
                  <div key={index} className="w-full">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleCollapse(index)}
                    >
                      <li className="uppercase font-semibold">{item.label}</li>
                      {collapse === index ? (
                        <FaAngleUp aria-controls={`faq-body-${index}`} />
                      ) : (
                        <FaAngleDown aria-controls={`faq-body-${index}`} />
                      )}
                    </div>
                    {collapse === index && (
                      <ul>
                        {item?.subs?.map((child) => (
                          <li
                            key={child}
                            className="flex justify-between py-1 items-center cursor-pointer"
                          >
                            {child}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>

              <footer className="mt-auto w-full flex flex-col gap-y-3 text-left">
                <p className="uppercase text-base text-red ">Bạn cần hỗ trợ?</p>
                <div className="w-full flex gap-x-4 items-center">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    role="presentation"
                  >
                    <g
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="square"
                    >
                      <path
                        d="M17 15l-3 3-8-8 3-3-5-5-3 3c0 9.941 8.059 18 18 18l3-3-5-5z"
                        stroke="#252a2b"
                      ></path>
                      <path
                        d="M14 1c4.971 0 9 4.029 9 9m-9-5c2.761 0 5 2.239 5 5"
                        stroke="#252a2b"
                      ></path>
                    </g>
                  </svg>
                  <span className="font-semibold">1900 63 64 76</span>
                </div>
                <div className="w-full flex gap-x-4 items-center">
                  <svg
                    viewBox="0 0 22 22"
                    role="presentation"
                    className="w-6 h-6"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        stroke="#252a2b"
                        d="M.916667 10.08333367l3.66666667-2.65833334v4.65849997zm20.1666667 0L17.416667 7.42500033v4.65849997z"
                      ></path>
                      <path
                        stroke="#252a2b"
                        strokeWidth="2"
                        d="M4.58333367 7.42500033L.916667 10.08333367V21.0833337h20.1666667V10.08333367L17.416667 7.42500033"
                      ></path>
                      <path
                        stroke="#252a2b"
                        strokeWidth="2"
                        d="M4.58333367 12.1000003V.916667H17.416667v11.1833333m-16.5-2.01666663L21.0833337 21.0833337m0-11.00000003L11.0000003 15.5833337"
                      ></path>
                      <path
                        d="M8.25000033 5.50000033h5.49999997M8.25000033 9.166667h5.49999997"
                        stroke="#252a2b"
                        strokeWidth="2"
                        strokeLinecap="square"
                      ></path>
                    </g>
                  </svg>
                  <span className="font-semibold">webshop@baya.vn</span>
                </div>
              </footer>
            </div>
          </Drawer>

          <a href="/">
            <img
              src="https://theme.hstatic.net/200000796751/1001266995/14/logo.png?v=82"
              alt="logo"
              className="max-w-52 max-h-16 object-cover bg-no-repeat cursor-pointer"
            />
          </a>
        </div>

        {/* 2 */}
        <div className="hidden lg:flex flex-col items-center gap-y-2">
          <TextInput
            placeholder="Tìm kiếm sản phẩm..."
            className="w-[600px] rounded-lg"
            iconRightStyles="bg-red px-6 rounded-lg py-2 cursor-pointer"
            iconRight={<IoSearch size={20} className="text-white" />}
          />
          <ul className="w-full flex gap-x-2 text-white text-xs">
            {HEADERS.map((header) => (
              <li key={header.label} className="flex gap-x-1 items-center ">
                <img src={header.img} alt={header.label} className="w-6 h-6" />
                <span>{header.label}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* 3 */}
        <div className="flex items-center gap-x-2 justify-between">
          <Popover
            content={<Login />}
            placement="bottomRight"
            trigger="click"
            open={openLogin}
            onOpenChange={handleOpenChangeLogin}
          >
            <div className="w-full cursor-pointer flex items-center gap-x-2 justify-center">
              <span className="lg:w-7 w-5 h-5 lg:h-7 flex items-center ">
                <svg viewBox="0 0 1024 1024" className="fill-white">
                  <path d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"></path>
                  <path d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"></path>
                </svg>
              </span>
              <div className="w-full md:hidden lg:flex flex-col hidden">
                <span className="text-white text-sm ">Đăng nhập / Đăng ký</span>
                <span className="text-white text-sm">Tài khoản của tôi</span>
              </div>
            </div>
          </Popover>

          <Popover content={<Cart />} placement="bottomLeft" trigger="click">
            <div className=" flex gap-x-2 cursor-pointer text-white">
              <Badge count={2}>
                <span>
                  <svg
                    width="20px"
                    height="20px"
                    className="fill-white"
                    version="1.0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="translate(0 512) scale(.1 -.1)">
                      <path d="m2371 5100c-150-40-306-141-387-248l-35-48-492-58c-271-32-501-63-512-69-31-16-44-39-45-75 0-32 54-516 64-573 5-25 3-27-44-31-27-3-56-11-65-18s-78-117-155-245l-139-232-86-1660c-47-913-85-1692-85-1730 0-60 3-73 23-91l23-22h2125 2126l21 23c18 19 22 35 22 92 0 37-38 815-85 1728l-86 1660-139 232c-77 128-147 238-156 246-11 9-49 15-106 18-86 3-90 4-84 25 3 11 18 74 33 138 29 128 26 152-19 182-13 8-190 54-393 101-204 47-380 90-391 94-14 6-24 22-28 45-11 60-92 208-153 281-76 91-209 181-324 220-73 25-102 29-219 32-111 2-148-1-209-17zm318-176c139-34 279-140 353-265 21-34 36-64 34-66s-51 8-110 22c-113 28-152 27-180-4-8-9-34-96-56-192-23-95-43-182-46-191-4-14-72-44-80-35-1 1-19 139-39 306-19 167-40 311-44 320-21 39-55 45-163 33-56-7-103-10-106-7-8 8 127 68 183 81 72 18 178 17 254-2zm-329-258c0-2 14-117 30-256 17-139 27-256 23-260s-190-51-413-104c-308-74-410-102-427-118-31-29-30-70 7-220 17-67 30-128 30-135 0-10-45-13-203-13h-203l-56 478c-31 262-56 478-55 478 1 1 283 36 627 77s628 75 633 76c4 0 7-1 7-3zm1105-357c242-56 444-105 449-110 6-5-20-134-64-324l-74-315h-246-246l-82 343c-72 301-85 345-107 365-31 26-65 28-147 6-33-8-61-14-63-12-1 2 7 42 18 89l20 86 51-13c28-7 249-58 491-115zm-495-226c0-5 27-120 60-257 33-136 60-252 60-257s-276-9-643-9h-642l-28 117c-15 64-26 117-24 119 2 1 1194 291 1210 293 4 0 7-2 7-6zm-1980-282c0-9 14-119 25-203l5-38h-100c-55 0-100 3-100 6 0 18 145 244 156 244 8 0 14-4 14-9zm3239-110c39-66 71-122 71-125s-74-6-165-6-165 3-165 8c0 4 12 60 27 125l27 117h67 66l72-119zm155-373c3-35 40-733 81-1553s76-1511 78-1537l4-48h-1987-1987l4 48c2 26 37 717 78 1537s78 1518 81 1553l6 62h1818 1818l6-62z"></path>
                      <path d="m1850 3209c-168-32-260-248-169-395 24-39 82-92 114-104 23-9 23-10 27-242 4-223 5-236 32-313 85-248 285-432 534-492 88-21 256-21 344 0 249 60 449 244 534 492 27 77 28 90 32 312l4 233 34 16c42 20 101 85 121 133 24 55 21 159-6 214-26 53-87 112-140 134-46 20-156 20-202 0-199-83-215-381-26-479l39-19-4-207c-5-237-17-291-88-400-225-349-715-349-940 0-71 109-83 164-88 400l-4 207 39 19c85 44 132 127 133 232 0 175-145 292-320 259z"></path>
                    </g>
                  </svg>
                </span>
              </Badge>

              <div className="hidden w-full lg:block text-14 whitespace-nowrap">
                Giỏ hàng
              </div>
            </div>
          </Popover>
        </div>
      </div>

      <div className="flex lg:hidden w-full flex-col items-center gap-y-2">
        <TextInput
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full rounded-full md:rounded-lg"
          iconRightStyles="md:bg-red px-2 md:px-6 bg-transparent rounded-lg py-2 cursor-pointer"
          iconRight={<IoSearch size={20} className="text-black" />}
        />
        <ul className="w-full hidden md:flex gap-x-2 text-white text-xs">
          {HEADERS.map((header) => (
            <li key={header.label} className="flex gap-x-1 items-center ">
              <img src={header.img} alt={header.label} className="w-6 h-6" />
              <span>{header.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Header;
