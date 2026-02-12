
import "../styles/about.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="about"
    >
      <div id="aboutMe">
        <h1>About Me</h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          id="aboutUnder"
        ></motion.div>
      </div>
      <div id="aboutPara">
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        >
          I’m a junior front-end developer who enjoys building responsive
          websites and small web applications using HTML, CSS, JavaScript, and
          React. I like turning ideas and designs into clean, usable interfaces
          and constantly improving my code as I learn.
        </motion.p>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        >
          I’m also a Computer Science student, building a strong foundation in
          programming while working on real projects for my portfolio. I’m
          currently looking for my first front-end role in Greece, where I can
          gain hands-on experience, collaborate with a team, and grow as a
          developer.
        </motion.p>
      </div>
    </motion.section>
  );
}
