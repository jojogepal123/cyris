import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div id="about" className="relative min-h-screen container flex flex-col justify-center items-center mx-auto text-white py-8 md:py-16 px-4">
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
          <div className="text-center lg:text-left">
            <motion.div
              className="text-white flex-1 uppercase flex flex-col items-center lg:items-start"
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-10 md:leading-12 lg:leading-16"
                style={{ fontFamily: "'Roboto Flex', sans-serif" }}
              >
                About
              </h2>
              <h2 className="relative text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter">
                <div className="absolute -right-16 md:-right-28 lg:-right-40 top-6 md:top-8 lg:top-10 bg-gradient-to-r from-white/50 to-white/5 w-20 md:w-28 lg:w-36 h-10 md:h-14 lg:h-18"></div>
                Us
              </h2>
            </motion.div>
            <div className="mt-6 md:mt-8">
              <img className="w-[250px] md:w-[300px] lg:w-[375px] h-[250px] md:h-[300px] lg:h-[375px] mx-auto" src="/images/about.png" alt="about" />
            </div>
          </div>
          <motion.div
            className="text-white p-4 md:p-8 lg:w-1/3"
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
          <a href="#contact"><ArrowBigRight size={32} md:size={40} className="cursor-pointer" /></a>
        </div>
      </div>
    </>
  );
};

export default About;
