const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require('tailwindcss/plugin')

module.exports = withMT({
  plugins: [
    plugin (function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
        },
      })
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        }
      })
    })
  ],
  content: [],
  theme: {
    colors:{
    'main-color':'#fde61e'
    },
    extend: {}
    ,
  },
 
}) 