import { useState } from 'react';
import Tesseract from 'tesseract.js';

const ImageTextExtractor = () => {
  const [extractedText, setExtractedText] = useState('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;



    const { data: { text } } = await Tesseract.recognize(file, 'eng');
    setExtractedText(text);
  };


  
  const handleCopyText = () => {
    if (!extractedText.trim()) {
      alert('No text to copy!');
      return;
    }

    navigator.clipboard.writeText(extractedText);
    alert('Text copied to clipboard!');
  };

  const handleTextChange = (e) => {
    setExtractedText(e.target.value);
  };

  return (
    <div className='centered'>
      <h2>Image Text Extractor</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div>
        <h3>Extracted Text:</h3>
        <textarea value={extractedText} onChange={handleTextChange} rows={10} cols={50} />
        <button onClick={handleCopyText}>Copy Text</button>
      </div>
    </div>
  );
};

export default ImageTextExtractor;
