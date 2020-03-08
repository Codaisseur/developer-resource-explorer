import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

const selectStatistics = state => {
  return {
    numDevelopers: state.developers.length,
    numResources: state.resources.length
  };
};

function App() {
  const statistics = useSelector(selectStatistics);

  return (
    <div className="App">
      <h1>Web development resources</h1>
      <div className="statistics">
        <div className="statistic">
          <div className="statistic__num">{statistics.numDevelopers}</div>
          <p>developers</p>
        </div>
        <div className="statistic">
          <div className="statistic__num">{statistics.numResources}</div>
          <p>resources</p>
        </div>
      </div>
    </div>
  );
}

export default App;
