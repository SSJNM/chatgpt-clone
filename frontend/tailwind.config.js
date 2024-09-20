/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': 'rgb(20, 31, 42)',  
      },
    },
    keyframes: {
      shimmer: {
        "100%": { transform: "translateX(100%)"}
      }
    },
    animation: {
      shimmer: "shimmer 1.5s infinite"
    }
  },
  plugins: [],
}

