import Logo from "@/assets/img/logo.svg";
import Avatar from "@/assets/img/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";

const MainNavbar = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-semibold md:static md:mr-auto md:flex md:flex-row md:h-auto md:gap-4 md:p-0"
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-8 bg-white p-8 font-semibold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-semibold md:static md:mr-auto md:flex md:flex-row md:h-auto md:gap-4 md:p-0"
    );
  };

  return (
    <header className="container mx-auto flex items-center gap-8 bg-gray-200 py-6 px-4">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <img src={Logo} alt="Logo" className="mr-auto h-5 md:mr-0" />
      <nav className={navClass}>
        <button className="mb-10 md:hidden" onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <a href="">Collections</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon />
        </button>
        <img src={Avatar} alt="Avatar" className="w-10" />
      </div>
    </header>
  );
};

export default MainNavbar;
