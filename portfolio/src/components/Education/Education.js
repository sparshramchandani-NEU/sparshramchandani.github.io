import React from "react";

function Education() {
  return (
    <div className="flex flex-col p-4" id="education">
      <div className="bg-gray-900 drop-shadow-md rounded-lg p-6 flex">
        <div className="w-10/12">
          <div className="">
            <h2 className="text-xl font-medium mb-4 underline text-white">
              Education Background
            </h2>
            <div className="flex justify-between pr-28">
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
                Northeastern University, Boston, MA
              </h1>
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
                {" "}
                Expected May 2024
              </h1>
            </div>
            <p className="text-gray-300 text-xl font-medium italic mt-4 w-2/3">
              Masters of Science in Information Systems
            </p>
            <p className="text-gray-300 text-lg font-serif mt-4 w-2/3">
            Relevant Courses: Web Design and User Experience, Application Engineering and Development, Web Development Tools and Methods, Database Management and Database Design.
            </p>
          </div>
          <div className="">
            
            <div className="flex justify-between pr-28 mt-10">
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
                Thadomal Shahani Engineering College, Mumbai, India
              </h1>
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
                {" "}
                May 2021
              </h1>
            </div>
            <p className="text-gray-300 text-xl font-medium italic mt-4 w-2/3">
                Bachelor of Engineering in Electronics & Telecommunication
            </p>
            <p className="text-gray-300 text-lg font-serif mt-4 w-2/3">
            Relevant Courses: Object Oriented Programming, Database Management Systems, Image Processing, Signals & Systems.
            </p>
          </div>
        </div>
        <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Northeastern_University_seal.svg/1920px-Northeastern_University_seal.svg.png"
          alt="Northeastern University"
          className="rounded-lg h-44 w-44 mt-8 mr-2"
        />
        <img
          src="https://career.webindia123.com/career/institutes/aspupload/Uploads/all-states/7174/logo.jpg"
          alt="Northeastern University"
          className="rounded-lg h-36 w-36 mt-11 ml-4"
        />

        </div>
        
      </div>
    </div>
  );
}

export default Education;
