import createStore from "unistore";
import devtools from "unistore/devtools";

const DB_NAME = "LOCAL_DATABASE_CACHE";

let initialState = navigator.onLine ? {
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
} : JSON.parse(localStorage.getItem(DB_NAME));

let store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

store.subscribe(state => localStorage.setItem(DB_NAME, JSON.stringify(state)));



export default store;
