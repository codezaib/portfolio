import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-wrap text-[20px] md:text-xl">
        Hi! I'm <b>Shahzaib</b>, a passionate MERN stack developer with over 2
        years of hands-on experience building modern, interactive web
        applications using the latest technologies.
        <br /> As a dedicated Computer Science student and enthusiastic tech
        lover, I specialize in crafting efficient, user-friendly interfaces with
        React and Next.js.
      </p>
    </motion.section>
  );
}
