import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const ProcessAudit = () => {
  return (
    <>
      <div id="process-audit" className="relative min-h-screen container flex flex-col justify-center items-center mx-auto text-white py-8 md:py-16 px-4">
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
          <div className="text-white flex-1 p-4 md:p-8 relative order-2 lg:order-1">
            <div className="absolute top-3 md:top-6 left-4 w-8 md:w-12 h-8 md:h-12 rounded-full bg-gradient-to-r from-white/30 to-white/5"></div>
            <p className="text-base md:text-lg lg:text-2xl text-gray-200">
              Cyris Enterprise conducts thorough process audits to evaluate the
              efficiency, compliance, and effectiveness of organizational
              workflows. Our audits identify gaps, redundancies, and risks
              within existing processes, helping businesses improve performance
              and ensure regulatory adherence. We deliver clear, actionable
              recommendations to streamline operations and enhance overall
              productivity and control.
            </p>
          </div>
          <motion.div
            className="text-white uppercase flex-1 relative text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="absolute right-8 md:right-16 -top-2 md:-top-3 bg-gradient-to-r from-white/50 to-white/5 w-16 md:w-22 h-16 md:h-22 rounded-full"></div>
            <h2
              className="relative text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-10 md:leading-12 lg:leading-16"
              style={{ fontFamily: "'Roboto Flex', sans-serif" }}
            >
              Process
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tighter">Audit</h2>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 mb-8 md:mb-32">
          <a href="#investigation"><ArrowBigRight size={32} md:size={40} className="cursor-pointer" /></a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ProcessAudit;
