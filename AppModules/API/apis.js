import axios from 'axios';
import {API_END_POINT} from '../Constants/Constants';

export const getDataFromAPI = async () => {
  return (await axios.get(API_END_POINT)).data;
};
