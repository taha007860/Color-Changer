// InputField.js
import React, { useState } from 'react';

const InputField = ({ onTextChange, onToggleTextColor }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  const inputStyle = {
    width: '180px',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #000',
    borderRadius: '5px',
    marginBottom: '10px',
    outline: 'none',
    marginTop: '30px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    width: '204px',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #000',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add color name"
          value={text}
          onChange={handleInputChange}
          style={inputStyle}
        />
      </div>
      <div>
        <button onClick={onToggleTextColor} style={buttonStyle}>
          Toggle Text Color
        </button>
      </div>
    </div>
  );
};

export default InputField;

