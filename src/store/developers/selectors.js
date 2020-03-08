export const selectDevelopersWithFavorite = favoriteId => state => {
  return state.developers.filter(dev => dev.favorites.includes(favoriteId));
};
