"use client";

import { cn } from "@/lib/utils";

const LOGOS = [
	{ id: 1, name: "Mintlify", src: "/images/logos/mintlify_logo.svg.svg" },
	{ id: 2, name: "Browser Use", src: "/images/logos/Browser use.svg" },
	{ id: 3, name: "Firecrawl", src: "/images/logos/Firecrawl.svg.svg" },
	{ id: 4, name: "Mastra", src: "/images/logos/Mastra.svg.svg" },
	{ id: 5, name: "T3.chat", src: "/images/logos/T3_svg.svg" },
	{ id: 6, name: "", src: null },
];

const NUM_COLS = 3;

export default function LogoWall() {
	return (
		<section className="w-full bg-[#000000]">
			<div className="flex flex-row">
				{/* Left heading — always side-by-side */}
				<div className="w-[40%] sm:w-[42%] px-3 sm:px-4 xl:px-22.75 py-6 md:py-0 flex items-center border-r border-[#292929]">
					<div>
						<p className="font-sans text-[15px] sm:text-[24px] md:text-[36px] xl:text-[40px] font-normal leading-[1.1] tracking-[-0.03em]">
							<span className="text-[#FFFFFF66]">Trusted by </span>
							<span className="text-white">AI teams</span>
						</p>
						<p className="font-sans text-[15px] sm:text-[24px] md:text-[36px] xl:text-[40px] font-normal leading-[1.1] tracking-[-0.03em] text-white">
							shipping fast
						</p>
					</div>
				</div>

				{/* Logo grid — always 3 columns */}
				<div className="flex-1 grid grid-cols-3">
					{LOGOS.map((logo, i) => {
						const isLastCol = (i + 1) % NUM_COLS === 0;
						const isLastRow = i >= LOGOS.length - NUM_COLS;

						return (
							<div
								key={logo.id}
								className={cn(
									"flex items-center justify-center min-h-[120px] md:min-h-[166px] border-[#292929]",
									!isLastCol && "border-r",
									!isLastRow && "border-b",
								)}
								style={{
									backgroundImage:
										"radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
									backgroundSize: "14px 14px",
								}}
							>
								{logo.src && (
									<img
										src={logo.src}
										alt={logo.name}
										className="h-5 sm:h-6 md:h-7 w-auto max-w-[80px] sm:max-w-[120px] md:max-w-[150px] object-contain"
										loading="lazy"
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
