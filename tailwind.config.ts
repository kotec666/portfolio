/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
      xl: "1280px",
      "2xl": "1536px",
      smmaxw: {'max': '640px'},
      mdmaxw: {'max': '767px'},
      lgmaxw: {'max': '1023px'},
      xlmaxw: {'max': '1279px'},
      "2xlmaxw": {'max': '1535px'},
    },
    // fontFamily: {
    //   'spaceMono': "var(--spaceMono)",
    //   'glock': "var(--glock)",
    //   'grotesk': "var(--grotesk)",
    //   'chey': "var(--chey)",
    // },
    fontFamily: {
      // spaceMono: ['var(--spaceMono)'],
      // glock: ['var(--glock)'],
      // grotesk: ['var(--grotesk)'],
      // chey: ['var(--chey)'],
    },
    extend: {
        fontFamily: {
          spaceMono: ['var(--spaceMono)'],
          glock: ['var(--glock)'],
          grotesk: ['var(--grotesk)'],
          chey: ['var(--chey)'],
        }
      },
  },
  plugins: [],
}