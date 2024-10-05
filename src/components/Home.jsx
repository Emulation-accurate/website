import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Members from './Members';
import AboutUs from './AboutUs';
import Typed from 'typed.js';
import * as THREE from 'three';

const Home = () => {
    const el = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Emulation Club'],
            typeSpeed: 100,
            backSpeed: 10,
            smartBackspace: true,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        // Setting up Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        camera.position.z = 50;

        const animate = function () {
            requestAnimationFrame(animate);
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize for responsiveness
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            renderer.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative overflow-x-auto">
            {/* Three.js Canvas for background */}
            <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />

            {/* Welcome Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 text-center text-green-500">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 font-[Poppins]">
                    Welcome to <span className="text-green-500" ref={el} />
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto font-[Roboto]">
                    Unleash your coding potential and build amazing projects with our vibrant community of developers.
                </p>
                <button className="bg-[#1b1b1b] hover:bg-blue-500 text-green-500 font-bold py-3 px-6 rounded-lg transition duration-300">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddmkA485zSTuB5ihh3e-Tg755NNrjntyWGkxzhmCeci5l1Lg/viewform">Join Our Club</a>
                </button>
            </section>

            {/* Why Join Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 text-green-500">
                <h2 className="text-4xl font-bold text-center mb-12 font-[Poppins] hover:text-blue-500">
                    Why Join Emulation Club?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 hover:shadow-xl hover:scale-105 transform cursor-pointer">
                        <h3 className="text-xl font-semibold hover:text-blue-500">Learn Together</h3>
                        <p className="text-gray-400">Collaborate on exciting projects and learn from experienced developers.</p>
                    </div>

                    <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 hover:shadow-xl hover:scale-105 transform cursor-pointer">
                        <h3 className="text-xl font-semibold hover:text-blue-500">Skill Building</h3>
                        <p className="text-gray-400">Enhance your coding skills through workshops, hackathons, and projects.</p>
                    </div>

                    <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 hover:shadow-xl hover:scale-105 transform cursor-pointer">
                        <h3 className="text-xl font-semibold hover:text-blue-500">Networking</h3>
                        <p className="text-gray-400">Connect with like-minded individuals, industry professionals, and potential employers.</p>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 text-green-500">
                <h2 className="text-4xl font-bold text-center mb-12 font-[Poppins]">What Our Members Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg">
                        <p className="italic">"Joining Emulation Club has been a game-changer for me. I've learned so much in such a short time!"</p>
                        <h4 className="mt-4 font-bold text-blue-500">- Alex R.</h4>
                    </div>
                    <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg">
                        <p className="italic">"The community here is incredible. Everyone is supportive, and I've made lifelong friends."</p>
                        <h4 className="mt-4 font-bold text-blue-500">- Priya S.</h4>
                    </div>
                </div>
            </section>

            {/* Sign-up Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 text-green-500 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">Join Emulation Club today and take the first step towards becoming a skilled developer.</p>
                <button className="bg-[#1b1b1b] hover:bg-blue-500 text-green-500 font-bold py-3 px-6 rounded-lg transition duration-300">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddmkA485zSTuB5ihh3e-Tg755NNrjntyWGkxzhmCeci5l1Lg/viewform">Join Now</a>
                </button>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center text-green-500">
                <p className="font-bold">Created with ❣️ by Nasir Ali and Emulation Team.</p>
                <p className="font-bold">&copy; 2024 Emulation Club. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
