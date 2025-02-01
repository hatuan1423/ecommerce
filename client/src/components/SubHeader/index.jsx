import Wrapper from "../Wrapper";
import { SUB_HEADERS as items } from "~/constants";
import { FaAngleDown } from "react-icons/fa6";

const SubHeader = () => {
  return (
    <Wrapper className="bg-bg">
      <ul className="w-full hidden lg:flex py-4 items-center gap-x-2 justify-between text-red">
        {items.map((item, index) => (
          <div key={index} className="relative cursor-pointer group">
            <div className="flex items-center justify-between space-x-5">
              <a className="menu-hover tracking-[0.75px] font-medium md:text-xs lg:text-14 uppercase text-red">
                {item.label}
              </a>
              <FaAngleDown
                size={10}
                className="cursor-pointer transform transition-transform duration-300 group-hover:rotate-180"
              />
            </div>

            <ul className="absolute w-44 opacity-0 z-50 flex flex-col bg-white shadow-2xl translate-y-8 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300 ease-in-out">
              {item?.subs?.map((sub, index) => (
                <li
                  key={index}
                  className="my-2 block border-b last:border-none border-gray-100 py-2 px-4 text-14 text-black"
                >
                  <a href="#">{sub}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </Wrapper>
  );
};

export default SubHeader;
