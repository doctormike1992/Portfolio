import "../styles/getInTouch.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import email from "../assets/email2.svg";
import location from "../assets/location2.svg";
import phone from "../assets/phone2.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin2.svg";
import download from "../assets/download.svg";

export default function GetInTouch() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      viewport={{ once: true }}
      id="getInTouch"
    >
      <div id="getInTouchHeader">
        <h1>Get In Touch</h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 150 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          id="underline"
        ></motion.div>
      </div>

      <div id="getInTouchDiv">
        <p>
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </p>
        <motion.a
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: 0.1 },
          }}
          whileHover={{
            x: 10,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="getDivs"
          href="mailto:mixpri13@gmail.com"
        >
          <span>
            <img src={email} alt="email icon" />
          </span>

          <div>
            <p className="infoName">Email</p>
            <p className="infoData">mixpri13@gmail.com</p>
          </div>
        </motion.a>
        <motion.a
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: 0.3 },
          }}
          whileHover={{
            x: 10,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="getDivs"
          href="tel:+306977129051"
        >
          <span>
            <img src={phone} alt="phone icon" />
          </span>

          <div>
            <p className="infoName">Phone</p>
            <p className="infoData">6977129051</p>
          </div>
        </motion.a>
        <motion.a
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: 0.5 },
          }}
          whileHover={{
            x: 10,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="getDivs"
        >
          <span>
            <img src={location} alt="location icon" />
          </span>

          <div>
            <p className="infoName">Location</p>
            <p className="infoData">Athens, Greece</p>
          </div>
        </motion.a>
        <div id="infoButtons">
          <a href="https://github.com/doctormike1992" target="_blank">
            <img src={github} alt="github logo" />
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/%CE%BC%CE%B9%CF%87%CE%B1%CE%BB%CE%B7%CF%82-%CF%80%CF%81%CE%B9%CF%86%CF%84%CE%B7%CF%82-110005323/" target="_blank">
            <img src={linkedin} alt="linkedin logo" />
            Linkedin
          </a>
        </div>
        <a href="/Mixalis-Priftis-CV.pdf" download id="resume">
          <img src={download} alt="download icon" />
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}
