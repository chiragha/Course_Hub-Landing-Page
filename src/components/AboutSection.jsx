import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE (MEDIA GRID) */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Small Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="/side.webp"
              alt="small"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BIG IMAGE (span 2 rows) */}
          <div className="row-span-2 rounded-xl overflow-hidden">
            <img
              src="/big.avif"
              alt="big"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Video / GIF */}
          <div className="rounded-xl overflow-hidden relative">
            <video
              src="/file.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>


        </div>

        {/* RIGHT SIDE (CONTENT) */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Empowering Minds, <br /> Shaping Futures
          </motion.h2>

          {/* Mission */}
          <div className="flex gap-4 items-start mb-6">
            <div className="bg-blue-900 text-white p-3 rounded-lg">
              🚀
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Mission</h3>
              <p className="text-gray-600 text-sm mt-1">
                Helping students gain real-world skills through modern learning.
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="ml-6 h-10 border-l-2 border-blue-300"></div>

          {/* Vision */}
          <div className="flex gap-4 items-start mt-6">
            <div className="bg-blue-900 text-white p-3 rounded-lg">
              👁️
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Vision</h3>
              <p className="text-gray-600 text-sm mt-1">
                Building a global platform where learning never stops.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600 border border-blue-600">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;