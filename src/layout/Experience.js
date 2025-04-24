import React from "react";
const video3 = require("../assets/video3.mp4");
const video1 = require("../assets/video1.mp4");
const video2 = require("../assets/video2.mp4");
const ss1 = require("../assets/ss1.png");
const ss2 = require("../assets/ss2.png");

export default function Experience({ video }) {
  return (
    <section id="experience" className="p-6 md:p-12 bg-gray-900 scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="bg-gradient-to-br from-purple-800 to-indigo-700 p-6 rounded-xl hover:scale-100 transition duration-300 text-white shadow-lg">
          <div className="w-full flex jusify-space-between">
            <h3 className="text-lg w-full font-semibold mb-2">
              Convertcart Solutions Pvt. Ltd
            </h3>{" "}
            <h3 className="text-lg w-full text-right font-semibold mb-2">
              Feb 2022 – Jan 2025
            </h3>
          </div>
          <h3 className="text-md w-full font-semibold mb-1">
            Doftware Development Engineer 2
          </h3>
          <h3 className="text-md w-full font-semibold mb-1">
            Tech Used : React.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript,
            HTML, CSS, GitLab, Jira, ClickUp, Git, Google Cloud
          </h3>
          <div className=" ml-1 mr-1 mt-8 p-2 shadow-2xl rounded-xl bg-gradient-to-br from-indigo-700 to-purple-800">
            <h3 className="text-md w-full font-semibold mb-2 underline">
              Project : Intellisearch
            </h3>
            <ol style={{ listStyleType: "disc" }} className="font-mono p-4 text-md">
              <li className ="my-2">
                Developed and executed over 90 e-commerce campaigns using
                React.js, JavaScript, Node.js, HTML, and CSS. and
                <strong className="ml-2">
                  significantly enhanced application performance
                </strong>{" "}
              </li>
              <li className ="my-2">
                Optimized user experience and system performance by implementing
                React lifecycle methods and integrating REST APIs for data
                fetching
              </li>
              <li className ="my-2">
                Led the successful migration of 100+ clients from Search V2 to
                Search V3, enhancing search capabilities and reducing load times
                by 15-20 percent
              </li>
              <li className ="my-2">
                Contributed to a 10 percent increase in website engagement and{" "}
                <strong className="ml-2">
                  {" "}
                  a 3-6 percent growth in revenue through improved UI and search
                  functionality
                </strong>
              </li>
              <li className ="my-2">
                Designed and developed 20+ high-performance, dynamic UI pages
                for the company’s back-end system
              </li>
            </ol>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-4 px-4">
              <div className="w-full">
                <h2 className="mb-2">Video of UI of Backend System</h2>
                <video width="540" height="360" controls autoPlay muted loop>
                  <source src={video3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-full">
                <a
                  href="https://beanproducts.com/search/?q=bean&pageIndex=1"
                  target="_blank"
                >
                  <h2 className="underline mb-2">Client's website</h2>
                  <img src={ss1} className="w-[540px] h-auto" alt="image" />
                </a>
              </div>
              <div className="w-full">
                <h2 className="underline mb-2">Client's website</h2>
                <a
                  href="https://peopleschoicebeefjerky.com/?srsltid=AfmBOopOFmy8-eNIpOr2bxOHpaiMbGbw1YCubNJegkqYy8Ow5TSLi_VJ"
                  target="_blank"
                >
                  <img src={ss2} className="w-[540px] h-auto" alt="image" />
                </a>
              </div>
            </div>
          </div>
          <div className=" ml-1 mr-1 mt-8 p-2 shadow-2xl rounded-xl bg-gradient-to-br from-indigo-700 to-purple-800">
            <h3 className="text-md w-full font-semibold mb-2 underline">
            Project: Intelli Reports
            </h3>
            <ol style={{ listStyleType: "disc" }} className="font-mono p-4 text-md">
              <li className ="my-2">
              Developed a dynamic admin dashboard with API integration for efficient data fetching and real-time updates
              </li>
              <li className ="my-2">
              Handled statistical data on the UI, ensuring seamless real-time data calculation and visualization
              </li>
              <li className ="my-2">
              Collaborated with backend teams to deliver a robust, user-centric dashboard experience, improving report generation
              accuracy by 15 percent
              </li>
            </ol>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-4 px-4">
              <div className="w-full">
                <h2 className="mb-2">Video of UI of Backend System</h2>
                <video className="w-full h-auto" controls autoPlay muted loop>
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-full">
                <h2 className="mb-2">Video of UI of Backend System</h2>
                <video className="w-full h-auto" controls autoPlay muted loop>
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Steradian Semi Pvt. Ltd. */}
        <div className="bg-gradient-to-br from-purple-800 to-indigo-700 p-6 rounded-xl hover:scale-100 transition duration-300 text-white shadow-lg">
          <div className="w-full flex jusify-space-between">
            <h3 className="text-lg w-full font-semibold mb-2">
              Steradian Semi Pvt. Ltd.
            </h3>{" "}
            <h3 className="text-lg w-full text-right font-semibold mb-2">
            May 2021 – Dec 2021
            </h3>
          </div>
          <h3 className="text-md w-full font-semibold mb-1">
          Frontend and Backend Developer
          </h3>
          <h3 className="text-md w-full font-semibold mb-1">
            Tech Used : Node.js, JavaScript, HTML, CSS, Ajax, Jquery, Wbsocket.io
          </h3>
          <div className=" ml-1 mr-1 mt-8 p-2 shadow-2xl rounded-xl bg-gradient-to-br from-indigo-700 to-purple-800">
            <h3 className="text-md w-full font-semibold mb-2 underline">
              Project : Automotive Visualization
            </h3>
            <ol style={{ listStyleType: "disc" }} className="font-mono p-4 text-md">
              <li className ="my-2">
              Transitioned from intern to full-time Backend and Frontend Developer role on an Automotive Radar Project
              </li>
              <li className ="my-2">
              Utilized Robot Operating System (ROS) and Rviz for 2D and 3D object visualization
              </li>
              <li className ="my-2">
              Developed the visualizer using HTML, CSS, JavaScript, Node.js, and Express.js, improving the visualization tool’s
              performance
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
