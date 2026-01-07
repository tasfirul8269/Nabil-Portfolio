"use client";
import Image from 'next/image';

const testimonials = [
    {
        text: "Working with Nabil was an absolute pleasure. His expertise as a UI/UX designer transformed our vision into an intuitive and visually stunning product. He listens carefully, delivers on time, and goes above and beyond to ensure a seamless user experience every time.",
        name: "Abdullah Mahi",
        title: "Marketing Manager",
        image: "/assets/Mahi.png"
    },
    {
        text: "Nabil's work on our rider app was exceptional. His UI/UX design made the app intuitive, smooth, and visually appealing. He understands user behavior, delivers innovative solutions, and ensures every interaction feels natural. The app's usability improved dramatically thanks to his expertise.",
        name: "Tanvir Almas",
        title: "CEO",
        image: "/assets/Tanvir.png"
    }
];

export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative w-full h-[1520px] flex flex-col items-center pt-[150px] overflow-hidden"
            style={{
                backgroundImage: "url('/assets/Testinominal.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Header */}
            <div className="text-center mb-16">
                <h3 className="text-[14px] font-medium tracking-[0.2em] text-[#9D86FF] uppercase mb-4 font-satoshi">TESTIMONIAL</h3>
                <h2 className="text-[40px] font-bold text-white font-[family-name:var(--font-bricolage)]">What client says</h2>
            </div>

            {/* Cards Container */}
            <div className="flex gap-8 justify-center w-full px-4 max-w-[1200px]">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-[555px] h-[315px] bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-[24px] pt-[39px] px-[30px] pb-[38px] relative group hover:bg-white/[0.05] transition-colors flex flex-col justify-between"
                    >
                        {/* Quote Icon */}
                        <div className="absolute right-[30px] bottom-[59px] z-0">
                            <Image
                                src="/svgs/quote.svg"
                                alt="Quote"
                                width={40}
                                height={28}
                            />
                        </div>

                        {/* Text */}
                        <p className="text-white/80 text-[18px] font-normal leading-[28.8px] font-satoshi relative z-10">
                            {testimonial.text}
                        </p>

                        {/* User Profile */}
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-[70px] h-[70px] rounded-full bg-white/10 overflow-hidden flex items-center justify-center relative">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-[24px] font-[family-name:var(--font-bricolage)] mb-0">{testimonial.name}</h4>
                                <p className="text-white/60 font-regular text-[16px] font-[family-name:var(--font-bricolage)]">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots (Visual Only) */}
            <div className="flex gap-2 mt-12">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>

            {/* Detailed Footer */}
            <div
                className="absolute bottom-0 w-full h-[600px] flex flex-col justify-between"
                style={{
                    backgroundImage: "url('/assets/footer.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Main CTA Content */}
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    {/* Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
                        <Image src="/svgs/star.svg" alt="star" width={16} height={16} />
                        <span className="text-white text-sm font-medium font-satoshi">Available For Opportunities</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-[56px] leading-[1.1] font-bold text-center text-white max-w-[800px] font-[family-name:var(--font-bricolage)]">
                        Let&apos;s work together to transform your ideas into stunning designs.
                    </h2>

                    {/* Button */}
                    <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-[16px] hover:bg-gray-100 transition-colors font-satoshi">
                        Hire Me Now
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="relative w-full pl-[294px] pr-[194px] pt-8 pb-[46px] border-t border-white/10 flex items-center justify-between">
                    {/* Logo */}
                    <Image
                        src="/svgs/HeaderLogo.svg"
                        alt="Logo"
                        width={86}
                        height={26}
                        className="object-contain"
                    />

                    {/* Social Icons */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[37px] flex items-center gap-[16px]">
                        <div className="w-[44px] h-[44px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                            <span className="text-white text-xs">WA</span>
                        </div>
                        <div className="w-[44px] h-[44px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                            <span className="text-white text-xs">IG</span>
                        </div>
                        <div className="w-[44px] h-[44px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                            <span className="text-white text-xs">FB</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-white/60 text-[18px] font-normal font-satoshi">
                        © 2026 Frooxi. All Rights Reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}

