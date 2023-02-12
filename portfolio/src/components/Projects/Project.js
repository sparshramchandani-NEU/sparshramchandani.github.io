import React from 'react'

function Project() {
  return (
    <div className="flex flex-col p-4" id="project">
      <div className="bg-gray-900 drop-shadow-md rounded-lg p-6 flex">
        <div className="w-full">
          <div className="">
            <h2 className="text-xl font-medium mb-4 underline text-white">
              Projects
            </h2>
            <div className="flex justify-between pr-28">
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
              Bone Marrow Donation System
              </h1>
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
                {" "}
                Nov 2022 – Dec 2022
              </h1>
            </div>
            <p className="text-gray-300 text-lg font-serif w-2/3">
            •	Built an application using Java Swing and db4o that allows people who are suffering from Blood Cancer to connect with a potential bone marrow donor and receive appropriate treatment from the doctors within their network.
            </p>
            <p className="text-gray-300 text-lg font-serif w-2/3">
            •	The application allows Donors & Patients to Register and allows the System admin to manage a network, manage enterprises in the selected network and create the credentials for each enterprise admin. Based on the availability of bone marrow, eligibility of the donor, and consent from the patient, possible treatment will be done by the doctor. The application consists of 5 Enterprises, 7 Organizations & overall 10 roles.
            </p>

            <div className="flex justify-between pr-28 mt-10">
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
              Real Time Chat Application
              </h1>
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
                {" "}
                Nov 2022 – Dec 2022
              </h1>
            </div>
            <p className="text-gray-300 text-lg font-serif w-2/3">
              •	Built a real time chat application using Mongo DB, Express JS, Node JS, and React JS where user can login/ signup to their account. User can also enable two factor authentication via email.
            </p>
            <p className="text-gray-300 text-lg font-serif w-2/3">
            •	User can send text, media as a chat. We also implemented group chat where one can send a chat in a group which is more than 2 people. Socket.io was used in this project for real time low-latency, bidirectional and event-based communication between a client and a server.
            </p>

            <div className="flex justify-between pr-28 mt-10">
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
              Online Recruiting System
              </h1>
              <h1 className="text-2xl text-gray-100 hover:text-white hover:cursor-pointer font-medium">
                {" "}
                Jul 2021 – Aug 2021
              </h1>
            </div>
            <p className="text-gray-300 text-lg font-serif w-2/3">
            •	Built a .NET application where candidates could add their personal information as well as other required documents, such as resume, and academic mark sheets.
            </p>
            <p className="text-gray-300 text-lg font-serif w-2/3">
            •	Candidates could apply for jobs depending on their primary and secondary skills and the employer was granted admin access, which enabled him to review the profiles of those applying for the position and publish new job openings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project