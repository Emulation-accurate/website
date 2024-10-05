import React from "react";

function MemberCard({
    img,
    name,
    about,
    portfolio,
    githubProfile,
    linkedinProfile,
    courseYear,
}) {
    return (
        <div className="bg-gradient-to-t from-gray-400 to-zinc-100 w-full h-80 flex flex-col gap-4 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(105,_89,_75,_0.8)] hover:scale-105 duration-300 overflow-hidden">
            <div className="relative w-full h-1/3 bg-gradient-to-tl from-stone-400 to-stone-800">
                <div className="absolute size-24 border-2 rounded-full shadow-lg bottom-[-50%] left-[50%] translate-y-[-10%] translate-x-[-50%]">
                    <img className="w-full h-full rounded-full" src={img} alt={name} />
                </div>
            </div>
            <div className="mt-4 p-4 flex-1 flex flex-col items-start justify-center gap-2">
                <h1 className="w-full font-semibold text-2xl text-nowrap whitespace-nowrap text-ellipsis overflow-hidden">
                    {name}
                </h1>
                <p className="text-sm w-full h-20 text-ellipsis overflow-hidden">
                    {about}
                </p>
                <div className="w-full h-8 flex flex-row items-center justify-center gap-2">
                    <a href={portfolio} title={String(name) + "'s Portfolio"}>
                        <i className="text-2xl ri-user-2-fill"></i>{" "}
                    </a>
                    <a href={githubProfile} title={String(name) + "'s Github Account"}>
                        <i className="text-2xl ri-github-fill"></i>{" "}
                    </a>
                    <a href={linkedinProfile} title={String(name) + "'s LinkedIn Account"}>
                        <i className="text-2xl ri-linkedin-box-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MemberCard;
