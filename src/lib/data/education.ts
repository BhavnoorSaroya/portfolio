import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'BsC Computer Science',
		description: '',
		location: 'BC, Canada',
		logo: Assets.Unknown,
		name: '',
		organization: 'British Columbia Institute of Technology',
		period: { from: new Date(2022, 8, 1) },
		shortDescription: 'Specialization in programming paradigms',
		slug: 'educational-experience',
		subjects: [
			'C',
			'Algorithms and Data structures',
			'Algebra',
			'Python',
			'C++',
			'Java',
			'Javascript',
			'Ocaml',
			'Go',
			'Rust',
			'Kotlin'
		]
	},
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];

export const title = 'Education';
