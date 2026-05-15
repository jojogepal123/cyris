import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const BackGround = () => {
  return (
    <>
      <div id="bgb" className="relative min-h-screen container flex flex-col justify-center items-center mx-auto text-white py-8 md:py-16 px-4">
        <motion.img
          src="/images/bg-side.png"
          className="absolute -left-1/4 max-h-screen hidden md:block"
          alt="bg-side"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false, amout: 0.3 }}
        />
        <div className="flex flex-col xl:flex-row items-center justify-center xl:space-x-20 px-4 xl:px-20 gap-8 xl:gap-0">
          <div className="relative flex-1 order-2 xl:order-1">
            <div className="absolute -top-4 md:-top-8 right-2 w-20 md:w-40 h-20 md:h-40 rounded-full bg-white/30 z-0"></div>
            <div className="absolute -bottom-4 md:-bottom-8 left-2 w-20 md:w-40 h-20 md:h-40 rounded-full bg-white/30 z-0"></div>
            <motion.img
              className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] z-10 object-cover"
              src="/images/bgbsupport.png"
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: false, amount: 0.3 }}
            />
          </div>
          <div className="text-white flex-1 order-1 xl:order-2 text-center xl:text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-8 md:leading-10 lg:leading-12">BGB</h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight lg:tracking-tighter">SUPPORT</h2>
          </div>
          <div className="text-white flex-1 p-4 md:p-8 relative order-3">
            <div className="absolute top-3 md:top-6 left-2 w-8 md:w-12 h-8 md:h-12 rounded-full bg-white/30"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-200">
              Cyris Enterprise specializes in conducting detailed Background
              Checks (BGB) to support secure and informed hiring, partnerships,
              and business decisions. Our investigations cover criminal records,
              employment history, education verification, financial background,
              and reputational insights. We ensure accuracy, discretion, and
              compliance with legal standards. Whether screening individuals or
              organizations, our BGB services help clients identify potential
              risks early and build trustworthy relationships with confidence
              and peace of mind.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 mb-8 md:mb-32">
          <a href="#risk-management"><ArrowBigRight size={32} md:size={40} className="cursor-pointer" /></a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BackGround;
