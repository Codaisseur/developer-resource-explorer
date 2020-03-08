// src/store/resources/reducer.js
const initialState = {
  data: [],
  loading: true
};

export default function resourcesSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "RESOURCES_FETCHED": {
      return {
        data: action.payload,
        loading: false
      };
    }
    case "ADD_RESOURCE": {
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
