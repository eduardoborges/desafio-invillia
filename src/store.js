import createStore from "unistore";
import devtools from "unistore/devtools";

let initialState = {
  PEOPLE: {
    isLoading: false,
    count: 0,
    page: 0,
    data: []
  },
  STARSHIPS: {
    isLoading: false,
    count: 0,
    page: 0,
    data: []
  }
};

let store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

store.subscribe(state => console.log(state));

export default store;
