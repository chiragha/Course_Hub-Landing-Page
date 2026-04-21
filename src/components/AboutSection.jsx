import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="w-full overflow-x-hidden py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/side.webp"
              alt="small"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="row-span-2 rounded-xl overflow-hidden">
            <img
              src="/big.avif"
              alt="big"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden">
            <video
              src="/file.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h4 className="text-blue-600 font-medium mb-2 text-2xl whitespace-nowrap">
            Welcome to SkillSync
          </h4>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-6xl text-[#032042] font-semibold mb-8"
          >
            Empowering Minds <br /> Shaping Futures
          </motion.h2>

          <div className="flex gap-4 items-start mb-6">
            <div className="bg-[#032042] text-2xl text-white p-3 rounded-lg">
              🚀
            </div>
            <div>
              <h3 className="font-semibold text-[#032042] text-2xl">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Helping students gain real-world skills through modern learning.
              </p>
            </div>
          </div>

          <div className="ml-6 mt-2 h-10 border-l-2 border-[#3d4a58]"></div>

          {/* Vision */}
          <div className="flex gap-4 items-start mt-6">
            <div className="bg-[#032042] text-2xl text-white p-3 rounded-lg">
              👁️
            </div>
            <div>
              <h3 className="font-semibold text-[#032042] text-2xl">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Building a global platform where learning never stops.
              </p>
            </div>
          </div>
          <div className="ml-6 mt-2 h-10 border-l-2 border-[#3d4a58]"></div>

          <button className="mt-8 cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-lg transition-all duration-300  hover:bg-[#032042] border text-white">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
