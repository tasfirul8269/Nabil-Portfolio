import Image from 'next/image';

const services = [
    {
        icon: "/svgs/ui.svg",
        title: "UI/UX Design",
        description: "Creating clean, intuitive UI/UX designs that improve usability and enhance user engagement.",
        width: 55.75,
        height: 60
    },
    {
        icon: "/svgs/app.svg",
        title: "App Design",
        description: "Designing seamless, user-friendly mobile apps that deliver engaging and intuitive experiences.",
        width: 39,
        height: 60
    },
    {
        icon: "/svgs/website.svg",
        title: "Website Design",
        description: "Creating clean, responsive websites that offer intuitive navigation and enhance user experience.",
        width: 60,
        height: 58.63
    },
    {
        icon: "/svgs/wordpress.svg",
        title: "Wordpress",
        description: "Developing reliable WordPress websites with clean code and intuitive content management.",
        width: 60,
        height: 60
    },
    {
        icon: "/svgs/videoedit.svg",
        title: "Video Editing",
        description: "Editing high-quality videos focused on clarity, pacing, and audience engagement.",
        width: 60,
        height: 60
    },
    {
        icon: "/svgs/photo.svg",
        title: "Photography",
        description: "Capturing moments that tell stories through light, emotion, and intentional composition.",
        width: 60,
        height: 60
    }
];

export function Services() {
    return (
        <section
            id="services"
            className="h-[980px] py-20 relative overflow-hidden"
            style={{
                backgroundImage: "url('/assets/ServicePage.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="w-[1152px] mx-auto px-4 md:px-0 relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-[18px] font-medium tracking-widest text-[#9D86FF] uppercase mb-0 font-satoshi">SERVICES</h3>
                    <h2 className="text-[40px] font-bold text-white">My Specialities</h2>
                </div>

                <div className="relative">
                    {/* Background Gradient Blur Centered on Grid */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[500px] pointer-events-none opacity-100"
                        style={{
                            backgroundImage: "url('/svgs/Blur.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain'
                        }}
                    />

                    <div className="flex flex-wrap justify-center gap-6 relative z-10">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                width={service.width}
                                height={service.height}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ icon, title, description, width, height }: { icon: string, title: string, description: string, width: number, height: number }) {
    return (
        <div className="w-full md:w-[360px] h-[284px] bg-white/[0.08] p-8 rounded-[24px] border border-white/[0.12] hover:border-white/20 transition-colors group">
            <div className="mb-2 w-[60px] h-[60px] relative flex items-center justify-start"> {/* Adjusted container size/alignment if needed, kept generic but removed fixed w-12 h-12 to allow custom sizing slightly better or keep as container */}
                <Image
                    src={icon}
                    alt={title}
                    width={width}
                    height={height}
                    className="object-contain"
                />
            </div>
            <h3 className="text-[28px] font-bold text-white mb-[8px] font-sans">{title}</h3>
            <p className="text-[#D0CFD3] leading-relaxed text-[18px] font-normal font-[family-name:var(--font-satoshi)]">
                {description}
            </p>
        </div>
    );
}
