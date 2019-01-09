const API_ROOT = 'https://mysterious-reef-29460.herokuapp.com/api/v1'


export const httpGet = async (endPoint,method, headers, body) => {
    try {
      const response = await fetch(`${API_ROOT}/${endPoint}`, { method: method,  headers: headers, body : body})
        .then(async response => {
          if (response.ok) {
            const res = await response.json();
            return res;
          } else {
            throw new Error(response.status)
          }
        })
        .then(res => res)
      return response;
    }
    catch (e) {
      console.log(e);
    }

}

// without async/await
export const httpGetWithoutAsyncAwait = endPoint => {
  return fetch(`${API_ROOT}/${endPoint}`, {method: 'GET'})
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
    .then(json => json.data)
    .catch(err => console.warn('httpGetWithoutAsyncAwait error ', err))
}
