import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ScrollReveal from 'scrollreveal'
import Typed from 'typed.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Using useEffect to initialize the animations
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.nav-link', { 
      duration: 1000, 
      origin: 'bottom', 
      distance: '20px',
      reset: true 
    })

    // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 1200,
    })

    // Initialize Typed.js for typing animation on the navbar title
    const typed = new Typed('.typed-text', {
      strings: ['Emulation', 'Explore', 'Elevate'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    })

    // Cleanup the typed instance on component unmount
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <nav className="backdrop-blur-md bg-white/50 border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16" data-aos="fade-down">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="flex-shrink-0">
                <span className="text-3xl font-bold text-indigo-600 typed-text"></span>
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="hacktoberfestregis" className="nav-link text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">HacktoberFest Registration</a>
              <a href="members" className="nav-link text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">Members</a>
              <a href="aboutus" className="nav-link text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">About Us</a>
              <a href="contactus" className="nav-link text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-transform duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 transform transition-transform duration-300" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 transform transition-transform duration-300" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-aos="fade-up">
          <a href="hacktoberfestregis" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">Hacktoberfest Registration</a>
          <a href="members" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">Members</a>
          <a href="aboutus" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">About Us</a>
          <a href="contactus" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}
