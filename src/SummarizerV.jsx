import   { useState } from 'react';

export default function SummarizerV() {
  const [inputText, setInputText] = useState('');
  const template =  "You are an AI assistant specialized in text summarization. Please summarize the following text under 20 words";
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await fetch('https://excited-flannel-shirt-boa.cyclic.app/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': ' Ddfcwxswnd6H27aC3zg84XuOfU6VKhxaQXKoQM4FQ1bAH7xsJ' // Replace with your API key
        },
        body: JSON.stringify({ input: inputText, template: template })
      });

      if (!response.ok) {
        throw new Error('Failed to generate text');
      }

      const data = await response.json();
      setGeneratedText(data.generated_text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container centered'>
      <h1>Summarizer</h1>
      <div>
        <label htmlFor="inputText">Input Text:</label>
        <textarea
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
       
      <button onClick={handleGenerate}>Generate</button>
      {generatedText && (
        <div>
          <h2>Generated Text:</h2>
          <p>{generatedText}</p>
        </div>
      )}
    </div>
  );
}
