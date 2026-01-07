"use client";
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import LightRays from '@/components/LightRays';

import SplitText from "@/components/SplitText";
import StarBorder from "@/components/StarBorder";
import BlurText from "@/components/BlurText";

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

const handleSplitTextComplete = () => {
    console.log('All letters have animated!');
};

export function Hero() {
    return (
        <section className="relative w-full h-[1000px] flex flex-col pt-4 overflow-hidden">
            <Header />
            {/* Top Blur Background / LightRays */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-0 animate-fade-in-blur [animation-delay:1.5s] [animation-fill-mode:forwards] pointer-events-none overflow-hidden">
                <div style={{ opacity: 0.5, width: '100vw', height: '100%', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#ffffff"
                        raysSpeed={1}
                        lightSpread={10}
                        rayLength={2}
                        pulsating={false}
                        fadeDistance={1}
                        saturation={1}
                        followMouse={false}

                    />
                </div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-[1152px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-0 mt-12">

                {/* Text Content */}
                <div className="flex flex-col items-start gap-[12px] opacity-0 animate-fade-in-left [animation-delay:0.3s] [animation-fill-mode:forwards]">
                    <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
                        <Image
                            src="/svgs/star.svg"
                            alt="Logo"
                            width={20}
                            height={20}
                            priority
                        />
                        <span className="text-[16px] font-medium text-gray-300">Available For Opportunities</span>
                    </div>

                    <div className="text-[64px] font-bold leading-[1.1] tracking-tight">
                        <BlurText
                            text="Hey, I'm Nabil, UI/UX Designer Of Frooxi, BD."
                            delay={150}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className=""
                        />
                    </div>

                    <div className="text-gray-400 text-[18px] font-normal max-w-lg leading-relaxed font-[family-name:var(--font-satoshi)]">
                        <SplitText
                            text="Building professional, user-friendly designs that support functionality and boost user engagement."
                            className="text-gray-400 text-[18px] font-normal leading-relaxed font-[family-name:var(--font-satoshi)]"
                            delay={30}
                            duration={0.5}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="left"
                            onLetterAnimationComplete={handleSplitTextComplete}
                        />
                    </div>

                    <div className="flex items-center gap-4 mt-[40px]">
                        <button
                            className="bg-white hover:bg-gray-200 cursor-pointer text-black px-[24px] py-[16px] text-[18px] rounded-full font-semibold transition-all"
                        >
                            Let&apos;s talk
                        </button>

                        <button
                            className="bg-gradient-to-r from-[#FFFFFF]/12 to-[#FFFFFF]/8 px-[24px] py-[16px] text-[18px] rounded-full font-medium border border-white/16 cursor-pointer hover:bg-white/5 transition-all"
                        >
                            My Works
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative flex justify-center opacity-0 animate-fade-in-right [animation-delay:0.3s] [animation-fill-mode:forwards]">
                    {/* Hexagon/Shape Background for Image - Guessing from typical "Frooxi" style or just placing the image */}
                    <div className="-mt-[30px] relative w-full max-w-[450px] aspect-[1/1.24106589147]">
                        <Image
                            src="/assets/HeroImage.png"
                            alt="Nabil"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
