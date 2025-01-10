import AccountDropDown from "~/components/AccountDropDown";
import Banner from "~/components/Banner";
import Category from "~/components/Category";
import Footer from "~/components/Footer";
import GoogleSignUp from "~/components/GoogleSignUp";
import Header from "~/components/Header";
import ProductsHome from "~/components/ProductsHome";
import SendMail from "~/components/SendMail";
import Slider from "~/components/Slider";
import TopHeader from "~/components/TopHeader";

const HomePage = () => {
  return (
    <div className="w-full h-[1000px]">
      <TopHeader />
      <div className="px-[135px]">
        <Header />
        <Footer />
        <SendMail />
        <GoogleSignUp />
        <AccountDropDown />
      </div>
      {/* <Slider />
      <Banner />
      <Category />
      <ProductsHome /> */}
    </div>
  );
};

export default HomePage;
