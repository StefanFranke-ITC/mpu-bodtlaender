import axios from "axios";

axios.defaults.baseURL = 'https://fastglobeit.de:8081/auth'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
