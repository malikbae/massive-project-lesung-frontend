/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#5375E2",
        secondary: "#BCC4E3",
        heading: "#161616",
        body: "#454655",
        alt1: "#EBEFFC",
        alt2: "#F2F4FB",
        background: "#F4F4F4",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
