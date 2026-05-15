import React from "react";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const DueDiligence = () => {
  return (
    <>
      <div id="due-diligence" className="relative min-h-screen container flex flex-col justify-center items-center mx-auto text-white py-8 md:py-16 px-4">
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
          <div className="text-white flex-1 p-4 md:p-8 relative">
            <div className="absolute top-2 md:top-4 left-0 w-12 md:w-20 h-12 md:h-20 rounded-full bg-white/30"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-200">
              At Cyris Enterprise, our due diligence services provide a
              comprehensive evaluation of potential business opportunities,
              partnerships, or investments. We analyze financial records, legal
              standing, operational performance, and reputational risks to
              deliver clear, actionable insights. Whether you're entering a
              merger, acquiring a company, or forming a new alliance, our
              in-depth assessments ensure you make informed, secure decisions
              with confidence and clarity—minimizing risk while maximizing
              strategic value.
            </p>
          </div>
          <motion.div
            className="bg-gradient-to-r from-[#247e9c] to-[#247e9cb3] border-2 border-cyan-400 clip-angled-box py-10 md:py-16 lg:py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center items-start text-white"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-8 md:leading-10 lg:leading-12">DUE</h2>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-light tracking-tight lg:tracking-tighter">DILIGENCE</h2>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 mb-8 md:mb-32">
          <a href="#bgb">
            <ArrowBigRight size={32} md:size={40} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
};

export default DueDiligence;
