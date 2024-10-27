import { Platform } from '$lib/types';
import { getAllSkills, getSkills } from './skills';

export const title = 'Home';

export const name = 'Bhavnoor';

export const lastName = 'Saroya';

export const description =
    'Full Stack Developer, based in Vancouver, BC';

export const links: Array<{ platform: Platform; link: string }> = [
    { platform: Platform.GitHub, link: 'https://github.com/BhavnoorSaroya' },
    {
        platform: Platform.Linkedin,
        link: 'https://www.linkedin.com/in/bhavnoor-saroya/'
    },
    // {
    // 	platform: Platform.Twitter,
    // 	link: 'https://twitter.com/'
    // },
    // {
    // 	platform: Platform.StackOverflow,
    // 	link: 'https://stackoverflow.com/'
    // },
    {
        platform: Platform.Youtube,
        link: 'https://www.youtube.com/@bhavnoorsaroya4912'
    },
    {
        platform: Platform.Email,
        link: 'bhavnoorsaroya@gmail.com'
    },

    // {
    // 	platform: Platform.Facebook,
    // 	link: 'https://www.facebook.com'
    // }
];

export const skills = getAllSkills()

export const skillss = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
export const oldskills = getSkills(
    'js',             // JavaScript
    'ts',             // TypeScript
    'dart',           // Dart
    'kotlin',         // Kotlin
    'go',             // Go
    'rust',           // Rust
    'java',           // Java
    // 'csharp',         // C#
    'python',         // Python
    'reactjs',        // React JS
    // 'remix',          // Remix
    'svelte',         // Svelte
    'vuejs',          // VueJS
    'nuxt',           // Nuxt
    'flutter',        // Flutter
    // 'solid',          // Solid JS
    // 'quasar',         // Quasar
    // 'electron',       // Electron JS
    'angular',        // Angular
    // 'xamarin',        // Xamarin
    'nodejs',         // Node JS
    // 'deno',           // Deno
    // 'fastify',        // Fastify
    'express',        // Express JS
    // 'hono',           // Hono JS
    'postgresql',     // PostgreSQL
    'firebase',       // Firebase
    'mongodb',        // MongoDB
    // 'redis',          // Redis
    // 'neo4j',          // Neo4j
    // 'prisma',         // Prisma
    'docker',         // Docker
    // 'kubernetes',     // Kubernetes
    'vite',           // Vite
    'vitest',         // Vitest
    'jest',           // Jest
    // 'playwright',     // Playwright
    'html',           // HTML
    'css',            // CSS
    // 'postcss',        // PostCSS
    // 'unocss',         // UnoCSS
    'sass',           // Sass
    'tailwind',       // Tailwind
    'photoshop',      // Adobe Photoshop
    'after-effects',  // Adobe After Effects
    'premiere',       // Adobe Premiere
    'illustrator',    // Adobe Illustrator
    'ocaml',          // OCaml
    'tensorflow'      // Tensorflow   
);
