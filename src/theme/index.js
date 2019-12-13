const LIGHT_ACUA = '#4892'
const WHITE = '#fff'
const BLACK = '#000'
const LIGHT = '#f0f2f5'
const DARK = '#323232'
const GRAY = '#555'
const RED = 'red'

const breakpoints = ['992px', '700px']

export default {
  backgrounds: {
    colors: {
      white: WHITE,
      red: RED,
    },
    headerBg: LIGHT_ACUA,
    tableBg: WHITE,
    appBg: LIGHT,
    appBgDark: DARK,
    error: RED,
  },
  cadrLink: {
    default: WHITE,
    hover: BLACK,
    borgerColor: BLACK,
    text: {
      default: GRAY,
      hover: WHITE,
    },
  },
  textColors: {
    dark: DARK,
    gray: GRAY,
    white: WHITE,
  },
  infoTable: {
    bg: WHITE,
    borederColor: BLACK,
  },
  borders: {
    colors: {
      error: RED,
    },
  },
  breakpoints,
}
