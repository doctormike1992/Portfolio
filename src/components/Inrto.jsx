import '../styles/intro.scss'
import image from '../assets/img.jpeg'
import Loc from '../assets/location.svg'
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function Intro() {
  return (
    <section id="intro">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        id="introDiv"
      >
        <main>
          <div id="available">
            <span></span>
            Available for Work
          </div>
          <div id="name">
            Hi, I'm <span>Mixalis Priftis</span>
          </div>
          <div id="title">Junior Front-End Developer</div>
          <div id="description">
            Building responsive websites and applications with modern
            technologies. Looking for my first professional role to grow and
            contribute to real projects.
          </div>
          <div id="location">
            <img src={Loc} alt="location svg" />
            Athens, Greece
          </div>
          <div id="inTouchButton">
            <a href="#getInTouch">Get in Touch</a>
          </div>
          <div id="icons">
            <div className="icon">
              <a href="https://github.com/doctormike1992" target="_blank">
                <img src={github} alt="github logo" />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/%CE%BC%CE%B9%CF%87%CE%B1%CE%BB%CE%B7%CF%82-%CF%80%CF%81%CE%B9%CF%86%CF%84%CE%B7%CF%82-110005323/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin logo" />
              </a>
            </div>
            <div className="icon">
              <a href="mailto:mixpri13@gmail.com">
                <img src={email} alt=" email logo" />
              </a>
            </div>
            <div className="icon">
              <a href="tel:+306977129051">
                <img src={phone} alt="phone logo" />
              </a>
            </div>
          </div>
        </main>
      </motion.div>
      <div id="imgDiv">
        <div id="img" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
    </section>
  );
}