import axios from "axios";

const $host = axios.create({
    baseURL: 'https://api.flowers-pro-vp.ru/'
})

const $authHost = axios.create({
    baseURL: 'https://api.flowers-pro-vp.ru/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
