import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import avatar from "./assets/default-face.png";
import Attributes from "./components/Attributes";

function App() {
  const generatedPhotoApi = {
    key: "A5CyUWr5cryc9KOdcJvqJw",
    base: "https://api.generated.photos/api/v1/",
  };

  const [image, setImage] = useState("");
  const [gender, setGender] = useState("male");
  const [race, setRace] = useState("latino");
  const [age, setAge] = useState("young-adult");

  const generatePhoto = () => {
    console.log("Generating new photo...");

    axios
      .get(
        `${generatedPhotoApi.base}faces?api_key=${generatedPhotoApi.key}&order_by=random&gender=${gender}&${race}&${age}`
      )
      .then((response) => {
        setImage(response.data.faces[0].urls[4][512]);
        console.log(response.data.faces[0].urls[4][512]);
      })
      .catch((error) => {
        if (error.response) {
          // Error if picture wasn't found.
          console.log(error.response.data);
        } else if (error.request) {
          // Error if no response was received.
          console.log(error.request);
        } else {
          // Other errors.
          console.log(error.message);
        }
      });
  };

  const switchGender = () => {
    if (gender === "male") {
      console.log("Attribute Gender selected FEMALE");
      setGender("female");
    } else {
      console.log("Attribute Gender selected MALE");
      setGender("male");
    }
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
        <button onClick={switchGender}>{gender}</button>
        <Attributes />
      </div>
    </div>
  );
}

export default App;
