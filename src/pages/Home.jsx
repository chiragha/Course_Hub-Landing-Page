import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroCards from "../components/HeroCards";    
import AboutSection from "../components/AboutSection";
import MarqueeText from "../components/MarqueeText";
import CoursesSection from "../components/CoursesSection";
import TopCourses from "../components/TopCourses";
import CourseCategories from "../components/CourseCategories";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroCards />
      <AboutSection /> 
      <MarqueeText /> 
      <CoursesSection />
      <TopCourses />
      <CourseCategories />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Home;
