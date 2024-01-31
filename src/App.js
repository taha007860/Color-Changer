// App.js
import React, { useState } from 'react';
import './App.css';
import Square from './Square';
import InputField from './InputField';

function App() {
  const [currentText, setCurrentText] = useState('Empty value');
  const [textColor, setTextColor] = useState('black');

  const handleTextChange = (newText) => {
    setCurrentText(newText);
  };

  const toggleTextColor = () => {
    setTextColor(textColor === 'black' ? 'white' : 'black');
  };

  return (
    <div className="App">
      <h1>Square Color Changer</h1>
      <Square text={currentText} textColor={textColor} />
      <InputField onTextChange={handleTextChange} onToggleTextColor={toggleTextColor} />
    </div>
  );
}

export default App;

