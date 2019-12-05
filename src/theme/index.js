const LIGHT_ACUA = '#4892'
const WHITE = '#fff'
const BLACK = '#000'
const LIGHT = '#f0f2f5'
const DARK = '#323232'
const GRAY = '#555'

const breakpoints = ['992px', '700px']

export default {
  backgrounds: {
    headerBg: LIGHT_ACUA,
    tableBg: WHITE,
    appBg: LIGHT,
    appBgDark: DARK,
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
  },
  infoTable: {
    bg: WHITE,
    borederColor: BLACK,
  },
  breakpoints,
}
