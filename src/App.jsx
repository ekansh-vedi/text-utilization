import React from 'react';
import './App.css';
import TextUtility from './TextUtility';
import ImageTextExtractor from './ImageTextExtractor';

function App() {
  return (
    <div className="App">
      <TextUtility />
      <ImageTextExtractor className="ImageTextExtractor" /> {/* Add className to apply CSS */}
    </div>
  );
}

export default App;
