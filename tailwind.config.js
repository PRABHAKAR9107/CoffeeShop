module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        satisfy: "'Satisfy', cursive",
        nunito: " 'Nunito Sans', sans-serif",
        archivo: " 'Archivo Black', sans-serif",
      },
    },
  },
  variants: {
    extend: {
      maxHeight: ["focus"],
      backgroundColor: ["active"],

      animation: ["motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
