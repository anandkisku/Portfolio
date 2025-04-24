import React from 'react'
const React_pic = require("../assets/react_pic.png");
const Node = require("../assets/nodejs_pic.png");

const skillsArray = [
  {
    name: "Languages",
    items: [
      {
        name: "JavaScript",
        image: "https://img.icons8.com/color/48/000000/javascript.png",
      },
      {
        name: "TypeScript",
        image: "https://img.icons8.com/color/48/000000/typescript.png",
      },
      {
        name: "C++",
        image: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
      },
    ],
  },
  {
    name: "Frontend",
    items: [
      {
        name: "React.js",
        image: React_pic,
      },
      {
        name: "HTML",
        image: "https://img.icons8.com/color/48/000000/html-5.png",
      },
      {
        name: "CSS",
        image: "https://img.icons8.com/color/48/000000/css3.png",
      },
      {
        name: "Material UI",
        image: "https://img.icons8.com/color/48/000000/material-ui.png",
      },
    ],
  },
  {
    name: "Backend",
    items: [
      {
        name: "Node.js",
        image: Node,
      },
      {
        name: "Express.js",
        image: "https://img.icons8.com/color/48/000000/express.png",
      },
    ],
  },
  {
    name: "Database",
    items: [
      {
        name: "MySQL",
        image: "https://img.icons8.com/color/48/000000/mysql-logo.png",
      },
      {
        name: "MongoDB",
        image: "https://img.icons8.com/color/48/000000/mongodb.png",
      },
    ],
  },
  {
    name: "Technology",
    items: [
      {
        name: "Git",
        image: "https://img.icons8.com/color/48/000000/git.png",
      },
      {
        name: "GitHub",
        image: "https://img.icons8.com/color/48/000000/github.png",
      },
      {
        name: "Jira",
        image: "https://img.icons8.com/color/48/000000/jira.png",
      },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="p-3 md:p-6 bg-gray-900 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex flex-wrap">
              {skillsArray.map((skills, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br flex flex-col justify-center items-center from-purple-800 to-indigo-700 p-6 rounded-xl hover:scale-105 transition duration-300 text-white shadow-lg`}
                >
                  <h3 className="text-lg font-semibold mb-4 text-center">
                    {skills.name}
                  </h3>
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    {skills.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex flex-col items-center w-24"
                      >
                        <img
                          src={`${item.image}`}
                          alt={item.name}
                          className="w-40 h-40 object-contain mb-2"
                        />
                        <h4 className="text-md font-medium text-center">
                          {item.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
  )
}

export default Skills