import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = ({ services }) => {
  return (
    <>
      <div className="relative min-h-screen container flex flex-col justify-center items-center mx-auto text-white py-8 md:py-16 px-4">
        <motion.img
          src="/images/bg-side.png"
          className="absolute -left-1/4 max-h-screen hidden md:block"
          alt="bg-side"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false, amout: 0.3 }}
        />
        <div className="text-center -tracking-[2px] md:-tracking-[6px] mb-12 md:mb-28">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="font-extrabold">Our</span>&nbsp;
            <span className="font-light">Services</span>
          </motion.h1>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-24 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-64 md:w-72 lg:w-80 h-72 md:h-80 lg:h-84 flex flex-col items-center overflow-visible"
            >
              <div className="absolute -top-4 md:-top-6 z-10 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-gray-200 to-gray-300 clip-hexagon-small flex items-center justify-center text-[#1e386e] text-xl md:text-2xl font-extrabold shadow-md">
                {service.id}
              </div>

              <motion.div
                className="w-full h-full bg-gradient-to-br from-[#234482] to-[#297b96] clip-hexagon flex items-center justify-center text-center shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <span className="text-white font-bold text-base md:text-lg lg:text-xl">
                  {service.title}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 bottom-0 mb-8 md:mb-32">
          <a href="#due-diligence"><ArrowBigRight size={32} md:size={40} className="cursor-pointer" /></a>
        </div>
      </div>
    </>
  );
};

export default Services;
