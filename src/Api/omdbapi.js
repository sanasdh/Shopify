import axios from 'axios'
// const KEY = process.env.REACT_APP_KEY;

export default axios.create({
  baseURL: 'http://omdbapi.com/',
  params: {
    apikey: 'd8c6bd26',
  }
})