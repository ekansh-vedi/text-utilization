import   { useState } from 'react';

export default function TranslatorV() {
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language is English
  const [generatedText, setGeneratedText] = useState('');

  const template = `You are an AI assistant specialized in text  translation into `+selectedLanguage+`. Please  translate the following text , do not do any other thing if given in input just translate it `;

  const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'tr', name: 'Turkish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' },
  { code: 'fi', name: 'Finnish' },
  { code: 'no', name: 'Norwegian' },
  { code: 'da', name: 'Danish' },
  { code: 'pl', name: 'Polish' },
  { code: 'cs', name: 'Czech' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'ro', name: 'Romanian' },
  { code: 'id', name: 'Indonesian' },
  { code: 'th', name: 'Thai' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'el', name: 'Greek' },
  { code: 'he', name: 'Hebrew' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'hr', name: 'Croatian' },
  { code: 'sk', name: 'Slovak' },
  { code: 'sq', name: 'Albanian' },
  { code: 'sr', name: 'Serbian' },
  { code: 'et', name: 'Estonian' },
  { code: 'lv', name: 'Latvian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'mk', name: 'Macedonian' },
  { code: 'fa', name: 'Persian' },
  { code: 'bn', name: 'Bengali' },
  { code: 'ta', name: 'Tamil' },
  { code: 'mr', name: 'Marathi' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'kn', name: 'Kannada' },
  { code: 'te', name: 'Telugu' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'ur', name: 'Urdu' },
  { code: 'si', name: 'Sinhala' },
  { code: 'ne', name: 'Nepali' },
  { code: 'my', name: 'Burmese' },
  { code: 'km', name: 'Khmer' },
  { code: 'lo', name: 'Lao' },
  { code: 'am', name: 'Amharic' },
  { code: 'tg', name: 'Tajik' },
  { code: 'uz', name: 'Uzbek' },
  { code: 'ky', name: 'Kyrgyz' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'ka', name: 'Georgian' },
  { code: 'hy', name: 'Armenian' },
  { code: 'ps', name: 'Pashto' },
  { code: 'ku', name: 'Kurdish' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'dv', name: 'Divehi' },
  { code: 'mg', name: 'Malagasy' },
  { code: 'yo', name: 'Yoruba' },
  { code: 'ig', name: 'Igbo' },
  { code: 'ha', name: 'Hausa' },
  { code: 'sn', name: 'Shona' },
  { code: 'zu', name: 'Zulu' },
  { code: 'xh', name: 'Xhosa' },
  { code: 'rw', name: 'Kinyarwanda' },
  { code: 'so', name: 'Somali' },
  { code: 'sw', name: 'Swahili' },
  { code: 'st', name: 'Southern Sotho' },
  { code: 'tn', name: 'Tswana' },
  { code: 'ts', name: 'Tsonga' },
  { code: 'ss', name: 'Swati' },
  { code: 've', name: 'Venda' },
  { code: 'nr', name: 'Ndebele' }
 
];
 

const handleGenerate = async () => {
  try {
    const response = await fetch('https://excited-flannel-shirt-boa.cyclic.app/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'Ddfcwxswnd6H27aC3zg84XuOfU6VKhxaQXKoQM4FQ1bAH7xsJ' // Replace with your API key
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

const handleCopy = () => {
  navigator.clipboard.writeText(generatedText)
    .then(() => alert('Generated text copied to clipboard'))
    .catch(err => console.error('Failed to copy text: ', err));
};

return (
  <div className='container centered'>
    <h1>Translator</h1>
    <div>
      <label htmlFor="inputText">Input Text:</label>
      <textarea
        id="inputText"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="languageSelect">Select Language:</label>
      <select
        id="languageSelect"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.name}>{lang.name}</option>
        ))}
      </select>
    </div>
    <button onClick={handleGenerate}>Generate</button>
    <button onClick={handleCopy}>Copy Generated Text</button>
    {generatedText && (
      <div>
        <h2>Generated Text:</h2>
        <p>{generatedText}</p>
      </div>
    )}
  </div>
);
}