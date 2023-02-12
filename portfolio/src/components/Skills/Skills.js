import React from "react";
import { SocialIcon } from 'react-social-icons';

function Skills() {
  return (
    <div className="flex flex-col p-4" id="skills">
      <div className="bg-gray-900 drop-shadow-md rounded-lg p-6 flex">
        <div className="w-full">
          <div className="">
            <h2 className="text-xl font-medium mb-4 underline text-white">
              Contact Me
            </h2>
            <div className="flex justify-center">
            <SocialIcon className="mx-8" url="https://www.linkedin.com/in/sparsh-ramchandani" />
            <SocialIcon className="mx-8" url="https://www.instagram.com/sparsh_ramchandani/?hl=en" />
            <SocialIcon className="mx-8" url="https://github.com/sparshramchandani-NEU" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
