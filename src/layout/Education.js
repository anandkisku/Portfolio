import React from "react";

function Education() {
  return (
    <section id="education" className="p-6 md:p-6 bg-gray-900 scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-wrap">
        <div
          className={`bg-gradient-to-br flex flex-col justify-start items-center from-purple-800 to-indigo-700 p-6 rounded-xl hover:scale-105 transition duration-300 text-white shadow-lg`}
        >
          <h3 className="text-lg font-semibold mb-4 text-center">
            Graduation
          </h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <a href="https://www.iitkgp.ac.in/" target="_blank">
              <img
                src="https://etimg.etb2bimg.com/photo/105161981.cms"
                alt="IIT Kgp"
                className="w-full h-[300px] object-contain mb-2 cursor-pointer"
              />
            </a>
            <h4 className="text-md font-medium text-start flex">
              <p className="w-[120px]">Institute </p>
              <p className="w-full">: Indian Institute of Technology Kharagpur</p>
            </h4>
            <h4 className="text-md font-medium text-start flex">
              <p className="w-[120px]">Course </p>{" "}
              <p className="w-full"> : Integradted M.Sc. </p>
            </h4>
            <h4 className="text-md font-medium text-start flex">
              <p className="w-[120px]">Department</p> <p>: Chemistry</p>
            </h4>
            <h4 className="text-md font-medium text-start flex">
              {" "}
              <p className="w-[120px]">Cgpa </p> <p>: 7.26 cgpa</p>{" "}
            </h4>
          </div>
        </div>

        <div
          className={`bg-gradient-to-br flex flex-col justify-start items-center from-purple-800 to-indigo-700 p-6 rounded-xl hover:scale-105 transition duration-300 text-white shadow-lg`}
        >
          <h3 className="text-lg font-semibold mb-4 text-center">
            Intermediate
          </h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <a href="https://davbariatu.org/" target="_blank">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYkzPMuDpg-4V-pABNBXzE87CLHhYbL1udg&s"
                alt="D.A.V Public School Bariatu"
                className="w-full h-[300px] object-contain mb-2 cursor-pointer"
              />
            </a>

            <h4 className="text-md font-medium text-start flex">
              <p className="w-[120px]">School </p>
              <p className="w-full">: D.A.V Public School Bariatu</p>
            </h4>
            <h4 className="text-md font-medium text-start flex">
              <p className="w-[120px]">Course </p>{" "}
              <p className="w-full">
                {" "}
               : Maths, Physics, Chemistry, Painting, English{" "}
              </p>
            </h4>
            <h4 className="text-md font-medium text-start flex">
              <p className="w-[120px]">Department </p> <p>: Science</p>
            </h4>
            <h4 className="text-md font-medium text-start flex">
              {" "}
              <p className="w-[120px]">Percentage </p> <p>: 88 %</p>{" "}
            </h4>
          </div>
        </div>

        <div
          className={`bg-gradient-to-br flex flex-col justify-start items-center from-purple-800 to-indigo-700 p-3 rounded-xl hover:scale-105 transition duration-300 text-white shadow-lg`}
        >
          <h3 className="text-lg font-semibold mb-4 text-center">
            Matriculate
          </h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <a href="https://davnrps.com/" target="_blank">
              <img
                src="https://www.edustoke.com/assets/uploads-new/76e95128-28ce-425c-9e53-c567ef48da61.jpg"
                alt="D.A.V Nandraj Public School"
                className="w-full h-[300px] object-contain mb-2 cursor-pointer"
              />
            </a>
            <h4 className="text-md font-medium text-start flex">
              <p className="w-[120px]">School  </p>
              <p className="w-full"> : D.A.V Nandraj Public School</p>
            </h4>
            <h4 className="text-md font-medium text-start flex">
              <p className="w-[120px]">Course</p>{" "}
              <p className="w-full">
                {" "}
                : Maths, Science, Sanskrit, English, Social Science,
              Foundation of IT{" "}
              </p>
            </h4>
            <h4 className="text-md font-medium text-start flex">
              <p className="w-[120px]">Department </p> <p>: Science</p>
            </h4>
            <h4 className="text-md font-medium text-start flex">
              {" "}
              <p className="w-[120px]">Cgpa </p> <p> : 10 cgpa</p>{" "}
            </h4>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
