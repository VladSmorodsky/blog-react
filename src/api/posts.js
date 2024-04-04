import axios from "axios";

export const getPosts = async (page = 1, category = null) => {
    const {data} = await axios.get('/posts', {params: {page, category}});

    return data;
}

export const getPost = async (postId) => {
    const {data} = await axios.get(`/posts/${postId}`);

    return data;
}