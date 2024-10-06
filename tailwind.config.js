module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"], // Set Mulish as the default sans font
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Add the border move keyframes
        borderMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-in-out",
        // Add the border move animation
        borderMove: "borderMove 4s linear infinite",
      },
      boxShadow: {
        glow: "0 0 10px rgba(122, 86, 215, 0.8), 0 0 20px rgba(122, 86, 215, 0.8)", // Updated glow color
      },
    },
  },
  plugins: [],
};
