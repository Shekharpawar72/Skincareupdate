// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",  // Mobile breakpoint
      md: "768px",  // Tablet
      lg: "1024px", // Small desktop
      xl: "1280px", // Large desktop
      "2xl": "1536px", // Extra large
    },
  },
  plugins: [],
};
