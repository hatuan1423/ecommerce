import SearchIcon from "~/assets/icons/search.svg";
import FavoriteIcon from "~/assets/icons/favorite.svg";
import CartIcon from "~/assets/icons/cart.svg";
import UserIcon from "~/assets/icons/user.svg";
import Logo from "~/assets/images/logo.png";

const NAV_BTNS = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Shop",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
];

const HeaderComponent = () => {
  return (
    <div className="w-full h-[56px] px-4 lg:px-40 py-4 gap-8 bg-white shadow-sm sticky top-0 left-0 z-50 overflow-hidden">
      <div className="w-full h-full flex items-center justify-between">
        {/* 1 */}
        <div className="flex items-center justify-center w-[96px] h-[32px] flex-shrink-0">
          <img src={Logo} alt="logo" className="w-12 h-12" />
        </div>
        {/* 2 */}
        <div className="h-full px-3 lg:px-7 py-5 relative flex items-center rounded-xl bg-[#f5f5f5] gap-8">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none bg-transparent px-4"
          />
          <img
            src={SearchIcon}
            alt="search"
            className="absolute top-2 left-0 w-6 h-6"
          />
        </div>
        {/* 3 */}
        <div className="flex items-start justify-around gap-3 lg:gap-[52px]">
          {NAV_BTNS.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="text-md font-medium"
            >
              {item.title}
            </a>
          ))}
        </div>
        {/* 4 */}
        <div className="flex items-center justify-center gap-6">
          <img src={FavoriteIcon} alt="icon" />
          <img src={CartIcon} alt="icon" />
          <img src={UserIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
