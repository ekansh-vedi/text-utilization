// import React from 'react';
import './App.css';
import TextUtility from './TextUtility';
import ImageTextExtractor from './ImageTextExtractor';
import WordToPDFConverter from './WordToPdfConverter';

function App() {
  return (
    <div className="App">
      <TextUtility />
      <ImageTextExtractor className="ImageTextExtractor" /> {/* Add className to apply CSS */}
<WordToPDFConverter/>
    </div>
  );
}

export default App;




 

