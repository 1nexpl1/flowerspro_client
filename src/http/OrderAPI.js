import {$authHost, $host} from "./index";

export const createOrder = async (order) => {
    const {data} = await $authHost.post('api/order', order)
    return data
}

export const fetchOrders = async () => {
    const {data} = await $host.get('api/order')
    console.log(data);
    return data
}