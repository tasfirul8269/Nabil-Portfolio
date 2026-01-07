"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: "Real estate Website Design",
        category: "UI/UX Design",
        image: "/assets/Realestate.png",
        link: "http://mateluxy.com/"
    },
    {
        title: "Ride sharing App Design",
        category: "App Design",
        image: "/assets/Ridesharingapp.png",
        link: "https://www.figma.com/proto/v8URqO0CUtsGvOqOPiifAU/TapNGo?node-id=0-1&p=f&t=iR66k6CuiYvKW4XV-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3675%3A3273&show-proto-sidebar=1"
    },
    {
        title: "CBD Website Design",
        category: "UI/UX Design",
        image: "/assets/CBDWebsite.png",
        link: "https://www.figma.com/proto/I2GuPFlOgegB93QdR8OwkS/The-Bud-work?node-id=18-431&p=f&t=4uYi7OG6V6nhXFdR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A431&show-proto-sidebar=1"
    },
    {
        title: "Checkout Design",
        category: "Web Design",
        image: "/assets/Checkout.png",
        link: "#"
    },
    {
        title: "Real estate CRM Design",
        category: "Web Design",
        image: "/assets/CRM.png",
        link: "#"
    },
    {
        title: "Frooxi Website Design",
        category: "UI/UX Design",
        image: "/assets/Frooxi.png",
        link: "https://frooxi.com/"
    }
];

const filters = ["All", "UI/UX Design", "App Design", "Web Design"];

export function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = projects.filter(project =>
        activeFilter === 'All' || project.category === activeFilter
    );

    return (
        <section
            id="portfolio"
            className="relative w-full h-[2040px] py-20 flex flex-col items-center"
            style={{
                backgroundImage: "url('/assets/PortfolioBackground.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            {/* Header */}
            <div className="text-center mb-16">
                <h3 className="text-[18px] font-medium tracking-widest text-[#9D86FF] uppercase mb-0 font-satoshi">PORTFOLIO</h3>
                <h2 className="text-[40px] font-bold text-white">Project that reflect my<br />expertise and vision</h2>

                {/* Filters */}
                <div className="flex gap-4 justify-center mt-8">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`rounded-full transition-all flex items-center justify-center h-[45px] font-sans ${activeFilter === filter
                                ? 'bg-white text-black px-6 text-[18px] font-semibold'
                                : 'bg-gradient-to-r from-[#FFFFFF]/12 to-[#FFFFFF]/8 px-[24px] text-[18px] font-semibold border border-white/16 hover:bg-white/5 text-white'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="w-[1140px] grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="w-[555px] h-[516px] bg-white/[0.08] rounded-[32px] pt-4 px-4 pb-[32px] group cursor-pointer hover:bg-white/[0.12] transition-colors border border-white/[0.12]">
                        {/* Image Placeholder */}
                        <div className="relative w-full h-[360px] bg-black/50 rounded-[16px] mb-[30px] overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex items-end justify-between pl-[14px] pr-[14px]">
                            <div>
                                <p className="text-[#9D86FF] text-[20px] font-medium mb-[6px] font-satoshi">{project.category}</p>
                                <h3 className="text-[32px] font-bold text-white font-[family-name:var(--font-bricolage)] leading-tight">{project.title}</h3>
                            </div>

                            {/* Arrow Button */}
                            <Link
                                href={project.link || '#'}
                                target="_blank"
                                className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                                onClick={(e) => {
                                    if (!project.link || project.link === '#') e.preventDefault();
                                }}
                            >
                                <Image
                                    src="/svgs/arrow.svg"
                                    alt="Arrow"
                                    width={15}
                                    height={20}
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
