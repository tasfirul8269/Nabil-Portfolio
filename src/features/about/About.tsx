import Image from 'next/image';
import Link from 'next/link';

export function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden bg-[#1E182B]">
            {/* Background Gradient Effect - referencing the purple glow in design */}
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="w-[1152px] mx-auto px-4 md:px-0 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-[100px]">
                    {/* Left Column: Image */}
                    <div className="relative flex justify-center">
                        {/* Visual Decoration / Waves - Simplified representation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full scale-90" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-full scale-110" />

                        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-white/5 backdrop-blur-sm">
                            <Image
                                src="/assets/AboutImage.png"
                                alt="About Me"
                                fill
                                className="object-cover"
                                objectPosition="top"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="space-y-[47px] text-center md:text-left">
                        <h3 className="text-[18px] font-medium tracking-widest text-[#9D86FF] uppercase mb-2 font-satoshi">About Me</h3>
                        <h2 className="text-4xl md:text-[42px] font-bold text-white leading-tight">
                            <span>I&apos;m a professional UI/UX</span>
                            <br />
                            <span>Designer, Based in the BD.</span>
                        </h2>

                        <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#D0CFD3] to-[#6B6B6D]/30 leading-relaxed max-w-lg mx-auto md:mx-0 font-satoshi text-[16px] font-normal !mt-[37px]">
                            I'm a UI/UX Designer passionate about creating user-friendly, intuitive digital experiences. I combine user research, design principles, and creativity to build clean, accessible interfaces that improve engagement and satisfaction. <br /> <br />
                            My aim is to deliver effective solutions that align user needs with business goals across web and mobile platforms.
                        </p>


                        <div className="pt-4">
                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hoer:bg-gray-100 transition-colors font-satoshi"
                            >
                                Download CV
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="flex flex-wrap justify-center gap-[29px]">
                    <StatCard number="02" label="Years of experience" />
                    <StatCard number="23" label="Projects completed" />
                    <StatCard number="97" unit="%" label="Client satisfaction" />
                </div>
            </div>
        </section>
    );
}

function StatCard({ number, unit = "+", label }: { number: string, unit?: string, label: string }) {
    return (
        <div className="w-full md:w-[340px] h-[160px] bg-white/[0.08] p-8 rounded-[24px] flex flex-col items-center justify-center text-center border border-white/[0.12] hover:border-white/20 transition-colors group">
            <div className="text-5xl font-bold text-white mb-2 flex items-center font-sans">
                {number}
                <span className="text-[#9D86FF]">{unit}</span>
            </div>
            <p className="text-gray-400 font-medium font-satoshi text-[20px]">{label}</p>
        </div>
    );
}
