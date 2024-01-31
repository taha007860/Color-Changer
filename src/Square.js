// Square.js
import React from 'react';
import colornames from 'colornames';

const toHex = (color) => {
  const hexValue = colornames(color);
  return hexValue || '';
};

const Square = ({ text, textColor }) => {
  const style = {
    width: '200px',
    height: '200px',
    backgroundColor: text.toLowerCase(),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    margin: 'auto',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    color: textColor, // Apply the specified text color
  };

  const hexColor = toHex(text);

  return (
    <div style={style}>
      <div>{text}</div>
      <div>{hexColor}</div>
    </div>
  );
};

export default Square;

