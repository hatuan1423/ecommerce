import React, { useState } from "react";
import Wrapper from "../Wrapper";
import TextInput from "../TextInput";
import Button from "../Button";
import { TiSocialFacebook } from "react-icons/ti";
import { FaAngleDown, FaAngleUp, FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FOOTERS } from "~/constants";

const Footer = () => {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = (index) =>
    setCollapse(collapse === index ? null : index);

  return (
    <Wrapper className="w-full bg-primary">
      {/* 1 */}
      <div className="w-full py-5 flex justify-between items-center">
        {/* 1 */}
        <div className="flex md:flex-row  w-full flex-col items-center">
          <div className="w-full items-center">
            <span className="text-xl font-bold">Đăng ký nhận tin</span>
          </div>
          <div className="w-full flex items-center">
            <div>
              <TextInput
                iconLeft={<CiMail />}
                placeholder="Nhập email của bạn"
                styles="rounded-full bg-white"
              />
            </div>
            <div className="w-full h-full">
              <Button
                title="Đăng ký"
                className="bg-red w-full uppercase font-semibold text-white px-10 rounded-full"
              />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full hidden md:flex items-center justify-end gap-x-3">
          <span className="text-xl font-bold">Kết nối với chúng tôi</span>
          <div className="flex gap-x-2">
            <div className="w-8 h-8 cursor-pointer border-[1px] border-black rounded-full flex items-center justify-center">
              <TiSocialFacebook />
            </div>
            <div className="w-8 h-8 cursor-pointer border-[1px] border-black rounded-full flex items-center justify-center">
              <FaYoutube size={14} />
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="w-full pt-8 h-full grid grid-cols-1 md:grid-cols-4 md:gap-8">
        {FOOTERS.map((section, index) => (
          <div key={index} className="w-full flex gap-y-5 flex-col">
            <div
              onClick={() => toggleCollapse(index)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="md:text-lg md:font-semibold">
                {section.title}
              </span>
              <div className="md:hidden">
                {collapse === index ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            <div className="md:hidden">
              {collapse === index && (
                <div className="w-full flex flex-col text-sm">
                  {section.content.map((item, idx) => (
                    <p key={idx}>• {item}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full hidden md:flex flex-col text-sm">
              {section.content.map((item, idx) => (
                <p key={idx}>• {item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* 3 */}
      <div className="w-full md:py-4 py-2 text-xs md:text-sm bg-[#F2F8FD] flex items-center justify-center">
        <span>Copyright © 2025. Powered by dhtun</span>
      </div>
    </Wrapper>
  );
};

export default Footer;
