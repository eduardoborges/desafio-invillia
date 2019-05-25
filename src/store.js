import createStore from "unistore";

let store = createStore({
  PEOPLE: {
    isLoading: false,
    data: []
  },
  STARSHIPS: {
    isLoading: false,
    data: []
  }
});

store.subscribe(state => console.log(state));

export default store;
