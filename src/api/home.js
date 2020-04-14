import axios from 'axios';

export function getList() {
    return axios.post('/api/itemlist');
}

export function hotList() {
    return axios.get('/movies/v2/movie/in_theaters')
}