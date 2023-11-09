import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
	colors: {
		'rhino': {
			'50': '#98a3dd',
			'100': '#8c96d4',
			'200': '#768bcb',
			'300': '#5677bd',
			'400': '#4063a0',
			'500': '#365281',
			'600': '#2e4266',
			'700': '#283853',
			'800': '#1b2736',
			'900': '#22313f',
			'950': '#080a0d',
		},
		'default': {
			'primary':'#343541',
			'secondary':'#202123',
			'secondary-2':'#40414F',
			'secondary-3':'#4D4D4F',
			'accent':'#19C37D',
			'white':'#ECECF1',

		},

	},
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
