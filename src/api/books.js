import axios from 'axios';

export const getBooks = () => {
  return axios.get('//localhost:3001/api/v1/books');
};
