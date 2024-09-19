import { CssSyntaxError } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary:'#012B27',
			primarylight:'#0D3C2F',
			secondary:'#629D97',
			secondarylight:'#DDEFFF',
			accent:'#FFDA03',
			seasalt:'#F6FAFA',
		},
		extend: {      spacing: {
			'58': '230px',
			'100': '25rem',
			'128': '39rem',
			'130': '44rem'
		  }},
	},
	plugins: [],
}
