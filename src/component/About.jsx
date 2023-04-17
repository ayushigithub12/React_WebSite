import React from "react";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name=" Welcome to About Page"
        imgsrc={
          "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
