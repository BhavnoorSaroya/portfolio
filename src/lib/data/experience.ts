import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

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
    slug: 'regional-manager-systems-analyst',
    name: 'Regional Manager and Systems Analyst',
    company: 'Byte Camp',
    description: 'Managing regional operations and analyzing system processes.',
    shortDescription: 'Managing regional operations and analyzing system processes.',
    logo: Assets.Unknown, // Assuming you have a logo placeholder
    color: 'blue', // Assuming you have a Color enum or type
    location: 'Vancouver, British Columbia, Canada',
    contract: ContractType.FullTime,
    period: { from: new Date(2024, 4) }, // May 2024
    type: 'Management and Systems Analysis',
    skills: getSkills('python'), // Assuming getSkills is a utility to fetch relevant skills
    links: []
  },
  {
    slug: 'full-stack-developer',
    name: 'Full Stack Developer',
    company: 'Reva Solutions',
    description: 'Developing full-stack applications using OpenText products and various technologies.',
    shortDescription: 'Developing full-stack applications using OpenText products.',
    logo: Assets.Unknown,
    color: 'orange',
    location: 'Vancouver, British Columbia, Canada',
    contract: ContractType.Internship, // Assuming Co-op is handled under Internship
    period: { from: new Date(2023, 4, 1), to: new Date(2023, 11, 31) }, // May 2023 to Dec 2023
    type: 'Software Development',
    skills: getSkills('python', 'opentext'),
    links: []
  },
  {
    slug: 'instructor-leader',
    name: 'Instructor/Leader',
    company: 'Byte Camp',
    description: 'Teaching and leading children in various programming camps.',
    shortDescription: 'Teaching and leading children in programming camps.',
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
    description: 'Tutoring children in mathematics and calculus.',
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
