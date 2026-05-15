import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const Investigation = () => {
  return (
    <>
      <div id="investigation" className="relative min-h-screen container flex flex-col justify-center items-center mx-auto text-white py-8 md:py-16 px-4">
        <motion.img
          src="/images/bg-side.png"
          className="absolute -left-1/4 max-h-screen hidden md:block"
          alt="bg-side"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false, amout: 0.3 }}
        />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-30 px-4 lg:px-20 gap-8 lg:gap-0">
          <motion.div
            className="text-white uppercase relative text-center lg:text-left"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="absolute -right-4 md:-right-12 -top-2 md:-top-3 bg-gradient-to-r from-white/50 to-white/5 w-12 md:w-18 h-12 md:h-18 rounded-full"></div>
            <h2
              className="relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-8 md:leading-10 lg:leading-12"
              style={{ fontFamily: "'Roboto Flex', sans-serif" }}
            >
              Investigation
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tighter">Support</h2>
          </motion.div>
          <motion.div
            className="text-white flex-1/2 p-4 md:p-8 bg-gradient-to-r from-[#234482] to-white/10 shadow-sm"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-base md:text-lg lg:text-2xl text-gray-200">
              Cyris Enterprise provides comprehensive investigation support
              services to help organizations address internal concerns, fraud,
              misconduct, or external threats. Our experienced team conducts
              detailed research, interviews, and data analysis to uncover facts
              and gather reliable evidence. We work discreetly and
              professionally, maintaining strict confidentiality throughout the
              process. Whether assisting legal teams, HR departments, or
              compliance units, our goal is to deliver clear, actionable
              insights that support informed decision-making and protect the
              integrity and reputation of your business.
            </p>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 mb-8 md:mb-32">
          <a href="#surveillance"><ArrowBigRight size={32} md:size={40} className="cursor-pointer" /></a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Investigation;
