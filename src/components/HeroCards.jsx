// HeroCards.jsx
import { motion } from "framer-motion";

const data = [
  { title: "25K+", desc: "Active Students" },
  { title: "120+", desc: "Courses Available" },
  { title: "50+", desc: "Expert Instructors" },
  { title: "4.8", desc: "Average Rating" },
];

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

const HeroCards = () => {
  return (
    <div className="relative z-20 max-w-8xl mx-auto px-4">
      {/* OVERLAY EFFECT */}
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
              <h2 className="text-3xl font-bold text-blue-600">
                {itemData.title}
              </h2>
              <p className="text-black text-2xl mt-2">{itemData.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroCards;
