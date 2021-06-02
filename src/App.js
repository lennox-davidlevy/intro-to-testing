import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [renderText, setRenderText] = useState('');
  const [clear, setClear] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    if (clear) {
      setInputText('');
      setRenderText('');
      setClear(false);
      return;
    }
    setClear(true);
    setRenderText(inputText.toUpperCase());
  };
  return (
    <div>
      <label htmlFor="text_field">
        Enter Text
        <input
          type="text"
          id="text_field"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </label>
      <button onClick={handleClick}>{!clear ? 'Submit' : 'Clear'}</button>
      <div>{renderText}</div>
    </div>
  );
}

export default App;
