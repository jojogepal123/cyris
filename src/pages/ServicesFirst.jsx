import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const ServicesFirst = ({ services }) => {
  return (
    <>
      <div className="relative min-h-screen container flex flex-col justify-center items-center mx-auto text-white py-16">
        <motion.img
          src="/images/bg-side.png"
          className="absolute -left-1/4 max-h-screen hidden md:block"
          alt="bg-side"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false, amout: 0.3 }}
        />
        <div className="text-center -tracking-[6px] mb-28">
          <motion.h1
            className="text-7xl uppercase"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="font-extrabold">Our</span>&nbsp;
            <span className="font-light">Services</span>
          </motion.h1>
        </div>
        <div className="flex flex-wrap gap-24 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-80 h-84 flex flex-col items-center overflow-visible"
            >
              <div className="absolute -top-6 z-10 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 clip-hexagon-small flex items-center justify-center text-[#1e386e] text-2xl font-extrabold shadow-md">
                {service.id}
              </div>

              <motion.div
                className="w-full h-full bg-gradient-to-br from-[#234482] to-[#297b96] clip-hexagon flex items-center justify-center text-center shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <span className="text-white font-bold text-xl">
                  {service.title}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 bottom-0 mb-32">
          <a href="#services-second"><ArrowBigRight size={40} className="cursor-pointer" /></a>
        </div>
      </div>
    </>
  );
};

export default ServicesFirst;
