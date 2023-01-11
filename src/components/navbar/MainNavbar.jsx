import Logo from "@/assets/img/logo.svg";
import Avatar from "@/assets/img/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLink from "@/components/navbar/NavLink";
import { useState } from "react";

const MainNavbar = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-semibold md:static md:mr-auto md:flex md:flex-row md:h-auto md:gap-4 md:p-0"
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full w-3/5 flex-col gap-y-8 bg-white p-8 font-semibold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 z-10"
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-semibold md:static md:mr-auto md:flex md:flex-row md:h-auto md:gap-4 md:p-0"
    );
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-8 p-4 md:p-0 ">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img src={Logo} alt="Logo" className="mr-auto h-5 md:mr-0" />
        <nav className={navClass}>
          <button className="mb-10 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLink text="Collections" />
          <NavLink text="Men" />
          <NavLink text="Women" />
          <NavLink text="About" />
          <NavLink text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={Avatar} alt="Avatar" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto hidden h-[3px] w-full bg-gray-500 md:block"></span>
    </>
  );
};

export default MainNavbar;
