const themeColor = {
  white: '#F8F5F1',
  beige: '#F9EBC8',
  orange: '#E9896A',
  lightGreen: '#ACB992',
  green: '#387C6D',
  navy: '#343F56',
};

const fontColor = {
  lightGrey: '#BBBBBB',
  darkGrey: '#383838',
};

const font = {
  logoFont: "'Fascinate', cursive",
  engFont: "'Poppins', sans-serif;",
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  button: `   
    border: none;
    padding: 0.7em 1em;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 600;
    cursor: pointer;
  `,
};

const theme = {
  themeColor,
  fontColor,
  font,
  common,
};

export default theme;
