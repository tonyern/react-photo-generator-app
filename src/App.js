import './App.css';
import React, { useState } from 'react';

function App() {

  const generatedPhotoApi = {
    key: "A5CyUWr5cryc9KOdcJvqJw",
    base: "https://api.generated.photos/api/v1/"
  }

  const [image, setImage] = useState('');

  const generatePhoto = () => {
    console.log('Generating new photo...');

    fetch(`${generatedPhotoApi.base}faces?api_key=${generatedPhotoApi.key}&gender=female&order_by=random`)
    .then(res => res.json())
    .then(result => {
      console.log(result.faces[0].urls[4][512]);
      setImage(result.faces[0].urls[4][512]);
    });
  };

  return (
    <div className="App">
      <h1>Black Market Photo Generator</h1>
      
      {(typeof image != "undefined") ? (
        <img src={image} alt="Face for Black Market use" width="512px" height="512px" />
      ) : ('')}

      <br />
      <br />

      <button onClick={generatePhoto}>Generate New Photo</button>
    </div>
  );
}

export default App;
