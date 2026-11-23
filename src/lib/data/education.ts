import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		slug: 'bsc-applied-computer-science',
		degree: 'BSc Applied Computer Science — Database Option',
		organization: 'British Columbia Institute of Technology',
		location: 'Vancouver, British Columbia, Canada',
		period: { from: new Date(2022, 8, 1), to: new Date(2026, 5, 1) },
		shortDescription:
			'Database option · ~80–81% average · Coursework in C#/.NET, .NET Orleans, SQL, AWS Bedrock, and distributed applications.',
		subjects: [
			'Database Design',
			'SQL',
			'Data Modeling',
			'Data Warehousing',
			'C#',
			'.NET',
			'.NET Orleans',
			'AWS Bedrock',
			'Algorithms and Data Structures',
			'Software Engineering'
		],
		name: '',
		description: '',
		logo: Assets.Bcit
	},
	{
		slug: 'cst-diploma',
		degree: 'Computer Systems Technology (CST) Diploma — Programming Paradigms Option',
		organization: 'British Columbia Institute of Technology',
		location: 'Vancouver, British Columbia, Canada',
		period: { from: new Date(2020, 8, 1), to: new Date(2022, 5, 1) },
		shortDescription:
			'Completed with distinction · Co-op · ~80% average · Functional programming and programming paradigms.',
		subjects: [
			'Functional Programming',
			'Programming Paradigms',
			'Object-Oriented Programming',
			'Data Structures',
			'Algorithms',
			'C',
			'C++',
			'Java',
			'Python',
			'OCaml',
			'Go',
			'Rust'
		],
		name: '',
		description: '',
		logo: Assets.Bcit
	}
];

export const title = 'Education';
