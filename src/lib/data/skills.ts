import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Networking', slug: 'networking' }),
	defineSkillCategory({ name: 'Data & Analytics', slug: 'data' }),
	defineSkillCategory({ name: 'Integrations', slug: 'integration' }),
	defineSkillCategory({ name: 'Device Management', slug: 'mdm' })
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
		description: 'JavaScript is the language of the web, used to build interactive and dynamic web applications. It is a high-level, interpreted programming language that conforms to the ECMAScript specification.',
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
		description: 'Dart is a client-optimized language for fast apps that can deploy to any platform...',
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
		description: 'Rust is an extemely effient and fast systems programming language focused on safety, speed, and concurrency.',
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
		description: 'Svelte is a radical new approach to building user interfaces. It is extremely quick and powerful. Svelte was recently voted the most admired JS web framework',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'black',
		description:
			'Next.js is the React framework for building production web applications, with server-side rendering, static generation, routing, and API routes.',
		logo: Assets.Nextjs,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'React is a JavaScript library for building user interfaces...',
		logo: Assets.ReactJs,
		name: 'React Js',
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
	// defineSkill({
	// 	slug: 'xamarin',
	// 	color: 'blue',
	// 	description: 'Xamarin is a cross-platform framework for creating native mobile apps with .NET...',
	// 	logo: Assets.Xamarin,
	// 	name: 'Xamarin',
	// 	category: 'framework'
	// }),
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
	defineSkill({
		slug: 'fastapi',
		color: 'green', 
		description: 'FastAPI is a modern, high-performance Python web framework for building APIs with type hints, validation, and automatic OpenAPI documentation.', 
		logo: Assets.FastApi, 
		name: "FastApi",
		category: 'framework'
	}),
	defineSkill({
		slug: 'phoenix',
		color: 'orange', 
		description: "Phoenix is used to Build rich, interactive web applications quickly, with less code and fewer moving parts",
		logo: Assets.Phoenix,
		name: "Phoenix",
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
	// defineSkill({
	// 	slug: 'neo4j',
	// 	color: 'blue',
	// 	description: 'Neo4j is a graph database management system, designed for handling connected data...',
	// 	logo: Assets.Neo4j,
	// 	name: 'Neo4j',
	// 	category: 'db'
	// }),
	defineSkill({
		slug: 'tensorflow',
		color: 'yellow',
		description: 'Ai models designed to run on a variety of devices',
		logo: Assets.TensorFlow,
		name: "TensorFlow",
		category: 'devtools'
	}),
	defineSkill({
		slug: 'coral',
		color: 'white',
		description: 'A library for utilising google\'s edge tpu, speeding up heavy calculations',
		logo: Assets.Coral,
		name: "Google Coral",
		category: 'library'
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
	// defineSkill({
	// 	slug: 'kubernetes',
	// 	color: 'blue',
	// 	description: 'Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications...',
	// 	logo: Assets.Kubernetes,
	// 	name: 'Kubernetes',
	// 	category: 'devops'
	// }),
	defineSkill({
		slug: 'vite',
		color: 'purple',
		description: 'Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects...',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vitest',
		color: 'purple',
		description: 'Vitest is a blazing fast unit testing framework powered by Vite...',
		logo: Assets.Vitest,
		name: 'Vitest',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jest',
		color: 'orange',
		description: 'Jest is a delightful JavaScript Testing Framework with a focus on simplicity...',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'devtools'
	}),
	// defineSkill({
	// 	slug: 'playwright',
	// 	color: 'blue',
	// 	description: 'Playwright is a framework for Web Testing and Automation, used to test modern web apps across all browsers...',
	// 	logo: Assets.Playwright,
	// 	name: 'Playwright',
	// 	category: 'devtools'
	// }),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages...',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'CSS (Cascading Style Sheets) is used to style and layout web pages...',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'design'
	}),
	// defineSkill({
	// 	slug: 'postcss',
	// 	color: 'green',
	// 	description: 'PostCSS is a tool for transforming CSS with JavaScript plugins...',
	// 	logo: Assets.PostCSS,
	// 	name: 'PostCSS',
	// 	category: 'markup-style'
	// }),
	// defineSkill({
	// 	slug: 'unocss',
	// 	color: 'blue',
	// 	description: 'UnoCSS is a fast and highly customizable utility-first CSS framework...',
	// 	logo: Assets.UnoCSS,
	// 	name: 'UnoCSS',
	// 	category: 'markup-style'
	// }),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: 'Sass is a preprocessor scripting language that is interpreted or compiled into CSS...',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'design'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: 'Tailwind CSS is a utility-first CSS framework for building custom designs without leaving your HTML...',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'design'
	}),
	// defineSkill({
	// 	slug: 'photoshop',
	// 	color: 'blue',
	// 	description: 'Adobe Photoshop is a raster graphics editor developed by Adobe...',
	// 	logo: Assets.Photoshop,
	// 	name: 'Adobe Photoshop',
	// 	category: 'design'
	// }),
	// defineSkill({
	// 	slug: 'after-effects',
	// 	color: 'blue',
	// 	description: 'Adobe After Effects is a digital visual effects, motion graphics, and compositing application...',
	// 	logo: Assets.AfterEffects,
	// 	name: 'Adobe After Effects',
	// 	category: 'design'
	// }),
	// defineSkill({
	// 	slug: 'premiere',
	// 	color: 'blue',
	// 	description: 'Adobe Premiere Pro is a timeline-based video editing software application...',
	// 	logo: Assets.Premiere,
	// 	name: 'Adobe Premiere',
	// 	category: 'design'
	// }),
	defineSkill({
		slug: 'illustrator',
		color: 'orange',
		description: 'Adobe Illustrator is a vector graphics editor developed by Adobe...',
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'elixir',
		color: 'purple',
		description: 'Elixir is a functional, concurrent, high-level general-purpose programming language that runs on the BEAM virtual machine. Known for creating low-latency, distributed, and fault-tolerant systems.',
		logo: Assets.Elixir,
		name: 'Elixir',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description: 'C# is a modern, object-oriented language from Microsoft used to build .NET applications, services, and distributed systems.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: 'C++ is a high-performance systems and application language with object-oriented and generic programming features.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description: 'C is a low-level, general-purpose language used for systems programming, operating systems, and performance-critical software.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ruby',
		color: 'red',
		description: 'Ruby is a dynamic, object-oriented language known for readable syntax and the Ruby on Rails web framework.',
		logo: Assets.Ruby,
		name: 'Ruby',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'indigo',
		description: 'PHP is a widely used server-side scripting language for building dynamic websites and web applications.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'teal',
		description: 'SQL is the standard language for querying and managing relational databases, including schema design, joins, and analytics.',
		logo: Assets.Sql,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'bash',
		color: 'green',
		description: 'Bash is a Unix shell and scripting language used to automate system administration, deployment, and infrastructure tasks.',
		logo: Assets.Bash,
		name: 'Bash / Shell',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'cyan',
		description: 'React Native builds native mobile applications for iOS and Android using React and JavaScript or TypeScript.',
		logo: Assets.ReactNative,
		name: 'React Native',
		category: 'framework'
	}),
	defineSkill({
		slug: 'expo',
		color: 'black',
		description: 'Expo is a framework and toolchain that simplifies building, testing, and deploying React Native applications.',
		logo: Assets.Expo,
		name: 'Expo',
		category: 'framework'
	}),
	defineSkill({
		slug: 'rails',
		color: 'red',
		description: 'Ruby on Rails is a full-stack web framework that emphasizes convention over configuration and rapid application development.',
		logo: Assets.Rails,
		name: 'Ruby on Rails',
		category: 'framework'
	}),
	defineSkill({
		slug: 'spring',
		color: 'green',
		description: 'Spring is a Java framework for building enterprise applications and services, including dependency injection and web APIs.',
		logo: Assets.Spring,
		name: 'Spring',
		category: 'framework'
	}),
	defineSkill({
		slug: 'dotnet',
		color: 'purple',
		description: '.NET is a cross-platform framework and runtime from Microsoft for building applications and services in C# and other languages.',
		logo: Assets.Dotnet,
		name: '.NET',
		category: 'framework'
	}),
	defineSkill({
		slug: 'orleans',
		color: 'blueviolet',
		description: '.NET Orleans is a framework for building distributed, scalable, fault-tolerant applications using virtual actors.',
		logo: Assets.Orleans,
		name: '.NET Orleans',
		category: 'framework'
	}),
	defineSkill({
		slug: 'liveview',
		color: 'orange',
		description: 'Phoenix LiveView enables rich, real-time user interfaces in Elixir without writing much client-side JavaScript.',
		logo: Assets.Phoenix,
		name: 'Phoenix LiveView',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description: 'Flask is a lightweight Python web framework for building APIs and web applications with minimal boilerplate.',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'orange',
		description: 'MySQL is a popular open-source relational database used for transactional web applications and reporting.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mariadb',
		color: 'brown',
		description: 'MariaDB is an open-source relational database that is compatible with MySQL and used for application data storage.',
		logo: Assets.MariaDB,
		name: 'MariaDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: 'Oracle Database is an enterprise relational database system used for large-scale transactional and analytical workloads.',
		logo: Assets.Oracle,
		name: 'Oracle Database',
		category: 'db'
	}),
	defineSkill({
		slug: 'mssql',
		color: 'red',
		description: 'Microsoft SQL Server is a relational database management system used for enterprise data and application workloads.',
		logo: Assets.Mssql,
		name: 'SQL Server',
		category: 'db'
	}),
	defineSkill({
		slug: 'linux',
		color: 'orange',
		description: 'Linux is an open-source operating system kernel and ecosystem used for servers, development, and embedded systems.',
		logo: Assets.Linux,
		name: 'Linux',
		category: 'devops'
	}),
	defineSkill({
		slug: 'ubuntu',
		color: 'orange',
		description: 'Ubuntu is a Debian-based Linux distribution widely used for servers, desktops, and cloud infrastructure.',
		logo: Assets.Ubuntu,
		name: 'Ubuntu',
		category: 'devops'
	}),
	defineSkill({
		slug: 'alpine',
		color: 'blue',
		description: 'Alpine Linux is a lightweight Linux distribution commonly used for containers and minimal system deployments.',
		logo: Assets.Alpine,
		name: 'Alpine Linux',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: 'Kubernetes is an open-source platform for automating deployment, scaling, and management of containerized applications.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'podman',
		color: 'purple',
		description: 'Podman is a daemonless container engine for building and running OCI containers and pods.',
		logo: Assets.Podman,
		name: 'Podman',
		category: 'devops'
	}),
	defineSkill({
		slug: 'docker-compose',
		color: 'blue',
		description: 'Docker Compose defines and runs multi-container Docker applications using a declarative YAML configuration.',
		logo: Assets.Docker,
		name: 'Docker Compose',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: 'Amazon Web Services provides cloud infrastructure and services, including compute, storage, networking, and managed databases.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'nginx',
		color: 'green',
		description: 'Nginx is a high-performance web server, reverse proxy, and load balancer used for serving and routing traffic.',
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'devops'
	}),
	defineSkill({
		slug: 'git',
		color: 'orangered',
		description: 'Git is a distributed version control system for tracking changes and collaborating on source code.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devops'
	}),
	defineSkill({
		slug: 'cicd',
		color: 'green',
		description: 'CI/CD automates building, testing, and deploying software through continuous integration and delivery pipelines.',
		logo: Assets.Cicd,
		name: 'CI/CD',
		category: 'devops'
	}),
	defineSkill({
		slug: 'wireguard',
		color: 'red',
		description: 'WireGuard is a modern, high-performance VPN protocol used to build secure, encrypted network tunnels and meshes.',
		logo: Assets.WireGuard,
		name: 'WireGuard',
		category: 'networking'
	}),
	defineSkill({
		slug: 'tailscale',
		color: 'blue',
		description: 'Tailscale and Headscale provide mesh VPN networking built on WireGuard for secure device-to-device connectivity.',
		logo: Assets.Tailscale,
		name: 'Tailscale / Headscale',
		category: 'networking'
	}),
	defineSkill({
		slug: 'tcp-ip',
		color: 'teal',
		description: 'TCP/IP is the foundational networking protocol suite used for addressing, routing, and reliable data transport.',
		logo: Assets.TcpIp,
		name: 'TCP/IP',
		category: 'networking'
	}),
	defineSkill({
		slug: 'http',
		color: 'blue',
		description: 'HTTP and HTTPS are application-layer protocols for transferring data between clients and web servers.',
		logo: Assets.Http,
		name: 'HTTP/HTTPS',
		category: 'networking'
	}),
	defineSkill({
		slug: 'tls',
		color: 'green',
		description: 'TLS is a cryptographic protocol that secures network communication through encryption and certificate-based authentication.',
		logo: Assets.Tls,
		name: 'TLS',
		category: 'networking'
	}),
	defineSkill({
		slug: 'dns',
		color: 'purple',
		description: 'DNS translates domain names into IP addresses and provides the naming layer for internet and network services.',
		logo: Assets.Dns,
		name: 'DNS',
		category: 'networking'
	}),
	defineSkill({
		slug: 'load-balancing',
		color: 'cyan',
		description: 'Load balancing distributes network or application traffic across multiple servers to improve reliability and capacity.',
		logo: Assets.LoadBalancing,
		name: 'Load Balancing',
		category: 'networking'
	}),
	defineSkill({
		slug: 'proxies',
		color: 'slateblue',
		description: 'Proxies forward network requests between clients and servers, supporting routing, filtering, caching, and access control.',
		logo: Assets.Proxies,
		name: 'Proxies',
		category: 'networking'
	}),
	defineSkill({
		slug: 'sockets',
		color: 'teal',
		description: 'Sockets provide the programming interface for network communication between processes over TCP, UDP, and other protocols.',
		logo: Assets.Sockets,
		name: 'Sockets',
		category: 'networking'
	}),
	defineSkill({
		slug: 'playwright',
		color: 'green',
		description: 'Playwright is a browser automation framework for reliable end-to-end testing across Chromium, Firefox, and WebKit.',
		logo: Assets.Playwright,
		name: 'Playwright',
		category: 'test'
	}),
	defineSkill({
		slug: 'selenium',
		color: 'green',
		description: 'Selenium is a widely used framework for automating browsers and running web application tests.',
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'test'
	}),
	defineSkill({
		slug: 'rspec',
		color: 'red',
		description: 'RSpec is a behavior-driven testing framework for Ruby and Rails applications.',
		logo: Assets.RSpec,
		name: 'RSpec',
		category: 'test'
	}),
	defineSkill({
		slug: 'streamlit',
		color: 'red',
		description: 'Streamlit is a Python framework for building interactive data applications and dashboards quickly.',
		logo: Assets.Streamlit,
		name: 'Streamlit',
		category: 'data'
	}),
	defineSkill({
		slug: 'data-warehousing',
		color: 'blue',
		description: 'Data warehousing involves designing analytical stores with dimensional models and facts to support reporting and business intelligence.',
		logo: Assets.DataWarehousing,
		name: 'Data Warehousing',
		category: 'data'
	}),
	defineSkill({
		slug: 'etl',
		color: 'purple',
		description: 'ETL covers extracting, transforming, and loading data between systems to populate analytics and operational stores.',
		logo: Assets.Etl,
		name: 'ETL',
		category: 'data'
	}),
	defineSkill({
		slug: 'aws-bedrock',
		color: 'orange',
		description: 'AWS Bedrock provides managed access to foundation models for building generative AI applications.',
		logo: Assets.AWS,
		name: 'AWS Bedrock',
		category: 'data'
	}),
	defineSkill({
		slug: 'servicenow',
		color: 'green',
		description: 'ServiceNow is an enterprise platform for IT service management, workflows, and business process automation.',
		logo: Assets.ServiceNow,
		name: 'ServiceNow',
		category: 'integration'
	}),
	defineSkill({
		slug: 'box',
		color: 'blue',
		description: 'Box is a cloud content management platform used for secure file storage, sharing, and enterprise workflows.',
		logo: Assets.Box,
		name: 'Box',
		category: 'integration'
	}),
	defineSkill({
		slug: 'documentum',
		color: 'blue',
		description: 'Documentum D2 is an enterprise content management product for document control and business workflows.',
		logo: Assets.Documentum,
		name: 'Documentum D2',
		category: 'integration'
	}),
	defineSkill({
		slug: 'stripe',
		color: 'indigo',
		description: 'Stripe provides APIs for accepting payments, managing subscriptions, and handling financial transactions.',
		logo: Assets.Stripe,
		name: 'Stripe',
		category: 'integration'
	}),
	defineSkill({
		slug: 'shopify',
		color: 'green',
		description: 'Shopify is an e-commerce platform and API ecosystem for building and managing online stores.',
		logo: Assets.Shopify,
		name: 'Shopify',
		category: 'integration'
	}),
	defineSkill({
		slug: 'asterisk',
		color: 'orange',
		description: 'Asterisk is an open-source telephony framework for building voice, VoIP, and communication systems.',
		logo: Assets.Asterisk,
		name: 'Asterisk',
		category: 'integration'
	}),
	defineSkill({
		slug: 'intune',
		color: 'blue',
		description: 'Microsoft Intune is a cloud-based MDM and endpoint management platform for enrolling and securing devices.',
		logo: Assets.Intune,
		name: 'Microsoft Intune',
		category: 'mdm'
	}),
	defineSkill({
		slug: 'samsung-knox',
		color: 'blue',
		description: 'Samsung Knox provides device security and management capabilities for Samsung Android devices in enterprise fleets.',
		logo: Assets.SamsungKnox,
		name: 'Samsung Knox',
		category: 'mdm'
	}),
	defineSkill({
		slug: 'google-mdm',
		color: 'blue',
		description: 'Google MDM refers to Android enterprise device management services for enrolling and managing Android devices.',
		logo: Assets.GoogleMdm,
		name: 'Google MDM',
		category: 'mdm'
	}),
	defineSkill({
		slug: 'amapi',
		color: 'green',
		description: 'The Android Management API lets organizations provision, configure, and manage Android devices at scale.',
		logo: Assets.Amapi,
		name: 'Android Management API',
		category: 'mdm'
	}),
	defineSkill({
		slug: 'aosp',
		color: 'green',
		description: 'AOSP is the open-source Android platform codebase, used to build custom Android system images and device software.',
		logo: Assets.Android,
		name: 'AOSP',
		category: 'mdm'
	}),
	defineSkill({
		slug: 'android',
		color: 'green',
		description: 'Android is a mobile operating system and development platform for phones, tablets, and embedded devices.',
		logo: Assets.Android,
		name: 'Android',
		category: 'mdm'
	}),
	defineSkill({
		slug: 'english',
		color: 'blue',
		description: 'English is a native language, used for professional communication, documentation, and client support.',
		logo: Assets.English,
		name: 'English (Native)',
		category: 'lang'
	}),
	defineSkill({
		slug: 'punjabi',
		color: 'orange',
		description: 'Punjabi is a native language, used for communication and client support.',
		logo: Assets.Punjabi,
		name: 'Punjabi (Native)',
		category: 'lang'
	}),
	defineSkill({
		slug: 'hindi',
		color: 'orange',
		description: 'Hindi is spoken fluently for professional communication and client support.',
		logo: Assets.Hindi,
		name: 'Hindi (Fluent)',
		category: 'lang'
	}),
	defineSkill({
		slug: 'technical-leadership',
		color: 'purple',
		description: 'Technical leadership covers owning system design, guiding delivery, and aligning engineering work with business goals.',
		logo: Assets.TechnicalLeadership,
		name: 'Technical Leadership',
		category: 'soft'
	}),
	defineSkill({
		slug: 'mentoring',
		color: 'teal',
		description: 'Mentoring and onboarding involves coaching engineers, sharing context, and helping new team members become productive.',
		logo: Assets.Mentoring,
		name: 'Mentoring & Onboarding',
		category: 'soft'
	}),
	defineSkill({
		slug: 'event-management',
		color: 'orange',
		description: 'Event management includes planning, coordinating, and running technical events such as hackathons and workshops.',
		logo: Assets.EventManagement,
		name: 'Event Management',
		category: 'soft'
	})

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

export const getAllSkills = (): Array<Skill> => items;


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
