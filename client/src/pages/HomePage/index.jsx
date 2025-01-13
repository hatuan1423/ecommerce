import Banner from "~/components/Banner";
import Blog from "~/components/Blog";
import Categorize from "~/components/Categorize";
import Category from "~/components/Category";
import Collection from "~/components/Collection";
import Collection2 from "~/components/Collection2";
import Collection3 from "~/components/Collection3";
import CollectionNav from "~/components/CollectionNav";
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
      <CollectionNav />
      <Banner />
      <Collection3 />
      <Blog />
    </div>
  );
};

export default HomePage;
