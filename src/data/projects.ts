export type Project = {
	title: string;
	description: string;
	year: string;
	status: string;
	technologies: string[];
	github?: string;
	demo?: string;
	docs?: string;
	details?: string[];
};

export const projects: Project[] = [
	{
		title: "N-Body Orbital Mechanics Simulator",
		description:
			"A numerical simulator for gravitational N-body systems with Euler integration, interactive 3D visualization, and a desktop GUI.",
		year: "2026",
		status: "Completed",
		technologies: [
			"Python",
			"NumPy",
			"SciPy",
			"Matplotlib",
			"Tkinter",
			"pytest",
			"uv",
		],
		github: "https://github.com/iadyo/nboms",
		details: [
			"Simulates gravitational interactions between multiple celestial bodies.",
			"Uses numerical integration to model orbital dynamics and demonstrates truncation error and stability considerations.",
			"Provides interactive 3D visualization of simulated trajectories.",
			"Structured as a modern Python package with testing, linting, type checking, and coverage tooling.",
		],
	},
	{
		title: "slay",
		description:
			"A lightweight Linux CLI utility for finding and terminating the process using a TCP or UDP port.",
		year: "2026",
		status: "Completed",
		technologies: ["Rust", "Linux", "TCP", "UDP", "procfs", "clap", "CLI"],
		github: "https://github.com/iadyo/slay",
		details: [
			"Resolves a TCP, TCP6, UDP, or UDP6 socket to its owning process.",
			"Uses the Linux /proc filesystem to map socket inodes to process IDs.",
			"Terminates processes with SIGTERM by default or SIGKILL in force mode.",
			"Built as a lightweight systems-programming exercise focused on Linux process and networking introspection.",
		],
	},
];
