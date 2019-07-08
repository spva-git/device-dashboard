/**
 *
 * @param {*} endpoint: string
 * @param {*} options: object
 */
const defaultGetOptions = { method: "GET" };
const get = (endpoint, options = defaultGetOptions) => {
  return fetch(endpoint, options);
};

const defaultPostOptions = {
  method: "POST",
  credentials: "include",
  mode: "cors",
  headers: new Headers({
    "Content-Type": "application/json"
  })
};

/**
 * @param {*} endpoint: string
 * @param {*} payload: object
 * @param {*} options: object
 */
const post = (endpoint, payload, options = defaultPostOptions) => {
  const extendedOptions = { ...options, body: JSON.stringify(payload) };
  return fetch(endpoint, extendedOptions);
};

export default {
  get,
  post
};
