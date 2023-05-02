"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CustomSoftwareFrame = ({ title, desc, bullets }: any) => {
  const [selectedBullet, setSelectedBullet] = useState(0);
  const scrollContainerRef = useRef(null);
  const scrollItemRef = useRef(null);

  const handleBulletClick = (index: any) => {
    setSelectedBullet(index);
  };

  useEffect(() => {
    if (scrollContainerRef.current && scrollItemRef.current) {
      const scrollContainer: any = scrollContainerRef.current;
      const scrollItem: any = scrollItemRef.current;

      const scrollHeight = scrollItem.scrollHeight;

      // Scroll to the top first smoothly.

      let start: any = null;
      const duration = 5000; // The duration of the scroll animation in milliseconds

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const currentScroll = (progress / duration) * scrollHeight;
        scrollContainer.scrollTop = currentScroll;

        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          scrollContainer.scrollTop = scrollHeight;
        }
      };

      requestAnimationFrame(step);
    }
  }, [selectedBullet]);

  return (
    <div className="w-full flex items-center justify-between flex-col lg:flex-row my-40">
      <div className="">
        <h1 className="text-[40px] lg:text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#fa2e00] to-[#ff764c]">
          {title}
        </h1>
        <p className="max-w-4xl text-[14px] mr-10">{desc}</p>
        <ul className="pl-4 py-5 mb-20 lg:mb-0">
          {bullets.map(({ heading, image }: any, index: any) => (
            <li
              key={index}
              className={`py-2 w-fit my-2 hover:opacity-60 duration-200 hover:cursor-pointer ${
                selectedBullet === index
                  ? "opacity-100 hover:opacity-90"
                  : "opacity-40"
              }`}
              onClick={() => handleBulletClick(index)}
            >
              {heading}
            </li>
          ))}
        </ul>
      </div>
      <div className="shadow-[0px_48px_100px_rgba(250,46,0,0.4)] relative">
        <Image
          src="/convos/custom_soft_terminal.png"
          alt=""
          height={500}
          width={800}
          priority
        />

        <div
          ref={scrollContainerRef}
          className="absolute top-[22px] bottom-[32px] sm:top-[37px] px-3 left-0 sm:bottom-[55px] w-full bg-transparent overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-300 "
        >
          {/* Contents to scroll */}
          <div
            ref={scrollItemRef}
            className="relative w-full image-container py-2"
          >
            <img
              src={bullets[selectedBullet]?.image}
              alt="Long image"
              className="auto-scroll-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSoftwareFrame;
