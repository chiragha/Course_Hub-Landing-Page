import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero.avif",
    title: "Discover Courses That Shape Your Tomorrow",
    desc: "Learn from industry experts and upgrade your skills with real-world projects.",
  },
  {
    image: "/hero2.avif",
    title: "Build Real-World Projects with Confidence",
    desc: "Hands-on learning that prepares you for job-ready skills.",
  },
  {
    image: "/her03.avif",
    title: "Upgrade Your Career with Expert Guidance",
    desc: "Get mentorship and structured learning paths.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <section id="home" className="relative h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Slider */}
      <div className="relative z-10 max-w-3xl px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={current.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            {current.title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={current.desc}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm md:text-lg text-gray-200"
          >
            {current.desc}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex gap-4 justify-center flex-wrap"
        >
          <button className="relative overflow-hidden px-6 py-3 rounded-lg bg-blue-600 text-white cursor-pointer group transition">
           
            <span className="absolute inset-0 bg-white scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>

           
            <span className="relative z-10 group-hover:text-black transition">
              Become an Instructor
            </span>
          </button>
          <button className="relative overflow-hidden px-6 py-3 rounded-lg border border-white text-white cursor-pointer group transition">
           
            <span className="absolute inset-0 bg-blue-600 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>

          
            <span className="relative z-10 group-hover:text-white transition">
              View Courses
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
