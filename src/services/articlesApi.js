const key = "17433580-73df9af353742e17a7ccf4b58";

const fetchFotosWithQuery = (query, page) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};

export default { fetchFotosWithQuery };
