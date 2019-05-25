// Search Actions

let actions = store => ({
  foo(state) {
    return { PEOPLE: { ...state.PEOPLE, isLoading: true } };
  }
});

export default actions;
