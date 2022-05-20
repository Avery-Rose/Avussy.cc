module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "200%": "200%",
    },
    extend: {
      colors: {
        blue: {
          "deep-dark": "var(--deep-dark-blue)",
          dark: "var(--dark-blue)",
        },
        lgbtq: {
          les: {
            red: "var(--l-red)",
            orange: "var(--l-orange)",
            white: "var(--l-white)",
            pink: "var(--l-pink)",
            purple: "var(--l-purple)",
          },
          pink: "var(--t-pink)",
          blue: "var(--t-blue)",
        },
      },
      animation: {
        // only pulse the background

        drop: "drop-in 1s ease-in-out",
        // go fast and slow
        dropFade: "drop-in-fade 1s ease-in-out",
        sildeUpFade: "slide-up-fade 1s ease-in-out",
        slideBackGround: "slide-bg 5s linear infinite",
        fadeIn: "fade-in 1s",
      },
      keyframes: {
        "slide-bg": {
          to: {
            backgroundPosition: "200% center",
          },
        },
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        "fade-in-blur": {
          from: {
            opacity: 0,
            filter: "blur(10px)",
          },
          to: {
            opacity: 1,
            filter: "blur(10px)",
          },
        },
        "slide-up-fade": {
          from: {
            opacity: 0,
            transform: "translateY(10px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "drop-in-fade": {
          "0%": {
            transform: "translateY(-100%)",
            backdropFilter: "blur(0px)",
          },
          "100%": {
            transform: "translate(0,0)",
            "-webkit-transform": "translate(0,0)",
            "-ms-transform": "translate(0,0)",
            backdropFilter: "blur(10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
