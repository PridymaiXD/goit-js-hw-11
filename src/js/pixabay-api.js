import axios from 'axios';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  
  return axios.get(BASE_URL, {
    params: {
      key: '56000261-e01ddd2b57ba4d59eaee941aa',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true
    }
  })
  .then(response => {
    return response.data;
  });
}