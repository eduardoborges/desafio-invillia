// Search Actions

import { index } from "../services/people";

const actions = store => ({
  //

  // handle Get all Paople
  async getPeople({ PEOPLE }) {
    if (PEOPLE.isLoading) return;

    await store.setState({ PEOPLE: { ...PEOPLE, isLoading: true } });

    const { data } = await index(PEOPLE.page);

    return {
      PEOPLE: {
        data: [...PEOPLE.data, ...data.results],
        page: PEOPLE.page + 1,
        count: data.count,
        isLoading: false
      }
    };
  }
});

export default actions;
