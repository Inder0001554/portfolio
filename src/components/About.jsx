import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-10 text-center md:text-left md:px-32">
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        I’m a MERN STACK Developer with foundation in JavaScript, building
        dynamic and responsive web applications. I’m passionate about blending
        design and logic to build experiences that not only look great but also
        perform beautifully.  
        <br />
        <br />
        Beyond coding, I enjoy writing music and listening also, learning about new
        technologies that push the limits of creativity.
      </motion.p>
    </section>
  );
}
