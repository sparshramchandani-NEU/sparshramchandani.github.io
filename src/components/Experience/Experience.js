import React from "react";

function Experience() {
  return (
    <div className="flex flex-col p-4" id="experience">
      <div className="bg-gray-900 drop-shadow-md rounded-lg p-6 flex">
        <div className="w-10/12">
          <div className="">
            <h2 className="text-xl font-medium mb-4 underline text-white">
              Experience
            </h2>
            <div className="flex justify-between pr-28">
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
                Professional Engineer (I), Samsung R&D Institute
              </h1>
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
                {" "}
                Oct 2021 – Aug 2022
              </h1>
            </div>
            <p className="text-gray-300 text-lg font-serif mt-4 w-2/3">
              • Refined and tested tool which was used in overall automation
              testing of Samsung cell phones which increased the usability of
              the tool by 20% from the previous version
            </p>
            <p className="text-gray-300 text-lg font-serif mt-4 w-2/3">
              • Hands-on experience on 5G network on Samsung cell phones
            </p>
            <p className="text-gray-300 text-lg font-serif mt-4 w-2/3">
              • Administered cross team meeting and communication throughout
              product development and post rollout of the product
            </p>
            <p className="text-gray-300 text-lg font-serif mt-4 w-2/3">
              • Improved the company-wide Project Lifecycle Management platform,
              increasing usability by 10% over the prior version.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
            alt="Northeastern University"
            className="rounded-lg h-44 w-44 mr-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
