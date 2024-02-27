export const getFlightDataAction = () => ({
  type: 'GET_DATA',
});

export const sortDataAction = payload => ({
  type: 'SORT_DATA',
  payload: payload,
});

export const sortAirlineAction = payload => ({
  type: 'SORT_AIRLINE',
  payload: payload,
});
