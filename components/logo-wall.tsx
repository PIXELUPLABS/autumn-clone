"use client";

import { cn } from "@/lib/utils";

// Replace each entry's `name` with the real company name and swap
// `LogoPlaceholder` for an actual SVG import when logos are ready.
const LOGOS = [
	{ id: 1, name: "Mintlify" },
	{ id: 2, name: "Linear" },
	{ id: 3, name: "Firecrawl" },
	{ id: 4, name: "Mastra" },
	{ id: 5, name: "T3.chat" },
	{ id: 6, name: "Placeholder" },
];

function LogoPlaceholder({ name }: { name: string }) {
	return (
		<div className="flex items-center gap-2.5 text-[#FFFFFF4D]">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				aria-hidden="true"
				className="shrink-0"
			>
				<rect
					x="2"
					y="2"
					width="16"
					height="16"
					rx="3.5"
					fill="currentColor"
					opacity="0.55"
				/>
			</svg>
			<span className="font-sans text-[14px] md:text-[15px] font-light tracking-[-0.02em]">
				{name}
			</span>
		</div>
	);
}

const NUM_MOBILE_COLS = 2;
const NUM_DESKTOP_COLS = 3;

export default function LogoWall() {
	return (
		<section className="w-full bg-[#000000] border-b border-[#292929]">
			<div className="flex flex-col md:flex-row">
				{/* Left heading */}
				<div className="md:w-[38%] xl:w-[35%] px-4 xl:px-22.75 py-10 xl:py-12 flex items-center border-b md:border-b-0 md:border-r border-[#292929]">
					<div>
						<p className="font-sans text-[22px] xl:text-[28px] font-normal leading-[1.1] tracking-[-0.03em] text-[#FFFFFF66]">
							Trusted by
						</p>
						<p className="font-sans text-[22px] xl:text-[28px] font-normal leading-[1.1] tracking-[-0.03em] text-white">
							AI teams shipping fast
						</p>
					</div>
				</div>

				{/* Logo grid */}
				<div className="flex-1 grid grid-cols-2 md:grid-cols-3">
					{LOGOS.map((logo, i) => {
						const isLastMobileCol = (i + 1) % NUM_MOBILE_COLS === 0;
						const isLastDesktopCol = (i + 1) % NUM_DESKTOP_COLS === 0;
						const isLastMobileRow = i >= LOGOS.length - NUM_MOBILE_COLS;
						const isLastDesktopRow = i >= LOGOS.length - NUM_DESKTOP_COLS;

						return (
							<div
								key={logo.id}
								className={cn(
									"flex items-center justify-center py-8 xl:py-10 border-[#292929]",
									!isLastMobileCol && "border-r",
									!isLastMobileRow && "border-b",
									isLastDesktopCol ? "md:border-r-0" : "md:border-r",
									isLastDesktopRow ? "md:border-b-0" : "md:border-b",
								)}
								style={{
									backgroundImage:
										"radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
									backgroundSize: "14px 14px",
								}}
							>
								<LogoPlaceholder name={logo.name} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
