import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDevelopersWithFavorite } from "./store/developers/selectors";
import "./App.css";

const selectStatistics = state => {
  return {
    numDevelopers: state.developers.length,
    numResources: state.resources.length
  };
};

const selectResources = state => {
  return state.resources;
};

function App() {
  const statistics = useSelector(selectStatistics);
  const resources = useSelector(selectResources);

  const [favoriteId, setFavoriteId] = useState(2);

  const developersWithThisFavorite = useSelector(
    selectDevelopersWithFavorite(favoriteId)
  );

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
      <h2>
        Who likes{" "}
        <select
          value={favoriteId}
          onChange={e => setFavoriteId(parseInt(e.target.value))}
        >
          {resources.map(resource => {
            return (
              <option key={resource.id} value={resource.id}>
                {resource.name}
              </option>
            );
          })}
        </select>
        ?
      </h2>
      <ul>
        {developersWithThisFavorite.map(dev => {
          return <li key={dev.id}>{dev.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
