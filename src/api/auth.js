import axios from "axios";

export const login = async (email, password) => {
    const {data} = await axios.post('/login', {email, password});

    return data;
}