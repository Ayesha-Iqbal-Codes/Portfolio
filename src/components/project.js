// src/Projects.js
import React from 'react';
import ProjectImage1 from '../assets/1.gif'; // Ensure the image paths are correct
import ProjectImage2 from '../assets/SZABIST-logo.jpg';
import ProjectImage3 from '../assets/SZABIST-logo.jpg';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white -mt-2 px-2"> {/* Added negative margin-top */}

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h1>

        {/* Grid Container */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-6"> {/* Added negative margin-top */}

          {/* Project 1 */}
          <div className="bg-purple-960 p-4 rounded-lg border border-purple-900"> {/* Changed to dark purple */}
            {/* Image */}
            <div className="w-full h-48 mb-2"> {/* Reduced margin-bottom */}
              <img 
                src={ProjectImage1} 
                alt="Project 1" 
                className="w-full h-full rounded-lg object-cover" 
              />
            </div>

            {/* Text Section */}
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">My Watchlist Diaries</h2>
              <p className="text-purple-800 mb-2">React.js, Node.js, Express, MongoDB</p> {/* Updated tech stack */}
              <p className="text-gray-300 leading-relaxed"> {/* Changed text color */}
                A website where I add reviews of all movies and TV shows I've watched, featuring special lists. I used Tailwind CSS and React for the frontend and developed APIs for the contact and feedback forms.
              </p>
            </div>
          </div>

          {/* Project 2 */}
<div className="bg-purple-960 p-4 rounded-lg border border-purple-900"> {/* Changed to dark purple */}
  {/* Image */}
  <div className="w-full h-48 mb-2"> {/* Reduced margin-bottom */}
    <img 
      src={ProjectImage2} 
      alt="Project 2" 
      className="w-full h-full rounded-lg object-cover" 
    />
  </div>

  {/* Text Section */}
  <div className="text-center">
    <h2 className="text-xl font-semibold mb-2">Cold Storage Dashboard</h2>
    <p className="text-purple-800 mb-2">React.js</p> {/* Updated tech stack */}
    <p className="text-gray-300 leading-relaxed"> {/* Changed text color */}
    A cold storage management dashboard with item addition, PDF generation, editing, and deletion. Includes an auto-fill feature for sending items based on serial numbers, an all-records page, and a storage room page showing rack statuses: green for full, blue for half-filled, and red for empty.
    </p>
  </div>
</div>


          {/* Project 3 */}
          <div className="bg-purple-960 p-4 rounded-lg border border-purple-800"> {/* Changed to dark purple */}
            {/* Image */}
            <div className="w-full h-48 mb-2"> {/* Reduced margin-bottom */}
              <img 
                src={ProjectImage3} 
                alt="Project 3" 
                className="w-full h-full rounded-lg object-cover" 
              />
            </div>

            {/* Text Section */}
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Project 3 Title</h2>
              <p className="text-purple-400 mb-2">Short description or role in the project</p> {/* Changed text color */}
              <p className="text-purple-300 leading-relaxed"> {/* Changed text color */}
                Brief description of the project. Mention the technologies used, the purpose, and key features.
              </p>
            </div>
          </div>

          {/* Additional projects can be added here following the same structure */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
