import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  flightData: [],
  airlines: [],
  loading: false,
};

const appReducer = createSlice({
  name: 'AppReducer',
  initialState: INITIAL_STATE,
  reducers: {
    addFlightData: (state, action) => {
      state.flightData = action.payload;
      state.airlines = [
        ...new Set(
          state.flightData.flatMap(flight =>
            flight.displayData.airlines.map(airline => ({
              // airlineCode: airline.airlineCode,
              airlineName: airline.airlineName,
            })),
          ),
        ),
      ];
    },
    addLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const {addFlightData, addLoading} = appReducer.actions;
export default appReducer.reducer;
