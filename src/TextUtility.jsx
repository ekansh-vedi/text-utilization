import   { useState, useEffect } from 'react';

const TextUtility = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  
  useEffect(() => {
    const handleSpeechSynthesisVoicesChanged = () => {
      // Handle changes in speech synthesis voices, if necessary
    };

    window.speechSynthesis.addEventListener('voiceschanged', handleSpeechSynthesisVoicesChanged);

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handleSpeechSynthesisVoicesChanged);
    };
  }, []);

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

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };

  const handleRemoveExtraSpaces = () => {
    const newText = text.replace(/\s+/g, ' ');
    setText(newText);
    setWordCount(newText.trim().split(/\s+/).filter(word => word !== '').length);
  };

  return (
    <div className="container">
      <span>Word Count: {wordCount}</span>
      <h2 id="utilityHead">Text Optimization field</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
        spellCheck={true}
      />
      <div className="controls">
        <button onClick={() => handleCaseChange('uppercase')}>Uppercase</button>
        <button onClick={() => handleCaseChange('lowercase')}>Lowercase</button>
        <button onClick={handleCopyText}>Copy Text</button>
        <button onClick={handleTextToSpeech}>Text to Speech</button>
        <button onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
  );
};

export default TextUtility;
