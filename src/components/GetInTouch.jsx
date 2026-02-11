import "../styles/getInTouch.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import email from "../assets/email2.svg";
import location from "../assets/location2.svg";
import phone from "../assets/phone2.svg";

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
        <a className="getDivs" href="mailto:mixpri13@gmail.com">
          <span>
            <img src={email} alt="email icon" />
          </span>

          <div>
            <p className="infoName">Email</p>
            <p className="infoData">mixpri13@gmail.com</p>
          </div>
        </a>
        <a className="getDivs" href="tel:+306977129051">
          <span>
            <img src={phone} alt="phone icon" />
          </span>

          <div>
            <p className="infoName">Phone</p>
            <p className="infoData">6977129051</p>
          </div>
        </a>
        <a className="getDivs">
          <span>
            <img src={location} alt="location icon" />
          </span>

          <div>
            <p className="infoName">Location</p>
            <p className="infoData">Athens, Greece</p>
          </div>
        </a>
        <a id="infoButtons">
          <button>
            <img src="" alt="" />
            GitHub
          </button>
          <button>
            <img src="" alt="" />
            Linkedin
          </button>
        </a>
        <button id="resume">
          <img src="" alt="download icon" />
          Download Resume
        </button>
      </div>
    </motion.section>
  );
}
