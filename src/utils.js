

//! Funcoeszinhas que podem ajudar, bb


function searchInListByField(arr = [], field = "name", searchFor = "") {
  return arr.filter(item => {
    field = item[field] ? item[field] : "";
    return field.search(new RegExp(searchFor, "i")) === -1 ? false : item;
  });
};

export { searchInListByField }
