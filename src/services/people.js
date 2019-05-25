import api from "./index";

/**
 * Get all entries
 */
const index = (page = 0) => {
  page = page === 0 ? 1 : page;
  return api.get("/people?page=" + page);
};

/**
 * Crate an entry
 */
const create = async () => {
  console.log("Criando bb");
};

/**
 * Read an entry
 */
const read = async () => {
  console.log("Lendo bb");
};

/**
 * Update an entry
 */
const update = async () => {
  console.log("Atualizando bb");
};

export { index, create, read, update };
