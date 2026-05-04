import { API_URL } from "./api";

export const getUsers = async () => {
    
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    console.log("user", data);
    return data;
}

getUsers()