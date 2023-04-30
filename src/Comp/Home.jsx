import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [text, setText] = useState("");
  const sentence = "Full Stack Develeoper";
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(sentence.slice(0, index));
      index++;
      if (index > sentence.length) clearInterval(intervalId);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div className="main">
        <h1 className="myname">Sourav Joshi</h1>
      </div>
      <div className="animation">
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {text}
        </motion.h1>
        <p className="myinfo">
          Proficient in SERN stack , HTML , CSS ,Python ,docker. Experience in
          designing and developing user-friendly and responsive web
          applications.Passionate about new technology and seeking new
          challenges.
        </p>
      </div>
      <div className="socials">
        <a target="_blank" href="https://github.com/SouravSunilJoshi">
          <img src="../src/assets/github.png" alt="" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/souravjoshi2410/"
        >
          <img src="../src/assets/linkedin.png" alt="" />
        </a>
        <a href="mailto: souravjoshi2410@gmail.com">
          <img src="../src/assets/mail.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Home;
