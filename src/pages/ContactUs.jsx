import React from "react";
import { PhoneCall, ArrowBigUp, AtSign, Rss } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <>
      <div
        id="contact"
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
                Contact
              </h2>
              <h2 className="relative text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter">
                <div className="absolute -right-16 md:-right-28 lg:-right-40 top-6 md:top-8 lg:top-10 bg-gradient-to-r from-white/50 to-white/5 w-20 md:w-28 lg:w-36 h-10 md:h-14 lg:h-18"></div>
                Us
              </h2>
            </motion.div>
          </div>
          <motion.div
            className="text-white flex-1 p-4 md:p-8 space-y-8 md:space-y-16 lg:space-y-20 lg:w-1/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex items-center space-x-2 md:space-x-4">
              <PhoneCall size={24} md:size={32} />
              <h3 className="text-lg md:text-2xl lg:text-4xl">+91*********</h3>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <AtSign size={24} md:size={32} />
              <h3 className="text-lg md:text-2xl lg:text-4xl">
                info@*******.com
              </h3>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Rss size={24} md:size={32} />
              <h3 className="text-lg md:text-2xl lg:text-4xl">
                www.***********.in
              </h3>
            </div>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 mb-8 md:mb-32">
          <a href="#home">
            <ArrowBigUp
              size={32}
              md:size={40}
              className="cursor-pointer text-white/50 border-2 rounded-full border-white/50 hover:border-white hover:text-white"
            />
          </a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ContactUs;
