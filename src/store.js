import createStore from "unistore";

let store = createStore({
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
});

store.subscribe(state => console.log(state));

export default store;
