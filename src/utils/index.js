import url from 'url'

/**
 * Generic fetch to make api calls
 * @param {string} protocol - 'http' or 'https'
 * @param {string} hostname - example: 'host.com'
 * @param {string} pathname - example: '/p/a/t/h'
 * @param {object} query - example: {'query':'string'}
 * @param {object} args - headers
 */
export function apiFetchGeneric (protocol, hostname, pathname, query, ...args) {
  const uri = url.format({ protocol, hostname, pathname, query })

  return fetch(uri, ...args)
    .then((response) => response.json())
    .catch((error) => { throw error })
}

export function apiImageUrl (obj, imageurl) {
  return obj.protocol + '//' + obj.hostname + imageurl
}
