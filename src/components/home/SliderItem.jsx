import { Link } from "react-router";

export default function SliderItem({
  eyebrow,
  title,
  subtitle,
  btnText,
  btnLink,
  secondBtnText,
  secondBtnLink,
  image,
  imageAlt,
}) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={imageAlt || title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-xl lg:max-w-2xl">
          
          {eyebrow && (
            <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-amber-300 mb-2 md:mb-4">
              {eyebrow}
            </p>
          )}

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-3 md:mb-4">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-5 md:mb-8 max-w-md">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {btnText && (
              <Link
                to={btnLink}
                className="bg-amber-400 hover:bg-amber-300 text-black font-semibold
                px-4 py-2 md:px-7 md:py-3
                rounded-full text-xs sm:text-sm transition-all duration-200"
              >
                {btnText}
              </Link>
            )}

            {secondBtnText && (
              <Link
                to={secondBtnLink || "/"}
                className="text-white/90 hover:text-white font-medium text-xs sm:text-sm transition-colors duration-200"
              >
                {secondBtnText}
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}