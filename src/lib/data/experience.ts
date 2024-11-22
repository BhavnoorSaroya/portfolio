import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';
import { description } from './home';

// export const items: Array<Experience> = [
// 	{
// 		slug: 'open-sourcer',
// 		company: 'Self-employed',
// 		description: 'Creating awesome tools for developers.',
// 		contract: ContractType.SelfEmployed,
// 		type: 'Software Development',
// 		location: 'Home',
// 		period: { from: new Date() },
// 		skills: getSkills('ts', 'js'),
// 		name: 'Open Source Developer',
// 		color: 'red',
// 		links: [],
// 		logo: Assets.Unknown,
// 		shortDescription: 'Creating awesome tools for developers.'
// 	},
// 	{
// 		slug: 'software-freelance',
// 		company: 'Self-employed',
// 		description: 'Creating awesome applications for customers.',
// 		contract: ContractType.Freelance,
// 		type: 'Software Development',
// 		location: 'Home',
// 		period: { from: new Date() },
// 		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
// 		name: 'Freelancer',
// 		color: 'blue',
// 		links: [],
// 		logo: Assets.Unknown,
// 		shortDescription: 'Creating awesome applications for customers.'
// 	},
// 	{
// 		slug: 'software-freelance-junior',
// 		company: 'Self-employed',
// 		description: 'Creating awesome applications for customers.',
// 		contract: ContractType.Freelance,
// 		type: 'Software Development',
// 		location: 'Home',
// 		period: { from: new Date(2022, 0, 1), to: new Date() },
// 		skills: getSkills('css', 'html', 'js'),
// 		name: 'Junior Freelancer',
// 		color: 'green',
// 		links: [],
// 		logo: Assets.Unknown,
// 		shortDescription: 'Creating awesome applications for customers.'
// 	}
// ];
// import { ContractType } from './types';
// import type { Experience } from './types';
// import { getSkills } from './utils/skills';
// import { Assets } from './assets'; // Assuming Assets is defined somewhere in your project

export const items: Array<Experience> = [
  {
    slug: 'full-stack-dev',
    name: 'Software Developer',
    company: 'Byte Camp',
    description: 'Designing, implementing and deploying a new content hosting and managment platform in house. ',
    shortDescription: 'Designing, implementing and deploying a new content hosting and managment platform in house. Also built a an api for other internal applications to connect into the new service.',
    logo: Assets.Unknown, // Assuming you have a logo placeholder
    color: 'blue', // Assuming you have a Color enum or type
    location: 'Vancouver, British Columbia, Canada',
    contract: ContractType.FullTime,
    period: { from: new Date(2024, 9) }, // September 2024
    type: 'Software Development',
    skills: getSkills('python', 'nodejs', 'ts', 'js', 'bun',  'html', 'tailwind', 'css'), // Assuming getSkills is a utility to fetch relevant skills
    links: []
  },
  {
    slug: 'regional-manager-systems-analyst',
    name: 'Regional Manager and Systems Analyst',
    company: 'Byte Camp',
    description: 'Managed large team, handled conflicts. Oversaw software deployment and provided support to employees in the field.',
    shortDescription: 'Managed large team, handled conflicts. Oversaw software deployment and provided support to employees in the field.',
    logo: Assets.Unknown, // Assuming you have a logo placeholder
    color: 'blue', // Assuming you have a Color enum or type
    location: 'Vancouver, British Columbia, Canada',
    contract: ContractType.FullTime,
    period: { from: new Date(2024, 4) }, // May 2024
    type: 'Management and Systems Analysis',
    skills: getSkills('python', 'nodejs', 'ts', 'html', 'css'), // Assuming getSkills is a utility to fetch relevant skills
    links: []
  },
  {
    slug: 'full-stack-developer',
    name: 'Full Stack Developer',
    company: 'Reva Solutions',
    description: 'Developing full-stack applications for enterprise content managment using various technologies. Including integrations with Opentext, Box, ServiceNow, and Salesforce ',
    shortDescription: 'Developing full-stack applications specializing in enterprise content managment',
    logo: Assets.Unknown,
    color: 'orange',
    location: 'Vancouver, British Columbia, Canada',
    contract: ContractType.FullTime, // Assuming Co-op is handled under Internship
    period: { from: new Date(2023, 4, 1), to: new Date(2023, 11, 31) }, // May 2023 to Dec 2023
    type: 'Software Development',
    skills: getSkills('python', 'js', 'reactjs', 'nodejs', 'deno'),
    links: []
  },
  {
    slug: 'instructor-leader',
    name: 'Instructor/Leader',
    company: 'Byte Camp',
    description: 'Teaching various concepts including OOP, data structures and algorithms and game design with inventive new techniques',
    shortDescription: 'Teaching various concepts including OOP, data structures and algorithms',
    logo: Assets.Unknown,
    color: 'yellow',
    location: 'Nanaimo, British Columbia, Canada',
    contract: ContractType.FullTime,
    period: { from: new Date(2022, 5), to: new Date(2022, 7) }, // Jun 2022 to Aug 2022
    type: 'Education and Leadership',
    skills: getSkills('python', 'working-with-children'),
    links: []
  },
  {
    slug: 'instructor',
    name: 'Instructor',
    company: 'Kumon North America, Inc.',
    description: 'Tutoring children in mathematics and calculus. Providing one on one and general explainations of advanced math and calculus concepts.',
    shortDescription: 'Tutoring children in mathematics and calculus.',
    logo: Assets.Unknown,
    color: 'green',
    location: 'Nanaimo, British Columbia, Canada',
    contract: ContractType.PartTime,
    period: { from: new Date(2019, 5), to: new Date(2022, 5) }, // Jun 2019 to Jun 2022
    type: 'Education',
    skills: getSkills('working-with-children', 'calculus'),
    links: []
  }
];

export const title = 'Experience';
