import { useState, useEffect } from 'react';

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

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      const availableVoices = window.speechSynthesis.getVoices();
      const voice = availableVoices.find(voice => voice.name === 'Google UK English Female');

      if (voice) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voice;
        utterance.volume = 0.5;
        speechSynthesis.speak(utterance);
      } else {
        // Fallback to default voice
        const defaultVoice = availableVoices.find(voice => voice.default);
        if (defaultVoice) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.voice = defaultVoice;
          utterance.volume = 0.5;
          speechSynthesis.speak(utterance);
        } else {
          alert('No compatible voice found.');
        }
      }
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
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
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
        <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
        <button onClick={handleTextToSpeech}>Text to Speech</button>
        <button onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
  );
};

export default TextUtility;
