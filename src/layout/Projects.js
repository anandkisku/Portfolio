import { li } from "framer-motion/client";
import React from "react";
const video3 = require("../assets/video3.mp4");
const video1 = require("../assets/video1.mp4");
const video2 = require("../assets/video2.mp4");
const ss1 = require("../assets/ss1.png");
const ss2 = require("../assets/ss2.png");
const ss4 = require("../assets/ss4.png");
const ss5 = require("../assets/ss5.png");
const ss6 = require("../assets/ss6.png");

const appArray = [
  {
    title: "React Movie Application",
    description:
      "This website helps you to find any movie name. It fetches movies from TMBD website",
    image: ss4,
    link: "https://movie-search-anand.web.app",
  },
  {
    title: "Add Contact List Application",
    description:
      "This is a Contact App website. In this you can add the contacts, edit the contact and also delete the contacts. I have build this project using redux.",
    image: ss5,
    link: "https://contactapp-2fee3.web.app",
  },
  {
    title: "Stock Application",
    description:
      "In this website you can search any stocks value. I have used RestAPI for it. It is a demo stock website. It does not show realtime stocks' price. You can add stocks in the list and if you want to delete the stocks from the list you can also do that.",
    image: ss6,
    link: "https://stockapp-bb589.firebaseapp.com",
  },
];

export default function Project() {
  return (
    <section id="projects" className="p-6 md:p-12 bg-gray-900 scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="bg-gradient-to-br from-purple-800 to-indigo-700 p-6 rounded-xl hover:scale-100 transition duration-300 text-white shadow-lg">
          <div className="w-full flex jusify-space-between">
            <h3 className="text-lg w-full font-semibold mb-2">
              My own Projects
            </h3>{" "}
          </div>
          <h3 className="text-md w-full mb-2 font-mono">
            I have created many react website project Here I have mentioned
            below some of my react projects These websites are only only for the
            demo purpose You can visite the websites on clicking the button
          </h3>
          <h3 className="text-md w-full font-semibold mb-1">
            Tech Used : React.js, Node.js, Express.js, MongoDB, JavaScript,
            HTML, CSS, Tailwind Css, Material UI, Jquery, Firebase
          </h3>
          <div className=" ml-1 mr-1 mt-8 p-2 shadow-2xl rounded-xl bg-gradient-to-br from-indigo-700 to-purple-800">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-4 lg:px-4 sm:px-1 md:px-1 mb-4 justify-center">
              {appArray.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-800 to-indigo-700 p-2 rounded-xl hover:scale-105 transition duration-300 text-white shadow-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                  <p className="font-mono p-4 text-md">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex justify-center"
                  >
                    <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold hover:from-yellow-400 hover:to-pink-500 px-6 py-3 rounded-full shadow-lg transition-all duration-500">
                      Click To Visit
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
