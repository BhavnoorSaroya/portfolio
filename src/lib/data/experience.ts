import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'byte-camp-software-engineer',
		name: 'Software Engineer / Vancouver Regional Manager',
		company: 'Byte Camp',
		location: 'Vancouver, British Columbia, Canada',
		contract: ContractType.FullTime,
		type: 'Software Engineering & Infrastructure',
		color: 'blue',
		period: { from: new Date(2024, 0, 1) },
		logo: Assets.ByteCamp,
		links: [],
		shortDescription:
			'Software engineer and Vancouver regional manager building and operating production software, Linux infrastructure, and analytics for a nonprofit technology education organization.',
		skills: getSkills(
			'ts',
			'js',
			'reactjs',
			'nextjs',
			'nodejs',
			'php',
			'mysql',
			'postgresql',
			'oracle',
			'react-native',
			'expo',
			'flutter',
			'stripe',
			'linux',
			'ubuntu',
			'docker',
			'kubernetes',
			'aws',
			'wireguard',
			'python',
			'streamlit'
		),
		description: `### Production Software

- Build and operate full-stack web applications, registration workflows, and mobile applications used by more than 2,000 monthly users.
- Develop frontend features, backend services, REST APIs, reporting and analytics tooling, and integrations between internal and external services.
- Work across TypeScript, JavaScript, React, Next.js, Node.js, PHP, and WordPress, with MySQL, PostgreSQL, Oracle, and MSSQL Server.
- Ship mobile applications with React Native, Expo, and Flutter, including Stripe payment integrations.
- Troubleshoot production issues, improve caching and performance, and maintain software used by internal teams and external users.

### Linux Fleet Infrastructure

- Responsible for infrastructure supporting more than 300 Linux computers, primarily ThinkPad laptops.
- Handle device provisioning, automated deployment, remote updates, and fleet recovery across unreliable networks.
- Maintain consistent configurations across the fleet through remote administration, shell scripting, and deployment automation.
- Operate containerized internal services with Ubuntu, Docker, Podman, Kubernetes, and AWS.

### Networking

- Implemented and maintained a WireGuard-based mesh spanning hundreds of devices.
- Provided secure device connectivity, network routing, and remote device management across distributed environments.

### Production Incident

- Diagnosed a silent write-through cache failure that left database writes unpersisted.
- Recovered the affected unwritten database changes and fixed the root cause to prevent recurrence.

### Analytics & Reporting

- Moved historical MySQL registration data dating back to Summer 2016 into a PostgreSQL analytical warehouse.
- Built Streamlit dashboards covering enrollment, regions, program types, weeks, booking curves, and forecasting.

### Leadership

- Serve as Vancouver regional manager, covering recruiting, onboarding, staff coordination, delegation, curriculum development, and program delivery.
- Translate organizational and operational requirements into technical improvements.

### Technical Ownership

- Work across research, development, infrastructure, deployment, production support, troubleshooting, and maintenance.`
	},
	{
		slug: 'reva-software-systems-developer',
		name: 'Software Systems Developer',
		company: 'Reva Software Group',
		location: 'Vancouver, British Columbia, Canada',
		contract: ContractType.FullTime,
		type: 'Enterprise Applications & Integrations',
		color: 'orange',
		period: { from: new Date(2023, 4, 1), to: new Date(2023, 11, 31) },
		logo: Assets.Reva,
		links: [],
		shortDescription:
			'Enterprise application and integration work across ServiceNow, Box, Documentum D2, and Java/Spring APIs.',
		skills: getSkills('java', 'kotlin', 'js', 'spring', 'servicenow', 'box', 'documentum'),
		description: `- Worked on a ServiceNow and Box integration supporting secure file transfer and enterprise content-management workflows.
- Built Documentum D2 functionality involving product collections, supporting knowledge transfer and onboarding workflows.
- Developed Java APIs and Documentum D2 integrations, working with Kotlin, JavaScript, and Spring in an object-oriented enterprise application environment.
- Worked within established enterprise systems and content-management platforms rather than exclusively greenfield applications.`
	},
	{
		slug: 'bcit-computing-club-president',
		name: 'President',
		company: 'BCIT Computing Club',
		location: 'Vancouver, British Columbia, Canada',
		contract: ContractType.PartTime,
		type: 'Technical Leadership',
		color: 'green',
		period: { from: new Date(2025, 0, 1), to: new Date(2026, 4, 1) },
		logo: Assets.BcitComputingClub,
		links: [],
		shortDescription:
			'Led the BCIT Computing Club and organized technical events, hackathons, and developer-community initiatives.',
		skills: getSkills('technical-leadership', 'event-management', 'phoenix', 'aws'),
		description: `- Led the BCIT Computing Club, emphasizing practical software development and substantial engineering activities over introductory workshops.
- Organized technical event planning, hackathon organization, infrastructure planning, technical documentation, and coordination with participants and sponsors.
- Helped organize **Hack the Break 2026**, an in-person hackathon with approximately 200 expected participants on March 13–15, 2026 at the BCIT SE2 Great Hall, including Phoenix LiveView event infrastructure, technical challenge design, and AWS EC2 hosting documentation.
- Organized and emceed **HTTP Hacks 2025** on November 7–9, 2025 at the BCIT SE2 Great Hall for approximately 100–150 participants, with prizes of $1,000, $700, and $300.
- Designed a technical scavenger hunt / CTF for BCIT CST students featuring developer tools, browser console, Base64, Git, source and network inspection, APIs, Discord bot clues, and programming puzzles.
- Built a developer community around programming competitions and practical engineering challenges.`
	}
];

export const title = 'Experience';
