import  { useState } from 'react';

const Summarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summarizedText, setSummarizedText] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const summarizeText = () => {
    // Logic to summarize the input text into bullet points
    // You can use libraries like natural language processing (NLP) or create custom logic

    // For demonstration purposes, let's split the text by sentences and create bullet points
    const sentences = inputText.split('. ');
    const summarized = sentences.map((sentence, index) => (
      <li key={index}>{sentence}</li>
    ));
    
    setSummarizedText(summarized);
  };

  return (
    <div className='container centered'>
      <h2>Text Into Readable Format</h2>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text for readable Format"
        rows={10}
        cols={50}
      />
      <button onClick={summarizeText}>Readable Format</button>
      <ul>
        {summarizedText}
      </ul>
    </div>
  );
};

export default Summarizer;