import { Fragment } from "react";
import { Link, useLocation } from "react-router";

const DesktopNav = ({ links, categories }) => {
  const { pathname } = useLocation();

  return (
    <ul className="hidden md:flex items-center gap-8">

      {/* Main Navigation Links */}
      {links.map((link, index) => (
        <Fragment key={link.path}>

          <li>
            <Link
              to={link.path}
              className={`text-sm transition-colors ${
                pathname === link.path
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          </li>

          {/* Category after Home */}
          {index === 0 && (
            <li className="relative group">
              <button className="text-sm text-gray-500 hover:text-black">
                Category
              </button>

              {/* Category Dropdown */}
              <div
                className="
                  absolute top-full left-0 mt-3
                  w-48 bg-white rounded-xl border
                  shadow-lg overflow-hidden
                  opacity-0 invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                "
              >
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/shop?category=${category.slug}`}
                    className="block px-4 py-3 text-sm hover:bg-gray-50"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default DesktopNav;