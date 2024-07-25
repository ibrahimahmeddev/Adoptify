import { createSlice } from '@reduxjs/toolkit';

const adoptedPetSlice = createSlice({
  name: 'adptedPet',
  initialState: {
    adoptedPetValue: null,
    activeImageValue: 0,
  },
  reducers: {
    adopt: (state, action) => {
      state.adoptedPetValue = action.payload;
    },
    activeImage: (state, action) => {
      state.activeImageValue = action.payload;
    },
  },
});

export const { adopt, activeImage } = adoptedPetSlice.actions;

export default adoptedPetSlice.reducer;
