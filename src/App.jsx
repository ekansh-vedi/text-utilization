 
import './App.css';
import TextUtility from './TextUtility';
import ImageTextExtractor from './ImageTextExtractor';
// import WordToPDFConverter from './WordToPdfConverter';
import AudioToTextConverter from './AudioToText';
import DictionaryComponent from './Dictionary';
import Summarizers from './Summarizers';
 
 
 
 


function App() {
  return (
    <div className="App">
      <TextUtility />
      <ImageTextExtractor className="ImageTextExtractor" />   
 {/* <WordToPDFConverter/> */}
 <AudioToTextConverter/>
 <DictionaryComponent/>
 <Summarizers/>
    </div>
  );
}

export default App;




 

