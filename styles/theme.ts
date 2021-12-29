export type Theme = typeof themeDefault;

export const themeDefault = {
  color: {
    white: '#FFFFFF',
    black: '#2A313C',
    gray: ['#4B586C', '#8795AB', '#B7BFCD', '#DBDEE6', '#F3F4F7'],
  },
};

export const themeDark = {
  color: {
    white: '#2A313C',
    black: '#FFFFFF',
    gray: ['#F3F4F7', '#8DBDEE6', '#B7BFCD', '#8795AB', '#4B586C'],
  },
};
