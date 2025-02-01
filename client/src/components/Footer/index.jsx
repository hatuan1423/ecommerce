import React, { useState } from 'react';
import TextInput from '../TextInput';
import Button from '../Button';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaAngleDown, FaAngleUp, FaYoutube } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { FOOTERS } from '~/constants';

const Footer = () => {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = (index) =>
    setCollapse(collapse === index ? null : index);

  return (
    <div>
      <div className="w-full border-b flex justify-between items-center">
        <div className="w-full md:px-76 px-[6px] flex md:py-5 justify-between items-center">
          {/* 1 */}
          <div className="flex md:flex-row py-3 gap-y-3 w-full flex-col items-center">
            <span className="md:text-xl text-center w-full md:w-64 font-bold">
              Đăng ký nhận tin
            </span>
            <div className="w-full gap-x-2 md:gap-x-5 flex items-center">
              <TextInput
                iconLeft={<CiMail />}
                placeholder="Nhập email của bạn"
                className="rounded-full border-border w-full bg-white"
                iconLeftStyles="left-4"
              />
              <Button
                title="Đăng ký"
                className="bg-red w-32 md:w-52 text-base uppercase font-semibold text-white py-2 flex items-center justify-center rounded-full"
              />
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
      </div>
      {/* 2 */}
      <div className="w-full md:px-76 px-[6px] pt-8 h-full grid grid-cols-1 md:grid-cols-4 md:gap-8">
        {FOOTERS.map((section, index) => (
          <div key={index} className="w-full flex gap-y-5 md:pb-5 flex-col">
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
      <div className="w-full border-t md:py-4 py-2 text-xs md:text-sm bg-bg flex items-center justify-center">
        <span>Copyright © 2025. Powered by dhtun</span>
      </div>
    </div>
  );
};

export default Footer;
