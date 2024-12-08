import BannersComponent from "~/components/BannersComponent";
import CategoryComponent from "~/components/CategoryComponent";
import ProductsHome from "~/components/ProductsHome";
import SliderComponent from "~/components/SliderComponent";

const HomePage = () => {
  return (
    <div className="w-full h-[1000px]">
      <SliderComponent />
      <BannersComponent />
      <CategoryComponent />
      <ProductsHome />
    </div>
  );
};

export default HomePage;
