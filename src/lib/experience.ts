import { differenceInMonths } from "date-fns";
import { monthsToYears } from "date-fns/monthsToYears";

export interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	type: 'Full-time' | 'Part-time' | 'Remote' | 'Internship';
	startDate: Date;
	endDate?: Date; // undefined means current
	description: string[];
	technologies?: string[];
	website?: string;
}
export const experiences: ExperienceItem[] = [
	{
        title: 'Full Stack Developer',
        company: 'Hextasphere Technologies',
        location: 'Visakhapatnam, India',
        type: 'Internship',
        startDate: new Date('2025-04-24'),
        website: 'https://hextasphere.com',
        description: [
            'Revamped landing page with modern UI/UX using Framer Motion and GSAP.',
            'Implemented HLS adaptive bitrate streaming for optimized video playback across devices.',
            'Set up AWS CloudFront CDN to serve static assets efficiently and reduce latency.',
            'Worked on scalable full-stack architecture using Next.js and integrated backend services.'
        ],
        technologies: [
            'TypeScript',
            'Next.js',
            'HLS.js',
            'Framer Motion',
            'GSAP',
            'Redis',
            'PostgreSQL',
            'Docker',
        ]
    },    
    {
        title: 'Founder',
        company: 'RDP Datacenter',
        location: 'Remote',
        type: 'Full-time',
        startDate: new Date('2024-09-08'),
        website: 'https://rdpdatacenter.in',
        description: [
            'Built a modern deployment platform with Git integration for hosting scalable apps.',
            'Implemented features like deployment logs, and automated builds from GitHub.',
            'Designed a scalable architecture using PostgreSQL, Redis, and containerized services.',
            'Integrated CI/CD workflows and user authentication with GitHub OAuth.'
        ],
        technologies: [
            'Typescript',
            'Next.js',
            'PostgreSQL',
            'Redis',
            'Docker',
            'Jenkins',
            'CI/CD',
        ]
    },
    {
        title: 'Web Developer',
        company: 'Vizag Steel Plant (RINL)',
        location: 'Visakhapatnam, India',
        type: 'Internship',
        website: 'https://www.vizagsteel.com',
        startDate: new Date('2024-05-01'),
        endDate: new Date('2024-06-01'),
        description: [
            'Developed a Yard Management System using PHP (UserSpice) for tracking vehicle entry, material flow, and dispatches.',
            'Designed and managed backend logic and database schemas using MySQL.',
            'Implemented secure user roles, and real-time yard operations dashboard.',
            'Deployed the system on AWS EC2 with Nginx for production use.'
        ],
        technologies: [
            'PHP',
            'UserSpice',
            'MySQL',
            'Nginx',
            'Docker',
            'AWS EC2',
        ]
    },
	{
        title: 'FPV & DJI Drone Pilot',
        company: 'Kreativeeye KIIT',
        location: 'Bhubaneswar, India',
        type: 'Full-time',
        website: 'https://ksac.kiit.ac.in/societies/kreative-eye/',
        startDate: new Date('2023-03-11'),
        description: [
            'Flew FPV drones for KIIT Fest 7 – covering Nucleya, Jubin Nautiyal, flash mobs, and crowd drops.',
            'Captured aerial shots for KIIT Fest 8 – performances by Dhvani Bhanushali and Badshah.',
            'Shot cinematic content for TEDxKIITUniversity, MUN and official trailers.',
            'Coordinated with camera and event teams for safe, dynamic flight execution.',
            'Maintained and tuned FPV and DJI drones under fast-paced event conditions.'
        ],
        technologies: ['FPV Drones', 'DJI', 'GoPro', 'Betaflight', 'DaVinci Resolve', 'Premiere Pro']
    }
];

export function recentPosition(): ExperienceItem {
    return experiences[0];
}

export function totalExperienceMonths(): number {
    const startDate = experiences[0].endDate || new Date();
    const endDate = experiences[experiences.length -1].startDate || new Date();
    const diffMonths = differenceInMonths(startDate, endDate);
    return monthsToYears(diffMonths);
}