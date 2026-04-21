import { useState } from "react";
import { Star } from "lucide-react";
import { PiStudentBold } from "react-icons/pi";
import { MdLanguage } from "react-icons/md";

const coursesData = [
  {
    id: 1,
    image: "/course1.avif",
    title: "Full-Stack Web Development Bootcamp",
    price: 499,
    rating: 4.9,
    reviews: 1500,
    students: 4100,
    language: "English",
    type: "top",
  },
  {
    id: 2,
    image: "/course2.webp",
    title: "Advanced CSS and Sass",
    price: 399,
    rating: 4.7,
    reviews: 1200,
    students: 3500,
    language: "English",
    type: "selling",
  },
  {
    id: 3,
    image: "/course3.avif",
    title: "Full-Stack Web Development Bootcamp",
    price: 299,
    rating: 4.8,
    reviews: 1800,
    students: 2800,
    language: "English",
    type: "reviews",
  },
  {
    id: 4,
    image: "/course1.avif",
    title: "Data Science and Machine Learning with Python",
    price: 599,
    rating: 4.9,
    reviews: 2100,
    students: 5000,
    language: "English",
    type: "top",
  },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Top Rated", value: "top" },
  { label: "Most Selling", value: "selling" },
  { label: "Most Reviews", value: "reviews" },
];
const CourseCategories = () => {
  const [activeTab, setActiveTab] = useState("all");

 const filteredCourses = (() => {
  if (activeTab === "top") {
    return [...coursesData].sort((a, b) => b.rating - a.rating);
  }

  if (activeTab === "selling") {
    return [...coursesData].sort((a, b) => b.students - a.students);
  }

  if (activeTab === "reviews") {
    return [...coursesData].sort((a, b) => b.reviews - a.reviews);
  }

  return coursesData;
})();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl lg:max-w-[1400px] mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Find the Perfect Match to Your{" "}
          <span className="bg-blue-600 text-white px-2 py-1 rounded">
            Interest
          </span>
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
            onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                activeTab === tab.value
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative flex flex-col lg:flex-row items-stretch 
  gap-6 md:gap-8 p-5 md:p-8 lg:p-10 
  bg-white rounded-2xl shadow-md overflow-hidden 
  transition-all duration-500 
  hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="absolute inset-0 bg-blue-600 
    scale-x-0 group-hover:scale-x-100 
    origin-left transition-transform duration-700 ease-in-out z-0"
              ></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 w-full">
                <div
                  className="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-auto
  flex-shrink-0 overflow-hidden rounded-xl"
                >
                  <img
                    src={course.image}
                    alt="course"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between space-y-3 py-2">
                  <p className="text-[#032042] font-semibold text-lg md:text-xl transition-colors duration-500 group-hover:text-white">
                    ₹{course.price}
                  </p>

                  <h3 className="font-bold text-[#041938] text-lg md:text-xl leading-snug transition-colors duration-500 group-hover:text-white">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm md:text-base">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="transition-colors duration-500 group-hover:text-white">
                      {course.rating}
                    </span>
                    <span className="text-gray-500 transition-colors duration-500 group-hover:text-white">
                      ({course.reviews})
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-500 group-hover:text-white">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#081b42] text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <PiStudentBold className="text-lg" />
                      </span>
                      <span>{course.students}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-[#081b42] text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <MdLanguage className="text-lg" />
                      </span>
                      <span>{course.language}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
