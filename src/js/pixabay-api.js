export function getImagesByQuery(query) {
  const API_KEY = '56000261-e01ddd2b57ba4d59eaee941aa';
  const BASE_URL = 'https://pixabay.com/api/';
  
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
}