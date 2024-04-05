// import './App.css';
import './InputField.css';
import TextUtility from './TextUtility';
import ImageTextExtractor from './ImageTextExtractor';
// import WordToPDFConverter from './WordToPdfConverter';
import AudioToTextConverter from './AudioToText';
import DictionaryComponent from './Dictionary';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate, Await } from "react-router-dom"
import Navbar from './Universal/Navbar';
import { useState } from 'react';
import Summarizers from './Summarizers';
 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Routes>
        <Route exact path="/" element={<TextUtility />} />
        <Route exact path="/textutility" element={<TextUtility />} />
        <Route exact path="/imagetextextractor" element={<ImageTextExtractor className="ImageTextExtractor" /> } />
        {/* <Route exact path="/wordtopdfconverter" element={<WordToPDFConverter />} /> */}
        <Route exact path="/audiototextconverter" element={<AudioToTextConverter />} />
        <Route exact path="/dictionary" element={<DictionaryComponent />} />
        <Route exact path="/summarizer" element={<Summarizers />} />
      </Routes>
    
 
    </div>
  );
}

export default App;




 

