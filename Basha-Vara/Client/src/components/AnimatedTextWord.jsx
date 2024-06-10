import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");

// Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 * i },
    }),
  };

// Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 1,
        stiffness: 10,
      },
    },
    hidden: {
      opacity: 0,
      x: 2,
      transition: {
        type: "spring",
        damping: 1,
        stiffness: 10,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "10px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;