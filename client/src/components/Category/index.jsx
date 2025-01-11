import React from "react";
import Wrapper from "../Wrapper";
import CategoryItem from "../CategoryItem";
import { CATEGORYS } from "~/assets/data";

const Category = () => {
  return (
    <Wrapper className="w-full mt-7 pb-16 overflow-x-auto md:overflow-hidden">
      <div className="grid grid-cols-4 gap-x-4 min-w-max md:min-w-min">
        {CATEGORYS.map((item) => (
          <CategoryItem item={item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Category;
