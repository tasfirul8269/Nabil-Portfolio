import Image from 'next/image';
import Link from 'next/link';

export function About() {
    return (
        <section
            id="about"
            className="pt-[128px] pb-20 relative"
            style={{
                backgroundImage: "url('/assets/AboutPage.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >


            <div className="w-[1152px] mx-auto px-4 md:px-0 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-start mb-[100px]">
                    {/* Left Column: Image */}
                    <div className="relative flex justify-center">


                        <div className="relative w-[300px] h-[346px] md:w-[600px] md:h-[682px] rounded-[24px] overflow-hidden -mt-[190px]">
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
                        <h2 className="text-4xl md:text-[40px] font-bold text-white leading-tight">
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
