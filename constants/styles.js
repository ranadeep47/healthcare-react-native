export const colors = {
  lightText: 'rgba(111,123,135,0.7)',
  text: 'rgb(111,123,135)',
  white: 'rgb(255,255,255)',
  fadedWhite: 'rgba(255,255,255,0.4)',
  background: 'rgb(248,251,250)',
  greenBlue: 'rgb(0,210,131)',
  green: 'rgb(7,206,135)',
  blue: 'rgb(6,179,162)',
  lightBlue: 'rgba(6,179,162,0.3)',
  overlay: 'rgba(59,72,89,0.8)',
  separator: 'rgb(232,240,245)',
  shadow: 'rgb(7,192,149)',
  gray: 'rgb(250,251,252)',
  lightGray: 'rgba(111,123,135,0.2)',
  red: 'rgb(230,103,116)',
  fadedRed: 'rgb(255,241,241)',
  //nested objects eg: colors.dark.text
  dark: {
    text: 'rgb(59,72,89)',
    background: 'rgb(232,240,245)'
  },
}

export const gradients = {
  grayWhite: ['rgb(243,246,248)', colors.white],
  whiteGray: [colors.white, 'rgb(243,246,248)']
}

export const fontSizes = {
  'x-sm'    : 12,
  'sm'      : 14,
  'md'      : 16,
  'lg'      : 18,
  'x-lg'    : 20,
  'xx-lg'   : 22,
  'xxx-lg'  : 30
}

export const sizes = {
    APPBAR_HEIGHT: 66
}
