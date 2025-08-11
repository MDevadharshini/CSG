import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import PopularCourses from "./PopularCourses";
import Testimonials from "./Testimonials";


const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <PopularCourses/>
        <Testimonials/>
    
    </div>
  );
};

export default Home;