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


export const items: Array<Project> = [
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
			from: new Date()
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
			},
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
			from: new Date()
		},
		skills: getSkills( 'react', 'tailwind', 'css', 'js', 'mongodb'),
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
			from: new Date()
		},
		skills: getSkills('python', 'flask', 'react', 'tensorflow', 'coral', 'ts', 'reactjs'),
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
			// { to: 'https://youtu.be/your_youtube_demo_link', label: 'youtube' }, 
			{ to: 'https://github.com/christietsang/EnviLabs-Hackathon', label: 'github' }
		],
		logo: Assets.PostgreSQL, // Replace with the appropriate logo
		name: 'Teck Mining Prediction',
		period: {
			from: new Date(), 
		},
		skills: getSkills('reactjs', 'nodejs', 'python', 'mongodb', 'tensorflow', 'js'),
		type: 'Predictive Analytics Application',
		// screenshots: [
		// 	{
		// 		label: 'Teck Mining Dashboard',
		// 		src: teckDashboard
		// 	}, 
		// 	{
		// 		label: 'Truck Route Analysis',
		// 		src: truckRoute
		// 	},
		
		// ]
	}
	,
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description: 'A super intricate and carefully designed portfolio website designed with Sveltekit',
		shortDescription: 'A super intricate and carefully designed portfolio website designed with Sveltekit',
		links: [{ to: 'https://github.com/BhavnoorSaroya/Garaage', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',

	},
	{
		slug: 'resume-roaster',
		color: '#874ba0',
		description: 'My first ever AI powered application, created just days after the release of the openai api, the application uses the openai api to improve the quality of resumes by providing suggestions and improvements, the application is built using minimal bootstrap and nodejs, the idea was to keep it lightweight. The entire application was developed in just 16 hours by 3 developers.',
		shortDescription: 'A resume improvment tool that allows the user to input their resume and get suggestions on how to improve it.',
		links: [
			// { to: 'https://github.com/BhavnoorSaroya/Garaage', label: 'GitHub' }
		],
		logo: Assets.JavaScript,
		name: 'ResumAI',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'css', 'nodejs', 'sass'),
		type: 'Web application',

	},
];


export const title = 'Projects';
