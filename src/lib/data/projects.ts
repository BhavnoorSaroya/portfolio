import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

import garaageSs from '$lib/projects/img/garaage-home.png';
import mikaAi from '$lib/projects/img/mik-ai.png';
import baajDash from '$lib/projects/img/baaj-dashboard.png';
import baajLive from '$lib/projects/img/baaj-live.png';
import baajReport from '$lib/projects/img/baaj-reports.png';
import garaageThumb from '$lib/projects/img/garaage-thumbnail.jpg';
import oraHome from '$lib/projects/img/ora-home.png';
import oraTask from '$lib/projects/img/ora-edit_task.png';
import oraCalendar from '$lib/projects/img/ora-calendar.png';
import oraProfile from '$lib/projects/img/ora-profile.png';
import oraTaskCreate from '$lib/projects/img/ora-create_task.png';
import omniDash from '$lib/projects/img/omni-dash.jpg';
import omniDevice from '$lib/projects/img/omni-devices.jpg';
import omniAutomation from '$lib/projects/img/omni-automation.jpg';

export const items: Array<Project> = [
	{
		slug: 'distributed-kv-store',
		name: 'Distributed Key-Value Store',
		color: '#00ADD8',
		logo: Assets.Go,
		shortDescription:
			'Go distributed key-value store with replication, coordination, and failure recovery, tested across more than 50 machines.',
		description: `- Built a distributed key-value store in Go with replication and coordination between nodes.
- Addressed distributed state management, state propagation, and failure recovery.
- Designed for fault tolerance and concurrency, with network communication between nodes.
- Tested behavior across more than 50 globally distributed machines.
- Load-tested the system with tens of thousands of writes.`,
		links: [],
		period: { from: new Date() },
		skills: getSkills('go', 'tcp-ip', 'sockets', 'load-balancing'),
		type: 'Distributed Systems'
	},
	{
		slug: 'tcp-http-proxy',
		name: 'Concurrent TCP/HTTP Proxy',
		color: '#00ADD8',
		logo: Assets.Go,
		shortDescription:
			'Concurrent Go proxy handling TCP and HTTP traffic with routing, connection lifecycle management, and concurrent request processing.',
		description: `- Developed a concurrent proxy supporting both TCP and HTTP traffic in Go.
- Implemented TCP connection handling, HTTP request handling, and routing.
- Managed connection lifecycle and concurrent request processing.
- Applied L4 and L7 networking concepts including proxies and load-balancing behavior.`,
		links: [],
		period: { from: new Date() },
		skills: getSkills('go', 'tcp-ip', 'http', 'proxies', 'load-balancing', 'sockets'),
		type: 'Networking & Systems'
	},
	{
		slug: 'linux-fleet-infrastructure',
		name: 'Linux Fleet Infrastructure',
		color: '#326CE5',
		logo: Assets.Kubernetes,
		shortDescription:
			'Infrastructure for 300+ Linux computers covering provisioning, remote updates and recovery, WireGuard mesh networking, and containerized services.',
		description: `- Operated infrastructure supporting more than 300 Linux computers, primarily ThinkPad laptops.
- Handled fleet provisioning, operating-system maintenance, remote updates, and remote recovery.
- Maintained network configuration and a WireGuard VPN mesh across the fleet.
- Ran containerized internal services with Docker, Podman, and Kubernetes, hosted on AWS.
- Automated deployment and infrastructure maintenance with shell scripting.`,
		links: [],
		period: { from: new Date(2024, 0, 1) },
		skills: getSkills('linux', 'ubuntu', 'wireguard', 'kubernetes', 'docker', 'aws', 'bash'),
		type: 'Infrastructure & DevOps'
	},
	{
		slug: 'analytics-warehouse',
		name: 'Analytics Warehouse & Dashboards',
		color: '#336791',
		logo: Assets.PostgreSQL,
		shortDescription:
			'PostgreSQL analytical warehouse built from historical MySQL registration data back to Summer 2016, with Streamlit enrollment dashboards.',
		description: `- Built an analytics pipeline for program registration and enrollment data.
- Extracted historical MySQL registration data dating back to Summer 2016.
- Designed and loaded a PostgreSQL dimensional warehouse with \`dim_program\`, \`dim_school\`, \`dim_region\`, \`fact_program_snapshot\`, \`fact_program_final\`, and \`stg_summer_snapshots_long\`.
- Built a Streamlit dashboard covering overview, yearly statistics, regions, program types, weeks, recreation centres, booking curves, and forecasting.
- Example 2026 figures: 193 programs, 48.5% average fill rate, 41.7% median fill rate, and 6.1 average final enrollment.
- Identified operational opportunities by finding high-fill programs with low supply.`,
		links: [],
		period: { from: new Date() },
		skills: getSkills('mysql', 'postgresql', 'sql', 'python', 'streamlit', 'etl', 'data-warehousing'),
		type: 'Data Engineering'
	},
	{
		slug: 'eld-dispatch-mdm',
		name: 'ELD, Dispatch & MDM Platform',
		color: '#0B6E4F',
		logo: Assets.Android,
		shortDescription:
			'Commercial transportation platform spanning electronic logging devices, fleet operations backend, dispatch and CRM integrations, and a custom Android MDM.',
		description: `### ELD & Compliance

- Built electronic logging device functionality for trucks and taxis.
- Captured driver pre-trip inspections on the device and stored them against the vehicle and driver.
- Tracked vehicles and trip records, with automated reporting and insights over collected fleet data.
- Maintained compliance-oriented record keeping for drivers and operators.

### Integrations

- Integrated dispatch with iCABBI so trips and vehicle state flow between the ELD and the dispatch platform.
- Integrated the TaxiCharger CRM and delivered automated reporting from operational data.

### Mobile Device Management

- Built a custom MDM for the fleet with Android device enrolment, policy enforcement, and remote configuration.
- Worked on a custom AOSP ROM, including control over the system image shipped to devices.
- Integrated with Samsung One UI for the Samsung handsets in the fleet.
- Provided private networking between devices and backend over WireGuard, plus remote troubleshooting, configuration updates, and device recovery.

### Backend

- Built Node.js services and REST APIs.
- Designed a MySQL schema for drivers, vehicles, inspections, trips, and device records.
- Implemented vehicle tracking ingestion and reporting pipelines.
- Supported commerce and payment flows with Shopify and Stripe.
- Supported drivers and fleet operators in English, Punjabi, and Hindi.`,
		links: [],
		period: { from: new Date() },
		skills: getSkills(
			'android',
			'aosp',
			'intune',
			'samsung-knox',
			'google-mdm',
			'amapi',
			'wireguard',
			'nodejs',
			'mysql',
			'stripe',
			'shopify'
		),
		type: 'Transportation & Device Management'
	},
	{
		slug: 'voice-agent',
		name: 'Speech-to-Speech Voice Agent',
		color: '#68217A',
		logo: Assets.Csharp,
		shortDescription:
			'C#/.NET speech-to-speech voice agent with classifiers and intent processing, connected to a 4G network through Asterisk under a 1 GB RAM constraint.',
		description: `- Built a custom speech-to-speech voice agent pipeline in C#/.NET.
- Implemented classifiers and intent-processing logic.
- Connected the voice system to a 4G cellular network using Asterisk for telephony integration.
- Deployed the system under a 1 GB RAM constraint, managing the end-to-end flow from speech input to speech output.`,
		links: [],
		period: { from: new Date(2026, 10, 1) },
		skills: getSkills('csharp', 'dotnet', 'orleans', 'asterisk'),
		type: 'AI & Telephony'
	},
	{
		slug: 'hackathon-platform',
		name: 'Hackathon Platform',
		color: '#4B275F',
		logo: Assets.Phoenix,
		shortDescription:
			'Long-term hackathon operations platform, maintained in Ruby on Rails for about three years and later rebuilt in Elixir, Phoenix, and Phoenix LiveView.',
		description: `- Maintained and developed the predecessor hackathon platform in Ruby on Rails for approximately three years.
- Built the replacement platform in Elixir using Phoenix and Phoenix LiveView.
- Delivered a database-backed application with real-time interactive web interfaces for hackathon operations.
- Owned the product across framework migration, feature development, and ongoing maintenance.`,
		links: [],
		period: { from: new Date(2022, 0, 1) },
		skills: getSkills('ruby', 'rails', 'elixir', 'phoenix', 'liveview', 'postgresql'),
		type: 'Full-Stack Product Engineering'
	},
	{
		slug: 'OMNI',
		color: '#0070f3',
		description: `Smart homes today are fragmented, with various standards, proprietary AI solutions, and cloud-dependent systems that compromise security and privacy. Omni was born out of a desire to simplify the smart home experience, offering seamless integration, robust local control, and cutting-edge features like gesture-based interaction and presence detection. All while prioritizing privacy, security, and reliability`,
		shortDescription: 'Accessible ai meets the smart home, its time to make your home smarter, privacy first, and run locally on your devices.',
		links: [{ to: 'https://github.com/noufilsaqib/omni', label: 'GitHub' }],
		logo: Assets.Rust,
		name: 'OMNI',
		period: {
			from: new Date(2024, 0)
		},
		skills: getSkills('python', 'reactjs', 'ts', 'postgresql', 'rust', 'kotlin'),
		type: 'Smart home platform',
		screenshots: [
			{
				label: 'OMNI dashboard',
				src: omniDash
			},
			{
				label: 'device page',
				src: omniDevice
			},
			{
				label: 'automations page',
				src: omniAutomation
			}
		]
	},
	{
		slug: 'garaage',
		color: '#FFA500',
		description: `Garaage revolutionizes vehicle diagnostics and maintenance by leveraging an OBD2 scanner and Google's advanced technologies. The app allows you to connect your vehicle and get real-time insights into its health and performance. The Gemini API empowers Garaage to offer a user-friendly, informative, and interactive experience. It transforms the way vehicle owners approach diagnostics and maintenance, putting powerful AI tools at their fingertips.
		1. Diagnostic Analysis: Garaage uses the Gemini API's powerful AI capabilities to interpret OBD2 error codes. It goes beyond just providing code definitions. Instead, Gemini generates comprehensive reports with detailed explanations of potential causes, recommended maintenance, and even estimates of repair costs.
		2. Chatbot Support: The Gemini-powered chatbot called Mika ai is like having a knowledgeable mechanic in your pocket. You can ask questions about error codes, get troubleshooting tips, and receive guidance on maintenance procedures. Gemini enables the chatbot to understand natural language and provide accurate, helpful responses.
		3. AR Identification: Imagine pointing your phone's camera at your engine and instantly seeing an overlay identifying each component. That's the magic of ARCore, but Gemini enhances it. The Gemini API helps Garaage provide more context and information about each part, making it easier for users to understand their vehicle's inner workings.`,
		shortDescription: 'Cross platform mobile application for vehicle maintenance and DIY car repair using AI.',
		links: [{ to: 'https://github.com/BhavnoorSaroya/Garaage', label: 'GitHub' }],
		logo: Assets.Flutter,
		name: 'Garaage',
		period: {
			from: new Date(2024, 0)
		},
		skills: getSkills('flutter', 'dart', 'angular', 'firebase'),
		type: 'AI powered Mobile Application',
		screenshots: [
			{
				label: 'Garaage home screen',
				src: garaageThumb
			},
			{
				label: 'Garaage home screen',
				src: garaageSs
			},
			{
				label: 'mika ai',
				src: mikaAi
			}
		]
	},
	{
		slug: 'ora',
		color: '#0070f3',
		description: `Ora is a time management platform that helps users organize tasks, manage deadlines, and stay on top of assignments. It uses AI to reorganize work and assist with assignment completion.`,
		shortDescription: 'AI-powered workflow supervisor application.',
		links: [
			{ to: 'https://youtu.be/Gm644fFPYi8?si=p6-yP1S618dfNekS', label: 'youtube' },
			{ to: 'https://github.com/noufilsaqib/qds_hacks_2024', label: 'github' }
		],
		logo: Assets.ReactJs,
		name: 'Ora',
		period: {
			from: new Date(2024, 3)
		},
		skills: getSkills('reactjs', 'tailwind', 'css', 'js', 'mongodb'),
		type: 'AI Workflow Manager',
		screenshots: [
			{
				label: 'Ora main interface',
				src: oraHome
			},
			{
				label: 'Ora task editor',
				src: oraTask
			},
			{
				label: 'Ora calendar',
				src: oraCalendar
			},
			{
				label: 'Ora profile page',
				src: oraProfile
			},
			{
				label: 'Ora task creation',
				src: oraTaskCreate
			}
		]
	},
	{
		slug: 'baaj',
		color: '#34A853',
		description: `Baaj is an AI monitoring system deployed in YVR airport. It uses Google Coral Edge TPU to run image inference on camera feeds to detect abandoned bags, spills, and emergencies. It sends notifications based on event priority, ensuring prompt responses to incidents.`,
		shortDescription: 'AI-powered monitoring system for airports.',
		links: [
			{ to: 'https://commons.bcit.ca/news/2024/05/yvr-hackathon-2024/', label: 'BCIT' },
			{ to: 'https://github.com/BhavnoorSaroya/YVR-Baaj', label: 'Github' }
		],
		logo: Assets.Python,
		name: 'Baaj',
		period: {
			from: new Date(2024, 4)
		},
		skills: getSkills('python', 'flask', 'reactjs', 'tensorflow', 'coral', 'ts'),
		type: 'AI Monitoring System',
		screenshots: [
			{
				label: 'Baaj dashboard',
				src: baajDash
			},
			{
				label: 'Baaj live monitoring',
				src: baajLive
			},
			{
				label: 'Baaj reporting system',
				src: baajReport
			}
		]
	},
	{
		slug: 'teck-mining-prediction',
		color: '#1E88E5',
		description: `During QDS Hacks 2023, we built a powerful application for the mining company Teck. The application leverages truck data to predict and monitor activity. By mapping the routes trucks take from shovels to dumps, we can identify routes with better fuel efficiency, predict fuel consumption for different truck types, and detect routes prone to congestion.`,
		shortDescription: 'Truck data-driven prediction and monitoring system for Teck mining.',
		links: [
			{ to: 'https://github.com/christietsang/EnviLabs-Hackathon', label: 'github' }
		],
		logo: Assets.PostgreSQL,
		name: 'Teck Mining Prediction',
		period: {
			from: new Date(2023, 0)
		},
		skills: getSkills('reactjs', 'nodejs', 'python', 'mongodb', 'tensorflow', 'js'),
		type: 'Predictive Analytics Application'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description: 'A super intricate and carefully designed portfolio website designed with Sveltekit',
		shortDescription: 'A super intricate and carefully designed portfolio website designed with Sveltekit',
		links: [{ to: 'https://github.com/BhavnoorSaroya', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Portfolio',
		period: {
			from: new Date(2024, 0)
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template'
	},
	{
		slug: 'resume-roaster',
		color: '#874ba0',
		description: 'My first ever AI powered application, created just days after the release of the openai api, the application uses the openai api to improve the quality of resumes by providing suggestions and improvements, the application is built using minimal bootstrap and nodejs, the idea was to keep it lightweight. The entire application was developed in just 16 hours by 3 developers.',
		shortDescription: 'A resume improvment tool that allows the user to input their resume and get suggestions on how to improve it.',
		links: [],
		logo: Assets.JavaScript,
		name: 'ResumAI',
		period: {
			from: new Date(2023, 0)
		},
		skills: getSkills('js', 'css', 'nodejs', 'sass'),
		type: 'Web application'
	}
];

export const title = 'Projects';
