import { motion } from "framer-motion";
import { PiStudentBold } from "react-icons/pi";
import { MdLanguage } from "react-icons/md";

const courses = [
  {
    image: "/bootcamp.avif",
    level: "Beginner",
    title: "Comprehensive Programming Bootcamp",
    rating: 4.7,
    reviews: 164108,
    students: 3712,
    language: "English",
  },
  {
    image: "/laptop.avif",
    level: "Intermediate",
    title: "Advanced Web Development Masterclass",
    rating: 4.8,
    reviews: 125400,
    students: 3750,
    language: "English",
  },
  {
    image: "/music.avif",
    level: "Expert",
    title: "Full Stack MERN Bootcamp",
    rating: 4.9,
    reviews: 98000,
    students: 4200,
    language: "English",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16  bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Discover Your Path to{" "}
          <span className="bg-blue-600 text-white px-2 py-1 rounded">
            Success
          </span>
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group bg-white cursor-pointer rounded-xl shadow-md overflow-hidden 
  transition-all duration-300 hover:bg-blue-600 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt=""
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute top-3 left-3 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

             <div className="p-5 flex flex-col flex-1 transition-colors duration-300 group-hover:text-white">
                {/* TOP CONTENT */}
                <div>
                  {/* TITLE */}
                  <h3 className="font-semibold text-lg leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  {/* RATING */}
                  <div className="flex items-center gap-2 mt-3 text-sm">
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-500 group-hover:text-gray-200">
                      ({course.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 text-sm text-gray-500 group-hover:text-gray-200">
                  {/* Students */}
                  <div className="flex items-center gap-2">
                    <span className="bg-[#081b42] text-white h-8 w-8 rounded-full flex items-center justify-center">
                      <PiStudentBold className="text-lg" />
                    </span>
                    <span>{course.students}</span>
                  </div>

                  {/* Language */}
                  <div className="flex items-center gap-2">
                    <span className="bg-[#081b42] text-white h-8 w-8 rounded-full flex items-center justify-center">
                      <MdLanguage className="text-lg" />
                    </span>
                    <span>{course.language}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
