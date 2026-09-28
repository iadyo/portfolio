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
		"software engineer interested in systems, programming languages, infrastructure, performance, and the boundary between software and hardware.",
	paragraphs: [
		"I write mostly Rust and C these days, usually somewhere below the framework layer: schedulers, storage engines, network paths, the parts of a program that only get interesting once you look at what the machine is actually doing.",
		"Lately I've been reading kernel source for fun, measuring things I assumed I understood, and slowly convincing myself that most performance work is really a question about memory. I keep notes here because writing is how I find out whether I understood something.",
	],
	metadata: [
		["location", "Wroclaw, Poland"],
		["building with", "Rust & Python"],
		[
			"exploring",
			"systems programming, distributed systems, low-level software",
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
	"Systems",
	"Rust",
	"Operating systems",
	"Networking",
	"Distributed systems",
	"Performance",
	"Hardware / software boundaries",
];
