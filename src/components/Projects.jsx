import "../styles/projects.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import link from "../assets/link.svg";


export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      viewport={{ once: true }}
      id="projects"
    >
      <div id="projectsHeader">
        <h1>Projects</h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          id="underline"
        ></motion.div>
      </div>

      <div id="projectsContainer">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ opacity: 1, duration: 1.3 }}
          transition={{ ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -20, duration: 0.1 }}
          className="project"
        >
          <h1>Tech E-shop</h1>
          <p>
            Implemented an e-commerce application with authentication, user
            accounts, and an admin panel for managing products and orders.
          </p>
          <div className="technologies">
            <span>React</span>
            <span>Redux Toolkit</span>
            <span>Tailwind</span>
            <span>Firebase</span>
          </div>
          <motion.button
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ ease: "ease", duration: 0.1 }}
          >
            <img src={link} alt="external link logo" />
            Live Demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ opacity: 1, duration: 1.3 }}
          transition={{ ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -20, duration: 0.1 }}
          className="project"
        >
          <h1>Front-End Only E-Shop</h1>
          <p>
            Developed an e-commerce frontend with vanilla JavaScript,
            implementing product browsing, cart management, and checkout
            interactions.
          </p>
          <div className="technologies">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Javascript</span>
            <span>Fetch API</span>
          </div>
          <motion.button
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ ease: "ease", duration: 0.1 }}
          >
            <img src={link} alt="external link logo" />
            Live Demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ opacity: 1, duration: 1.3 }}
          transition={{ ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -20, duration: 0.1 }}
          className="project"
        >
          <h1>Netflix Home Page Clone</h1>
          <p>
            Netflix-style frontend clone with dynamic content rendering and
            responsive design using vanilla JavaScript.
          </p>
          <div className="technologies">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Javascript</span>
            <span>Fetch API</span>
          </div>
          <motion.button
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ ease: "ease", duration: 0.1 }}
          >
            <img src={link} alt="external link logo" />
            Live Demo
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
