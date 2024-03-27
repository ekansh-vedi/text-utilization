import  { useState } from 'react';
import { saveAs } from 'file-saver';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import mammoth from 'mammoth';

const WordToPDFConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversionError, setConversionError] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setConversionError('');
  };

  const convertToPDF = async () => {
    if (!selectedFile) {
      setConversionError('Please select a file.');
      return;
    }

    try {
      const arrayBuffer = await readFile(selectedFile);
      const textResult = await mammoth.extractRawText({ arrayBuffer });
      let text = textResult.value || ''; // Extracted text content
      text = text.replace(/\‑/g, '-'); // Replace problematic characters
      text = text.replace(/\n/g, ' '); // Replace newline characters with spaces
      text = text.replace(/\t/g, ' '); // Replace tab characters with spaces

      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([612, 792]); // Standard US Letter size
      const { width, height } = page.getSize();

      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const textWidth = font.widthOfTextAtSize(text, 12);
      const textHeight = font.heightAtSize(12);

      const lines = text.split('\n');
      const fontSize = Math.min(width / textWidth, height / (textHeight * lines.length));

      page.drawText(text, {
        x: 50,
        y: height - 50,
        size: fontSize,
        font: font,
      });

      const pdfBytes = await pdfDoc.save();
      saveAs(new Blob([pdfBytes], { type: 'application/pdf' }), `${selectedFile.name.replace(/\.[^/.]+$/, '')}.pdf`);
      alert('Conversion successful. PDF file created.');
    } catch (error) {
      console.error('Conversion error:', error);
      setConversionError('Error converting the file. Please try again: ' + error.message);
    }
  };

  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <div>
      <h2>Word to PDF Converter</h2>
      <input type="file" accept=".docx" onChange={handleFileChange} />
      {conversionError && <p style={{ color: 'red' }}>{conversionError}</p>}
      <button onClick={convertToPDF}>Convert to PDF</button>
    </div>
  );
};

export default WordToPDFConverter;
