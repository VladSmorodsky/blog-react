import axios from "axios";

export const getPosts = async (page = 1, category = null, search = '') => {
    const {data} = await axios.get('/posts', {params: {page, category, search}});

    return data;
}

export const getPost = async (postId) => {
    const {data} = await axios.get(`/posts/${postId}`);

    return data;
}

export const createPost = async (postData, config) => {
    const {data} = await axios.post('/posts', postData, config)

    return data;
}

export const updatePost = async (postId, postData, config) => {
    const {data} = await axios.put(`/posts/${postId}`, postData, config)

    return data;
}

export const deletePost = async (postId, config) => {
    const {data} = await axios.delete(`/posts/${postId}`, config)

    return data;
}