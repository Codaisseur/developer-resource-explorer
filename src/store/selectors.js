export const selectDevelopersWithFavorite = favoriteId => state => {
  return state.developers.data.filter(dev =>
    dev.favorites.includes(favoriteId)
  );
};

export const selectLoggedinUser = state => {
  return state.developers.data.find(dev => dev.id === state.user.id);
};

export const selectStatistics = state => {
  return {
    numDevelopers: state.developers.data.length,
    numResources: state.resources.data.length
  };
};
