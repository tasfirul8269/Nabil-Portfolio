import Image from 'next/image';

const SKILLS = [
    "UI/UX Design",
    "Web Design",
    "App Design",
    "WordPress",
    "Video Editing",
    "UI/UX Design",
    "Web Design",
    "App Design",
    "WordPress",
    "Video Editing",
];

export function SkillsMarquee() {
    return (
        <div className="relative w-full py-20 overflow-hidden">
            {/* Rotated Container */}
            <div className="absolute left-[-5%] w-[110%] bg-[#9D8CFC] -rotate-2 py-2 shadow-lg">
                <div className="bg-white py-4 overflow-hidden flex">
                    {/* Inner Scrolling Content */}
                    <div className="flex animate-marquee whitespace-nowrap">
                        {SKILLS.map((skill, index) => (
                            <div key={index} className="flex items-center gap-4 mx-8">
                                <Image src="/svgs/star.svg" alt="star" width={24} height={24} />
                                <span className="text-black font-bold text-xl uppercase tracking-wide">
                                    {skill}
                                </span>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {SKILLS.map((skill, index) => (
                            <div key={`dup-${index}`} className="flex items-center gap-4 mx-8">
                                <Image src="/svgs/star.svg" alt="star" width={24} height={24} />
                                <span className="text-black font-bold text-xl uppercase tracking-wide">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
