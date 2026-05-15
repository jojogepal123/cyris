import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const RiskAssessment = () => {
  return (
    <>
      <div id="risk-management" className="relative min-h-screen container flex flex-col justify-center items-center mx-auto text-white py-8 md:py-16 px-4">
        <motion.img
          src="/images/bg-side.png"
          className="absolute -left-1/4 max-h-screen hidden md:block"
          alt="bg-side"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false, amout: 0.3 }}
        />
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-20 px-4 lg:px-20 gap-8 lg:gap-0">
          <div className="w-full text-white flex-2 p-4 md:p-8">
            <div className="text-white flex-1 uppercase text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-8 md:leading-10 lg:leading-12">Risk</h2>
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight lg:tracking-tighter">
                Assessment
              </h2>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 bg-white/10 ps-4 md:ps-6 pe-4 md:pe-8 lg:pe-32 py-2 mt-2">
              Cyris Enterprise provides expert risk assessment services to help
              organizations identify, evaluate, and mitigate potential threats
              to their operations. We analyze financial, operational, and
              compliance- related risks, offering strategic insights for
              proactive decision- making. Our goal is to strengthen resilience,
              protect assets, and support sustainable business growth through
              informed risk management.
            </p>
          </div>
          <div className="relative flex-1">
            <div className="absolute top-[40%] -right-4 md:-right-8 w-20 md:w-40 h-20 md:h-40 rounded-full bg-white/10"></div>
            <div className="absolute bottom-[50%] -left-4 md:-left-8 w-12 md:w-24 h-12 md:h-24 rounded-full bg-white/20"></div>
            <motion.img
              className="w-[200px] md:w-[280px] lg:w-[350px] h-[300px] md:h-[450px] lg:h-[550px]"
              src="/images/mobile.png"
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: false, amount: 0.3 }}
            />
          </div>
        </div>
        <div className="absolute right-0 bottom-0 mb-8 md:mb-32">
          <a href="#process-audit"><ArrowBigRight size={32} md:size={40} className="cursor-pointer" /></a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default RiskAssessment;
