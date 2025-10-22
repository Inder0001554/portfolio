import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-6 pt-20 bg-black text-white"
    >
      {/* Floating slide-in image */}
      <motion.img
        src="/ai2.jpg"
        alt="Profile"
        className="w-64 h-64 object-cover rounded-2xl mb-8"
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0], // subtle floating
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          y: { repeat: Infinity, repeatType: "loop", duration: 4 },
        }}
        whileHover={{ scale: 1.05 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Hey, I’m <span className="text-blue-400">Inder</span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="text-gray-400 text-lg max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        A passionate fullstack developer who loves crafting sleek websites and smooth user experiences.
      </motion.p>
    </section>
  );
}
