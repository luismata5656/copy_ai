import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
	colors: {
		'w-gray': {
			'50': '#f1f6fc',
			'100': '#e6eef9',
			'200': '#d2dff3',
			'300': '#b7caea',
			'400': '#99ade0',
			'500': '#8092d4',
			'600': '#6773c4',
			'700': '#626bb2',
			'800': '#48518b',
			'900': '#3f4670',
			'950': '#252841',
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
