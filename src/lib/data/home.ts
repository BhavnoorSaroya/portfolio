import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Bhavnoor';

export const lastName = 'Saroya';

export const description =
    'Software Engineer / Systems Engineer based in Vancouver, BC. Full-stack development, distributed systems, infrastructure, databases, and networking.';

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

export const skills = getSkills(
    'go',
    'rust',
    'ts',
    'js',
    'python',
    'elixir',
    'java',
    'csharp',
    'postgresql',
    'mysql',
    'docker',
    'kubernetes',
    'aws',
    'linux',
    'wireguard',
    'nodejs',
    'reactjs',
    'nextjs',
    'phoenix',
    'rails'
);
