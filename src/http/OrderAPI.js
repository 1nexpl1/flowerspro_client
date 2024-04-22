import {$authHost, $host} from "./index";

export const createOrder = async (order) => {
    const {data} = await $authHost.post('api/order', order)
    return data
}

export const fetchOrders = async () => {
    const {data} = await $host.get('api/order')
    return data
}

export const fetchOrdersPersonal = async (userId) => {
    const {data} = await $host.get('api/order/personal',{params: {
        userId
    }})
    return data
}