import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  flightData: [],
  airlines:[]
};

const appReducer = createSlice({
  name: 'AppReducer',
  initialState: INITIAL_STATE,
  reducers: {
    addFlightData: (state, action) => {
      state.flightData = action.payload;
      state.airlines = [...new Set(state.flightData.flatMap(flight => flight.displayData.airlines.map(airline => ({
        // airlineCode: airline.airlineCode,
              airlineName: airline.airlineName,
      }))))]
    },
  },
});
export const {addFlightData} = appReducer.actions;
export default appReducer.reducer;
