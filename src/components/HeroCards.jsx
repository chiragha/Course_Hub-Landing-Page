import { motion } from "framer-motion";
import CountUp from "./CountUp";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const data = [
  { value: 25, suffix: "K+", desc: "Active Students" },
  { value: 120, suffix: "+", desc: "Courses Available" },
  { value: 50, suffix: "+", desc: "Expert Instructors" },
  { value: 4.8, suffix: "", desc: "Average Rating" },
];

const HeroCards = () => {
  return (
    <div className="relative z-20 max-w-8xl mx-auto px-4">
      <div className="-mt-20 md:-mt-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <h2 className="text-4xl font-bold text-[#032042]">
                <CountUp
                  end={itemData.value}
                  suffix={itemData.suffix}
                />
              </h2>

              <p className="text-[#032042] font-semibold text-2xl mt-2">
                {itemData.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroCards;