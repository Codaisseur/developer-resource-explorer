import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { developersFetched } from "./store/developers/actions";
import { resourcesFetched } from "./store/resources/actions";
import {
  selectDevelopers,
  selectDevelopersLoading
} from "./store/developers/selectors";
import {
  selectResources,
  selectResourcesLoading
} from "./store/resources/selectors";
import {
  selectStatistics,
  selectDevelopersWithFavorite,
  selectLoggedinUser
} from "./store/selectors";

import ResourcesSection from "./components/ResourcesSection/ResourcesSection";
import AddResourceForm from "./components/AddResourceForm/AddResourceForm";

import "./App.css";

const selectDevelopersFavoritesResources = developerId => state => {
  const developer = state.developers.data.find(dev => dev.id === developerId);
  if (!developer) {
    return [];
  }

  return state.resources.data.filter(resource => {
    return developer.favorites.includes(resource.id);
  });
};

function App() {
  const dispatch = useDispatch();
  const loggedinUser = useSelector(selectLoggedinUser);

  useEffect(() => {
    async function fetchData() {
      const devResponse = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/developer-resources-data/developers"
      );
      const resResponse = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/developer-resources-data/resources"
      );
      dispatch(developersFetched(devResponse.data));
      dispatch(resourcesFetched(resResponse.data));
    }
    fetchData();
  }, [dispatch]);

  const statistics = useSelector(selectStatistics);

  const resources = useSelector(selectResources);
  const resourcesLoading = useSelector(selectResourcesLoading);

  const developers = useSelector(selectDevelopers);
  const developersLoading = useSelector(selectDevelopersLoading);

  const [developerId, setDeveloperId] = useState(2);
  const [favoriteId, setFavoriteId] = useState(2);

  const developersWithThisFavorite = useSelector(
    selectDevelopersWithFavorite(favoriteId)
  );

  const favoriteResources = useSelector(
    selectDevelopersFavoritesResources(developerId)
  );

  return (
    <div className="App">
      <p
        style={{
          margin: "-1rem 0 2rem 0",
          padding: "0.5rem",
          background: "#eee"
        }}
      >
        {loggedinUser ? (
          <span>
            Welcome back, <strong>{loggedinUser.name}</strong>!
          </span>
        ) : (
          <span>...</span>
        )}
      </p>
      <h1>Web development resources</h1>
      <div className="statistics">
        <div className="statistic">
          <div className="statistic__num">
            {developersLoading ? "..." : statistics.numDevelopers}
          </div>
          <p>developers</p>
        </div>
        <div className="statistic">
          <div className="statistic__num">
            {resourcesLoading ? "..." : statistics.numResources}
          </div>
          <p>resources</p>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "2rem" }}>
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

        <div>
          <h2>
            What are{" "}
            <select
              value={developerId}
              onChange={e => setDeveloperId(parseInt(e.target.value))}
            >
              {developers.map(dev => {
                return (
                  <option key={dev.id} value={dev.id}>
                    {dev.name}
                  </option>
                );
              })}
            </select>
            's favorites?
          </h2>
          <ul>
            {favoriteResources.map(resource => {
              return <li key={resource.id}>{resource.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <ResourcesSection />
      <AddResourceForm />
    </div>
  );
}

export default App;
