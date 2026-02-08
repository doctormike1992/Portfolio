import "../styles/skills.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: .02 } },
};
const items = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, ease: 'easeInOut', duration: 0.8 }
};

export default function Skills() {
  const skills = [
    { skill: "HTML5", span: "Core" },
    { skill: "CSS3", span: "Core" },
    { skill: "Javascript (ES6+)", span: "Core" },
    { skill: "React", span: "Framework" },
    { skill: "Tailwind CSS", span: "Styling" },
    { skill: "SCSS", span: "Styling" },
    { skill: "Fetch APIs", span: "API" },
    { skill: "Git", span: "Tools" },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      viewport={{ once: true }}
      id="skills"
    >
      <div id="skillsTech">
        <h1>Skills & Technologies</h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 200 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          id="underline"
        ></motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="skillsGrid"
      >
        {skills.map((item) => (
          <motion.div
            variants={items}
            key={item.skill}
            className="skill"
          >
            <h1>{item.skill}</h1>
            <span>{item.span}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
