import axios from "axios";

export const login = async (data, callback) => {
    try {
        const response = await axios.post("https://fakestoreapi.com/auth/login", data);
        const token = response.data.token;
        
        callback(true, token);
    } catch (err) {
        const errorData = err.response ? err.response.data : err.message;
        callback(false, errorData);
    }
}