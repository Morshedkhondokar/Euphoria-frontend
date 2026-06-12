const SocialButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        h-14
        border
        border-gray-400
        rounded-md
        flex
        items-center
        justify-center
        gap-3
        hover:bg-gray-50
        transition
        cursor-pointer
      "
    >
      {children}
    </button>
  );
};

export default SocialButton;
