import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  characters: [],
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacters(state, action) {
      state.characters = action.payload;
    },
    toggleFavorite(state, action) {
      state.characters[action.payload.index].isFavorite =
        !state.characters[action.payload.index].isFavorite;
    },
  },
});

export const {setCharacters, toggleFavorite} = characterSlice.actions;
export default characterSlice.reducer;
