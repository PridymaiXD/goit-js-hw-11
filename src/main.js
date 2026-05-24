import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault(); 

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (query === "") {
    iziToast.warning({
      title: 'Caution',
      message: 'Please fill in the search field!',
      position: 'topRight'
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight'
        });
        return; 
      }

      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong while fetching data.',
        position: 'topRight'
      });
    })
    .finally(() => {
      hideLoader();
      form.reset(); 
    });
}