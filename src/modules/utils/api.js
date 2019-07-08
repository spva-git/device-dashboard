import fetchAPI from "../fetch";

const get = async (endpoint, options = {}) => {
  let response = await fetchAPI.get(endpoint, options.apiOptions);
  response = await response.json();
  return options.mapper ? options.mapper(response) : response;
};

const post = async (endpoint, payload, options = {}) => {
  let response = await fetchAPI.post(endpoint, payload, options.apiOptions);
  response = await response.json();
  return options.mapper ? options.mapper(response) : response;
};
export default {
  get,
  post
};
