import { Layers, Smartphone, Monitor, Globe, Video, Camera } from 'lucide-react';

const services = [
    {
        icon: Layers,
        title: "UI/UX Design",
        description: "Creating clean, intuitive UI/UX designs that improve usability and enhance user engagement."
    },
    {
        icon: Smartphone,
        title: "App Design",
        description: "Designing seamless, user-friendly mobile apps that deliver engaging and intuitive experiences."
    },
    {
        icon: Monitor,
        title: "Website Design",
        description: "Creating clean, responsive websites that offer intuitive navigation and enhance user experience."
    },
    {
        icon: Globe, // Using Globe for Wordpress/Web
        title: "Wordpress",
        description: "Developing reliable WordPress websites with clean code and intuitive content management."
    },
    {
        icon: Video,
        title: "Video Editing",
        description: "Editing high-quality videos focused on clarity, pacing, and audience engagement."
    },
    {
        icon: Camera,
        title: "Photography",
        description: "Capturing moments that tell stories through light, emotion, and intentional composition."
    }
];

export function Services() {
    return (
        <section id="services" className="py-20 relative bg-[#151022] overflow-hidden">
            {/* Background Gradient Blur */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-60 mix-blend-screen"
                style={{
                    backgroundImage: "url('/svgs/Blur.svg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                    backgroundSize: 'container'
                }}
            />

            <div className="w-[1152px] mx-auto px-4 md:px-0 relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-[18px] font-medium tracking-widest text-[#9D86FF] uppercase mb-0 font-satoshi">SERVICES</h3>
                    <h2 className="text-[40px] font-bold text-white">My Specialities</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="w-full md:w-[360px] h-[284px] bg-white/[0.08] p-8 rounded-[24px] border border-white/[0.12] hover:border-white/20 transition-colors group">
            <div className="mb-6">
                <Icon className="w-10 h-10 text-white stroke-[1.5]" />
            </div>
            <h3 className="text-[28px] font-bold text-white mb-4 font-sans">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-[18px] font-normal font-satoshi">
                {description}
            </p>
        </div>
    );
}
