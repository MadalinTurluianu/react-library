import { configureStore } from "@reduxjs/toolkit";

import librarySlice from "./slices/librarySlice";

const store = configureStore({
  reducer: { books: librarySlice.reducer },
});

export default store;
