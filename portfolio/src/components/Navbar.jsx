import React from 'react'
import{Link} from 'react-router-dom'

function Navbar() {
    return (
      <nav className="bg-white shadow-md p-4 flex justify-center gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    );
  }
export default Navbar