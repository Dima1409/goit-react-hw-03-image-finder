
import axios from 'axios';

const API_KEY = '29999099-708b113120f887f079bd929c2';
const BASE_URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const fetchArticles = (query) => {
  return axios.get(`${BASE_URL}&q=${query}`);
};




