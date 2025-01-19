import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";

const techStacks = [
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "redux.svg", language: "Redux" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "express.svg", language: "Express JS" },
  { icon: "mongodb.svg", language: "MongoDB" },
  { icon: "mysql.svg", language: "My SQL" },
  { icon: "java.svg", language: "Java" },
  { icon: "cpp.svg", language: "C++" },
  { icon: "git.svg", language: "Git" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "MUI.svg", language: "Material UI" },
];

export default function Skills() {
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Skills"
      style={{ marginTop: "10rem" }}
    >
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Tools and technologies I use to build efficient and impactful web applications.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                data-aos={
                  index % 3 === 0
                    ? "fade-up-right"
                    : index % 3 === 1
                    ? "fade-up"
                    : "fade-up-left"
                }
                data-aos-duration={
                  index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"
                }
              >
                <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
}
