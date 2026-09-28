export type SocialLink = {
	label: string;
	href: string;
	icon: string;
};

export type Person = {
	name: string;
	intro: string;
	paragraphs: string[];
	metadata: readonly (readonly [string, string])[];
	links: SocialLink[];
};

export const person = {
	name: "Adrian Just",
	intro:
		"computer science student aspiring to systems engineering, focused on distributed systems, networking infrastructure, and the Linux kernel boundary.",
	paragraphs: [
		"I spend most of my time writing Rust, pairing it with Python for quick prototyping and scientific workloads. My main focus leans toward distributed systems and network infrastructure: proxies, custom protocols, asynchronous runtimes, and the plumbing that lets machines talk to each other reliably at scale.",
		"I prioritize pragmatic correctness, safety, and clear architecture over premature micro-optimizations. When performance truly matters, I enjoy digging into the hot paths-leveraging Linux primitives like io_uring and understanding mechanical sympathy without getting lost in optimizing for the sake of it.",
	],
	metadata: [
		["location", "Wrocław, Poland"],
		["building with", "Rust & Python"],
		[
			"exploring",
			"distributed systems, network infrastructure, Linux internals, async runtimes",
		],
	],
	links: [
		{
			label: "GitHub",
			href: "https://github.com/iadyo",
			icon: "simple-icons:github",
		},
		{
			label: "Email",
			href: "mailto:hello@adrianjust.com",
			icon: "material-symbols:mail-rounded",
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/adrian-just",
			icon: "simple-icons:linkedin",
		},
	],
} satisfies Person;

export const interests = [
	"Distributed systems",
	"Network infrastructure & protocols",
	"Systems programming in Rust",
	"Linux internals & OS primitives",
	"Asynchronous runtimes",
	"Pragmatic performance engineering",
];
