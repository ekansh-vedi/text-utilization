import { useState } from 'react';

const AudioToTextConverter = () => {
  const [transcribedText, setTranscribedText] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);

  const handleTranscribe = () => {
    setIsTranscribing(true);

    const recognition = new window.webkitSpeechRecognition(); // Using webkitSpeechRecognition for Chrome compatibility
    recognition.lang = 'en-US'; // Set the language for speech recognition

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscribedText(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      alert('Error occurred during transcription. Please try again.');
    };

    recognition.onend = () => {
      setIsTranscribing(false);
    };

    recognition.start();
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(transcribedText);
    alert('Text copied to clipboard!');
  };

  return (
    <div>
      <h2>Voice to Text Converter</h2>
      <button onClick={handleTranscribe} disabled={isTranscribing}>
        {isTranscribing ? 'Transcribing...' : 'Transcribe'}
      </button>
      <textarea
        value={transcribedText}
        onChange={() => {}}
        placeholder="Transcribed text will appear here..."
        rows={6}
        cols={50}
      />
      <button onClick={handleCopyText} disabled={!transcribedText}>
        Copy Text
      </button>
    </div>
  );
};

export default AudioToTextConverter;
