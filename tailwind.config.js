/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        "128" : "32rem"
      },
      height: {
        "128": "32rem"
      }
    },
  },
  plugins: [],
}

