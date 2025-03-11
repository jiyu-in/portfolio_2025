import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const videoSources = [
  "videos/video1.mp4",
  "videos/video2.mp4",
];

const VideoSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setActiveIndex(index); // 비디오가 화면에 보이면 해당 인덱스를 활성화
          }
        });
      },
      { threshold: 1 } // 80%가 화면에 보일 때 활성화
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="relative">
      <Swiper spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} navigation>
        {videoSources.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex justify-center items-center h-screen">
              <motion.video
                ref={(el) => (videoRefs.current[index] = el)}
                src={src}
                autoPlay
                loop
                muted
                className="transition-transform duration-700"
                initial={{ width: 120, height: 360, opacity: 0 }}
                animate={{
                  width: activeIndex === index ? "100%" : 120,
                  height: activeIndex === index ? "100%" : 360,
                  opacity: activeIndex === index ? 1 : 0,
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {activeIndex !== null && (
        <div className="fixed top-5 left-5 bg-black text-white p-2 rounded-lg shadow-lg">
          현재 보이는 비디오: {activeIndex + 1}
        </div>
      )}
    </div>
  );
};

export default VideoSwiper;
