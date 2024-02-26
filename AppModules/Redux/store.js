import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  home: [],
};
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}),
});
export default store;
