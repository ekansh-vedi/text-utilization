import   { useState } from 'react';
import axios from 'axios';

const WordToPdfConverter = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const convertToPdf = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(
        'https://api.cloudmersive.com/convert/docx/to/pdf',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Apikey': 'YOUR_API_KEY' // Replace 'YOUR_API_KEY' with your actual API key
          }
        }
      );

      // Download the converted PDF file
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'converted_document.pdf');
      document.body.appendChild(link);
      link.click();
      setLoading(false);
    } catch (error) {
      console.error('Error converting to PDF:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Word to PDF Converter</h2>
      <input type="file" accept=".docx" onChange={handleFileChange} />
      <button onClick={convertToPdf} disabled={!file || loading}>
        {loading ? 'Converting...' : 'Convert to PDF'}
      </button>
    </div>
  );
};

export default WordToPdfConverter;
