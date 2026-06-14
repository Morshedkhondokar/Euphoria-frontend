import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

const RightActions = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="flex items-center gap-2">
      
      {/* Desktop Search */}
      <div className="hidden md:flex items-center gap-2 h-9 px-3 border border-gray-200 rounded-lg bg-gray-50">
        <FiSearch className="text-gray-400" size={16} />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-36 placeholder:text-gray-400"
        />
      </div>

      {/* Profile Button */}
      <button
        className="
          w-9 h-9 flex items-center justify-center
          rounded-lg text-gray-500
          hover:bg-gray-100
          transition-colors
        "
      >
        <FiUser size={20} />
      </button>

      {/* Cart Button */}
      <button
        className="
          relative w-9 h-9 flex items-center justify-center
          rounded-lg text-gray-500
          hover:bg-gray-100
          transition-colors
        "
      >
        <FiShoppingBag size={20} />

        {/* Cart Notification Dot */}
        <span
          className="
            absolute top-1 right-1
            w-2 h-2
            bg-red-500
            rounded-full
            border-2 border-white
          "
        />
      </button>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="
          md:hidden
          w-9 h-9
          flex items-center justify-center
          rounded-lg
          text-gray-500
          hover:bg-gray-100
          transition-colors
        "
      >
        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>
    </div>
  );
};

export default RightActions;