import { FaLaptopCode, FaCertificate, FaBookOpen } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const MarqueeCourses = () => {
  const items = [
    { icon: <MdSchool />, text: "Expert Courses" },
    { icon: <FaLaptopCode />, text: "Hands-on Coding" },
    { icon: <FaCertificate />, text: "Certification" },
    { icon: <GiProgression />, text: "Career Growth" },
    { icon: <FaBookOpen />, text: "Learn Anytime" },
  ];

  return (
    <div className="relative overflow-hidden bg-blue-50 py-4">
      
      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

      {/* Marquee */}
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-[#032042] text-3xl font-semibold">
            <span className="text-2xl">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MarqueeCourses;