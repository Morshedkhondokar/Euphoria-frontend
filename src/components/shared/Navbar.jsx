import { useState } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import RightActions from "./RightActions";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    { name: "Men", slug: "men" },
    { name: "Women", slug: "women" },
    { name: "Kids", slug: "kids" },
    { name: "Accessories", slug: "accessories" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full shadow-sm bg-white z-10">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <h1 className="text-xl italic">Euphoria</h1>

        {/* Desktop Navigation */}
        <DesktopNav
          links={links}
          categories={categories}
        />

        {/* Right Side Icons */}
        {/* search, profile, cart, hamburger */}
        <RightActions
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        links={links}
        categories={categories}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
