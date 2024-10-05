import React from 'react'
import Navbar from './Navbar'
import Members from './Members'
import AboutUs from './AboutUs'
import Typed from 'typed.js'


const Home = () => {
    const el = React.useRef(null);

    React.useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ['Emulation Club'],
            typeSpeed: 100,
            backSpeed: 10,
            smartBackspace: true,
            loop:true
        })
        return () => {
            typed.destroy();
        }
    }, []);
    return (
        <div className='relative overflow-x-auto bg-gradient-to-r from-slate-900 to-slate-700 dark:bg-zinc-800 dark:text-white'>
             
            <section className="py-10 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    Welcome to <span className="bg-gradient-to-t from-sky-400 to-violet-400 bg-clip-text text-transparent" ref={el} />
                </h1>
                <p className="text-xl font-bold bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent mb-8 w-[27%] mx-auto">
                    Unleash your coding potential and build amazing projects with our vibrant community of developers.
                </p>
                <button className="bg-[#58534C] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddmkA485zSTuB5ihh3e-Tg755NNrjntyWGkxzhmCeci5l1Lg/viewform">Join Our Club</a>
                </button>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center  mb-12 bg-gradient-to-bl from-sky-600 to-cyan-300 bg-clip-text text-transparent"><span className='text-white'>Why Join</span> Emulation Club ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <h3 className="text-xl font-semibold">Learn Together</h3>
                        </div>
                        <p className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent ">
                            Collaborate on exciting projects and learn from experienced developers in our supportive community.
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 className="text-xl font-semibold">Skill Building</h3>
                        </div>
                        <p className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
                            Enhance your coding skills through workshops, hackathons, and hands-on projects across various technologies.
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <h3 className="text-xl font-semibold">Networking</h3>
                        </div>
                        <p className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
                            Connect with like-minded individuals, industry professionals, and potential employers in the tech world.
                        </p>
                    </div>
                </div>
            </section>

            {/* sign up section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 h-full w-full bg-indigo-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100 text-white text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
                <p className="text-xl mb-8 max-w-2xl font-semibold mx-auto bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent ">
                    Join Emulation Club today and take the first step towards becoming a skilled developer in our supportive community.
                </p>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-600">
                <p className='text-white font-bold'>Created with ❣️ by Nasir Ali and Emulation Team. </p>
                <p className='text-white font-bold'>&copy; 2024 Emulation Club. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home