import React from 'react'

function ContactMe() {
  return (
    <div className="flex flex-col p-4" id="contactMe">
      <div className="bg-gray-900 drop-shadow-md rounded-lg p-6 flex">
        <div className="w-full">
          <div className="">
            <h2 className="text-xl font-medium mb-4 underline text-white">
              Skills
            </h2>

            <div className="flex pr-28 mt-5">
              <h1 className="text-2xl pr-5 text-gray-100 hover:text-white hover:cursor-pointer font-medium">
              Languages:
              </h1>
            <p className="text-gray-300 text-lg pt-1 font-serif">
            Java, Python, HTML, CSS, Oracle, MySQL, Git, C#
            </p>
            </div>
            

            <div className="flex pr-28 mt-5">
              <h1 className="text-2xl pr-5 text-gray-100 hover:text-white hover:cursor-pointer font-medium">
              Tools:
              </h1>
            <p className="text-gray-300 text-lg pt-1 font-serif">
            IntelliJ, VSCode, Pycharm, Netbeans, Apache Tomcat
            </p>
            </div>
            

            <div className="flex pr-28 mt-5">
              <h1 className="text-2xl pr-5 text-gray-100 hover:text-white hover:cursor-pointer font-medium">
              Others:
              </h1>
            <p className="text-gray-300 text-lg pt-1 font-serif">
            Data Analysis, Problem Solving, Critical Thinking
            </p>
            </div>

            <div className="flex pr-28 mt-5">
              <h1 className="text-2xl pr-5 text-gray-100 hover:text-white hover:cursor-pointer font-medium">
              Frameworks:
              </h1>
            <p className="text-gray-300 text-lg pt-1 font-serif">
            ReactJS, Django, MongoDB, Java Swing, React Native, Next JS 13, Express JS, Node JS
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe