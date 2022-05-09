import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
import defaultTheme from 'windicss/defaultTheme'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', ...defaultTheme.fontFamily.sans].join(','),
        //serif: ['""', ...defaultTheme.fontFamily.serif].join(','),
      },
      colors: {
        'theme': {
          bg1: '#1A1A2E',
          bg2: '#16213E',
          bg3: '#0F3460',
          fg1: '#E94560'
        },
        'mp-green': '#00c554',
        'brown': {
          dark: '#85582f',
          DEFAULT: '#b17d4b',
          light: '#b99676',
        },
        'regal-blue': '#243c5a',
      },
      textShadow: {
        'sharp': '-1px 0 #000,0 -1px #000,1px 0 #000,0 1px #000,1px 1px #000,-1px -1px #000,-1px 1px #000,1px -1px #000, -4px 4px rgba(0, 0, 0, 1)'
      },
      boxShadow: {
        'sharp': '-1px 0 #000,0 -1px #000,1px 0 #000,0 1px #000,1px 1px #000,-1px -1px #000,-1px 1px #000,1px -1px #000, -4px 4px rgba(0, 0, 0, 1)'
      },
      dropShadow: {
        'sharp': 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 1))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
      plugins: [
        require('windicss/plugin/typography'),
        require('windicss/plugin/line-clamp'),
        plugin(({ addUtilities }) => {
          const newUtilities = {
            '.small-caps': {
              'font-variant': 'small-caps',
            },
            '.skew-15deg': {
              transform: 'skewY(-15deg)',
            },
          }
          addUtilities(newUtilities)
        }),
      ]
    },
  },
})
