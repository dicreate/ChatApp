/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-460": { max: "460px" },
        "max-640": { max: "640px" },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
