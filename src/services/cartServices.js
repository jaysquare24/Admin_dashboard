import { API_URL } from "./api";

export const getCarts = async () => {
    const response = await fetch(`${API_URL}/carts`);
    const data = await response.json();
    return data;
}