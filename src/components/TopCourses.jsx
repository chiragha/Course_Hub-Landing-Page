import { useState } from "react";
import { Star } from "lucide-react";
import { CiTimer } from "react-icons/ci";
import { PiStudentBold } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";

const courses = [
  {
    id: 1,
    image: "/course1.avif",
    tutorImg: "/tutor1.avif",
    tutorName: "John Carter",
    profession: "Video Editor",
    rating: 4.8,
    reviews: 1240,
    title: "Comprehensive Programming Bootcamp",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore etSed do eiusmod tempor incididunt ut labore et Sed do eiusmod tempor incididunt ut labore et Sed do eiusmod tempor incididunt ut labore et. Sed do eiusmod tempor incididunt ut labore et Sed do eiusmod tempor .",
    students: 3200,
    language: "English",
    duration: "12 Hours",
  },
  {
    id: 2,
    image: "/course2.webp",
    tutorImg: "/tutor2.avif",
    tutorName: "Sarah Lee",
    profession: "Advanced Web Development Masterclass",
    rating: 4.7,
    reviews: 980,
    title: "UI/UX Design Bootcamp",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore etSed do eiusmod tempor incididunt ut labore et Sed do eiusmod tempor incididunt ut labore et Sed do eiusmod tempor incididunt ut labore et. Sed do eiusmod tempor incididunt ut labore et Sed do eiusmod tempor.",
    students: 2700,
    language: "English",
    duration: "10 Hours",
  },
  {
    id: 3,
    image: "/course3.avif",
    tutorImg: "/tutor3.avif",
    tutorName: "Alex Smith",
    profession: "Web Developer",
    rating: 4.9,
    reviews: 1500,
    title: "Full Stack MERN Bootcamp",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore etSed do eiusmod tempor incididunt ut labore et Sed do eiusmod tempor incididunt ut labore et Sed do eiusmod tempor incididunt ut labore et. Sed do eiusmod tempor incididunt ut labore .",
    students: 4100,
    language: "English",
    duration: "15 Hours",
  },
];

const TopCourses = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="instructors" className="py-20  bg-gray-50">
      <div className="max-w-8xl mx-auto ">
        {/* 🔹 Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Unlock Your{" "}
          <span className="bg-blue-600 text-white px-2 py-1 rounded">
            Top-Rated Programs
          </span>
        </h2>

        <div
          className="group relative bg-white rounded-2xl shadow-xl overflow-hidden 
flex flex-col md:flex-row min-h-[500px]"
        >
          <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row w-full transition-all duration-500">
            <div className="md:w-1/2 p-6 flex items-center justify-center">
              <div className="w-full h-[220px] md:h-[350px] overflow-hidden rounded-3xl">
                <img
                  src={courses[active].image}
                  alt="course"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={courses[active].tutorImg}
                  alt="tutor"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-white">
                    {courses[active].tutorName}
                  </h4>
                  <p className="text-sm text-gray-500 group-hover:text-white">
                    {courses[active].profession}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                <span className="font-semibold group-hover:text-white">
                  {courses[active].rating}
                </span>
                <span className="text-gray-500 text-sm group-hover:text-white">
                  ({courses[active].reviews} reviews)
                </span>
              </div>

              <h3 className="text-xl md:text-4xl font-bold group-hover:text-white line-clamp-2">
                {courses[active].title}
              </h3>

              <p className="text-gray-600 group-hover:text-white line-clamp-3 md:line-clamp-4">
                {courses[active].desc}
              </p>

              <hr className="border-gray-300 group-hover:border-white" />

              <div className="flex items-center gap-2 flex-wrap text-sm text-gray-600 group-hover:text-white">
                
                <span className="bg-[#081b42] text-white text-lg h-8 w-8 rounded-full flex items-center justify-center"><PiStudentBold /></span><span>{courses[active].students}</span>
                <span className="bg-[#081b42] text-white text-lg h-8 w-8 rounded-full flex items-center justify-center"><GrLanguage /></span><span> {courses[active].language}</span>
                <span className="bg-[#081b42] text-white text-lg h-8 w-8 rounded-full flex items-center justify-center"><CiTimer /></span><span>{courses[active].duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-3">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                active === index ? "w-8 bg-blue-600" : "w-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
