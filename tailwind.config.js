/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: [
        "'Righteous'",
        "'Hiragino Maru Gothic Pro'",
        "'ヒラギノ角ゴ Pro W3'",
        "'メイリオ'",
        "'Meiryo'",
        "'MS Pゴシック'",
      ],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    flexGrow: {
      default: 1,
      0: 0,
      1: 1,
      2: 2,
      3: 3,
    },
    extend: {
      colors: {
        'font-color': '#ececec',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
