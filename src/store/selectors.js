export const selectDevelopersWithFavorite = favoriteId => state => {
  return state.developers.filter(dev => dev.favorites.includes(favoriteId));
};

export const selectLoggedinUser = state => {
  return state.developers.find(dev => dev.id === state.user.id);
};
