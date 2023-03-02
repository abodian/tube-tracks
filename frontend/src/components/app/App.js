import ArrivalData from "../arrivalData/ArrivalData";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <ArrivalData line="victoria" noteLength="4n" />
      <ArrivalData line="central" noteLength="2n" />
      <ArrivalData line="jubilee" noteLength="8n" />
      <ArrivalData line="northern" noteLength ="1m" />
    </div>
  );
}

export default App;
