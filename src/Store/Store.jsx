import { configureStore } from '@reduxjs/toolkit';
import adoptedPet from '../adoptedPetSlice/adoptedPetSlice';
import { petApi } from '../petApiService';
const store = configureStore({
  reducer: {
    adoptedPet,
    petApi: petApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
// store (configureStore) -> (reducers)
// provider (Component -- wrap app -- share state)
// slice (name, defaultvalue, actions, reducer)
