
export const getProductsByQuery = async (query) => {
  let url = 'http://localhost:8080/api/items?q=';
  let data = '';
  await fetch(url + query)
    .then(res => res.json())
    .then((result) => {
      data = result;
    })
    .catch((error) => {
      data = error.message;
    });

  return data;

}

export const getProductById = async (id) => {
  let url = 'http://localhost:8080/api/items/';
  let data = '';
  await fetch(url + id)
    .then(res => res.json())
    .then((result) => {
      data = result;
    })
    .catch((error) => {
      data = error.message;
    });

  return data;

} 