import "../styles/courses.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import award from "../assets/award.svg";
import link from "../assets/link.svg";

export default function Courses() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      viewport={{ once: true }}
      id="courses"
    >
      <div id="coursesHeader">
        <h1>Online Courses & Certifications</h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 300 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          id="underline"
        ></motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        id="coursesDiv"
      >
        <div id="coursesImgDiv">
          <img src={award} alt="award icon" />
        </div>
        <div id="coursesInfoDiv">
          <span id="seminar">Seminars at Datalabst</span>

          <div id="viewClarification">
            <a href="https://datalabs.edu.gr/Student/Certification/6090" target="_blank">
              View Clarification
              <img src={link} alt="link icon" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
