/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-compact-text": ["SF Compact Text"]
      },
      fontSize: {
        boardTitle: "32px",
        label: "14px",
        cardTitle: "16px",
      },
      colors: {
        darkGrey: "#5A5A65",
        lightGrey: "#E1E4E8",
        lightBgGrey: "#F8F8F8",
        rose: "#FFDCE0",
        green: "#CBDFD8",
        lavender: "#F0E7F6",
        blackGrey: "#212121",
        grey: "#4D4D4D",
        white: "#FFFFFF",
        black: "#000",
      },
    },
  },
  plugins: [],
}