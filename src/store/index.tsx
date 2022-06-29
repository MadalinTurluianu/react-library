import { configureStore } from "@reduxjs/toolkit";

import librarySlice from "./slices/librarySlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: { library: librarySlice.reducer, user: userSlice.reducer},
});

export default store;
