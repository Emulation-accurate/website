import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen w-screen bg-fixed overflow-auto">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="p-2 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold bg-gradient-to-t from-sky-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Our Mission
            </h2>
            <p className="text-sm font-semibold font-serif text-center text-zinc-300 w-[60%] mb-6">
              At Emulation Club, we strive to create a vibrant community of
              passionate developers who are dedicated to pushing the boundaries
              of software emulation. Our mission is to preserve digital history,
              enhance gaming experiences, and foster innovation in the field of
              emulation technology.
            </p>
          </div>

          <div className="bg-zinc-400 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-[#2D2822] mb-3">
              We are committed to:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-start">
              <li>Advancing emulation techniques and technologies</li>
              <li>
                Preserving and providing access to classic software and games
              </li>
              <li>
                Educating members about the technical and legal aspects of
                emulation
              </li>
              <li>Collaborating on open-source emulation projects</li>
              <li>
                Organizing workshops, hackathons, and conferences focused on
                emulation
              </li>
            </ul>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 p-6 rounded-lg shadow-lg">
              <svg
                className="w-12 h-12 text-[#2D2822]' mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-zinc-400 mb-2">
                Integrity
              </h3>
              <p className="text-gray-200">
                We uphold the highest ethical standards in our emulation
                practices and respect intellectual property rights.
              </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 p-6 rounded-lg shadow-lg">
              <svg
                className="w-12 h-12 text-[#2D2822] mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-zinc-400 mb-2">
                Community
              </h3>
              <p className="text-gray-200">
                We foster a supportive and inclusive environment where members
                can learn, share, and grow together.
              </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 p-6 rounded-lg shadow-lg">
              <svg
                className="w-12 h-12 text-[#2D2822]' mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-zinc-400 mb-2">
                Innovation
              </h3>
              <p className="text-gray-200">
                We encourage creative problem-solving and push the boundaries of
                what's possible in emulation technology.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Satyam Shrivastav",
                role: "Club Head",
                image: "/member_pics/satyam.jpg",
              },
              {
                name: "Aman Jha ",
                role: "Club Head",
                image: "/member_pics/aman.jpg",
              },
              {
                name: "Nasir Ali",
                role: "Development and DSA Mentor",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQHQhkcrXUM_7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727407498488?e=1733356800&v=beta&t=OKbTZpAQlRPRP4L6_cosycxwBqhlnOz0dUwjpiuOplU",
              },
              {
                name: "Anurag Chauhan",
                role: "Planner and head",
                image:
                  "https://media.licdn.com/dms/image/v2/D4D03AQGgtgJwBEJs0A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688061709044?e=1733356800&v=beta&t=o6dy7jKffyw8LbaJzMgruNxH0dkeQ-YsLRBMKw9dnPA",
              },
              {
                name: "Ankur Jaiswal",
                role: "Club Coordinator and core member",
                image: "/member_pics/ankur.jpg",
              },
              {
                name: "Ananya Gupta",
                role: "Club manager and core member ",
                image: "/member_pics/ananya.jpg",
              },
              {
                name: "Tanya Gupta",
                role: "Club manager and core member ",
                image: "/member_pics/tanya.jpg",
              },
              {
                name: "Sachin Agarwal",
                role: "Club core member",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQGMhVwTuJraiQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668236353674?e=1733356800&v=beta&t=b1UBaNIR7t7PHe0j1W9wJkMXVi4RH8zzymuYXda25N0",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-[#2D2822]">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2822] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold">
            Created with ❣️ by Nasir Ali and Emulation Team.{" "}
          </p>
          <p className="font-bold">
            &copy; 2024 Emulation Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
