/** @type {import('tailwindcss').Config} */
export default {
  content: [    './pages/**/*.{html,js,vue}',
  './components/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#5633d4',
      },
    },
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#5633d4',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#5633d4',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#5633d4',
    }),
  },
  plugins: [],
}

