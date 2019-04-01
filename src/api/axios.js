import axios from 'axios';
import humps from 'humps';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.patch['Content-Type'] = 'application/json';

instance.interceptors.request.use((request) => {
  const authToken = null; // user authorizaton token 
  if (authToken) {
    if (request.headers && !request.headers.Authorization) {
      request.headers.Authorization = `Token ${authToken}`;
    }
  }

  if (request.data) {
    request.data = JSON.stringify(humps.decamelizeKeys(request.data));
  }

  if (request.params) {
    request.params = humps.decamelizeKeys(request.params);
  }
  
  return request;
});

instance.interceptors.response.use((response) => {
  if (response.data) {
    return humps.camelizeKeys(response.data);
  }
});

export default instance;