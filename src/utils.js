

//! Funcoeszinhas que podem ajudar, bb


function searchInListByField(arr = [], field, searchFor = "") {
  return arr.filter(item => {
    return item[field].search(new RegExp(searchFor, "i")) === -1 ? false : item;
  });
};

export { searchInListByField }
