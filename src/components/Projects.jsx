import { motion } from "framer-motion";
import { link } from "framer-motion/client";

const projects = [
  { name: "Portfolio Website", desc: "A personal portfolio with smooth animations and dark mode.", tech: "React, Tailwind, Framer Motion", link:"/" },
  { name: "Airbnb Clone", desc: "With Node.js, Express, and MongoDB", tech: "Node.js", link: "https://air-bnb-clone-keox.onrender.com/listings"},
  { name: "Weather Dashboard", desc: "Real-time weather data using public APIs.", tech: "React, OpenWeather API", link: "https://weather-app-swart-one-80.vercel.app/"},
  { name: "Recipe Site", desc: "We can learn recipe for different foods, vegetable and fruits.", tech: "React.js, tailwind CSS", link: "https://recipe-alpha-swart.vercel.app/" },
  { name: "Two good frontend", desc: "its a clone page as similar as two good website", tech: "html, css, javascript", link: "https://two-good-swart.vercel.app/"},
  { name: "ochi frontend", desc: "its a colne page similar as ochi website", tech: "react.js, framer-motion", link: "https://ochi-smoky.vercel.app/"}
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-10 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-400 transition"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>
            <p className="text-gray-400 mb-3">{p.desc}</p>
            <p className="text-sm text-blue-400">{p.tech}</p>
            <h6 className="text-sm text-blue-400"><a href={p.link} target="_blank" rel="noopener noreferrer">View Project</a></h6>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
