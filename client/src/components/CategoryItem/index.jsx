import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg w-full shadow-md overflow-hidden text-center relative">
      <img
        src={item.image}
        alt="Phòng khách"
        className="w-full relative object-cover hover:scale-105 transition-transform cursor-pointer"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <h3 className="text-red text-lg font-bold">{item.label}</h3>
        <p className="text-ascent-2">Xem ngay</p>
      </div>
    </div>
  );
};

export default CategoryItem;
