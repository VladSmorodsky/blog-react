import axios from "axios";

export const getCategories= async () => {
    const {data} = await axios.get('/categories');

    return data;
}

export const getCategory = async (categoryId) => {
    const {data} = await axios.get(`/categories/${categoryId}`);

    return data;
}

export const createCategory = async (categoryData, config) => {
    const {data} = await axios.post('/categories', categoryData, config)

    return data;
}

export const updateCategory = async (categoryId, categoryData, config) => {
    const {data} = await axios.put(`/categories/${categoryId}`, categoryData, config)

    return data;
}

export const deleteCategory = async (categoryId, newCategoryId, config) => {
    const {data} = await axios.delete(`/categories/${categoryId}/replace/${newCategoryId}`, config);

    return data;
}
