import React from "react";
import "./exp.css";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Cybage Software Pvt Ltd",
      duration: "Nov 2023 - Present",
      description: [
        "Resolved JavaScript and CSS bugs in a Travel and Hospitality web application, reducing maintenance overhead.",
        "Developed a dynamic web page using HTML, CSS, and JavaScript, ensuring efficient load performance",
        "Improved responsiveness across multiple web pages using CSS media queries.",
      ],
    },
    {
      role: "React Developer Intern",
      company: "NR Crew",
      duration: "Jul 2023 - Oct 2023",
      description: [
        "Developed Room and Staff modules for a Hotel Management application using React, streamlining room allocation and staff management processes.",
        "Implemented secure authentication and role-based access control to prevent unauthorized access.",
      ],
    },
  ];

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Experience"
      style={{
        marginBottom: "8rem",
      }}
    >
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
            Experience
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Showcasing my professional journey, technical growth, and impactful projects in
          software development.
        </p>
      </div>

      <section className="experience">
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h2
                className="experience-role"
                style={{ fontSize: "28px", fontWeight: "600" }}
              >
                {exp.role}
              </h2>
              <p
                className="experience-company"
                style={{ fontSize: "20px", marginBottom: "0.3rem" }}
              >
                {exp.company}
              </p>
              <p className="experience-duration" style={{ fontSize: "14px" }}>
                {exp.duration}
              </p>
              <ul className="experience-description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
