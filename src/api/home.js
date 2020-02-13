import axios from 'axios';

// export function getList() {
//     return axios.post('/api/itemlist');
// }

export function getList() {
    return axios.get('/api/v1/open/zone/info/page/list?type=2')
}