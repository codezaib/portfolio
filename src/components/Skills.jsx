import { motion } from "framer-motion";

const skills = [
  { name: "ReactJS", level: 100 },
  { name: "NextJS", level: 90 },
  { name: "JavaScript", level: 100 },
  { name: "NodeJS", level: 90 },
  { name: "MySQL", level: 90 },
  { name: "MongoDB", level: 100 },
];

export default function Skills() {
  return (
    <motion.section
      key="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 h-[250px] w-4/5 md:w-3/5 overflow-hidden overflow-y-scroll pr-4"
    >
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-white/10 h-3 rounded-md">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              className="h-3 bg-purple-500 rounded-md"
            />
          </div>
        </div>
      ))}
    </motion.section>
  );
}
