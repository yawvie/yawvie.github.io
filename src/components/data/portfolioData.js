/**
 * @SofiDev This is JSDOC, if you consider that it can be complicated just delete it, it is a comment, it will not affect anything
 * @typedef PortafolioData
 * @property {string} imgSrc Image URL
 * @property {string} title Card Title
 * @property {string[]} skills Array with your skills e.g: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion The description of the card
 * @property {string} demoURL Url of a demo page
 * @property {string} repoURL Url of the repository, e.g: https://github.com/usuario/repo
 * @property {string} anim The animation that will be executed when the card is loaded, e.g: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness How bright the card's background color will be, e.g: 0.1
 */

/**
 * @SofiDev This is JSDOC, if you consider that it can be complicated just delete it, it is a comment, it will not affect anything
 * @type {PortafolioData[]}
 */

//both (3?christmas poster, easter) mill bay, cedar, cvrd
export const portafolioData = [
	{
		imgSrc: '/img/project_previews_CEDAR.png',
		title: 'Visual Identity',
		skills: [],
		descripcion:
			'CEDAR -  stands for “Connect. Empower. Destigmatize. Advocate. Respect.” CEDAR is an outreach program that was rebranded to mitigate additional risks of harm due to the mandatory reporting style of the original organization. The original turquoise color was kept to maintain recognition built by the previous organization. Being recognizable and easy to spot is especially important due to much of the target audience not having access to devices for contact or time keeping. The visual identity design package included a logo, stationery, shirts and additional swag items.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/project_previews_Mill_Bay_Centre_Branded.png',
		title: 'Signage & Promotions',
		skills: [],
		descripcion:
			'Mill Bay Centre -  is an open air shopping centre located in Mill Bay, BC. Some of the projects I have done for them over the past six years are a map and directory of the centre, large-format signage, banners, posters and advertisements. Their logo is not designed by me',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/project_previews_Mill_Bay_Centre_Egg_Hunt.png',
		title: 'Event Posters',
		skills: [],
		descripcion:
			'Mill Bay Centre -  Most events are family friendly and to be designed with children in mind. Most event posters are encouraged to be bright, cheerful and eye-catching.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
	},
	{
		imgSrc: '/img/project_previews_OFC.png',
		title: 'Visual Identity, Events & Emojis',
		skills: [],
		descripcion:
			'One Free Community -  is an online community that is BIPOC-led and focuses on community building and providing disability & neuro-affirming spaces. OFC hosts regular events and collaborations with other organizations. I volunteered with OFC for three years. I designed the logo, refined the brand colors with a team and created graphics, emojis and event imagery as needed.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/project_previews_PATHWAYS_Logo.png',
		title: 'Visual Identity',
		skills: [],
		descripcion:
			'PATHWAYS -  is a gang prevention organization that aims to mitigate the risk factors that put individuals at higher risks of gang involvement. For this project, I designed logos, icons, business cards, letterheads, supporting graphics, a visual style guide, a brand color palette and a photography style guide.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/project_previews_CVRD.png',
		title: 'Document Template & Icons',
		skills: [],
		descripcion:
			'CVRD - I designed a template for the District’s Development Permit Process that would be easy to follow for residents and that could be easily edited by their employees. This project included a large set of custom icons to represent each step in the process, infographic templates, a district area map, style and formatting systems, as well as streamlining the document to address existing pain points and to make it easier to follow for new users while having important components easily accessible for more frequent users.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/project_previews_South_Cowichan_Life_Mockup.png',
		title: 'Publication/ Document Design',
		skills: [],
		descripcion:
			'The South Cowichan Life -  is a local magazine that is distributed to 9,100 households in the South Cowichan region. In February 2019, the magazine switched to colour printing. This meant it was time give it a much-needed refresh, while keeping some nostalgic elements. The grid was updated for more layout flexibility, drop shadows were removed from advertisements, and new fonts were chosen to improve readability. The feedback from the readers was very positive. In 2020, the magazine became temporarily online-only when the pandemic started and the postal services were severely hindered. I ensured there would be a classic style and a mobile-specific option for the loyal readers.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/project_previews_Medford_Singers copy.png',
		title: 'Event Promotional Materials',
		skills: [],
		descripcion:
			'Medford Signers - have concert events several times a year. These concerts always have a different theme which is reflected in the posters, tickets, handbills and ads. The posters generally need a lot of details on the poster that will need to be clear enough when scaled down to an advertisement, ticket and/or program handout. This calls for a strong typographic system that can be adapted to different sizes and proportions while maintaining the overall aesthetic.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description The Data portfolio is mapped so that it has the icons for the skills
 * 	You can see Array.map in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// All previous item content is placed
		...item,
		// Skills are changed to the corresponding icons
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
