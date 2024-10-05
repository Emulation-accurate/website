import React from 'react';
import { useTheme } from './ThemeContext';

const Testimonials = () => {
    const { isDarkMode } = useTheme();
    const testimonialsData = [
        {
            name: "Amit Sharma",
            role: "Web Developer",
            feedback: "Joining Emulation Club was a game-changer for my career! The community is supportive and the projects are exciting.",
        },
        {
            name: "Priya Singh",
            role: "Software Engineer",
            feedback: "I've improved my coding skills tremendously! The workshops are interactive and fun!",
        },
        {
            name: "Ravi Patel",
            role: "Data Scientist",
            feedback: "Networking with professionals in the club helped me land my dream internship. Highly recommend!",
        },
        {
            name: "Neha Gupta",
            role: "DevOps Engineer",
            feedback: "The hands-on projects are incredible! I've learned so much in a short time.",
        },
    ];

    return (
        <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gradient-to-b from-[#4F46E8] to-[#655546]' : 'bg-gradient-to-b from-[#4F46E8] to-[#e0e7ff]'} text-white text-center`}>
            <h2 className="text-4xl font-bold mb-12 font-[Poppins]">What Our Members Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                        <p className="font-[Roboto] italic mb-4">"{testimonial.feedback}"</p>
                        <h3 className="font-bold text-xl">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
