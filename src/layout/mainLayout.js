import React, { useState } from "react";
import PopupBox from "../componets/popUpBox";
import Experience from "./Experience";
import Project from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import ResumeSection from "./Resume";
const Anand_Kisku_pic = require("../assets/Anand_Kisku_pic.png");
const Resume = require("../assets/Resume.pdf");
const kgp_logo = require("../assets/kgp_logo.png");
const video1 = require("../assets/video1.mp4");

function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const text = "Hi, I'm Anand Kisku";
  const text2 =
    "Frontend Developer | React | JavaScript | CSS | HTML | Node.js | Express.js | MongoDB";
console.log(window.location.href)
  return (
    <div className="animate-bg-cycle text-white min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-pink-700">
      {/* Navbar */}
      <nav className="sticky top-0 w-full z-10 shadow-lg bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500 p-4 md:px-12 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anand Kisku</h1>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <span className="text-3xl">&#x2715;</span>
            ) : (
              <span className="text-3xl">&#9776;</span>
            )}
          </button>
        </div>

        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 p-3 md:p-0 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <a
            href="#about"
            className="hover:text-indigo-400 transition duration-300 text-md hover:scale-110 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 w-full md:w-auto"
          >
            About
          </a>
          <a
            href="#education"
            className="hover:text-indigo-400 transition duration-300 text-md hover:scale-110 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 w-full md:w-auto"
          >
            Education
          </a>
          <a
            href="#skills"
            className="hover:text-indigo-400 transition duration-300 text-md hover:scale-110 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 w-full md:w-auto"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-indigo-400 transition duration-300 text-md hover:scale-110 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 w-full md:w-auto"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-400 transition duration-300 text-md hover:scale-110 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 w-full md:w-auto"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="hover:text-indigo-400 transition duration-300 text-md hover:scale-110 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 w-full md:w-auto"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-400 transition duration-300 text-md hover:scale-110 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 w-full md:w-[100px] sm:w-[100px"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen p-2 relative scroll-mt-20"
      >
        <div className="container mx-auto w-full">
          <div className="animate-wave-x animate-zoom text-lg flex flex-col items-center md:flex-row align-center hover:scale-105 transition duration-300 text-center font-bold leading-relaxed mb-6 p-4 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 rounded-lg m-4 shadow-xl">
            <img
              src={kgp_logo}
              alt="IIT Kharagpur"
              className="w-[300px] md:w-1/2 h-[260px] cursor-pointer"
              onClick={() => window.open("https://www.iitkgp.ac.in", "_blank")}
            />
            <div className="h-full flex items-center justify-center">
              A dedicated Software Developer with expertise in frontend and
              backend technologies, including React.js, JavaScript, Node.js,
              HTML, and various programming languages. Holds a strong academic
              background from IIT Kharagpur and has experience in delivering
              high-impact projects.
            </div>
          </div>
        </div>
        <div className="container mx-auto w-full flex flex-col items-center">
          <img
            src={Anand_Kisku_pic}
            alt="Anand Kisku"
            className="w-2/5 h-auto rounded-full object-cover border-4 border-none shadow-2xl animate-zoom"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center">
            {text.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block animate-wave-x"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center">
            {text2.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block animate-wave-x"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
          <a
            href="#projects"
            className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold hover:from-yellow-400 hover:to-pink-500 px-6 py-3 rounded-full shadow-lg transition-all duration-500 animate-bounce"
          >
            View My Work
          </a>
        </div>
      </section>

    <Education/>

      {/* Skills Section */}
      <Skills />
      {/* Experience Section */}
      <Experience video={video1} />

      {/* Projects Section */}
      <Project />

      {/* Resume Section */}
      <ResumeSection Resume={Resume} />

      {/* Contact Section */}
      <section id="contact" className="p-6 md:p-12 bg-gray-900">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="flex flex-col space-y-4 max-w-md mx-auto bg-gradient-to-r from-indigo-800 to-purple-800 p-6 rounded-xl shadow-xl">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-semibold">
              {" "}
              📩 Email: kiskuanand2015@gmail.com
            </h3>
          </div>
          <div >
            <a href="https://www.linkedin.com/in/anand-kisku-788319201" className="flex items-center space-x-4" target="_blank">
            <img
              src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
              alt="Linkedin"
              className="w-8 h-8 object-contain"
            />
            <h3 className="text-xl font-semibold">
              {" "}
               LinkedIn
            </h3>
           
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainLayout;
