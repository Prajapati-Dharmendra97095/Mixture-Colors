import { useState } from "react";

function App() {
  const colors = JSON.parse(localStorage.getItem("color"));
  const [red, setred] = useState(colors && colors.red ? colors.red : 0);
  const [green, setgreen] = useState(colors && colors.green ? colors.green : 0);
  const [blue, setblue] = useState(colors && colors.blue ? colors.blue : 0);

  const handleSave = () => {
    localStorage.setItem("color", JSON.stringify({ red, green, blue }));
  };
  return (
    <div>
      <h1>Color Mixture</h1>
      <div
        style={{
          backgroundColor: "rgb(" + red + "," + green + "," + blue + ")",
          height: 300,
          width: 300,
        }}
      ></div>
      <label htmlFor="">RED</label>
      <input
        type="range"
        value={red}
        min={0}
        max={255}
        onChange={(event) => setred(event.target.value)}
      />{" "}
      <br />
      <br />
      <label htmlFor="">GREEN</label>
      <input
        type="range"
        value={green}
        min={0}
        max={255}
        onChange={(event) => setgreen(event.target.value)}
      />
      <br />
      <br />
      <label htmlFor="">BLUE</label>
      <input
        type="range"
        value={blue}
        min={0}
        max={255}
        onChange={(event) => setblue(event.target.value)}
      />{" "}
      <br /> <br />
      <button
        style={{
          color: "white",
          backgroundColor: "green",
          width: "200px",
          height: "40px",
        }}
        onClick={handleSave}
      >
        Save Color Combition
      </button>
    </div>
  );
}

export default App;
