import axios from 'axios';
 {/*Star Wars Api */}
export const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});