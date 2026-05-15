import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div id="home" className="min-h-screen container mx-auto text-white py-8 md:py-16 px-4">
        <div className="relative">
          <div className="absolute top-8 md:top-20 left-4 md:left-30 flex items-center gap-2 md:gap-4">
            <img src="/images/logo.png" alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
            <h1 className="text-lg md:text-2xl">Cyris Enterprise</h1>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-evenly pt-12 md:pt-16 gap-8 md:gap-0">
          <motion.img
            src="/images/bg-side.png"
            className="absolute -left-1/4 max-h-screen hidden md:block"
            alt="bg-side"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: false, amout: 0.3 }}
          />
          <div className="text-center md:text-left">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase leading-[3rem] sm:leading-[4rem] md:leading-[5rem] lg:leading-[6rem] scale-y-120 origin-top font-extrabold"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              cyris
            </motion.h1>
            <br />
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase leading-[3rem] sm:leading-[4rem] md:leading-[5rem] lg:leading-[6rem] scale-y-120 origin-top font-light"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              ENTERPRISE
            </motion.h1>
          </div>

          <div className="relative">
            <div className="absolute -left-4 md:-left-10 top-10 md:top-20 bg-white/30 w-[250px] md:w-[350px] lg:w-[550px] h-[250px] md:h-[350px] lg:h-[550px] rounded-full -z-0"></div>
            <motion.img
              className="relative z-50 w-[200px] md:w-[350px] lg:w-[600px]"
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              src="/images/laptop.png"
              alt="laptop"
            />
          </div>
        </div>
        <div className="float-right mt-4 md:mt-0">
          <a href='#importance'><ArrowBigRight size={32} md:size={40} className="cursor-pointer" /></a>
        </div>
      </div>
    </>
  );
};

export default Home;
