import { useState, useEffect } from "react";
import { getUsers } from "../services/userService";

export const useGetUser = () => {
   const [users, setUsers] = useState([]);
   const [usersLoading, setUsersLoading] = useState(false);
   const [error, setError] = useState(null)

    const handleGetUser = async () =>{
        setUsersLoading(true);
        setError(null);
        
        try{
            const response = await getUsers();
            setUsers(response);
        }catch(err){
            const message = err.message === "Network Error"? "Check your network connection"
            : "Something went wrong, please try again."

            setError(message);
        }finally{
            setUsersLoading(false)
        }
    }

    useEffect(()=>{
        handleGetUser();
    }, []);

    return {error, isLoading: usersLoading, users, handleGetUser}
}