import React from 'react';
import ProjectImage1 from '../assets/1.gif'; 
import ProjectImage2 from '../assets/coldstore.gif'; 
import ProjectImage3 from '../assets/newprojectt.gif'; // Add image for the new project

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white -mt-2 px-4 py-4"> 
      <div className="max-w-6xl mx-auto"> 
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-110">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {/* Project 1 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300"> 
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center"> 
              <img 
                src={ProjectImage1} 
                alt="Project 1" 
                className="w-full h-full object-contain rounded-lg" 
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">My Watchlist Diaries</h2>
              <p className="text-purple-500 text-sm mb-2">React.js, Node.js, Express, MongoDB</p>
              <p className="text-gray-300 text-sm mb-4">
                A website where I add reviews of all movies and TV shows I've watched, featuring special lists. Built with Tailwind CSS, React, and backend APIs for forms.
              </p>
              <a href="https://watchlist-diaries.vercel.app/" 
                 className="text-purple-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Link &gt;&gt;
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300"> 
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center"> 
              <img 
                src={ProjectImage2} 
                alt="Project 2" 
                className="w-full h-full object-contain rounded-lg" 
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Cold Storage Dashboard</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A cold storage management dashboard with item management, PDF generation, and real-time tracking across multiple racks. Color-coded statuses (green/yellow/red) indicate storage levels.
              </p>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7300540137363406848/" 
                 className="text-purple-500 hover:underline" target="_blank" rel="noopener noreferrer">
                More Details &gt;&gt;
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300"> 
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center"> 
              <img 
                src={ProjectImage3} 
                alt="Project 3" 
                className="w-full h-full object-contain rounded-lg" 
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Ashy Bakes</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A responsive bakery website where users can order products using an "Add to Cart" feature. Messages from the "Contact Us" form go directly to the owner's Gmail.
              </p>
              <a href="https://bakery-site-phi.vercel.app/" 
                 className="text-purple-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Link &gt;&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
