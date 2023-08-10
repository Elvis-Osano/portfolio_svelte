/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				gold: '#D6AD60',
				tan: '#B68D40',
				orange: '#E76D57',
				// "whitney":"#f9d6c2",
				whitney: '#f0f8ff',
				dark: '#161616',
				grey: '#8A8A8A',
				alice: '#F4EBD0',
				pinku: '#ff1493',
				bluu: '#1C1CF0',
				brown:"#C3773D"
			},
			fontFamily: {
				sirenia: ['sirenia', 'sans-serif', 'arial'],
				verdana: ['verdana', 'sans-serif', 'arial'],
				outfit: ['Outfit', 'sans-serif', 'arial']
			}
		}
	},
	plugins: []
};
