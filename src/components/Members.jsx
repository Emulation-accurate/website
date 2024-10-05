import React from 'react'
import Navbar from './Navbar'
import MemberCard from './ui/member-card'

const Members = () => {
    const data = {
        0: {
            img: 'https://media.licdn.com/dms/image/v2/D5603AQHQhkcrXUM_7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727407498516?e=1733356800&v=beta&t=lRKuGDM7OIBRJ_glVPd3weARgZDtu4U3P8jfcS2t024',
            name: 'Nasir Ali',
            about: 'Hey, I am Nasir Ali from B.Tech 4th year.',
            githubProfile: 'https://github.com/Nasir-buddy',
            linkedinProfile: 'https://www.linkedin.com/in/syednasirali17/',
            courseYear: 'B.Tech 4th Year',
            portfolio: 'https://portfolio-v1-1-iota.vercel.app/',

        },
        1: {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGgtgJwBEJs0A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688061709044?e=1733356800&v=beta&t=o6dy7jKffyw8LbaJzMgruNxH0dkeQ-YsLRBMKw9dnPA',
            name: 'Anurag Chauhan',
            about: 'Hey, I am Anurag Chauhan from B.Tech 4th year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        2: {
            img: '/member_pics/satyam.jpg',
            name: 'Satyam Shrivastav',
            about: 'Hi i am a Software developer',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        3: {
            img: '/member_pics/aman.jpg',
            name: 'Aman Jha',
            about: 'Hey, I am Aman Jha from B.Tech 4th year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },

        4: {
            img: '/member_pics/ankur.jpg',
            name: 'Ankur Jaiswal',
            about: 'Experienced Full Stack Developer with a strong command of modern web technologies like React, Node.js, and Next.js. Skilled in building scalable, high-performance applications, I specialize in frontend and backend integration, delivering end-to-end solutions across diverse industries.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        5: {
            img: '/member_pics/ananya.jpg',
            name: 'Ananya Gupta',
            about: 'Hey, I am Ananya Gupta from B.Tech 3rd year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        6: {
            img: '/member_pics/tanya.jpg',
            name: 'Tanya Gupta',
            about: 'Hey, I am Tanya Gupta from B.Tech 3rd year.',
            githubProfile: 'https://github.com/RKTanya-Gupta',
            linkedinProfile: 'www.linkedin.com/in/tanya-gupta-9a92212a0',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        7: {
            img: 'https://media.licdn.com/dms/image/v2/D5603AQGMhVwTuJraiQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668236353674?e=1733356800&v=beta&t=b1UBaNIR7t7PHe0j1W9wJkMXVi4RH8zzymuYXda25N0',
            name: 'Sachin Agarwal',
            about: 'Hey, I am Sachin Agarwal from B.Tech 3rd year.',
            githubProfile: 'https://github.com/Sachin-Agarwal1',
            linkedinProfile: 'https://www.linkedin.com/in/sachin-agarwal-7b5387240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        8: {
            img: '/member_pics/Aakash.jpg',
            name: 'Aakash Sharma',
            about: 'Hey, I am Aakash Sharma from B.Tech 4th year.',
            githubProfile: 'https://github.com/aakashsharma7',
            linkedinProfile: 'https://www.linkedin.com/in/aakash-sharma-2216b8205/',
            courseYear: 'B.Tech 4th Year',
            portfolio: 'https://villgax-in.netlify.app/',
        },
        9: {
            img: '/member_pics/samiksha.jpeg',
            name: 'Samiksha Sharma',
            about: 'Hey, I am Samiksha Sharma from B.Tech 2nd year.',
            githubProfile: 'https://github.com/SamikshaaSharma',
            linkedinProfile: 'https://www.linkedin.com/in/samiksha-sharma-4725b5248/',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        10: {
            img: '',
            name: 'Ankit',
            about: 'Hey, I am Ankit from B.Tech 3rd year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        11: {
            img: 'https://avatars.githubusercontent.com/u/120322314?v=4',
            name: 'Arpit',
            about: "Hello World </> I'm Arpit, a passionate MERN full-stack web developer.",
            githubProfile: 'https://github.com/Arpit10110',
            linkedinProfile: 'https://www.linkedin.com/in/arpit-agrahari-54aa192a1/',
            courseYear: 'B.Tech 3rd Year',
            portfolio: 'https://helloarpit.vercel.app/',
        },
        12: {
            img: 'https://media.licdn.com/dms/image/v2/D5603AQF7bjvX4iRMGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724474581187?e=1733356800&v=beta&t=LXQBw2RA4TozONzk3ClBHuJ3zGOphmMxveocy6cTavk',
            name: 'Rahul Pal',
            about: 'Hey, I am Rahul Pal from B.Tech 2nd year.',
            githubProfile: 'https://github.com/rahulholkar16',
            linkedinProfile: 'https://www.linkedin.com/in/rahul-pal-63b143253/',
            courseYear: 'B.Tech 2nd Year',
            portfolio: '',
        }

    }

    return (
        <div className='p-10 relative w-full overflow-y-auto'>
            <h1 className='text-center text-3xl font-semibold italic text-[#2D2822] mb-10'>Members</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center'>
                {Object.values(data).map((item, index) => (
                    <MemberCard key={"MemberCard__" + String(index)}
                        img={item.img}
                        name={item.name}
                        about={item.about}
                        portfolio={item.portfolio}
                        githubProfile={item.githubProfile}
                        linkedinProfile={item.linkedinProfile}
                        courseYear={item.courseYear} />
                ))}
            </div>
            <div className='absolute top-0 left-0 w-full h-full -z-20 blur- bg-[url(/pic.png)] sm:bg-[url(/backgroundImg.png)] bg-cover bg-center bg-fixed '></div>
            <div className='absolute top-0 left-0 w-full h-full -z-10 blur-sm bg-white/40 '></div>
        </div>
    )
}

export default Members
