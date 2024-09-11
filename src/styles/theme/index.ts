const lightTheme = {
  primary: '#B6F09C',
  secondary: '#3374CD',
  white: '#fff',
  lightGray: '##CDCECF',
  transparent: 'transparent',
  black: '#0D0F10',
  lightBlack: '#131619',
  red: '#FE5A5A',

  textPrimary: '#CDCECF',
  textDanger: '#F2596B',
};

export type Theme = typeof lightTheme;

const darkTheme: Theme = {
  primary: '#B6F09C',
  secondary: '#3374CD',
  white: '#fff',
  lightGray: '##CDCECF',
  transparent: 'transparent',
  black: '#0D0F10',
  lightBlack: '#131619',
  red: '#FE5A5A',

  textPrimary: '#CDCECF',
  textDanger: '#F2596B',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
