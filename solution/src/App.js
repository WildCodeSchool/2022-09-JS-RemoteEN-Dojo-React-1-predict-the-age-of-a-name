import axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState(undefined);
  const [countryCode, setCountryCode] = useState(undefined);
  const [age, setAge] = useState(undefined);

  const handleButtonClick = () => {
    if (name == null) return;
    axios
      .get(
        `https://api.agify.io?name=${name}`.concat(
          countryCode != null ? `&country_id=${countryCode}` : ""
        )
      )
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .then((data) => setAge(data.age));
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1>Unnecessary Age Estimation</h1>
      <span style={{ textAlign: "center" }}>
        <label htmlFor="name">Please enter your first name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John"
        />
        <br />
        <label htmlFor="country">Please choose a country: </label>
        <select id="country" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
          <option value={undefined}>All countries</option>
          <option value="UK">United Kingdom</option>
          <option value="US">United States</option>
          <option value="UA">Ukraine</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
          <option value="PH">Philippines</option>
          <option value="PT">Portugal</option>
          <option value="ES">Spain</option>
          <option value="JP">Japan</option>
          <option value="TR">Turkey</option>
        </select>
      </span>

      <button onClick={handleButtonClick}>Estimate!</button>
      {age && <h2>Your perfectly accurate age is: {age}</h2>}
    </div>
  );
}

export default App;
