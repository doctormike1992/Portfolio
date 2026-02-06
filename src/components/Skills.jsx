import "../styles/skills.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Skills() {
  return (
    <motion.section>
      <div id="skills&tech">
        <h1>Skills & Technologies</h1>
        <div id="underline"></div>
      </div>

      <div id="skillsGrid">
        <div className="skill">
          <h1>HTML5</h1>
          <span>Core</span>
        </div>
        <div className="skill">
          <h1>CSS3</h1>
          <span>Core</span>
        </div>
        <div className="skill">
          <h1>Javascript (ES6+)</h1>
          <span>Core</span>
        </div>
        <div className="skill">
          <h1>React</h1>
          <span>Framework</span>
        </div>
        <div className="skill">
          <h1>Tailwind CSS</h1>
          <span>Styling</span>
        </div>
        <div className="skill">
          <h1>SCSS</h1>
          <span>Styling</span>
        </div>
        <div className="skill">
          <h1>REST APIs</h1>
          <span>API</span>
        </div>
        <div className="skill">
          <h1>Git</h1>
          <span>Tools</span>
        </div>
      </div>
    </motion.section>
  );
}
