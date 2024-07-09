/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('bg.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      keyframes: {
        zoom1: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        zoom2: {
          "0%, 100%": { transform: "scale(1.2)" },
          "50%": { transform: "scale(1.5)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px -10px #aef4af" },
          "50%": { boxShadow: "0 0 10px 10px #f9ca24" },
          "100%": { boxShadow: "0 0 10px 10px #aef4af" },
        },
      },
      animation: {
        zoom1: "zoom1 5s infinite ease-in-out",
        zoom2: "zoom2 5s infinite ease-in-out",
        "box-shadow": "glow 3s infinite alternate",
      },
      boxShadow: {
        custom: "0 0 5px 10px #e84393", // Replace with your desired shadow values and color
      },
    },
  },
  plugins: [],
};
