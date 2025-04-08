import React from 'react';
import ProjectImage1 from '../assets/1.gif'; 
import ProjectImage2 from '../assets/coldstore.gif'; 
import ProjectImage3 from '../assets/1.gif'; 

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white -mt-2 px-2"> 

      <div className="max-w-5xl mx-auto"> 
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-10 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-110">Projects</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-4"> 

          {/* Project 1 */}
          <div className="bg-purple-960 p-4 rounded-lg border border-purple-900"> 
            <div className="w-full h-32 mb-3"> {/* Decreased height */}
              <img 
                src={ProjectImage1} 
                alt="Project 1" 
                className="w-full h-full rounded-lg object-contain" 
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-1">My Watchlist Diaries</h2>
              <p className="text-purple-700 hover:underline">React.js, Node.js, Express, MongoDB</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                A website where I add reviews of all movies and TV shows I've watched, featuring special lists. Built with Tailwind CSS, React, and backend APIs for forms.
              </p>
              <a href="https://watchlist-diaries.vercel.app/" 
                 className="text-purple-700 hover:underline" target="_blank" rel="noopener noreferrer">Link &gt;&gt;</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-purple-960 p-4 rounded-lg border border-purple-900"> 
            <div className="w-full h-32 mb-3"> 
              <img 
                src={ProjectImage2} 
                alt="Project 2" 
                className="w-full h-full rounded-lg object-contain" 
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-1">Cold Storage Dashboard</h2>
              <p className="text-purple-700 hover:underline">React.js</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                A cold storage management dashboard with item management, PDF generation, and real-time tracking across multiple racks. Color-coded statuses (green/yellow/red) indicate storage levels.
              </p>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7300540137363406848/" 
                 className="text-purple-700 hover:underline" target="_blank" rel="noopener noreferrer">More Details &gt;&gt;</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-purple-960 p-4 rounded-lg border border-purple-800"> 
            <div className="w-full h-32 mb-3"> {/* Decreased height */}
              <img 
                src={ProjectImage3} 
                alt="Project 3" 
                className="w-full h-full rounded-lg object-contain" 
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-1">Project 3 Title</h2>
              <p className="text-purple-700 hover:underline">Short description</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Brief description of the project. Mention the technologies used, the purpose, and key features.
              </p>
              <a href="https://www.linkedin.com/posts/ayesha-iqbal-87133a309" 
                 className="text-purple-700 hover:underline" target="_blank" rel="noopener noreferrer">More Details &gt;&gt;</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
