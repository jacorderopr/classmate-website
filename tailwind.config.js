/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./public/**/*.{html,js}", // Scan HTML and JS files in public
      "./src/**/*.{html,js}",    // Also scan src if needed
    ],
    theme: {
      extend: {
        colors: {
          // Example: Define muted university colors if needed
          'emerald': { // Using Tailwind's default emerald as example green
            '800': '#065f46',
            '700': '#047857',
            '600': '#059669',
            '500': '#10b981',
            '100': '#d1fae5',
            '50': '#ecfdf5',
          },
          'stone': { // Using Tailwind's default stone as example off-white/grey
              '100': '#f5f5f4',
              '300': '#d6d3d1',
          },
          // Add blues, etc. if desired
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], // Example sans-serif stack
        }
      },
    },
    plugins: [],
  }