export const selectDevelopers = state => {
  return state.developers.data;
};

export const selectDevelopersLoading = state => {
  return state.developers.loading;
};
