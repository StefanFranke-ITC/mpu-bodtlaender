import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/auth'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
