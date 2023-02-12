import React,{ Component } from 'react';
import Typed from 'react-typed';



const Dashboard = () => {
    class MyComponent extends Component {
        render() {
            return (
                <div id="dashboard">
                    <Typed
                    strings={[
                        'Hi, I am Sparsh Ramchandani !',
                        'I am a Full Stack Developer !!!']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed>
                </div>
            );
        }
    }

  return (
    <div className="flex flex-col p-4">
      <div className="bg-gray-900 drop-shadow-md rounded-lg p-6 flex">
        <div className="w-10/12">      
        {/* <h2 className="text-xl font-medium mb-4 underline text-white">Dashboard</h2> */}
        <h1 className="text-4xl text-gray-300 animate-pulse hover:text-white hover:cursor-pointer font-medium">
            <MyComponent />
        </h1> 
        <p className="text-gray-300 text-lg font-medium mt-4 w-2/3">Hi I am Sparsh, I am a diligent and hard-working graduate student studying Information Systems at Northeastern University. While continuing to learn new languages and hone practices that are crucial to gaining more practical experience and contributing to an organization’s success, I appreciate being pushed and working on projects that force me to step outside of my comfort zone and knowledge base.</p>
        </div>
        <img src={require('../../images/profile_copy.jpg')} alt="Sparsh Ramchandani" className="rounded-lg h-72 w-72 mr-2"  />
      </div>
    </div>
  );
};

export default Dashboard;
