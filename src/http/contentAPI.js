import {$authHost, $host} from "./index";

export const createPost = async (post) => {
    const {data} = await $authHost.post('api/post', post)
    return data
}

export const fetchPost = async () => {
    const {data} = await $host.get('api/post')
    return data
}

export const createStorie = async (storie) => {
    const {data} = await $authHost.post('api/storie', storie)
    return data
}

export const fetchStorie = async () => {
    const {data} = await $host.get('api/storie')
    return data
}

export const deletePost = async (id) => {
    const {data} = await $host.delete('api/post/' + id)
    return data
}
 
export const deleteStorie = async (id) => {
    const {data} = await $host.delete('api/storie/' + id)
    return data
}