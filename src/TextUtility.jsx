import React, { useState, useEffect } from 'react';
 

const TextUtility = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setWordCount(newText.trim().split(/\s+/).filter(word => word !== '').length);
  };

  const handleCaseChange = (type) => {
    if (type === 'uppercase') {
      setText(text.toUpperCase());
    } else if (type === 'lowercase') {
      setText(text.toLowerCase());
    }
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Text Optimization field </h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
        spellCheck={true}
      />
      <div className="controls">
        <button id="up" onClick={() => handleCaseChange('uppercase')}>Uppercase</button>
        <button id="dow" onClick={() => handleCaseChange('lowercase')}>Lowercase</button>
        <button onClick={handleCopyText}>Copy Text</button>
       
        <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
        <span>Word Count: {wordCount}</span>
      </div>
    </div>
  );
};

export default TextUtility;
