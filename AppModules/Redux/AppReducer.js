import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  flightData: [],
};

const appReducer = createSlice({
  name: 'AppReducer',
  initialState: INITIAL_STATE,
  reducers: {
    addFlightData: (state, action) => {
      state.flightData = action.payload;
    },
  },
});
export const {addFlightData} = appReducer.actions;
export default appReducer.reducer;
