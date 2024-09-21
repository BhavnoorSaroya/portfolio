import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'JavaScript is a versatile programming language...',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'TypeScript is a superset of JavaScript with type safety...',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: 'cyan',
		description: 'Dart is a client-optimized language for fast apps on any platform...',
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'purple',
		description: 'Kotlin is a cross-platform, statically typed language developed by JetBrains...',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'go',
		color: 'blue',
		description: 'Go is an open-source programming language that makes it easy to build reliable and efficient software...',
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'rust',
		color: 'brown',
		description: 'Rust is a systems programming language focused on safety, speed, and concurrency...',
		logo: Assets.Rust,
		name: 'Rust',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description: 'Java is a high-level, class-based, object-oriented programming language...',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	// defineSkill({
	// 	slug: 'csharp',
	// 	color: 'green',
	// 	description: 'C# is a modern, object-oriented programming language developed by Microsoft...',
	// 	logo: Assets.CSharp,
	// 	name: 'C#',
	// 	category: 'pro-lang'
	// }),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python is an interpreted, high-level, general-purpose programming language...',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ocaml',
		color: 'orange',
		description: 'OCaml is a general-purpose programming language with an emphasis on expressiveness and safety...',
		logo: Assets.Ocaml,
		name: 'OCaml',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'React is a JavaScript library for building user interfaces...',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	// defineSkill({
	// 	slug: 'remix',
	// 	color: 'purple',
	// 	description: 'Remix is a full-stack framework that focuses on performance and developer experience...',
	// 	logo: Assets.Remix,
	// 	name: 'Remix',
	// 	category: 'framework'
	// }),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: 'Svelte is a radical new approach to building user interfaces...',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'vuejs',
		color: 'green',
		description: 'Vue.js is a progressive framework for building user interfaces...',
		logo: Assets.VueJs,
		name: 'VueJs',
		category: 'library'
	}),
	defineSkill({
		slug: 'nuxt',
		color: 'green',
		description: 'Nuxt.js is a framework based on Vue.js that simplifies the development of Vue applications...',
		logo: Assets.Nuxt,
		name: 'Nuxt',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description: 'Flutter is a UI toolkit for building natively compiled applications...',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'solid',
		color: 'blue',
		description: 'Solid is a declarative, efficient, and flexible JavaScript library for building user interfaces...',
		logo: Assets.SolidJs,
		name: 'Solid JS',
		category: 'library'
	}),
	defineSkill({
		slug: 'quasar',
		color: 'blue',
		description: 'Quasar is a Vue-based framework for building high-performance cross-platform apps...',
		logo: Assets.Quasar,
		name: 'Quasar',
		category: 'framework'
	}),
	// defineSkill({
	// 	slug: 'electron',
	// 	color: 'black',
	// 	description: 'Electron is a framework for creating native applications with web technologies...',
	// 	logo: Assets.ElectronJs,
	// 	name: 'Electron JS',
	// 	category: 'framework'
	// }),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: 'Angular is a platform for building mobile and desktop web applications...',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'xamarin',
		color: 'blue',
		description: 'Xamarin is a cross-platform framework for creating native mobile apps with .NET...',
		logo: Assets.Xamarin,
		name: 'Xamarin',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine...',
		logo: Assets.NodeJs,
		name: 'Node JS',
		category: 'library'
	}),
	defineSkill({
		slug: 'deno',
		color: 'black',
		description: 'Deno is a secure runtime for JavaScript and TypeScript...',
		logo: Assets.Deno,
		name: 'Deno',
		category: 'library'
	}),
	defineSkill({
		slug: 'fastify',
		color: 'cyan',
		description: 'Fastify is a web framework for Node.js with a focus on speed and low overhead...',
		logo: Assets.Fastify,
		name: 'Fastify',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'green',
		description: 'Express is a minimal and flexible Node.js web application framework...',
		logo: Assets.ExpressJs,
		name: 'Express JS',
		category: 'framework'
	}),
	// defineSkill({
	// 	slug: 'hono',
	// 	color: 'orange',
	// 	description: 'Hono is an ultra-fast web framework for JavaScript and TypeScript...',
	// 	logo: Assets.HonoJs,
	// 	name: 'Hono JS',
	// 	category: 'framework'
	// }),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL is a powerful, open-source relational database system...',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'yellow',
		description: 'Firebase is a platform developed by Google for creating mobile and web applications...',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'MongoDB is a document-based, distributed database designed for modern application development...',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: 'Redis is an open-source, in-memory data structure store used as a database, cache, and message broker...',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'neo4j',
		color: 'blue',
		description: 'Neo4j is a graph database management system, designed for handling connected data...',
		logo: Assets.Neo4j,
		name: 'Neo4j',
		category: 'db'
	}),
	// defineSkill({
	// 	slug: 'prisma',
	// 	color: 'blue',
	// 	description: 'Prisma is a next-generation ORM for Node.js and TypeScript...',
	// 	logo: Assets.Prisma,
	// 	name: 'Prisma',
	// 	category: 'orm'
	// }),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers...',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: 'Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications...',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'vite',
		color: 'purple',
		description: 'Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects...',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'tooling'
	}),
	defineSkill({
		slug: 'vitest',
		color: 'purple',
		description: 'Vitest is a blazing fast unit testing framework powered by Vite...',
		logo: Assets.Vitest,
		name: 'Vitest',
		category: 'tooling'
	}),
	defineSkill({
		slug: 'jest',
		color: 'orange',
		description: 'Jest is a delightful JavaScript Testing Framework with a focus on simplicity...',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'tooling'
	}),
	// defineSkill({
	// 	slug: 'playwright',
	// 	color: 'blue',
	// 	description: 'Playwright is a framework for Web Testing and Automation, used to test modern web apps across all browsers...',
	// 	logo: Assets.Playwright,
	// 	name: 'Playwright',
	// 	category: 'tooling'
	// }),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages...',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'CSS (Cascading Style Sheets) is used to style and layout web pages...',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup'
	}),
	// defineSkill({
	// 	slug: 'postcss',
	// 	color: 'green',
	// 	description: 'PostCSS is a tool for transforming CSS with JavaScript plugins...',
	// 	logo: Assets.PostCSS,
	// 	name: 'PostCSS',
	// 	category: 'markup'
	// }),
	// defineSkill({
	// 	slug: 'unocss',
	// 	color: 'blue',
	// 	description: 'UnoCSS is a fast and highly customizable utility-first CSS framework...',
	// 	logo: Assets.UnoCSS,
	// 	name: 'UnoCSS',
	// 	category: 'markup'
	// }),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: 'Sass is a preprocessor scripting language that is interpreted or compiled into CSS...',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: 'Tailwind CSS is a utility-first CSS framework for building custom designs without leaving your HTML...',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description: 'Adobe Photoshop is a raster graphics editor developed by Adobe...',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'after-effects',
		color: 'blue',
		description: 'Adobe After Effects is a digital visual effects, motion graphics, and compositing application...',
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects',
		category: 'design'
	}),
	defineSkill({
		slug: 'premiere',
		color: 'blue',
		description: 'Adobe Premiere Pro is a timeline-based video editing software application...',
		logo: Assets.Premiere,
		name: 'Adobe Premiere',
		category: 'design'
	}),
	defineSkill({
		slug: 'illustrator',
		color: 'orange',
		description: 'Adobe Illustrator is a vector graphics editor developed by Adobe...',
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator',
		category: 'design'
	}),
	
];



// export const items = [
// 	defineSkill({
// 		slug: 'js',
// 		color: 'yellow',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
// 		logo: Assets.JavaScript,
// 		name: 'Javascript',
// 		category: 'pro-lang'
// 	}),
// 	defineSkill({
// 		slug: 'ts',
// 		color: 'blue',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
// 		logo: Assets.TypeScript,
// 		name: 'Typescript',
// 		category: 'pro-lang'
// 	}),
// 	defineSkill({
// 		slug: 'css',
// 		color: 'blue',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
// 		logo: Assets.CSS,
// 		name: 'CSS',
// 		category: 'markup-style'
// 	}),
// 	defineSkill({
// 		slug: 'html',
// 		color: 'orange',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
// 		logo: Assets.HTML,
// 		name: 'HTML',
// 		category: 'markup-style'
// 	}),
// 	defineSkill({
// 		slug: 'sass',
// 		color: 'pink',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
// 		logo: Assets.Sass,
// 		name: 'Sass',
// 		category: 'markup-style'
// 	}),
// 	defineSkill({
// 		slug: 'reactjs',
// 		color: 'cyan',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
// 		logo: Assets.ReactJs,
// 		name: 'React Js',
// 		category: 'library'
// 	}),
// 	defineSkill({
// 		slug: 'svelte',
// 		color: 'orange',
// 		description: svelte,
// 		logo: Assets.Svelte,
// 		name: 'Svelte',
// 		category: 'library'
// 	})
// ] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
