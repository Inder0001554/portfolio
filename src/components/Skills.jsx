import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
  "Node.js", "Express", "MongoDB", "Github",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-10 text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="px-8 py-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-400 text-lg"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
