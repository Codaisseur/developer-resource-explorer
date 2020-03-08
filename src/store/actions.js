import axios from "axios";

import { developersFetched } from "./developers/actions";
import { resourcesFetched } from "./resources/actions";

// this is a thunk!
export async function fetchData(dispatch, getState) {
  const devResponse = await axios.get(
    "https://my-json-server.typicode.com/Codaisseur/developer-resources-data/developers"
  );
  const resResponse = await axios.get(
    "https://my-json-server.typicode.com/Codaisseur/developer-resources-data/resources"
  );
  dispatch(developersFetched(devResponse.data));
  dispatch(resourcesFetched(resResponse.data));
}
