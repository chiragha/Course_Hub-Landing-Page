import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        <img
          src="/hero.avif"
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Discover Courses That Shape Your Tomorrow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm md:text-lg text-gray-200"
        >
          Learn from industry experts and upgrade your skills with real-world
          projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-6 flex gap-4 justify-center flex-wrap"
        >
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Become an Instructor
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            View Courses
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
