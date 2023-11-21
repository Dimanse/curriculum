import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {},
    screens: {
      'xs': '380px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}


