// src/store/developers/reducer.js
const initialState = {
  data: [],
  loading: true
};

function toggle(list, element) {
  if (list.includes(element)) {
    return list.filter(el => el !== element);
  } else {
    return [...list, element];
  }
}

export default function developersSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "DEVELOPERS_FETCHED": {
      return {
        loading: false,
        data: action.payload
      };
    }
    case "TOGGLE_FAVORITE": {
      const { developerId, resourceId } = action.payload;

      return {
        ...state,
        data: state.data.map(developer => {
          if (developer.id === developerId) {
            return {
              ...developer,
              favorites: toggle(developer.favorites, resourceId)
            };
          } else {
            return developer;
          }
        })
      };
    }
    default: {
      return state;
    }
  }
}
