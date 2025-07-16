import React from 'react'

function Projects() {
    return (
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-medium">Portfolio Website</h3>
            <p className="text-sm">Built with React and TailwindCSS</p>
            <a href="#" className="text-blue-500">View Project</a>
          </li>
          {/* Add more projects here */}
        </ul>
      </section>
    );
  }
export default Projects