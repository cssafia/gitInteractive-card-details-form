/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(249, 99%, 64%)', // Solid color for active state
          gradient: 'linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))', // Active input border gradient
        },
        error: 'hsl(0, 100%, 66%)', // Red for input errors
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          lightGrayishViolet: 'hsl(270, 3%, 87%)',
          darkGrayishViolet: 'hsl(279, 6%, 55%)',
          veryDarkViolet: 'hsl(278, 68%, 11%)',
        },
      },
    },
  },
  content: [
    './index.html',          // Include the main HTML file
    './src/**/*.{html,js}',  // Include all HTML and JS files in src
],
};