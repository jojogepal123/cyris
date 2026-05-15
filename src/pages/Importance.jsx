import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const Importance = () => {
  return (
    <>
      <div
        id="importance"
        className="relative min-h-screen container flex flex-col justify-center items-center mx-auto text-white py-8 md:py-16 px-4"
      >
        <motion.img
          src="/images/bg-side.png"
          className="absolute -left-1/4 max-h-screen hidden md:block"
          alt="bg-side"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false, amout: 0.3 }}
        />
        <div className="text-center pt-8 md:pt-12">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase -tracking-2px md:-tracking-6px"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="font-extrabold">Cyris</span>&nbsp;
            <span className="font-light">Importance</span>
          </motion.h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly pt-8 md:pt-16 gap-8 md:gap-16">
          <motion.img
            className="w-[200px] md:w-[250px] lg:w-[300px]"
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.2 }}
            src="/images/importance1.png"
            alt="importance"
          />
          <div className="bg-[#244482] px-6 md:px-12 py-8 md:py-20">
            <p className="text-base md:text-xl lg:text-2xl">
              Cyris Enterprise is a trusted provider of comprehensive corporate
              solutions, specializing in due diligence, background checks (BGB),
              risk assessment, and financial investigations. We empower
              businesses with strategic insights through process audits,
              surveillance, and investigation support.
            </p>
          </div>
          <motion.img
            className="w-[200px] md:w-[250px] lg:w-[300px]"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.2 }}
            src="/images/importance2.png"
            alt="importance"
          />
        </div>
        <div className="absolute right-0 bottom-0 mb-8 md:mb-32">
          <a href="">
            <ArrowBigRight size={32} md:size={40} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Importance;
