import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	"./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
	colors: {
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
  plugins: [
	  require('flowbite/plugin')
  ],
}
export default config
