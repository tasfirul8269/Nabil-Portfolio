"use client";
import Image from 'next/image';
import Link from 'next/link';
import GlassSurface from '@/components/GlassSurface';

export function Header() {
    return (
        <header className="w-full z-50 py-6 animate-fade-in-down">
            <div className="w-[1152px] mx-auto flex items-center justify-between px-4 md:px-0">
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/svgs/HeaderLogo.svg"
                        alt="Logo"
                        width={120} // Approximate width, adjust based on ratio
                        height={40}
                        priority
                    />
                </Link>

                {/* Placeholder Nav Items - To be updated from reference */}
                {/* Placeholder Nav Items - To be updated from reference */}
                <nav className="hidden md:block">
                    <GlassSurface

                        borderRadius={50}
                        displace={15}
                        distortionScale={-150}
                        redOffset={5}
                        greenOffset={15}
                        blueOffset={25}
                        brightness={60}
                        opacity={0.8}
                        mixBlendMode="screen"
                        className="flex items-center p-[5px] border border-white/10"
                    >
                        <div className="flex items-center">
                            <Link href="/" className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm transition-colors">HOME</Link>
                            <Link href="#about" className="text-white px-6 py-2 rounded-full font-medium text-sm hover:text-gray-200 transition-colors">ABOUT</Link>
                            <Link href="#services" className="text-white px-6 py-2 rounded-full font-medium text-sm hover:text-gray-200 transition-colors">SERVICES</Link>
                            <Link href="#portfolio" className="text-white px-6 py-2 rounded-full font-medium text-sm hover:text-gray-200 transition-colors">PORTFOLIO</Link>
                        </div>
                    </GlassSurface>
                </nav>

                <button className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm  cursor-pointer hover:bg-gray-100 transition-colors">
                    Hire Me
                </button>
            </div>
        </header>
    );
}
