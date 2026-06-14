import { useState } from "react";
import { Link, useLocation } from "react-router";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const MobileNav = ({ links, categories, menuOpen, setMenuOpen }) => {
  const { pathname } = useLocation();

  const [showCategories, setShowCategories] = useState(false);

  if (!menuOpen) return null;

  return (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-sm z-10 p-4">
      <div className="my-2 flex items-center gap-2 h-9 px-3 border border-gray-200 rounded-lg bg-gray-50">
        <FiSearch
          className="text-gray-400"
          size={16}
        />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-36 placeholder:text-gray-400"
        />
      </div>

      <ul className="space-y-1">
        {links.map((link, index) => (
          <div key={link.path}>
            {/* Navigation Link */}
            <li>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`flex px-4 py-3 rounded-xl ${
                  pathname === link.path
                    ? "bg-gray-100 text-black"
                    : "text-gray-500"
                }`}
              >
                {link.name}
              </Link>
            </li>

            {/* Show Categories right after Home */}
            {index === 0 && (
              <li>
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="
              w-full flex items-center justify-between
              px-4 py-3 rounded-xl
              text-gray-500 hover:bg-gray-50
            "
                >
                  <span>Categories</span>

                  <FiChevronDown
                    className={`transition-transform duration-200 ${
                      showCategories ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showCategories && (
                  <div className="ml-4 mt-1 space-y-1">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/shop?category=${category.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="
                    block px-4 py-2
                    text-sm text-gray-500
                    hover:text-black
                    hover:bg-gray-50
                    rounded-lg
                  "
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
