// src/store/developers/actions.js

export function toggleFavorite(developerId, resourceId) {
  return {
    type: "TOGGLE_FAVORITE",
    payload: { developerId, resourceId }
  };
}
