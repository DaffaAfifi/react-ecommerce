import axios from "axios";

export const getProducts = async (callback) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const products = response.data;
    
        callback(null, products);
    } catch (err) {
        callback(err, null);
    }
};

export const detailProducts = async (id, callback) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const products = response.data;
    
        callback(null, products);
    } catch (err) {
        callback(err, null);
    }
};