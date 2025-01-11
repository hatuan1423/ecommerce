import Banner from "~/components/Banner";
import Categorize from "~/components/Categorize";
import Category from "~/components/Category";
import Collection from "~/components/Collection";
import Collection2 from "~/components/Collection2";
import Coupon from "~/components/Coupon";
import Slider from "~/components/Slider";

const HomePage = () => {
  return (
    <div className="w-full">
      <Slider />
      <Category />
      <Collection />
      <Coupon />
      <Collection2 />
      <Categorize />
      <Banner />
    </div>
  );
};

export default HomePage;
