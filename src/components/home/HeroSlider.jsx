import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import SliderItem from './SliderItem';

import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSlider({ slides }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative group">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className={`w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden`}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <SliderItem {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Prev Button */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                   w-11 h-11 rounded-full
                   bg-white/10 hover:bg-white/25
                   border border-white/20
                   backdrop-blur-sm
                   flex items-center justify-center
                   text-white transition-all duration-200
                   opacity-0 group-hover:opacity-100"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {/* Custom Next Button */}
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                   w-11 h-11 rounded-full
                   bg-white/10 hover:bg-white/25
                   border border-white/20
                   backdrop-blur-sm
                   flex items-center justify-center
                   text-white transition-all duration-200
                   opacity-0 group-hover:opacity-100"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

function ChevronLeftIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}