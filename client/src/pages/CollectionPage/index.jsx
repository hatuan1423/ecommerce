import { Breadcrumb } from "antd";
import Wrapper from "~/components/Wrapper";
import { StyledCheckbox, StyledCollapse } from "./style";
import { ImSortAlphaAsc } from "react-icons/im";
import CollectionItem from "~/components/CollectionItem";

const Collection = () => {
  const onChange = (key) => {};

  const categorys = [
    {
      key: "1",
      label: "Danh mục sản phẩm",
      children: (
        <ul className="text-base font-base">
          <li>Được mua nhiều gần đây</li>
          <li>Sản phẩm mới</li>
          <li>Tất cả sản phẩm</li>
        </ul>
      ),
    },
  ];

  const suppliers = [
    {
      key: "1",
      label: "Nhà cung cấp",
      children: (
        <ul className="text-base font-base">
          <li>Được mua nhiều gần đây</li>
          <li>Sản phẩm mới</li>
          <li>Tất cả sản phẩm</li>
        </ul>
      ),
    },
  ];

  const prices = [
    {
      key: "1",
      label: "Giá",
      children: (
        <ul className="text-base font-base">
          <StyledCheckbox>Dưới 1.000.000₫</StyledCheckbox>
          <StyledCheckbox>1.000.000₫ - 2.000.000₫</StyledCheckbox>
          <StyledCheckbox>2.000.000₫ - 3.000.000₫</StyledCheckbox>
          <StyledCheckbox>3.000.000₫ - 4.000.000₫</StyledCheckbox>
          <StyledCheckbox>Trên 4.000.000₫</StyledCheckbox>
        </ul>
      ),
    },
  ];

  return (
    <Wrapper className="w-full pb-8">
      <div className="w-full py-2">
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: "Danh mục",
            },
          ]}
        />
      </div>
      <div className="w-full flex gap-x-10">
        <div className="w-1/3 flex gap-y-3 flex-col ">
          <div className="">
            <StyledCollapse
              defaultActiveKey={["1"]}
              onChange={onChange}
              expandIconPosition={"end"}
              items={categorys}
            />
          </div>
          <div className="">
            <StyledCollapse
              defaultActiveKey={["1"]}
              onChange={onChange}
              expandIconPosition={"end"}
              items={suppliers}
            />
          </div>
          <div className="">
            <StyledCollapse
              defaultActiveKey={["1"]}
              onChange={onChange}
              expandIconPosition={"end"}
              items={prices}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          {/* 1 */}
          <img
            src="https://theme.hstatic.net/200000796751/1001266995/14/collection_banner.jpg?v=82"
            alt=""
            className="w-full shadow-md h-full object-cover bg-no-repeat"
          />
          {/* 2 */}
          <div className="w-full flex py-4 items-center justify-between">
            <div className="w-full flex items-center gap-x-10">
              <span className="text-red text-2xl font-bold">
                Tất cả sản phẩm
              </span>
              <span className="font-semibold">
                15 <span className="font-light">sản phẩm</span>
              </span>
            </div>
            <form className="w-48">
              <select
                id="countries"
                className="bg-white text-black text-sm rounded-sm w-full p-2.5 "
              >
                <option selected>
                  Sắp xếp
                  <ImSortAlphaAsc />
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
          {/* 3 */}
          <div className="w-full flex gap-y-5 items-center justify-center flex-col">
            <div className="w-full grid gap-3 grid-cols-5">
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
            </div>
            <button className="relative w-[200px]  border-red flex items-center justify-center py-2 bg-white text-black border-1  rounded-lg overflow-hidden group">
              <span className="absolute inset-0 bg-red transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative group-hover:text-white">
                Xem thêm sản phẩm
              </span>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Collection;
