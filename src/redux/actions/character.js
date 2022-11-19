import {setCharacters} from '../slices/slice-characters';

const fetchCharacters = () => {
  return dispatch => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        const newData = response.map(x => ({
          ...x,
          isFavorite: false,
        }));

        dispatch(setCharacters(newData));
      });
  };
};

export {fetchCharacters};
