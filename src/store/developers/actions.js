// src/store/developers/actions.js

export function toggleFavorite(developerId, resourceId) {
  return {
    type: "TOGGLE_FAVORITE",
    payload: { developerId, resourceId }
  };
}

export function developersFetched(developers) {
  return {
    type: "DEVELOPERS_FETCHED",
    payload: developers
  };
}
