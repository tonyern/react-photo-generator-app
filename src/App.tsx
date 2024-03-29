import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import avatar from "./assets/default-face.png";

const App = (): JSX.Element => {
  const { REACT_APP_PHOTO_API_KEY } = process.env;
  const generatedPhotoApi = "https://api.generated.photos/api/v1/";

  const [image, setImage] = useState("");
  const [gender, setGender] = useState("male");
  const [race, setRace] = useState("latino");
  const [age, setAge] = useState("young-adult");

  const generatePhoto = (): void => {
    console.log("Generating new photo...");
    console.log(REACT_APP_PHOTO_API_KEY);

    axios
      .get(
        `${generatedPhotoApi}faces?api_key=${REACT_APP_PHOTO_API_KEY}&order_by=random&gender=${gender}&${race}&${age}`
      )
      .then((response) => {
        setImage(response.data.faces[0].urls[4][512]);
        console.log(response.data.faces[0].urls[4][512]);
      })
      .catch((error) => {
        if (error.response) console.log(error.response.data);

        // Error if no response was received.
        if (error.request) console.log(error.request);
        
        // Other errors.
        if (error.message) console.log(error.message);
      });
  };

  const switchGender = (): void => {
    if (gender === "male") setGender("female");
    if (gender === "female") setGender("male");
  };

  return (
    <div className="App">
      <h1>Black Market Photo Generator</h1>

      {image ? (
        <img
          src={image}
          title="Avatar"
          alt="Generated Avatar"
          width="512px"
          height="512px"
        />
      ) : (
        <img
          src={avatar}
          title="Avatar"
          alt="Blank Avatar"
          width="512px"
          height="512px"
        />
      )}

      <br />
      <br />

      <button onClick={generatePhoto}>Generate New Photo</button>

      <div>
        <button onClick={switchGender}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</button>
      </div>
    </div>
  );
}

export default App;
