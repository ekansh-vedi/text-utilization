import { useState } from "react";
import Axios from "axios";
import { FaSearch, FaCopy } from "react-icons/fa";

function App() {
  const [data, setData] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  const [isValidWord, setIsValidWord] = useState(true);
















  
  const getMeaning = async () => {





    
    try {
      const response = await Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`);
      setData(response.data[0]); // Assuming the API response is an array with the first element containing the data
      setIsValidWord(true); // Set to true when word is found
    } catch (error) {
      console.error("Error fetching meaning:", error);
      setData(null); // Reset data state
      setIsValidWord(false); // Set to false when word is not found
    }
  };





  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
        alert("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <div className="container App">
      <h1>Free Dictionary</h1>
      <div className="searchBox">
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="Enter a word"
        />
        <button onClick={getMeaning}>
          <FaSearch size="20px" />
        </button>
      </div>
      {!isValidWord && <p>Invalid word. Please enter a valid word.</p>}
      {data && (
        <div className="showResults">
          <h2>
            {data.word}{" "}
            <button onClick={() => copyToClipboard(data.word)}>
              <FaCopy size="20px" />
            </button>
          </h2>
          <h4>Parts of speech:</h4>
          <p>{data.meanings[0].partOfSpeech}</p>
          <h4>Definition:</h4>
          <p>
            {data.meanings[0].definitions[0].definition}{" "}
            <button onClick={() => copyToClipboard(data.meanings[0].definitions[0].definition)}>
              <FaCopy size="20px" />
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
