// src/store/resources/actions.js

export function addResource(name, type, tags, url) {
  return {
    type: "ADD_RESOURCE",
    payload: {
      id: Math.random(),
      name,
      type,
      tags,
      url
    }
  };
}

export function resourcesFetched(resources) {
  return {
    type: "RESOURCES_FETCHED",
    payload: resources
  };
}
