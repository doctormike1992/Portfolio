import "../styles/education.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import student from '../assets/student.svg'
import calendar from "../assets/calendar.svg";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      viewport={{ once: true }}
      id="education"
    >
      <div id="educationHeader">
        <h1>Education</h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          id="underline"
        ></motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        whileHover={{scale: 1.02}}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        id="educationDiv"
      >
        <div id="educationImgDiv">
          <img src={student} alt="student icon" />
        </div>
        <div id="educationInfoDiv">
          <span id="student">Computer Science Student</span>
          <span id="iek">IEK DELTA</span>
          <div id="ongoing">
            <span>
              <img src={calendar} alt="calendar icon" />
              Ongoing
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
     
  
}