import React, { useEffect, useState } from "react";

const TypingParagraph = ({ text, speed = 200 }) => {
  const words = text.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + (prev ? " " : "") + words[currentIndex]);
      setCurrentIndex((prev) => prev + 1);

      if (currentIndex >= words.length - 1) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, words, speed]);

  return (
    <p className="whitespace-pre-wrap text-lg tracking-wide leading-relaxed font-medium text-white">
      {displayedText}
      <span className="animate-pulse"></span>
    </p>
  );
};

export default TypingParagraph;
