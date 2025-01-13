import React from "react";
import Wrapper from "../Wrapper";
import { SUB_HEADERS as items } from "~/constants";
import { Dropdown, Space } from "antd";
import { FaAngleDown } from "react-icons/fa6";

const SubHeader = () => {
  return (
    <Wrapper className="bg-bg ">
      <ul className="w-full hidden md:flex py-4 items-center gap-x-2 justify-between text-red uppercase">
        {items.map((item) => (
          <Dropdown
            menu={{
              items: item.sub.map((subItem) => ({
                key: subItem,
                label: subItem,
              })),
            }}
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="group cursor-pointer"
            >
              <Space>
                <li key={item.label}>{item.label}</li>
                <FaAngleDown
                  size={10}
                  className="cursor-pointer group-hover:rotate-180 delay-100 transition-transform"
                />
              </Space>
            </a>
          </Dropdown>
        ))}
      </ul>
    </Wrapper>
  );
};

export default SubHeader;
