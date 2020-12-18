import React, { useState } from 'react';
import './App.css';
import avatar from './assets/default-face.png';
import Attributes from './components/Attributes';

function App() {

  const generatedPhotoApi = {
    key: "A5CyUWr5cryc9KOdcJvqJw",
    base: "https://api.generated.photos/api/v1/"
  }

  const [image, setImage] = useState('');
  const [gender, setGender] = useState('male');
  const [race, setRace] = useState('latino');
  const [age, setAge] = useState('young-adult')

  const generatePhoto = () => {
    console.log('Generating new photo...');

    fetch(`${generatedPhotoApi.base}faces?api_key=${generatedPhotoApi.key}&order_by=random&gender=${gender}&${race}&${age}`)
    .then(res => res.json())
    .then(result => {
      console.log(result.faces[0].urls[4][512]);
      setImage(result.faces[0].urls[4][512]);
    });
  };

  const switchGender = () => {
    if (gender === "male") {
      console.log('Attribute Gender selected FEMALE')
      setGender('female');
    } else {
      console.log('Attribute Gender selected MALE')
      setGender('male');
    }
  }

  return (
    <div className="App">
      <h1>Black Market Photo Generator</h1>
      
      {(image) ? (
        <img src={image} title="Avatar" alt="Generated Avatar" width="512px" height="512px" />
      ) : (<img src={avatar} title="Avatar" alt="Blank Avatar" width="512px" height="512px" />)}

      <br />
      <br />

      <button onClick={generatePhoto}>Generate New Photo</button>
      <button onClick={switchGender}>{gender}</button>

      <Attributes />
    </div>
  );
}

export default App;
